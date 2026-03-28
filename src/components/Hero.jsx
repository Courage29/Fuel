import { useLivePrice } from '../hooks/useLivePrice'

const CA = 'GupRnmNvMrFgKuz91hgNUpVbJ8FtGZ1av2sdkw6Vpump'
const DEX_LINK = 'https://dexscreener.com/solana/GupRnmNvMrFgKuz91hgNUpVbJ8FtGZ1av2sdkw6Vpump'

function FuelGaugeSVG() {
  return (
    <div className="relative w-[clamp(200px,55vw,340px)] mb-6">
      <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#d0021b" />
            <stop offset="35%"  stopColor="#f5a623" />
            <stop offset="70%"  stopColor="#7ed321" />
            <stop offset="100%" stopColor="#00c851" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Track */}
        <path d="M30 155 A120 120 0 0 1 270 155" fill="none" stroke="#2a2520" strokeWidth="18" strokeLinecap="round" />
        {/* Coloured arc */}
        <path d="M30 155 A120 120 0 0 1 270 155" fill="none" stroke="url(#gaugeGrad)" strokeWidth="14" strokeLinecap="round" opacity="0.85" />

        {/* Tick marks */}
        {[-90, -67, -45, -22, 0, 22, 45, 67, 90].map((angle, i) => (
          <line
            key={i}
            x1="30" y1="155" x2="46" y2="155"
            stroke="#3a3530" strokeWidth="1.5"
            transform={`rotate(${angle} 150 155)`}
          />
        ))}

        {/* E / F labels */}
        <text x="22" y="152" fill="#d0021b" fontFamily="Bebas Neue,sans-serif" fontSize="18" textAnchor="middle">E</text>
        <text x="278" y="152" fill="#00c851" fontFamily="Bebas Neue,sans-serif" fontSize="18" textAnchor="middle">F</text>

        {/* Needle */}
        <g className="gauge-needle" filter="url(#glow)">
          <line x1="150" y1="155" x2="150" y2="50" stroke="#f5a623" strokeWidth="3" strokeLinecap="round" />
          <circle cx="150" cy="155" r="9" fill="#f5a623" />
          <circle cx="150" cy="155" r="4" fill="#000" />
        </g>

        {/* Center label */}
        <text x="150" y="140" fill="#555" fontFamily="Share Tech Mono,monospace" fontSize="9" textAnchor="middle">
          FUEL LEVEL
        </text>
      </svg>

      <p
        className="font-bebas text-center tracking-[4px] mt-[-8px]"
        style={{ color: 'var(--red)', fontSize: 'clamp(11px,2.5vw,15px)', animation: 'blink 1.2s step-end infinite' }}
      >
        ⚠ CRITICALLY LOW — RUNNING ON FUMES
      </p>
    </div>
  )
}

function PriceBoard({ price, change, volume, loading }) {
  const changePos = change !== null && change >= 0
  const changeStr = change !== null
    ? `${changePos ? '+' : ''}${change.toFixed(2)}%`
    : '—'
  const volStr = volume !== null
    ? `VOL $${(volume / 1000).toFixed(1)}K`
    : ''

  return (
    <div
      className="btn-skew-sm mt-8 px-7 py-4 flex flex-col items-center gap-[6px]"
      style={{
        border: '2px solid var(--amber)',
        background: '#000',
        boxShadow: '0 0 30px var(--glow), inset 0 0 20px rgba(0,0,0,0.8)',
      }}
    >
      <div className="font-mono-fuel text-[10px] tracking-[5px] uppercase text-amber-fuel">
        ⛽ $FUEL / USD — LIVE
      </div>
      <div
        className="font-bebas tracking-[6px] glow-text-amber"
        style={{ fontSize: 'clamp(32px,8vw,60px)', color: 'var(--amber)' }}
      >
        {loading ? 'LOADING...' : (price ?? 'LIVE')}
      </div>
      <div className="font-mono-fuel text-[10px] tracking-[3px]" style={{ color: 'var(--text-dim)' }}>
        {loading
          ? 'FETCHING FROM DEXSCREENER...'
          : `24H: ${changeStr}${volStr ? ' · ' + volStr : ''}`}
      </div>
    </div>
  )
}

export default function Hero({ onScrollToBroadcast }) {
  const { price, change, volume, loading } = useLivePrice()

  const copyCA = () => {
    navigator.clipboard.writeText(CA).then(() => {
      // handled via alert fallback
    })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: 'var(--bg)', paddingTop: '120px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}
    >
      {/* Radial glow bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(245,166,35,0.07) 0%, transparent 70%)' }}
      />
      {/* Grain overlay */}
      <div className="hero-grain" />

      <FuelGaugeSVG />

      {/* Title */}
      <h1
        className="font-bebas leading-[0.88] relative z-10"
        style={{ fontSize: 'clamp(44px,13vw,118px)', color: 'var(--text)' }}
      >
        THE WORLD RUNS<br />
        <span style={{ color: 'var(--amber)' }}>ON </span>
        <span style={{ color: 'var(--red)' }}>EMPTY</span><br />
        <span style={{ fontSize: '0.55em', color: 'var(--text-dim)' }}>WE RUN ON </span>
        <span style={{ color: 'var(--amber)' }}>$FUEL</span>
      </h1>

      <p
        className="font-mono-fuel uppercase tracking-[4px] mt-4 relative z-10"
        style={{ fontSize: 'clamp(10px,2.5vw,13px)', color: 'var(--text-dim)' }}
      >
        Solana · The only thing still pumping · 2025
      </p>

      <PriceBoard price={price} change={change} volume={volume} loading={loading} />

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-9 relative z-10">
        <a
          href={DEX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-skew px-10 py-[14px] font-bebas text-[20px] tracking-[3px] text-black no-underline transition-all duration-150 hover:-translate-y-[2px]"
          style={{ background: 'var(--amber)', boxShadow: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 30px var(--glow)')}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
        >
          ⛽ FILL UP NOW
        </a>
        <a
          href="#about"
          className="btn-skew px-10 py-[14px] font-bebas text-[20px] tracking-[3px] no-underline transition-all duration-200"
          style={{ background: 'transparent', color: 'var(--amber)', border: '2px solid var(--amber)' }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--amber)'
            e.currentTarget.style.color = '#000'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--amber)'
          }}
        >
          📻 HEAR THE BROADCAST
        </a>
      </div>

      {/* Contract address */}
      <div
        className="font-mono-fuel text-[10px] tracking-[2px] text-center mt-5 relative z-10"
        style={{ color: 'var(--text-dim)' }}
      >
        CONTRACT ADDRESS
        <code
          className="block mt-[6px] text-[9px] break-all max-w-[340px] mx-auto"
          style={{ color: 'var(--amber)' }}
        >
          {CA}
        </code>
      </div>
    </section>
  )
}
