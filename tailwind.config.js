/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['attribute', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        amber: {
          fuel: '#f5a623',
          dim: '#b87a10',
          light: '#c47d00',
        },
        red: {
          crisis: '#d0021b',
          light: '#b00016',
        },
        fuel: {
          bg: '#080808',
          bg2: '#111111',
          bg3: '#1a1a1a',
          panel: '#0f0f0f',
          border: '#2a2520',
          text: '#e8e0d0',
          muted: '#9a9080',
        },
      },
      animation: {
        'ticker-scroll': 'tickerScroll 35s linear infinite',
        'stripe-scroll': 'stripeScroll 1s linear infinite',
        blink: 'blink 1s step-end infinite',
        'needle-sweep': 'needleSweep 2.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.8s forwards',
        'wave-pulse': 'wavePulse 0.6s ease-in-out infinite alternate',
        'splash-fade': 'splashFade 0.5s ease forwards',
      },
      keyframes: {
        tickerScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        stripeScroll: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '40px 0' },
        },
        blink: { '50%': { opacity: '0' } },
        needleSweep: {
          from: { transform: 'rotate(-90deg)' },
          to: { transform: 'rotate(52deg)' },
        },
        wavePulse: {
          from: { transform: 'scaleY(0.3)', opacity: '0.5' },
          to: { transform: 'scaleY(1)', opacity: '1' },
        },
        splashFade: {
          to: { opacity: '0', pointerEvents: 'none' },
        },
      },
      clipPath: {
        skew: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
        'skew-sm': 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
      },
    },
  },
  plugins: [],
}
