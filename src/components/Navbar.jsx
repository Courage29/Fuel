import { useState } from 'react'

const links = [
  { href: '#about',        label: 'Broadcast' },
  { href: '#news-carousel', label: 'Crisis Feed' },
  { href: '#howtobuy',     label: 'Fill Up' },
  { href: '#community',    label: 'Community' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-[14px] border-b border-fuel"
      style={{
        background: theme === 'dark' ? 'rgba(8,8,8,0.94)' : 'rgba(240,235,224,0.94)',
        backdropFilter: 'blur(12px)',
        borderColor: 'var(--border)',
        transition: 'background 0.3s',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="font-bebas text-[28px] tracking-[3px] text-amber-fuel no-underline"
        onClick={close}
      >
        <span style={{ color: 'var(--text)' }}>$</span>FUEL
      </a>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-6 list-none items-center">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="font-mono-fuel text-[11px] tracking-[3px] uppercase no-underline transition-colors duration-200"
              style={{ color: 'var(--text-dim)' }}
              onMouseEnter={e => (e.target.style.color = 'var(--amber)')}
              onMouseLeave={e => (e.target.style.color = 'var(--text-dim)')}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={onToggleTheme}
            title="Toggle light/dark mode"
            className="bg-transparent border text-[15px] px-[10px] py-[5px] rounded cursor-pointer transition-all duration-200 hover:scale-110"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--amber)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>

      {/* Mobile: theme + hamburger */}
      <div className="flex md:hidden items-center gap-3">
        <button
          onClick={onToggleTheme}
          className="bg-transparent border-none text-[18px] cursor-pointer"
          style={{ color: 'var(--text)' }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="bg-transparent border-none text-[26px] cursor-pointer px-1"
          style={{ color: 'var(--text)' }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="font-mono-fuel text-[12px] tracking-[3px] uppercase no-underline"
              style={{ color: 'var(--text-dim)' }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
