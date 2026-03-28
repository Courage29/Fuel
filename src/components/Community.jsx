import { useReveal } from '../hooks/useReveal'

const SOCIALS = [
  {
    icon: '𝕏',
    name: 'Twitter / X',
    label: 'Join the Community',
    href: 'https://x.com/i/communities/2037194635769241615',
  },
  {
    icon: '📊',
    name: 'DexScreener',
    label: 'Live Chart & Trading',
    href: 'https://dexscreener.com/solana/eayfleoidwbcqr2wtv2hdckuvj7zj7jun8gv2yuawu99',
  },
  {
    icon: '⛽',
    name: 'Pump.fun',
    label: 'Token Launch Page',
    href: 'https://pump.fun',
  },
]

function SocialCard({ icon, name, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-card border flex flex-col items-center gap-3 p-7 no-underline"
      style={{ borderColor: 'var(--border)', background: 'var(--panel)' }}
    >
      <span className="text-[38px] leading-none">{icon}</span>
      <span
        className="font-bebas text-[22px] tracking-[3px]"
        style={{ color: 'var(--text)' }}
      >
        {name}
      </span>
      <span
        className="font-mono-fuel text-[10px] tracking-[3px] uppercase"
        style={{ color: 'var(--text-dim)' }}
      >
        {label}
      </span>
    </a>
  )
}

export default function Community() {
  const labelRef = useReveal()
  const titleRef = useReveal()
  const gridRef  = useReveal()

  return (
    <div id="community" className="w-full py-20" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          ref={labelRef}
          className="reveal font-mono-fuel text-[10px] tracking-[6px] uppercase mb-3"
          style={{ color: 'var(--amber)' }}
        >
          📡 Tune In
        </p>

        <h2
          ref={titleRef}
          className="reveal font-bebas leading-none mb-7"
          style={{ fontSize: 'clamp(36px,8vw,72px)', color: 'var(--text)' }}
        >
          JOIN THE BROADCAST
        </h2>

        <div
          ref={gridRef}
          className="reveal grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
        >
          {SOCIALS.map(s => <SocialCard key={s.name} {...s} />)}
        </div>

        {/* Bottom tagline */}
        <div className="mt-14 text-center">
          <p
            className="font-bebas tracking-[6px]"
            style={{ fontSize: 'clamp(18px,4vw,32px)', color: 'var(--text-dim)' }}
          >
            THE PUMPS ARE DRY.{' '}
            <span style={{ color: 'var(--amber)' }}>THE CHART IS NOT.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
