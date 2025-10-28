import { useState, useEffect, RefObject } from "react"

// Hook for managing container dimensions with resize handling
export function useDimensions(containerRef: RefObject<HTMLDivElement>) {
  const [dimensions, setDimensions] = useState({ width: 900, height: 700 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [containerRef])

  return dimensions
}
