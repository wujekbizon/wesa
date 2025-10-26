import { motion } from 'framer-motion'
import React from 'react'

export const TailwindVisual = () => {
    return (
        <div className="relative w-full h-64 flex items-center justify-center">
            <div className="grid grid-cols-6 gap-2">
                {[...Array(24)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-cyan-600/30 border border-cyan-600/40"
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0
                        }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.03,
                            type: "spring",
                            stiffness: 200
                        }}
                    >
                        <motion.div
                            className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{
                                duration: 2,
                                delay: i * 0.03 + 0.5,
                                repeat: Infinity,
                                repeatDelay: 2
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
