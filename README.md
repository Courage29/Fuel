# $FUEL — Meme Token Website

> The world is running on empty. We're not.

Built with **Vite + React + Tailwind CSS** — same stack as grogu.fun and xdtoken.wtf.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
# Output goes to /dist — deploy this folder
```

---

## 🌐 Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI once
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com and it auto-deploys on push
```

## 🌐 Deploy to Netlify

```bash
# Drag & drop the /dist folder at netlify.com/drop
# Or connect GitHub repo for auto-deploy

# Build command: npm run build
# Publish directory: dist
```

---

## 📁 Project Structure

```
fuel/
├── public/
│   ├── images/          ← Your 4 news images (fuel1–4.png)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Splash.jsx          ← Emergency broadcast splash screen
│   │   ├── Navbar.jsx          ← Fixed nav with theme toggle
│   │   ├── Ticker.jsx          ← Breaking news ticker bar
│   │   ├── HazardDivider.jsx   ← Amber/black hazard stripe
│   │   ├── Hero.jsx            ← Gauge animation + live price board
│   │   ├── About.jsx           ← Crisis manifesto + country stats
│   │   ├── NewsCarousel.jsx    ← Auto-sliding image carousel
│   │   ├── ChartSection.jsx    ← Live DexScreener chart embed
│   │   ├── HowToBuy.jsx        ← 4-step pump instructions + copy CA
│   │   ├── Community.jsx       ← Social links grid
│   │   ├── Footer.jsx          ← Footer + disclaimer
│   │   └── RadioWidget.jsx     ← Floating $FUEL FM radio with TTS
│   ├── hooks/
│   │   ├── useTheme.js         ← Dark/light mode toggle + localStorage
│   │   ├── useReveal.js        ← IntersectionObserver scroll animations
│   │   └── useLivePrice.js     ← DexScreener API live price polling
│   ├── App.jsx                 ← Root layout + component wiring
│   ├── main.jsx                ← React entry point
│   └── index.css               ← CSS variables, animations, utilities
├── index.html                  ← HTML shell with SEO meta tags
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✏️ Common Customisations

### Update contract address
Search for `Af6Fbfkx61tP7ytKtaaJbaYBxMbi1824eigp4oytpump` across:
- `src/components/Hero.jsx`
- `src/components/HowToBuy.jsx`
- `src/hooks/useLivePrice.js`
- `src/components/ChartSection.jsx`

### Add Telegram link
In `src/components/Community.jsx`, add to the `SOCIALS` array:
```js
{
  icon: '✈️',
  name: 'Telegram',
  label: 'Join the Chat',
  href: 'https://t.me/yourgroup',
},
```

### Add more carousel images
In `src/components/NewsCarousel.jsx`, add to the `SLIDES` array and drop the image in `public/images/`.

### Change TTS broadcast script
In `src/components/RadioWidget.jsx`, edit `BROADCAST_SCRIPT`.

### Change theme colours
All CSS variables are in `src/index.css` under `:root` (dark) and `[data-theme='light']`.

---

## 🛢 Token Info

- **Name:** $FUEL
- **Chain:** Solana
- **CA:** `Af6Fbfkx61tP7ytKtaaJbaYBxMbi1824eigp4oytpump`
- **DexScreener:** [View Chart](https://dexscreener.com/solana/eayfleoidwbcqr2wtv2hdckuvj7zj7jun8gv2yuawu99)
- **Community:** [X / Twitter](https://x.com/i/communities/2037194635769241615)
