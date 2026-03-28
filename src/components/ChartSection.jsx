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
  const labelRef     = useReveal()
  const titleRef     = useReveal()
  const frameRef     = useReveal()

  return (
    <div id="chart-section" className="w-full py-20" style={{ background: 'var(--bg2)' }}>
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
          style={{ borderColor: 'var(--border)' }}
        >
          <iframe
            key={theme}                      // remount when theme changes
            src={buildEmbedUrl(theme)}
            title="$FUEL Live Chart on DexScreener"
            allow="clipboard-write"
          />
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
