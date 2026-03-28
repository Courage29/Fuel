import { useState, useEffect } from 'react'

const AUTO_DISMISS_MS = 7000

export default function Splash({ onDismiss }) {
  const [hiding, setHiding] = useState(false)

  const dismiss = () => {
    setHiding(true)
    setTimeout(() => onDismiss(), 550)
  }

  // Auto-dismiss after timeout
  useEffect(() => {
    const id = setTimeout(() => {
      if (!hiding) dismiss()
    }, AUTO_DISMISS_MS)
    return () => clearTimeout(id)
  }, [])

  return (
    <div
      style={{ transition: 'opacity 0.5s ease' }}
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-6 ${
        hiding ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top hazard stripe */}
      <div
        className="w-full h-[6px] ticker-bar-stripe flex-shrink-0"
        style={{ backgroundSize: '40px 100%' }}
      />

      {/* EBS label */}
      <p
        className="font-bebas text-[clamp(14px,4vw,24px)] text-amber-fuel tracking-[6px] text-center px-4"
        style={{ animation: 'blink 0.8s step-end infinite' }}
      >
        ⚠ EMERGENCY BROADCAST SYSTEM ⚠
      </p>

      {/* Big title */}
      <div
        className="font-bebas text-[clamp(72px,22vw,180px)] text-white leading-none text-center select-none"
      >
        <span className="text-amber-fuel">$</span>FUEL
      </div>

      {/* Tagline */}
      <p className="font-mono-fuel text-[clamp(10px,2.5vw,14px)] text-neutral-500 tracking-[4px] uppercase text-center px-4">
        The world is running on empty
      </p>

      {/* CTA button */}
      <button
        onClick={dismiss}
        className="btn-skew mt-2 px-10 py-[14px] bg-amber-fuel text-black font-bebas text-[22px] tracking-[4px] border-none cursor-pointer transition-all duration-150 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,166,35,0.6)]"
      >
        ▶ TUNE IN TO THE CRISIS
      </button>

      {/* Bottom hazard stripe */}
      <div
        className="w-full h-[6px] ticker-bar-stripe flex-shrink-0"
        style={{ backgroundSize: '40px 100%' }}
      />
    </div>
  )
}
