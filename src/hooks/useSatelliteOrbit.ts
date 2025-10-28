import { animate, useMotionValue, useTransform } from "framer-motion";
import { useCallback, useEffect } from "react";

export function useSatelliteOrbit(dimensions: { width: number; height: number }) {
    const satelliteProgress = useMotionValue(0)
  
    useEffect(() => {
      const controls = animate(satelliteProgress, [0, 1], {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      })
  
      return () => controls.stop()
    }, [satelliteProgress])
  
    // Memoize the satellite position calculation function
    const getSatellitePosition = useCallback((progress: number) => {
      const centerX = dimensions.width / 2
      const centerY = dimensions.height / 2
      const radiusX = dimensions.width * 0.45
      const radiusY = dimensions.height * 0.45
      const angle = progress * Math.PI * 2
  
      return {
        x: centerX + Math.cos(angle) * radiusX,
        y: centerY + Math.sin(angle) * radiusY,
      }
    }, [dimensions.width, dimensions.height])
  
    const satelliteX = useTransform(satelliteProgress, (v) => getSatellitePosition(v).x)
    const satelliteY = useTransform(satelliteProgress, (v) => getSatellitePosition(v).y)
  
    return { satelliteX, satelliteY, satelliteProgress }
  }