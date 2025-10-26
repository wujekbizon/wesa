import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fullCodeReact } from '@/src/data/codeSnippets'
import { renderColoredCode } from '@/src/helpers/renderColoredCode'

export const ReactVisual = () => {
    const [typedCode, setTypedCode] = useState('')
    const [previewCount, setPreviewCount] = useState(0)
    const [showComponent, setShowComponent] = useState(false)
    const [showCounter, setShowCounter] = useState(false)
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            if (index <= fullCodeReact.length) {
                const currentCode = fullCodeReact.slice(0, index)
                setTypedCode(currentCode)

                if (currentCode.includes('return (') && currentCode.includes('<div>')) {
                    setShowComponent(true)
                }

                if (currentCode.includes('useState(0)')) {
                    setShowCounter(true)
                }

                if (currentCode.includes('onClick')) {
                    setShowButton(true)
                }

                index++
            } else {
                clearInterval(interval)
            }
        }, 30)

        return () => clearInterval(interval)
    }, [])

    const isButtonActive = typedCode.includes('onClick') && typedCode.includes('setCount(count + 1)')

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1 min-h-[280px] md:min-h-[320px]">
                    <div className="bg-gray-900 rounded-lg border border-gray-800 h-full overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-800/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-xs text-gray-400 font-mono ml-2">Counter.jsx</span>
                        </div>
                        <div className="p-2 md:p-4 font-mono text-xs md:text-sm overflow-auto">
                            {renderColoredCode(typedCode)}
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-2 h-4 bg-cyan-400 ml-1"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1 min-h-[280px] md:min-h-[320px]">
                    <div className="bg-white rounded-lg border border-gray-300 h-full overflow-hidden shadow-lg">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-300 bg-gray-100">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-gray-300" />
                                <div className="w-3 h-3 rounded-full bg-gray-300" />
                                <div className="w-3 h-3 rounded-full bg-gray-300" />
                            </div>
                            <span className="text-xs text-gray-500 font-mono ml-2">Preview</span>
                        </div>
                        <div className="p-6 md:p-8 flex items-center justify-center h-[calc(100%-48px)]">
                            <AnimatePresence>
                                {showComponent && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-center"
                                    >
                                        <AnimatePresence>
                                            {showCounter && (
                                                <motion.h1
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                                                >
                                                    Count: <span className="text-cyan-600">{previewCount}</span>
                                                </motion.h1>
                                            )}
                                        </AnimatePresence>
                                        <AnimatePresence>
                                            {showButton && (
                                                <>
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            if (isButtonActive) {
                                                                setPreviewCount(c => c + 1)
                                                            }
                                                        }}
                                                        whileHover={isButtonActive ? { scale: 1.05 } : {}}
                                                        whileTap={isButtonActive ? { scale: 0.95 } : {}}
                                                        className={`inline-block px-6 py-3 rounded-lg font-semibold text-white transition-all ${isButtonActive
                                                                ? 'bg-cyan-600 hover:bg-cyan-700 cursor-pointer shadow-lg'
                                                                : 'bg-gray-400 cursor-not-allowed'
                                                            }`}
                                                    >
                                                        Click me
                                                    </motion.div>
                                                    {isButtonActive && (
                                                        <motion.p
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 0.3 }}
                                                            className="mt-4 text-sm text-gray-500"
                                                        >
                                                            Try Clicking the button!
                                                        </motion.p>
                                                    )}
                                                </>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: typedCode.length === fullCodeReact.length ? 1 : 0 }}
                className="mt-4 text-center"
            >
                <p className="text-xs md:text-sm text-gray-700">
                    <span className="text-cyan-400 font-semibold">React</span> makes building interactive UIs simple and declarative
                </p>
            </motion.div>
        </div>
    )
}
