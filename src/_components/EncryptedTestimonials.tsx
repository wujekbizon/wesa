"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Unlock, Key, Shield, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/testimonials'

const EncryptedTestimonials = () => {
  const [stage, setStage] = useState('encrypted') // encrypted -> keyExchange -> unlocking -> decrypted
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [matrixChars, setMatrixChars] = useState<string[][]>([])
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const generateMatrixChars = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*'
    const rows = 8
    const cols = 40
    return Array(rows).fill(null).map(() =>
      Array(cols).fill(null).map(() => chars[Math.floor(Math.random() * chars.length)])
    )
  }

  useEffect(() => {
    setMatrixChars(generateMatrixChars())
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            setTimeout(() => setStage('keyExchange'), 2000)
            setTimeout(() => setStage('unlocking'), 3500)
            setTimeout(() => setStage('decrypted'), 5000)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (stage === 'encrypted') {
      const interval = setInterval(() => {
        setMatrixChars(generateMatrixChars())
      }, 100)
      return () => clearInterval(interval)
    }
  }, [stage])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id='testimonials' data-nav-section ref={containerRef} className="relative bg-linear-to-br from-amber-50 via-white to-amber-50 py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6"
          >
            <span className="text-amber-600 text-xs font-mono uppercase tracking-widest">
              Client Success Stories
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-linear-to-r from-slate-800 via-slate-900 to-slate-600 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Every testimonial is protected with AES-256 encryption and hybrid cryptography. 
            Your data security isn't just a feature—it's our foundation.
          </motion.p>
        </motion.div>
        <div className="relative min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {stage === 'encrypted' && (
              <motion.div
                key="encrypted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full max-w-3xl">
                  <motion.div
                    className="bg-linear-to-br from-amber-400 via-amber-400 to-amber-500 border-4 border-black rounded-3xl p-12 shadow-2xl"
                    animate={{ 
                      boxShadow: [
                        '0 20px 50px rgba(0,0,0,0.2)',
                        '0 20px 60px rgba(251,191,36,0.4)',
                        '0 20px 50px rgba(0,0,0,0.2)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="font-mono text-xs md:text-sm text-black/60 leading-relaxed overflow-hidden">
                      {matrixChars.map((row, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="whitespace-nowrap"
                        >
                          {row.join('')}
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      className="absolute top-6 right-6 flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Lock className="w-5 h-5 text-black" />
                      <span className="text-sm font-semibold text-black">ENCRYPTED</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {stage === 'keyExchange' && (
              <motion.div
                key="keyExchange"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  <motion.div
                    className="bg-linear-to-br from-amber-400 via-amber-400 to-amber-500 border-4 border-black rounded-full p-16 shadow-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  >
                    <Key className="w-24 h-24 text-black" />
                  </motion.div>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-black rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                      animate={{
                        x: [0, Math.cos(i * 45 * Math.PI / 180) * 120],
                        y: [0, Math.sin(i * 45 * Math.PI / 180) * 120],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}

                  <motion.div
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="text-lg font-bold text-zinc-900 bg-white/90 px-6 py-2 rounded-full border-2 border-black">
                      AES + HYBRID KEY EXCHANGE
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {stage === 'unlocking' && (
              <motion.div
                key="unlocking"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  <motion.div
                    className="bg-linear-to-br from-green-400 via-emerald-400 to-green-500 border-4 border-black rounded-full p-16 shadow-2xl"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [0.8, 1.1, 1] }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: [0, -15, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <Unlock className="w-24 h-24 text-black" />
                    </motion.div>
                  </motion.div>

                  {/* Success ripples */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border-4 border-green-500 rounded-full"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ 
                        scale: [1, 2.5],
                        opacity: [0.8, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.3
                      }}
                    />
                  ))}

                  <motion.div
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Shield className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold text-green-700 bg-white/90 px-6 py-2 rounded-full border-2 border-green-600">
                      SSL SECURE CONNECTION
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {stage === 'decrypted' && (
              <motion.div
                key="decrypted"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-4xl"
              >
                <div className="relative">
                  <motion.div
                    className="bg-linear-to-br from-amber-400 via-amber-400 to-amber-500 border-4 border-black rounded-3xl p-8 md:p-12 shadow-2xl"
                    layoutId="testimonial-card"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-4 -right-4 bg-green-500 border-4 border-black rounded-full p-3 shadow-lg"
                    >
                      <Shield className="w-8 h-8 text-black" />
                    </motion.div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="flex gap-1 justify-center">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <motion.svg
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: i * 0.1, type: "spring" }}
                              className="w-6 h-6 fill-black"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </motion.svg>
                          ))}
                        </div>
                        <motion.p 
                          className="text-xl md:text-2xl text-black font-medium text-center leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          "{testimonials[currentTestimonial].content}"
                        </motion.p>
                        <motion.div 
                          className="text-center pt-6 border-t-2 border-black/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <p className="text-lg font-bold text-black">
                            {testimonials[currentTestimonial].name}
                          </p>
                          <p className="text-black/70 font-medium">
                            {testimonials[currentTestimonial].role}
                          </p>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                    {testimonials.length > 1 && (
                      <div className="flex justify-center gap-4 mt-8">
                        <motion.button
                          onClick={prevTestimonial}
                          className="p-3 bg-black text-amber-400 rounded-full border-2 border-black shadow-lg"
                          whileHover={{ scale: 1.1, backgroundColor: '#18181b' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                        <motion.button
                          onClick={nextTestimonial}
                          className="p-3 bg-black text-amber-400 rounded-full border-2 border-black shadow-lg"
                          whileHover={{ scale: 1.1, backgroundColor: '#18181b' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ChevronRight className="w-6 h-6" />
                        </motion.button>
                      </div>
                    )}
                    {testimonials.length > 1 && (
                      <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, i) => (
                          <motion.button
                            key={i}
                            onClick={() => setCurrentTestimonial(i)}
                            className={`w-3 h-3 rounded-full border-2 border-black ${
                              i === currentTestimonial ? 'bg-black' : 'bg-transparent'
                            }`}
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-8 -left-8 w-16 h-16 bg-amber-400/30 rounded-2xl blur-xl hidden md:block"
                  />
                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -bottom-8 -right-8 w-20 h-20 bg-amber-400/30 rounded-full blur-xl hidden md:block"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default EncryptedTestimonials