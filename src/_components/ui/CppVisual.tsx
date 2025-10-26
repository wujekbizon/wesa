import { motion } from 'framer-motion'
import React from 'react'

export const CppVisual = () => {
    return (
        <div className="relative w-full h-64 flex items-center justify-center">
            <div className="relative w-80 h-48">
                <div className="absolute inset-0 flex items-end justify-around">
                    {[...Array(12)].map((_, i) => {
                        const height = 30 + Math.sin(i * 0.5) * 40 + Math.random() * 20
                        return (
                            <motion.div
                                key={i}
                                className="w-6 bg-gradient-to-t from-pink-600 to-pink-400 rounded-t"
                                initial={{ height: 0 }}
                                animate={{ height: `${height}%` }}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.08,
                                    ease: [0.34, 1.56, 0.64, 1]
                                }}
                            >
                                <motion.div
                                    className="w-full h-full bg-gradient-to-b from-white/30 to-transparent"
                                    animate={{ opacity: [0, 0.5, 0] }}
                                    transition={{
                                        duration: 2,
                                        delay: i * 0.08 + 1,
                                        repeat: Infinity,
                                        repeatDelay: 1
                                    }}
                                />
                            </motion.div>
                        )
                    })}
                </div>
                <motion.div
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-600/30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />
            </div>
        </div>
    )
}
