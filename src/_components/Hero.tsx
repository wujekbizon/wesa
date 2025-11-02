'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { containerVariants, itemVariants } from '../utils/motion';
import ScrollButton from './ui/ScrollButton';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0])
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.95])
  const yContent = useTransform(smoothProgress, [0, 0.5], [0, -50])
  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <div ref={containerRef} className="relative h-screen bg-black">
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 -z-10"
      >
       
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-black/30" />
      </motion.div>
      <motion.section
        style={{ opacity }}
        className="relative flex h-full w-full flex-col items-center justify-center px-6 sm:px-12 lg:px-24"
      >
        <motion.div
          style={{ scale, y: yContent }}
          className="w-full max-w-6xl mx-auto"
        >
          <motion.div
            // @ts-ignore
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              // @ts-ignore
              variants={itemVariants}
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative flex flex-col items-center gap-8 lg:gap-12 p-8 sm:p-12 lg:p-16 bg-linear-to-br from-amber-400 via-amber-400 to-amber-500 border-4 border-black rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear'
                  }}
                  className="w-full h-full relative"
                  style={{
                    backgroundImage: `radial-gradient(circle at center, black 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                  }}
                />
                {isHovering && (
                  <motion.div
                    className="absolute w-[200px] h-[200px] pointer-events-none"
                    style={{
                      left: mouseX,
                      top: mouseY,
                      x: '-50%',
                      y: '-50%',
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundImage: `radial-gradient(circle at center, black 2px, transparent 2px)`,
                        backgroundSize: '32px 32px',
                        maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)',
                      }}
                      animate={{
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-black/30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 0.3, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                )}
              </div>
              <motion.div
                // @ts-ignore
                variants={itemVariants}
                className="relative z-10 w-full flex flex-col items-center justify-center"
              >
                <svg 
                  version="1.1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 200 550 200"
                  className="w-full h-auto max-w-xs sm:max-w-sm"
                >
                  <g fill="#fdf7e7">
                    <motion.path
                      fill="black"
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ opacity: 1, pathLength: 1 }}
                      transition={{ 
                        duration: 2, 
                        ease: "easeInOut",
                        opacity: { duration: 0.5 }
                      }}
                      d="M216.35819,276.72976h-11.86612c-3.35834,0 -4.14195,2.23889 -4.47778,3.58223l-11.08251,38.06115l-10.85862,-38.06115c-0.44778,-1.56722 -1.23139,-3.58223 -3.69417,-3.58223h-7.83612c-2.57472,0 -3.35834,2.015 -3.80612,3.58223l-10.74668,38.06115l-11.08251,-38.06115c-0.44778,-1.34333 -1.11945,-3.58223 -4.47778,-3.58223h-12.3139c-2.015,0 -2.35084,1.90306 -2.015,3.24639l20.70974,68.06229c0,0 0.55972,2.35084 3.0225,2.35084h9.85112c2.91056,0 3.58223,-2.57472 3.58223,-2.57472l11.19446,-35.71032l11.19446,35.71032c0,0 0.67167,2.57472 3.58223,2.57472h9.40334c2.46278,0 3.0225,-2.35084 3.0225,-2.35084l20.5978,-68.06229c0.44778,-1.34333 0.11194,-3.24639 -1.90306,-3.24639z"
                    />
                    <motion.path 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      d="M279.27104,334.82899h-49.4795c-2.015,0 -3.24639,0.67167 -3.24639,3.24639v9.17945c0,2.57472 1.23139,3.24639 3.24639,3.24639h49.4795c2.015,0 3.24639,-0.67167 3.24639,-3.24639v-9.17945c0,-2.57472 -1.23139,-3.24639 -3.24639,-3.24639zM273.67381,305.7234h-38.28504c-2.015,0 -3.24639,0.67167 -3.24639,3.24639v9.17945c0,2.57472 1.23139,3.24639 3.24639,3.24639h38.28504c2.015,0 3.24639,-0.67167 3.24639,-3.24639v-9.17945c0,-2.57472 -1.23139,-3.24639 -3.24639,-3.24639zM279.27104,276.8417h-49.4795c-2.015,0 -3.24639,0.67167 -3.24639,3.24639v9.17945c0,2.57472 1.23139,3.24639 3.24639,3.24639h49.4795c2.015,0 3.24639,-0.67167 3.24639,-3.24639v-9.17945c0,-2.57472 -1.23139,-3.24639 -3.24639,-3.24639z"
                    />
                    <motion.path 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                      d="M331.32526,307.62646c-4.47778,-1.79111 -20.93363,-4.25389 -20.93363,-11.08251c0,-5.03751 6.15695,-6.49278 9.85112,-6.49278c3.35834,0 7.38834,1.0075 9.51529,3.0225c1.34333,1.34333 1.90306,2.23889 2.35084,3.35834c0.55972,1.45528 0.89556,3.0225 3.0225,3.0225h10.97057c2.57472,0 3.24639,-0.44778 3.24639,-3.13445c0,-14.77668 -15.56029,-21.26947 -29.77725,-21.26947c-13.99307,0.55972 -27.20253,7.72417 -27.20253,22.27697c0,14.21696 10.41084,18.69474 21.71725,22.27697c9.51529,3.0225 19.47835,3.13445 19.47835,9.40334c0,6.2689 -4.92556,7.61223 -10.97057,7.61223c-4.14195,0 -8.73168,-1.0075 -10.97057,-3.69417c-1.45528,-1.67917 -2.015,-3.13445 -2.12695,-4.58973c-0.22389,-2.79861 -1.45528,-3.13445 -4.03,-3.13445h-10.85862c-2.57472,0 -3.24639,0.55972 -3.24639,3.13445c0,15.67224 16.12002,23.73225 30.11309,23.73225c17.23946,0 29.77725,-7.61223 29.77725,-23.50836c0,-15.22446 -11.86612,-18.47085 -19.92613,-20.93363z"
                    />
                    <motion.path 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                      d="M392.44699,299.34256l16.34391,47.68838c0.89556,2.68667 1.79111,3.35834 4.25389,3.35834h12.76168c2.46278,0 2.46278,-1.79111 1.90306,-3.13445l-24.73975,-67.05479c-1.0075,-2.35084 -2.12695,-3.47028 -4.58973,-3.47028h-10.74668c-2.46278,0 -3.69417,1.11945 -4.58973,3.47028l-24.85169,67.05479c-0.55972,1.34333 -0.55972,3.13445 1.90306,3.13445h12.20196c2.46278,0 3.35834,-0.67167 4.25389,-3.35834z"
                    />
                  </g>
                </svg>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="text-xl xs:text-2xl sm:text-3xl lg:text-5xl text-center font-bold text-zinc-900 -mt-4"
                >
                  AI & Software Architecture Solutions
                </motion.h2>
              </motion.div>
              <motion.div
                // @ts-ignore
                variants={itemVariants}
                className="relative z-10 flex flex-col gap-6 items-center text-center max-w-2xl"
              >
                <h1 className="text-xl sm:text-2xl lg:text-3xl text-zinc-950 font-semibold leading-tight">
                  Shape Your Digital Future with Us
                </h1>
                <p className="text-base sm:text-lg text-zinc-900/80 max-w-xl">
                  Expert software architecture, modern web applications, and cutting-edge UI design
                </p>
              </motion.div>
              <motion.div
                // @ts-ignore
                variants={itemVariants}
                className="relative z-10 w-full sm:w-auto"
              >
                <motion.a
                  href="/solutions"
                  className="block px-8 py-4 text-lg sm:text-xl font-semibold rounded-xl bg-black text-white border-2 border-black shadow-lg text-center transition-all"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Solutions
                </motion.a>
              </motion.div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-black/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-12 -left-12 w-24 h-24 bg-amber-400/20 rounded-2xl blur-xl hidden lg:block"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-12 -right-12 w-32 h-32 bg-amber-400/20 rounded-full blur-xl hidden lg:block"
            />
          </motion.div>
        </motion.div>
        <ScrollButton tag="architecture" className="bottom-30" />
      </motion.section>
    </div>
  )
}

export default Hero