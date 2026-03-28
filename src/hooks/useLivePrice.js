import { useState, useEffect } from 'react'

const PAIR = 'eayfleoidwbcqr2wtv2hdckuvj7zj7jun8gv2yuawu99'
const API   = `https://api.dexscreener.com/latest/dex/pairs/solana/${PAIR}`

export function useLivePrice() {
  const [price, setPrice]   = useState(null)
  const [change, setChange] = useState(null)
  const [volume, setVolume] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetch_ = async () => {
    try {
      const res  = await fetch(API)
      const data = await res.json()
      const pair = data.pairs?.[0]
      if (pair) {
        const p = parseFloat(pair.priceUsd)
        setPrice(
          p < 0.001
            ? '$' + p.toExponential(3)
            : '$' + p.toFixed(8)
        )
        setChange(pair.priceChange?.h24 ?? null)
        setVolume(pair.volume?.h24 ?? null)
      }
    } catch {
      // keep previous values on error
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetch_()
    const id = setInterval(fetch_, 30_000)
    return () => clearInterval(id)
  }, [])

  return { price, change, volume, loading }
}
