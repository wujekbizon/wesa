import { motion } from 'framer-motion'
import React from 'react'

export const RustVisual = () => {
    return (
        <div className="relative w-full h-64 flex items-center justify-center">
            <div className="space-y-6 w-80">
                {[{
                    label: 'Memory Safety',
                    value: 100
                },
                {
                    label: 'Zero Cost',
                    value: 95
                },
                {
                    label: 'Concurrency',
                    value: 98
                }].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                        <div className="flex items-center justify-between mb-2 font-mono text-xs text-gray-600">
                            <span>{item.label}</span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.2 + 0.8 }}
                                className="text-orange-600 font-semibold"
                            >
                                {item.value}%
                            </motion.span>
                        </div>
                        <div className="relative h-3 bg-orange-500/10 border border-orange-600/30 rounded-full overflow-hidden">
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: `${item.value}%` }}
                                transition={{
                                    delay: i * 0.2 + 0.5,
                                    duration: 1.2,
                                    ease: [0.34, 1.56, 0.64, 1]
                                }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.2 + 1.5,
                                    repeat: Infinity,
                                    repeatDelay: 2
                                }}
                                style={{ width: "30%" }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
