import { motion } from 'framer-motion'
import React from 'react'

export const PythonVisual = () => {
    return (
        <div className="relative w-full h-64 flex items-center justify-center font-mono">
            <div className="space-y-6 text-sm">
                {['import numpy', 'def process()', 'class Model:'].map((code, i) => (
                    <motion.div
                        key={i}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.25, duration: 0.5 }}
                    >
                        <motion.div
                            className="w-1 h-6 bg-yellow-600"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: i * 0.25, duration: 0.3 }}
                        />
                        <span className="text-yellow-600 font-semibold">{code.split(' ')[0]}</span>
                        <motion.span
                            className="text-gray-600"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            transition={{ delay: i * 0.25 + 0.3, duration: 0.5 }}
                        >
                            {code.split(' ').slice(1).join(' ')}
                        </motion.span>
                        <motion.div
                            className="flex gap-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.25 + 0.6 }}
                        >
                            {[...Array(3)].map((_, j) => (
                                <motion.div
                                    key={j}
                                    className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                    animate={{
                                        opacity: [0.3, 1, 0.3]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        delay: j * 0.2,
                                        repeat: Infinity
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
