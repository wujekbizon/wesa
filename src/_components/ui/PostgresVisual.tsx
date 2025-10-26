import { motion } from 'framer-motion'
import React from 'react'

export const PostgresVisual = () => {
    return (
        <div className="relative w-full h-64 flex items-center justify-center">
            <div className="w-80 space-y-4">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="relative h-12 bg-blue-500/5 border-2 border-blue-600/30 rounded overflow-hidden"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500/30 via-blue-600/40 to-transparent"
                            initial={{ width: "0%" }}
                            animate={{ width: `${60 + i * 10}%` }}
                            transition={{
                                delay: i * 0.15 + 0.3,
                                duration: 1.2,
                                ease: [0.34, 1.56, 0.64, 1]
                            }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                                x: ["-100%", "200%"]
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.15 + 1,
                                repeat: Infinity,
                                repeatDelay: 2
                            }}
                            style={{ width: "50%" }}
                        />
                        <div className="relative h-full flex items-center px-4 gap-2">
                            {[...Array(8)].map((_, j) => (
                                <motion.div
                                    key={j}
                                    className="w-2 h-2 bg-blue-600/60 rounded-full"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: i * 0.15 + j * 0.05 + 0.5 }}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
