import { motion } from 'framer-motion'
import React from 'react'

export const DockerVisual = () => {
    return (
        <div className="relative w-full h-64 flex items-center justify-center">
            <div className="relative w-80 h-48 perspective-1000">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-x-0 h-8 bg-gradient-to-r from-blue-500/10 to-blue-600/20 border-2 border-blue-600/40"
                        initial={{
                            opacity: 0,
                            y: 200,
                            rotateX: 45,
                            scale: 0.8
                        }}
                        animate={{
                            opacity: 1,
                            y: i * 36,
                            rotateX: 0,
                            scale: 1
                        }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.15,
                            ease: [0.34, 1.56, 0.64, 1]
                        }}
                        style={{
                            transformStyle: 'preserve-3d',
                            bottom: 0
                        }}
                    >
                        <div className="flex items-center h-full px-4 gap-2">
                            {[...Array(6)].map((_, j) => (
                                <motion.div
                                    key={j}
                                    className="w-2 h-2 bg-blue-600/60 rounded-sm"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: i * 0.15 + j * 0.05,
                                        duration: 0.3
                                    }}
                                />
                            ))}
                        </div>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{
                                duration: 2,
                                delay: i * 0.15 + 0.5,
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
