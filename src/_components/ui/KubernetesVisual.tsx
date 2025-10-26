import { motion } from 'framer-motion'
import React from 'react'

export const KubernetesVisual = () => {
    return (
        <div className="relative w-full h-64 flex items-center justify-center">
            <motion.div
                className="relative w-72 h-72"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {[...Array(8)].map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180
                    const radius = 100
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius

                    return (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        >
                            <motion.div
                                className="w-10 h-10 border-2 border-cyan-600/60 rounded bg-linear-to-br from-cyan-500/10 to-cyan-600/20"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [-360, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    delay: i * 0.15,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <motion.div
                                    className="w-full h-full flex items-center justify-center text-cyan-600 text-xs font-mono"
                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                                >
                                    P{i + 1}
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="absolute top-1/2 left-1/2 w-1 h-24 bg-linear-to-b from-cyan-600/60 to-transparent origin-top"
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${-angle * 180 / Math.PI + 90}deg)`
                                }}
                                animate={{
                                    opacity: [0, 0.6, 0],
                                    scaleY: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                            />
                        </motion.div>
                    )
                })}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-16 h-16 border-2 border-cyan-600 rounded-full bg-linear-to-br from-cyan-500/20 to-transparent flex items-center justify-center">
                        <div className="text-cyan-600 text-sm font-mono">K8s</div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
