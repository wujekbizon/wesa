'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import globe from "@/src/images/fullGlobe.png"
import dummy from "@/src/images/emptyStar.svg"

const hq = {
  name: 'HQ - Poland',
  x: '53%',
  y: '35%',
  color: '#00FF00',
}

const clients = [
  {
    name: 'Germany',
    project: 'E-Commerce Platform',
    x: '50%',
    y: '45%',
    image: dummy,
    color: '#00FFFF',
  },
  {
    name: 'USA',
    project: 'Mobile Banking App',
    x: '5%',
    y: '42%',
    image: dummy,
    color: '#FF00FF',
  },
  {
    name: 'Australia',
    project: 'Cloud Infrastructure',
    x: '75%',
    y: '68%',
    image: dummy,
    color: '#FFD700',
  },
//   {
//     name: 'UK',
//     project: 'AI Analytics Dashboard',
//     x: '46%',
//     y: '28%',
//     image: dummy,
//     color: '#FF6B6B',
//   },
]

export default function WhyChooseUs() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 overflow-hidden bg-black text-white">
      <h2 className="text-4xl font-bold mb-10 z-10">Why Choose Us</h2>

      <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
        <Image
          src={globe}
          alt="Global Network"
          fill
          className="object-contain opacity-80"
        />
        
        {/* HQ Marker */}
        <motion.div
          className="absolute w-6 h-6 bg-green-400 rounded-full shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] z-20 flex items-center justify-center"
          style={{
            top: hq.y,
            left: hq.x,
            transform: 'translate(-50%, -50%)',
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
          <div className="w-3 h-3 bg-white rounded-full" />
        </motion.div>

        {/* HQ Label */}
        <motion.div
          className="absolute px-3 py-1.5 rounded-lg bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold shadow-lg border border-green-300/50 z-20"
          style={{
            top: hq.y,
            left: hq.x,
            transform: 'translate(-50%, -200%)',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {hq.name}
        </motion.div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {clients.map((client, i) => {
            const hqX = parseFloat(hq.x);
            const hqY = parseFloat(hq.y);
            const clientX = parseFloat(client.x);
            const clientY = parseFloat(client.y);
            
            return (
              <g key={i}>
                {/* Outgoing line (thinner, from HQ to client) */}
                <motion.path
                  d={generateCurvePath(hqX, hqY, clientX, clientY)}
                  stroke={client.color}
                  strokeWidth="0.3"
                  fill="transparent"
                  strokeDasharray="1,1"
                  vectorEffect="non-scaling-stroke"
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
                
                {/* Return line (bolder, from client back to HQ) */}
                <motion.path
                  d={generateCurvePath(clientX, clientY, hqX, hqY)}
                  stroke={client.color}
                  strokeWidth="0.5"
                  fill="transparent"
                  filter="url(#glow)"
                  vectorEffect="non-scaling-stroke"
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
            );
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

        {clients.map((client, i) => (
          <motion.div
            key={i}
            className="absolute w-36 md:w-44 p-2.5 md:p-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg z-10"
            style={{
              top: client.y,
              left: client.x,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.4 + 0.5 }}
            whileHover={{ scale: 1.08, borderColor: client.color }}
          >
            <div className="w-full h-16 md:h-20 rounded-xl overflow-hidden mb-2 bg-white/5">
              <Image
                src={client.image}
                alt={client.name}
                width={160}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <div className="text-sm md:text-base font-bold mb-1" style={{ color: client.color }}>
                {client.name}
              </div>
              <div className="text-xs text-gray-300">
                {client.project}
              </div>
            </div>
            
            {/* Pulsing indicator */}
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
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
        ))}
      </div>
    </section>
  )
}

function generateCurvePath(x1: number, y1: number, x2: number, y2: number) {
  const cx = (x1 + x2) / 2
  const cy = (y1 + y2) / 2 - 10
  return `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`
}