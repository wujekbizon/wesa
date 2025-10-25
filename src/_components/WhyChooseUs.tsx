'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import Image from 'next/image'
import globe from "@/src/images/fullGlobe.png"

const hq = {
  name: 'WESA HQ - Poland',
  x: 52,
  y: 40,
  color: '#ff0000',
}

const clients = [
  {
    name: 'Poland',
    project: "Educational Software",
    x: 48,
    y: 50,
    color: '#ff5100',
  },
  {
    name: 'USA',
    project: 'Digital interfaces for EVs',
    x: 15,
    y: 44,
    color: '#894e89',
  },
  {
    name: 'Australia',
    project: 'Intelligent AI agents tools',
    x: 78,
    y: 72,
    color: '#FFD700',
  },
]

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [dimensions, setDimensions] = useState({ width: 900, height: 700 })
  const [sectionDimensions, setSectionDimensions] = useState({ width: 1920, height: 1080 })
  const [stars, setStars] = useState<Array<{ x: number, y: number, size: number, opacity: number }>>([])

  const satelliteProgress = useMotionValue(0)

  useEffect(() => {
    const generatedStars = Array.from({ length: 200 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
    }))
    setStars(generatedStars)

    const controls = animate(satelliteProgress, [0, 1], {
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    })

    return () => controls.stop()
  }, [satelliteProgress])

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setSectionDimensions({ width: rect.width, height: rect.height })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const getPosition = (x: number, y: number) => ({
    left: (x / 100) * dimensions.width,
    top: (y / 100) * dimensions.height,
  })

  const getSatellitePosition = (progress: number) => {
    const centerX = dimensions.width / 2
    const centerY = dimensions.height / 2
    const radiusX = dimensions.width * 0.45
    const radiusY = dimensions.height * 0.45
    const angle = progress * Math.PI * 2

    return {
      x: centerX + Math.cos(angle) * radiusX,
      y: centerY + Math.sin(angle) * radiusY,
    }
  }

  const satelliteX = useTransform(satelliteProgress, (v) => getSatellitePosition(v).x)
  const satelliteY = useTransform(satelliteProgress, (v) => getSatellitePosition(v).y)

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center py-20 overflow-hidden bg-black text-white px-4"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none z-1">
        <div
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, rgba(138, 43, 226, 0.1) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(30, 144, 255, 0.18) 0%, rgba(30, 144, 255, 0.08) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 20, 147, 0.12) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
      </div>
      <div className="text-center mb-16 z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 bg-rose-500/10 border-2 border-rose-500/20 rounded-full mb-6"
        >
          <span className="text-white text-xs font-mono uppercase tracking-widest">
            Global Reach
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="bg-linear-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
            Why Choose Us
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-400 leading-relaxed"
        >
          Headquartered in Poland with clients across three continents. From educational platforms to EV interfaces and AI tools.
        </motion.p>
      </div>
      <div
        ref={containerRef}
        className="relative w-full max-w-[90vw] sm:max-w-[600px] md:max-w-[900px] aspect-[4/3.5] md:aspect-[4/3.5] z-10"
      >
        <div className="absolute inset-0 flex items-center justify-center z-3">
          <div className="w-[89%] sm:w-[85%] h-full sm:h-[96%] bg-black/70 rounded-full border border-violet-500/10" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
          <div
            className="w-[80%] h-[80%] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(196, 254, 202, 0.15) 10%, rgba(73, 255, 92, 0.08) 15%, transparent 60%)',
              filter: 'blur(80px)',
            }}
          />
        </div>
        <Image
          src={globe}
          alt="Global Network"
          fill
          className="object-contain relative z-10"
        />
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-15">
          <motion.g
            animate={{
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            <motion.line
              x1={satelliteX}
              y1={satelliteY}
              x2={getPosition(hq.x, hq.y).left}
              y2={getPosition(hq.x, hq.y).top}
              stroke="#27275f"
              strokeWidth="1.5"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
            />
            <motion.line
              x1={satelliteX}
              y1={satelliteY}
              x2={getPosition(hq.x, hq.y).left}
              y2={getPosition(hq.x, hq.y).top}
              stroke="#00ffff"
              strokeWidth="3"
              opacity="0.3"
              filter="url(#satellite-glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
            />
          </motion.g>

          <defs>
            <filter id="satellite-glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        <motion.div
          className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: satelliteX,
            top: satelliteY,
          }}
        >
          <div className="relative">
            <div className="relative w-4 h-4 md:w-5 md:h-5 bg-linear-to-br from-gray-400 via-gray-500 to-gray-600 rounded-sm shadow-2xl border border-gray-600/50">
              <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent rounded-sm" />
              <div className="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 w-3 md:w-4 h-5 md:h-6 bg-linear-to-r from-slate-700 via-blue-900 to-slate-800 border border-slate-600/50 shadow-lg"
                style={{
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
                }}
              />
              <div className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 w-3 md:w-4 h-5 md:h-6 bg-linear-to-l from-slate-700 via-blue-900 to-slate-800 border border-slate-600/50 shadow-lg"
                style={{
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
                }}
              />
              <div className="absolute -top-2 md:-top-2.5 left-1/2 -translate-x-1/2 w-2 md:w-2.5 h-2 md:h-2.5 bg-linear-to-b from-gray-300 to-gray-500 rounded-full border border-gray-600/50 shadow-md" />
              <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-0.5 h-2 md:h-3 bg-linear-to-t from-gray-400 to-gray-200" />
              <div className="absolute top-1 left-0.5 w-0.5 h-2 bg-gray-700/50" />
              <div className="absolute top-1 right-0.5 w-0.5 h-2 bg-gray-700/50" />
            </div>
            <div className="absolute inset-0 w-4 h-4 md:w-5 md:h-5 bg-cyan-400 rounded-full blur-lg opacity-30" />
            <motion.div
              className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_6px_2px_rgba(34,211,238,0.8)]"
              animate={{
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        {/* HQ Marker */}
        <motion.div
          className="absolute w-5 h-5 md:w-6 md:h-6 bg-amber-400 rounded-full shadow-[0_0_20px_5px_rgba(251,191,36,0.8)] z-20 flex items-center justify-center"
          style={{
            left: getPosition(hq.x, hq.y).left - (dimensions.width < 768 ? 10 : 12),
            top: getPosition(hq.x, hq.y).top - (dimensions.width < 768 ? 10 : 12)
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-black rounded-full" />
        </motion.div>
        <motion.div
          className="absolute px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-amber-400 backdrop-blur-xl text-black text-[8px] sm:text-[10px] md:text-xs font-semibold shadow-lg border border-black/50 z-20 whitespace-nowrap -translate-x-1/2"
          style={{
            left: getPosition(hq.x, hq.y).left + 40,
            top: getPosition(hq.x, hq.y).top - 45,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {hq.name}
        </motion.div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none z-8">
          {clients.map((client, i) => {
            const hqPos = getPosition(hq.x, hq.y)
            const clientPos = getPosition(client.x, client.y)

            const dotOffsetX = dimensions.width < 768 ? 32 : 46
            const dotOffsetY = dimensions.width < 768 ? -18 : -24
            const indicatorX = clientPos.left + dotOffsetX
            const indicatorY = clientPos.top + dotOffsetY

            return (
              <g key={i}>
                <motion.path
                  d={`M${hqPos.left},${hqPos.top} Q${(hqPos.left + indicatorX) / 2},${(hqPos.top + indicatorY) / 2 + 10} ${indicatorX},${indicatorY}`}
                  stroke={client.color}
                  strokeWidth="1.5"
                  fill="transparent"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0.6 }}
                  animate={{ pathLength: [0, 1, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: 'easeInOut',
                    repeatDelay: 1,
                  }}
                />

                <motion.path
                  d={`M${indicatorX},${indicatorY} Q${(indicatorX + hqPos.left) / 2},${(indicatorY + hqPos.top) / 2 - 20} ${hqPos.left},${hqPos.top}`}
                  stroke={client.color}
                  strokeWidth="3"
                  fill="transparent"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 1 }}
                  animate={{ pathLength: [0, 1, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.8 + 1.3,
                    ease: 'easeInOut',
                    repeatDelay: 1,
                  }}
                />
              </g>
            )
          })}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {clients.map((client, i) => {
          const pos = getPosition(client.x, client.y)

          return (
            <motion.div
              key={i}
              className="absolute w-20 sm:w-24 md:w-28 lg:w-32 p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: pos.left,
                top: pos.top,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.4 + 0.5, duration: 0.3 }}
              whileHover={{ scale: 1.04, transition: { duration: 0.05 } }}
            >
              <div className="text-center">
                <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold mb-0.5 md:mb-1" style={{ color: client.color }}>
                  {client.name}
                </div>
                <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-300 leading-tight">
                  {client.project}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}