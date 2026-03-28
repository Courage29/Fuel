export default function Footer() {
  return (
    <footer
      className="w-full py-10 px-6 text-center"
      style={{ background: '#000', borderTop: '2px solid var(--border)' }}
    >
      {/* Logo */}
      <div
        className="font-bebas tracking-[4px]"
        style={{ fontSize: '52px', color: 'var(--amber)' }}
      >
        $FUEL
      </div>

      {/* Tagline */}
      <p
        className="font-mono-fuel text-[11px] tracking-[3px] mt-2"
        style={{ color: 'var(--text-dim)' }}
      >
        ⛽ Broadcasting from the end of the queue &nbsp;·&nbsp; Solana &nbsp;·&nbsp; 2025
      </p>

      {/* Quick links */}
      <div className="flex flex-wrap gap-6 justify-center mt-6">
        {[
          { label: 'Broadcast',   href: '#about' },
          { label: 'Crisis Feed', href: '#news-carousel' },
          { label: 'Fill Up',     href: '#howtobuy' },
          { label: 'Community',   href: '#community' },
        ].map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="font-mono-fuel text-[10px] tracking-[3px] uppercase no-underline transition-colors duration-200"
            style={{ color: 'var(--text-dim)' }}
            onMouseEnter={e => (e.target.style.color = 'var(--amber)')}
            onMouseLeave={e => (e.target.style.color = 'var(--text-dim)')}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Disclaimer */}
      <p
        className="font-mono-fuel text-[10px] leading-[1.9] mt-8 mx-auto max-w-[600px]"
        style={{ color: '#444' }}
      >
        $FUEL is a meme token created for entertainment purposes only. It has no intrinsic value
        and is not financial advice. Cryptocurrency trading involves significant risk — never invest
        more than you can afford to lose. Not affiliated with any fuel company, government, or
        energy organisation.
      </p>

      <p
        className="font-mono-fuel text-[10px] mt-6"
        style={{ color: '#333' }}
      >
        © 2025 $FUEL · Built on Solana
      </p>
    </footer>
  )
}
