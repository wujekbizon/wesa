import { motion } from 'framer-motion'
import React from 'react'

export const NodejsVisual = () => {
    return (
        <div className="relative w-full h-64 flex items-center justify-center">
            <div className="relative w-80 h-48">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                    {[...Array(5)].map((_, i) => (
                        <motion.path
                            key={i}
                            d={`M 0 ${50 + i * 30} Q 100 ${30 + i * 30} 200 ${50 + i * 30} T 400 ${50 + i * 30}`}
                            fill="none"
                            stroke="rgb(22 163 74)"
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 0.6, 0.6, 0]
                            }}
                            transition={{
                                duration: 3,
                                delay: i * 0.2,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                    <motion.circle
                        r="6"
                        fill="rgb(22 163 74)"
                        animate={{
                            cx: [0, 100, 200, 300, 400],
                            cy: [50, 30, 50, 70, 50]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    {[...Array(3)].map((_, i) => (
                        <motion.circle
                            key={i}
                            r="4"
                            fill="rgb(22 163 74)"
                            opacity="0.4"
                            animate={{
                                cx: [0, 100, 200, 300, 400],
                                cy: [50, 30, 50, 70, 50]
                            }}
                            transition={{
                                duration: 4,
                                delay: i * 0.3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </svg>
            </div>
        </div>
    )
}
