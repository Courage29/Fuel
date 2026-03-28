import { useState, useRef, useEffect } from 'react'

const BROADCAST_SCRIPT = `Breaking news. Fuel prices have reached an all-time high.
Queues stretch for miles. The Philippines has declared a national state of emergency.
Cambodia — up seventy percent in weeks. Australia — panic buying. Pumps dry before dawn.
Governments are scrambling. Reserves are collapsing.
But while the world runs dry... dollar FUEL is pumping.
The only fuel nobody can hoard. No queues. No shortages.
Just gains — on Solana.
This has been dollar FUEL FM. Broadcasting from the end of the queue.`

export default function RadioWidget({ autoPlay = false }) {
  const [playing, setPlaying]     = useState(false)
  const [supported, setSupported] = useState(true)
  const uttRef = useRef(null)

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setSupported(false)
    }
  }, [])

  // Auto-play when prop fires (after splash dismissed)
  useEffect(() => {
    if (autoPlay && supported) {
      // Small delay for UX
      const id = setTimeout(() => startBroadcast(), 1800)
      return () => clearTimeout(id)
    }
  }, [autoPlay])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) speechSynthesis.cancel()
    }
  }, [])

  const startBroadcast = () => {
    if (!('speechSynthesis' in window)) return
    speechSynthesis.cancel()

    const u = new SpeechSynthesisUtterance(BROADCAST_SCRIPT)
    u.rate   = 0.86
    u.pitch  = 0.82
    u.volume = 0.95

    // Prefer a deeper/news-style voice if available
    const voices = speechSynthesis.getVoices()
    const preferred = voices.find(v =>
      /UK English Male|Daniel|Google UK|Male|en-GB/i.test(v.name)
    )
    if (preferred) u.voice = preferred

    u.onend = () => {
      setPlaying(false)
    }
    u.onerror = () => {
      setPlaying(false)
    }

    uttRef.current = u
    speechSynthesis.speak(u)
    setPlaying(true)
  }

  const stopBroadcast = () => {
    speechSynthesis.cancel()
    setPlaying(false)
  }

  const toggle = () => {
    if (playing) stopBroadcast()
    else startBroadcast()
  }

  if (!supported) return null

  return (
    <div
      className="fixed z-[200] bottom-5 right-4"
      style={{ width: '188px' }}
    >
      <div
        className="rounded-lg p-[14px]"
        style={{
          background: '#1a1208',
          border: '2px solid #4a3810',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* LCD display */}
        <div
          className="rounded-sm p-[8px_10px] mb-3"
          style={{ background: '#000', border: '1px solid #333' }}
        >
          <div
            className="font-mono-fuel text-[14px]"
            style={{ color: '#f5a623', textShadow: '0 0 8px #f5a623' }}
          >
            $FUEL FM
          </div>
          <div
            className="font-mono-fuel text-[9px] tracking-[2px] mt-[2px]"
            style={{ color: '#555' }}
          >
            CRISIS BROADCAST · SOL
          </div>

          {/* Waveform bars */}
          <div className="flex gap-[3px] items-end mt-2 h-[18px]">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`wave-bar ${playing ? 'playing' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Play/Stop button */}
        <button
          onClick={toggle}
          className="w-full py-2 font-bebas text-[14px] tracking-[2px] text-black cursor-pointer rounded-sm transition-colors duration-200 border-none"
          style={{ background: playing ? '#d0021b' : '#f5a623' }}
          onMouseEnter={e => {
            e.currentTarget.style.background = playing ? '#ff1a2e' : '#ffbe50'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = playing ? '#d0021b' : '#f5a623'
          }}
        >
          {playing ? '⏹ STOP' : '▶ PLAY BROADCAST'}
        </button>
      </div>
    </div>
  )
}
