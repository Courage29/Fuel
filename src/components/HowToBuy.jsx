import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const CA = 'Af6Fbfkx61tP7ytKtaaJbaYBxMbi1824eigp4oytpump'

const STEPS = [
  {
    num: '01',
    title: 'Get a Wallet',
    desc: (
      <>
        Download{' '}
        <a href="https://phantom.app" target="_blank" rel="noopener noreferrer">Phantom</a>
        {' '}or{' '}
        <a href="https://solflare.com" target="_blank" rel="noopener noreferrer">Solflare</a>.
        Create your Solana wallet and back up your seed phrase securely. Never share it with anyone.
      </>
    ),
  },
  {
    num: '02',
    title: 'Get SOL',
    desc: (
      <>
        Buy SOL on any major exchange — Binance, Coinbase, or Kraken. Then transfer it to your
        Phantom or Solflare wallet address to fund your swap.
      </>
    ),
  },
  {
    num: '03',
    title: 'Swap for $FUEL',
    desc: (
      <>
        Go to{' '}
        <a
          href="https://dexscreener.com/solana/eayfleoidwbcqr2wtv2hdckuvj7zj7jun8gv2yuawu99"
          target="_blank"
          rel="noopener noreferrer"
        >
          DexScreener
        </a>
        {' '}or Raydium. Paste the contract address below and swap your SOL for $FUEL.
        Set slippage to 5–10%.
      </>
    ),
  },
  {
    num: '04',
    title: "You're Fuelled Up",
    desc: (
      <>
        $FUEL appears in your wallet instantly. Join the community, strap in, and enjoy the ride.
        While the world queues — <strong style={{ color: 'var(--amber)', fontWeight: 'normal' }}>you're already filled up.</strong>
      </>
    ),
  },
]

function PumpStep({ num, title, desc }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal pump-step border-l-[3px] pl-5 pr-4 py-4 relative overflow-hidden"
      style={{ background: 'var(--bg3)', borderColor: 'var(--amber)' }}
    >
      <span
        className="font-bebas text-[52px] leading-none absolute top-2 right-2 pointer-events-none select-none"
        style={{ color: 'var(--amber)', opacity: 0.18 }}
      >
        {num}
      </span>
      <h3
        className="font-oswald font-semibold uppercase tracking-[1px] mb-3"
        style={{ fontSize: '17px', color: 'var(--amber)' }}
      >
        {title}
      </h3>
      <p
        className="font-mono-fuel leading-[1.7] relative z-10"
        style={{ fontSize: '12px', color: 'var(--text-dim)' }}
      >
        {desc}
      </p>
    </div>
  )
}

export default function HowToBuy() {
  const [copied, setCopied] = useState(false)

  const labelRef = useReveal()
  const titleRef = useReveal()
  const caRef    = useReveal()

  const handleCopy = () => {
    navigator.clipboard.writeText(CA).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  // Inline link style shared across steps
  const linkStyle = { color: 'var(--amber)', textDecoration: 'none' }

  return (
    <div id="howtobuy" className="w-full py-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          ref={labelRef}
          className="reveal font-mono-fuel text-[10px] tracking-[6px] uppercase mb-3"
          style={{ color: 'var(--amber)' }}
        >
          ⛽ Pump Instructions
        </p>

        <h2
          ref={titleRef}
          className="reveal font-bebas leading-none mb-7"
          style={{ fontSize: 'clamp(36px,8vw,72px)', color: 'var(--text)' }}
        >
          HOW TO FILL UP
        </h2>

        {/* Panel wrapper */}
        <div
          className="border-2 p-7"
          style={{ borderColor: 'var(--border)', background: 'var(--panel)' }}
        >
          {/* Steps grid */}
          <div
            className="grid gap-5"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
          >
            {STEPS.map(s => (
              <PumpStep key={s.num} {...s} />
            ))}
          </div>

          {/* CA box */}
          <div
            ref={caRef}
            className="reveal mt-8 border border-dashed p-6 text-center"
            style={{
              borderColor: 'var(--amber)',
              background: 'rgba(245,166,35,0.04)',
            }}
          >
            <p
              className="font-mono-fuel text-[10px] tracking-[4px] uppercase mb-3"
              style={{ color: 'var(--text-dim)' }}
            >
              ⬛ Contract Address — Solana (SPL Token)
            </p>
            <p
              className="font-mono-fuel break-all"
              style={{ fontSize: 'clamp(9px,2vw,12px)', color: 'var(--amber)', letterSpacing: '1px' }}
            >
              {CA}
            </p>
            <button
              onClick={handleCopy}
              className="mt-4 px-6 py-2 font-bebas text-[14px] tracking-[2px] cursor-pointer transition-all duration-200 border"
              style={{
                background: copied ? 'var(--amber)' : 'transparent',
                color: copied ? '#000' : 'var(--amber)',
                borderColor: 'var(--amber)',
              }}
            >
              {copied ? '✅ COPIED!' : '📋 COPY ADDRESS'}
            </button>
          </div>
        </div>

        {/* Buy button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://dexscreener.com/solana/eayfleoidwbcqr2wtv2hdckuvj7zj7jun8gv2yuawu99"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-skew px-12 py-[15px] font-bebas text-[22px] tracking-[3px] text-black no-underline transition-all duration-200 hover:-translate-y-[2px]"
            style={{ background: 'var(--amber)' }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 30px var(--glow)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
          >
            ⛽ FILL UP NOW — DEXSCREENER
          </a>
        </div>
      </div>
    </div>
  )
}
