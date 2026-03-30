const ITEMS = [
  { icon: '🤖', label: 'AI BUYBACK ENGINE', value: 'LIVE' },
  { icon: '🔥', label: 'FEES BURNED', value: '80%' },
  { icon: '📉', label: 'SUPPLY', value: 'RUNNING LOW' },
  { icon: '⚡', label: '$FUEL', value: 'DEFLATIONARY' },
]

export default function AnnouncementStrip() {
  return (
    <div
      className="w-full py-4 border-y"
      style={{ background: 'var(--bg)', borderColor: 'var(--amber)' }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">

          {/* Label */}
          <span
            className="font-mono-fuel text-[10px] tracking-[4px] uppercase flex-shrink-0"
            style={{
              color: 'var(--amber)',
              border: '1px solid var(--amber)',
              padding: '3px 10px',
              animation: 'blink 1s step-end infinite',
            }}
          >
            ⬤ NEW
          </span>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 flex-1 justify-center sm:justify-end">
            {ITEMS.map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <span style={{ fontSize: '14px' }}>{icon}</span>
                <span
                  className="font-mono-fuel text-[10px] tracking-[3px] uppercase"
                  style={{ color: 'var(--text-dim)' }}
                >
                  {label}
                </span>
                <span
                  className="font-bebas text-[15px] tracking-[2px]"
                  style={{ color: 'var(--amber)' }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
