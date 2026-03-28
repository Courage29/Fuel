import { useReveal } from '../hooks/useReveal'

const STATS = [
  { flag: '🇰🇭', pct: '+70%', country: 'Cambodia — Biggest Spike' },
  { flag: '🇻🇳', pct: '+50%', country: 'Vietnam — Price Jump' },
  { flag: '🇱🇦', pct: '+30%', country: 'Laos — And Rising' },
  { flag: '🇵🇭', pct: '45d',  country: 'Philippines — Fuel Left' },
  { flag: '🇯🇵', pct: '+25%', country: 'Japan — Fuel / Oil' },
  { flag: '🇦🇺', pct: '+20%', country: 'Australia — Panic Buying' },
]

function StatCard({ flag, pct, country }) {
  return (
    <div
      className="stat-card border p-5 text-center"
      style={{ background: 'var(--bg3)', borderColor: 'var(--border)' }}
    >
      <div className="text-[22px] mb-1">{flag}</div>
      <div
        className="font-bebas text-[34px] leading-none"
        style={{ color: 'var(--red)' }}
      >
        {pct}
      </div>
      <div
        className="font-mono-fuel text-[10px] tracking-[3px] uppercase mt-1"
        style={{ color: 'var(--text-dim)' }}
      >
        {country}
      </div>
    </div>
  )
}

export default function About() {
  const labelRef = useReveal()
  const titleRef = useReveal()
  const panelRef = useReveal()
  const statsRef = useReveal()

  return (
    <div id="about" className="w-full py-20" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          ref={labelRef}
          className="reveal font-mono-fuel text-[10px] tracking-[6px] uppercase mb-3"
          style={{ color: 'var(--amber)' }}
        >
          📻 Emergency Broadcast · $FUEL FM
        </p>

        <h2
          ref={titleRef}
          className="reveal font-bebas leading-none mb-7"
          style={{ fontSize: 'clamp(36px,8vw,72px)', color: 'var(--text)' }}
        >
          CRISIS BULLETIN
        </h2>

        {/* Broadcast panel */}
        <div
          ref={panelRef}
          className="reveal on-air-badge relative border p-8"
          style={{ borderColor: 'var(--border)', background: 'var(--panel)' }}
        >
          {/* Alert headline */}
          <p
            className="font-bebas tracking-[2px] mb-4"
            style={{ color: 'var(--red)', fontSize: 'clamp(17px,4vw,28px)' }}
          >
            ⚠ THIS IS NOT A TEST. REPEAT — THIS IS NOT A TEST.
          </p>

          {[
            <>Governments are scrambling. Queues stretch for <strong style={{ color: 'var(--amber)', fontWeight: 'normal' }}>miles</strong>. Pumps run dry before dawn. The Philippines declared a <strong style={{ color: 'var(--amber)', fontWeight: 'normal' }}>national state of emergency</strong>. Cambodia's prices detonated <strong style={{ color: 'var(--amber)', fontWeight: 'normal' }}>+70% in weeks</strong>. Australia's Prime Minister went on television to beg people to <strong style={{ color: 'var(--amber)', fontWeight: 'normal' }}>stop panic buying</strong>.</>,
            <>The world built an entire civilisation on a liquid it cannot guarantee. And now — the bill is due.</>,
            <>We watched. We documented every headline. <strong style={{ color: 'var(--amber)', fontWeight: 'normal' }}>Then we tokenised it.</strong></>,
            <>$FUEL is the only fuel <strong style={{ color: 'var(--amber)', fontWeight: 'normal' }}>nobody can hoard</strong>. No queues. No shortages. No sorry-this-hose-not-in-use signs. While the rest of the planet sits in a two-hour line for twenty litres, <strong style={{ color: 'var(--amber)', fontWeight: 'normal' }}>you can fill up in seconds</strong> — on Solana, frictionless, 24/7.</>,
          ].map((line, i) => (
            <p
              key={i}
              className="font-mono-fuel leading-[1.9] mb-4"
              style={{ fontSize: 'clamp(13px,2.5vw,16px)', color: 'var(--text)' }}
            >
              {line}
            </p>
          ))}

          <p
            className="font-bebas tracking-[2px] mb-4"
            style={{ color: 'var(--red)', fontSize: 'clamp(17px,4vw,28px)' }}
          >
            THE PUMPS ARE DRY. THE CHART IS NOT.
          </p>

          <p
            className="font-mono-fuel leading-[1.9] mb-4"
            style={{ fontSize: 'clamp(13px,2.5vw,16px)', color: 'var(--text)' }}
          >
            This is the broadcast they buried under polite press releases and "supply chain disruptions." The crisis is <strong style={{ color: 'var(--amber)', fontWeight: 'normal' }}>real</strong>. The chaos is <strong style={{ color: 'var(--amber)', fontWeight: 'normal' }}>real</strong>. And the opportunity? <strong style={{ color: 'var(--amber)', fontWeight: 'normal' }}>You're looking at it.</strong>
          </p>

          <p
            className="font-mono-fuel leading-[1.9]"
            style={{ fontSize: 'clamp(13px,2.5vw,16px)', color: 'var(--amber)' }}
          >
            — $FUEL FM. Broadcasting from the end of the queue.
          </p>
        </div>

        {/* Stats grid */}
        <div
          ref={statsRef}
          className="reveal grid gap-4 mt-8"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}
        >
          {STATS.map(s => <StatCard key={s.country} {...s} />)}
        </div>
      </div>
    </div>
  )
}
