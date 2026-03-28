import { useState, useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

const TOKEN   = 'GupRnmNvMrFgKuz91hgNUpVbJ8FtGZ1av2sdkw6Vpump'
const PAIR    = 'FnpwxR1JGL2rF6mJ12s2nL7piMNJc5B4upjKzCkGEkEZ'
const DEX_URL = `https://dexscreener.com/solana/${TOKEN}`

function buildEmbedUrl(theme = 'dark') {
  const params = new URLSearchParams({
    embed: '1',
    loadChartSettings: '0',
    trades: '0',
    tabs: '0',
    info: '0',
    chartLeftToolbar: '0',
    chartTheme: theme,
    theme: theme,
    chartStyle: '0',
    chartType: 'usd',
    interval: '15',
  })
  return `https://dexscreener.com/solana/${PAIR}?${params.toString()}`
}

export default function ChartSection({ theme }) {
  const labelRef   = useReveal()
  const titleRef   = useReveal()
  const frameRef   = useReveal()
  const sectionRef = useRef(null)

  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Only mount the iframe once the section is near the viewport
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { rootMargin: '300px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Reset loaded state on theme change so skeleton shows during remount
  useEffect(() => { setLoaded(false) }, [theme])

  return (
    <div
      id="chart-section"
      ref={sectionRef}
      className="w-full py-20"
      style={{ background: 'var(--bg2)' }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          ref={labelRef}
          className="reveal font-mono-fuel text-[10px] tracking-[6px] uppercase mb-3"
          style={{ color: 'var(--amber)' }}
        >
          📊 Live Chart
        </p>

        <h2
          ref={titleRef}
          className="reveal font-bebas leading-none mb-7"
          style={{ fontSize: 'clamp(36px,8vw,72px)', color: 'var(--text)' }}
        >
          $FUEL / USD — REAL TIME
        </h2>

        <div
          ref={frameRef}
          className="reveal chart-frame border"
          style={{ borderColor: 'var(--border)', position: 'relative' }}
        >
          {/* Skeleton shown until iframe fires onLoad */}
          {!loaded && (
            <div className="chart-skeleton" aria-hidden="true" />
          )}

          {inView && (
            <iframe
              key={theme}
              src={buildEmbedUrl(theme)}
              title="$FUEL Live Chart on DexScreener"
              allow="clipboard-write"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              style={{
                opacity: loaded ? 1 : 0,
                transition: 'opacity 0.5s ease',
              }}
            />
          )}
        </div>

        <p
          className="font-mono-fuel text-[10px] tracking-[3px] text-center mt-4"
          style={{ color: 'var(--text-dim)' }}
        >
          Chart powered by{' '}
          <a
            href={DEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--amber)', textDecoration: 'none' }}
          >
            DexScreener
          </a>
          {' '}· Updates every 15 minutes
        </p>
      </div>
    </div>
  )
}
