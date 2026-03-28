import { useState, useEffect, useCallback } from 'react'
import { useReveal } from '../hooks/useReveal'

const SLIDES = [
  {
    src: '/images/fuel1.png',
    alt: 'Australia fuel panic buying',
    badge: '⬤ BREAKING',
    headline: 'Panic Buying Prompts PM to Reassure Australians Over Fuel Supply',
    source: 'Sydney · Helen Livingstone',
  },
  {
    src: '/images/fuel2.png',
    alt: 'Philippines national fuel emergency',
    badge: '⬤ BREAKING',
    headline: 'Philippines Declares National Emergency — Only 45 Days of Fuel Remaining',
    source: 'Manila · National Crisis Report',
  },
  {
    src: '/images/fuel3.png',
    alt: 'Global fuel spike data by country',
    badge: '⬤ DATA',
    headline: 'Countries Where Fuel Is Rising Fastest: Cambodia Leads With +70% Spike in Weeks',
    source: 'Al Jazeera · ABC News · VOI',
  },
  {
    src: '/images/fuel4.png',
    alt: 'Global fuel crisis — Strait of Hormuz',
    badge: '⬤ WORLD',
    headline: 'Global Fuel Crisis: Strait of Hormuz Tensions Drive Prices to Historic Highs',
    source: 'World Desk · 2025',
  },
]

export default function NewsCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const labelRef = useReveal()
  const titleRef = useReveal()
  const containerRef = useReveal()

  const next = useCallback(() => setCurrent(c => (c + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length), [])
  const goTo = useCallback((i) => setCurrent(i), [])

  // Auto-advance every 5.5s unless paused
  useEffect(() => {
    if (isPaused) return
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [isPaused, next])

  return (
    <div id="news-carousel" className="w-full py-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          ref={labelRef}
          className="reveal font-mono-fuel text-[10px] tracking-[6px] uppercase mb-3"
          style={{ color: 'var(--amber)' }}
        >
          📰 Live Crisis Feed
        </p>

        <h2
          ref={titleRef}
          className="reveal font-bebas leading-none mb-7"
          style={{ fontSize: 'clamp(36px,8vw,72px)', color: 'var(--text)' }}
        >
          FROM THE FRONT LINES
        </h2>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="reveal relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Track */}
          <div
            className="carousel-track"
            style={{ transform: `translateX(${-current * 100}%)` }}
          >
            {SLIDES.map((slide, i) => (
              <div key={i} className="relative flex-shrink-0 w-full overflow-hidden">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{
                    height: 'clamp(220px,45vw,460px)',
                    filter: 'contrast(1.05) saturate(0.8)',
                  }}
                />
                {/* News chyron */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-10"
                  style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.92))' }}
                >
                  <span
                    className="inline-block font-mono-fuel text-[10px] tracking-[3px] text-white px-2 py-[3px] mb-2"
                    style={{ background: 'var(--red)', animation: 'blink 1s step-end infinite' }}
                  >
                    {slide.badge}
                  </span>
                  <p
                    className="font-oswald font-semibold text-white"
                    style={{
                      fontSize: 'clamp(15px,3.5vw,22px)',
                      textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                    }}
                  >
                    {slide.headline}
                  </p>
                  <p
                    className="font-mono-fuel text-[10px] tracking-[2px] uppercase mt-1"
                    style={{ color: '#aaa' }}
                  >
                    {slide.source}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-[42px] h-[42px] flex items-center justify-center text-[22px] z-10 transition-all duration-200 cursor-pointer"
            style={{
              background: 'rgba(0,0,0,0.75)',
              border: '1px solid var(--amber)',
              color: 'var(--amber)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--amber)'
              e.currentTarget.style.color = '#000'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.75)'
              e.currentTarget.style.color = 'var(--amber)'
            }}
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-[42px] h-[42px] flex items-center justify-center text-[22px] z-10 transition-all duration-200 cursor-pointer"
            style={{
              background: 'rgba(0,0,0,0.75)',
              border: '1px solid var(--amber)',
              color: 'var(--amber)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--amber)'
              e.currentTarget.style.color = '#000'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.75)'
              e.currentTarget.style.color = 'var(--amber)'
            }}
          >
            ›
          </button>

          {/* Slide counter */}
          <div
            className="absolute top-3 right-3 font-mono-fuel text-[10px] tracking-[2px] px-2 py-1"
            style={{ background: 'rgba(0,0,0,0.7)', color: 'var(--amber)' }}
          >
            {current + 1} / {SLIDES.length}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 justify-center mt-4">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="w-2 h-2 rounded-full cursor-pointer border-none transition-all duration-200"
              style={{
                background: i === current ? 'var(--amber)' : 'var(--border)',
                transform: i === current ? 'scale(1.3)' : 'scale(1)',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
