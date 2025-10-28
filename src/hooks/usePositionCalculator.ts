import { useCallback } from "react";

export function usePositionCalculator(dimensions: { width: number; height: number }) {
    return useCallback((x: number, y: number) => ({
      left: (x / 100) * dimensions.width,
      top: (y / 100) * dimensions.height,
    }), [dimensions.width, dimensions.height])
  }