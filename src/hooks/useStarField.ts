import { useEffect, useState } from "react"

export function useStarField(count: number = 200) {
  const [stars, setStars] = useState<Array<{ x: number, y: number, size: number, opacity: number }>>([])

  useEffect(() => {
    // Generate stars only on client side to avoid hydration mismatch
    const generatedStars = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
    }))
    setStars(generatedStars)
  }, [count])

  return stars
}
