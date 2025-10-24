'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
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
    x: 50,
    y: 58,
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
    x: 55,
    y: 13,
    color: '#FFD700',
  },
]

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 700 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
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

  return (
    <section className="relative flex flex-col items-center justify-center py-20 overflow-hidden bg-black text-white px-4">
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
        className="relative w-full max-w-[90vw] sm:max-w-[600px] md:max-w-[900px] aspect-square md:aspect-[4/3.5]"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            className="w-[80%] h-[80%] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(200, 220, 255, 0.08) 30%, transparent 60%)',
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
        
        {/* HQ Marker */}
        <motion.div
          className="absolute w-5 h-5 md:w-6 md:h-6 bg-green-400 rounded-full shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] z-20 flex items-center justify-center"
          style={{
            left:getPosition(hq.x, hq.y).left -10,
            top: getPosition(hq.x, hq.y).top -10
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
          <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full" />
        </motion.div>

        {/* HQ Label */}
        <motion.div
          className="absolute px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-green-500/90 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold shadow-lg border border-green-300/50 z-20 whitespace-nowrap -translate-x-1/2"
          style={{
            left: getPosition(hq.x, hq.y).left + 90,
            top: getPosition(hq.x, hq.y).top - 40,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {hq.name}
        </motion.div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {clients.map((client, i) => {
            const hqPos = getPosition(hq.x, hq.y)
            const clientPos = getPosition(client.x, client.y)
            
            // Calculate card dimensions (approximate)
            const cardWidth = dimensions.width < 640 ? 96 : dimensions.width < 768 ? 112 : 128
            const cardHeight = dimensions.width < 640 ? 60 : dimensions.width < 768 ? 68 : 76
            
            // Top-right corner of card (indicator position)
            const indicatorX = clientPos.left + cardWidth / 2 
            const indicatorY = clientPos.top - cardHeight / 2 
            
            return (
              <g key={i}>
                {/* Outgoing line (thinner, from HQ to client indicator) */}
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
                
                {/* Return line (bolder, from client indicator back to HQ) */}
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
          
          {/* Glow filter for return lines */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>

        {clients.map((client, i) => {
          const pos = getPosition(client.x, client.y)
          
          return (
            <motion.div
              key={i}
              className="absolute w-24 sm:w-28 md:w-32 p-2 md:p-2.5 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: pos.left,
                top: pos.top,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.4 + 0.5, duration: 0.3 }}
              whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
            >
              <div className="text-center">
                <div className="text-xs sm:text-sm md:text-base font-bold mb-0.5 md:mb-1" style={{ color: client.color }}>
                  {client.name}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-300 leading-tight">
                  {client.project}
                </div>
              </div>
              
              {/* Pulsing indicator - top right corner */}
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
                style={{ backgroundColor: client.color }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: i * 0.5,
                }}
              />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}