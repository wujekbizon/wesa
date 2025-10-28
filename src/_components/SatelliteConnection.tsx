import { motion } from 'framer-motion'
import { SVGFilters } from './ClientConnections'

export const SatelliteConnection = ({
    satelliteX,
    satelliteY,
    hqPos
  }: {
    satelliteX: any,
    satelliteY: any,
    hqPos: { left: number, top: number }
  }) => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-15">
      <motion.g
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      >
        <motion.line
          x1={satelliteX}
          y1={satelliteY}
          x2={hqPos.left}
          y2={hqPos.top}
          stroke="#27275f"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
        />
        <motion.line
          x1={satelliteX}
          y1={satelliteY}
          x2={hqPos.left}
          y2={hqPos.top}
          stroke="#00ffff"
          strokeWidth="3"
          opacity="0.3"
          filter="url(#satellite-glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
        />
      </motion.g>
      <SVGFilters />
    </svg>
  )