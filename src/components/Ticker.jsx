const ITEMS = [
  '⛽ Philippines declares national fuel emergency',
  '🔥 Cambodia fuel up +70% — record global spike',
  '⚠ Australia: panic buying empties pumps nationwide',
  '📈 Vietnam fuel prices surge +50% in weeks',
  '🛢 $FUEL on Solana — pumping while the world runs dry',
  '🇯🇵 Japan oil prices up +25% recently',
  '🇺🇸 USA fuel prices +15–20% in some areas',
  '🇱🇦 Laos fuel up +30% and still rising',
  '🚨 Strait of Hormuz tensions drive global oil prices higher',
  '💀 The pumps are dry. The chart is not.',
]

// Duplicate for seamless infinite scroll
const allItems = [...ITEMS, ...ITEMS]

export default function Ticker() {
  return (
    <div
      className="fixed z-[99] left-0 right-0 h-[30px] flex items-center overflow-hidden"
      style={{ top: '61px', background: 'var(--red)' }}
    >
      {/* BREAKING label */}
      <div
        className="font-bebas text-[13px] tracking-[2px] h-full flex items-center px-4 flex-shrink-0"
        style={{ background: '#000', color: 'var(--amber)' }}
      >
        🔴 BREAKING
      </div>

      {/* Scrolling track */}
      <div className="overflow-hidden flex-1">
        <div className="ticker-track">
          {allItems.map((item, i) => (
            <span
              key={i}
              className="font-mono-fuel text-[11px] tracking-[2px] text-white uppercase flex-shrink-0"
              style={{ paddingRight: '60px' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
