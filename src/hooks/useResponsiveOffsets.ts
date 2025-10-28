import { useMemo } from "react";

export function useResponsiveOffsets(dimensions: { width: number; height: number }) {
    return useMemo(() => ({
      dotOffsetX: dimensions.width < 768 ? 32 : 46,
      dotOffsetY: dimensions.width < 768 ? -18 : -24,
      markerOffset: dimensions.width < 768 ? 10 : 12,
    }), [dimensions.width])
  }