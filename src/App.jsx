import { useState } from 'react'
import { useTheme } from './hooks/useTheme'

import Splash        from './components/Splash'
import Navbar        from './components/Navbar'
import Ticker        from './components/Ticker'
import HazardDivider from './components/HazardDivider'
import Hero          from './components/Hero'
import About         from './components/About'
import NewsCarousel  from './components/NewsCarousel'
import ChartSection  from './components/ChartSection'
import HowToBuy      from './components/HowToBuy'
import Community          from './components/Community'
import Footer             from './components/Footer'
import RadioWidget        from './components/RadioWidget'
import AnnouncementStrip  from './components/AnnouncementStrip'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [splashGone, setSplashGone] = useState(false)

  const handleSplashDismiss = () => {
    setSplashGone(true)
  }

  return (
    <>
      {/* ── Splash overlay ─────────────────────────── */}
      {!splashGone && <Splash onDismiss={handleSplashDismiss} />}

      {/* ── Fixed chrome ───────────────────────────── */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Ticker />

      {/* ── Main content ───────────────────────────── */}
      <main>
        <Hero />

        <HazardDivider />

        <About />

        <HazardDivider />

        <NewsCarousel />

        <ChartSection theme={theme} />

        <AnnouncementStrip />

        <HazardDivider />

        <HowToBuy />

        <Community />
      </main>

      <Footer />

      {/* ── Floating radio widget ───────────────────── */}
      <RadioWidget autoPlay={splashGone} />
    </>
  )
}
