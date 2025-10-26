import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { renderColoredCode } from '@/src/helpers/renderColoredCode'

export const TypescriptVisual = () => {
    const [typedCode, setTypedCode] = useState('')
    const [stage, setStage] = useState<'idle' | 'typing' | 'errors-appear' | 'types-appear' | 'autocomplete' | 'validation' | 'complete'>('idle')
    const [hoveredType, setHoveredType] = useState<string | null>(null)

    const codeExample = `function getUserData(id) {
  const user = fetchUser(id)
  return user.name.toUpperCase()
}`

    useEffect(() => {
        setStage('typing')
        let codeIndex = 0
        const codeInterval = setInterval(() => {
            if (codeIndex <= codeExample.length) {
                setTypedCode(codeExample.slice(0, codeIndex))
                codeIndex++
            } else {
                clearInterval(codeInterval)
                setTimeout(() => setStage('errors-appear'), 300)
                setTimeout(() => setStage('types-appear'), 1300)
                setTimeout(() => setStage('autocomplete'), 2300)
                setTimeout(() => setStage('validation'), 2800)
                setTimeout(() => setStage('complete'), 3300)
            }
        }, 25)

        return () => clearInterval(codeInterval)
    }, [])

    return (
        <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
                <div className="flex-1 min-h-[300px] md:min-h-[380px]">
                    <div className="bg-gray-900 rounded-lg border border-gray-800 h-full overflow-hidden relative">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-800/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-xs text-gray-400 font-mono ml-2">app.js</span>
                        </div>

                        <AnimatePresence>
                            {(stage === 'errors-appear' || stage === 'types-appear') && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className="absolute top-3 right-3 z-10"
                                >
                                    <div className="px-2 py-1 bg-red-500/20 border border-red-500/40 rounded text-[10px] font-medium text-red-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                        Runtime Risk
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="p-4 md:p-6 font-mono text-xs md:text-sm relative h-[calc(100%-48px)]">
                            {renderColoredCode(typedCode)}
                            {typedCode.length < codeExample.length && (
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="inline-block w-2 h-4 bg-red-400 ml-1"
                                />
                            )}
                            
                            <AnimatePresence>
                                {(stage === 'errors-appear' || stage === 'types-appear') && (
                                    <div className="hidden md:block">
                                        <motion.div
                                            initial={{ opacity: 0, scaleX: 0 }}
                                            animate={{ opacity: 1, scaleX: 1 }}
                                            className="absolute"
                                            style={{ top: '28px', left: '142px', width: '16px', height: '2px' }}
                                        >
                                            <svg width="16" height="4" className="text-red-500">
                                                <path d="M 0 2 Q 2 0, 4 2 T 8 2 T 12 2 T 16 2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                            </svg>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, scaleX: 0 }}
                                            animate={{ opacity: 1, scaleX: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="absolute"
                                            style={{ top: '52px', left: '74px', width: '32px', height: '2px' }}
                                        >
                                            <svg width="32" height="4" className="text-red-500">
                                                <path d="M 0 2 Q 2 0, 4 2 T 8 2 T 12 2 T 16 2 T 20 2 T 24 2 T 28 2 T 32 2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                            </svg>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, scaleX: 0 }}
                                            animate={{ opacity: 1, scaleX: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="absolute"
                                            style={{ top: '76px', left: '58px', width: '72px', height: '2px' }}
                                        >
                                            <svg width="72" height="4" className="text-red-500">
                                                <path d="M 0 2 Q 2 0, 4 2 T 8 2 T 12 2 T 16 2 T 20 2 T 24 2 T 28 2 T 32 2 T 36 2 T 40 2 T 44 2 T 48 2 T 52 2 T 56 2 T 60 2 T 64 2 T 68 2 T 72 2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {(stage === 'errors-appear' || stage === 'types-appear') && (
                                    <>
                                        {[0, 1, 2].map((i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 0, x: 100 + i * 40 }}
                                                animate={{ opacity: [0, 1, 0], y: -50, x: 100 + i * 40 }}
                                                transition={{ duration: 2, delay: 0.6 + i * 0.3, repeat: Infinity, repeatDelay: 1 }}
                                                className="absolute top-[100px] text-red-400 text-lg md:text-xl"
                                            >
                                                ❌
                                            </motion.div>
                                        ))}
                                    </>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {stage === 'types-appear' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute bottom-4 left-4 right-4 bg-red-500/10 border border-red-500/30 rounded px-3 py-2 text-[10px] md:text-xs text-red-400"
                                    >
                                        ⚠️ Could fail in production
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <div className="flex-1 min-h-[300px] md:min-h-[380px]">
                    <div className="bg-gray-900 rounded-lg border border-gray-800 h-full overflow-hidden relative">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-800/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-xs text-gray-400 font-mono ml-2">app.ts</span>
                        </div>

                        {/* Corner Badge */}
                        <AnimatePresence>
                            {(stage === 'validation' || stage === 'complete') && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className="absolute top-3 right-12 z-10"
                                >
                                    <div className="px-2 py-1 bg-green-500/20 border border-green-500/40 rounded text-[10px] font-medium text-green-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        Type Safe
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="p-4 md:p-6 font-mono text-xs md:text-sm relative h-[calc(100%-48px)]">
                            {renderColoredCode(typedCode)}
                            {typedCode.length < codeExample.length && (
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="inline-block w-2 h-4 bg-blue-400 ml-1"
                                />
                            )}

                            <AnimatePresence>
                                {(stage === 'types-appear' || stage === 'autocomplete' || stage === 'validation' || stage === 'complete') && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="absolute hidden md:block cursor-pointer"
                                            style={{ top: '28px', left: '230px' }}
                                            onMouseEnter={() => setHoveredType('string')}
                                            onMouseLeave={() => setHoveredType(null)}
                                        >
                                            <div className="px-2 py-0.5 bg-green-500/20 border border-green-500/50 rounded text-green-400 text-xs hover:bg-green-500/30 transition-colors">
                                                : string
                                            </div>
                                            <AnimatePresence>
                                                {hoveredType === 'string' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -5 }}
                                                        className="absolute top-full left-0 bg-gray-800 border border-gray-700 rounded shadow-xl p-2 text-xs w-48 z-20"
                                                    >
                                                        <div className="text-green-400 font-semibold mb-1">✓ Type: string</div>
                                                        <div className="text-gray-400 text-[10px]">
                                                            Safe - guaranteed to be a string value
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="absolute hidden md:block cursor-pointer"
                                            style={{ top: '53px', left: '240px' }}
                                            onMouseEnter={() => setHoveredType('user')}
                                            onMouseLeave={() => setHoveredType(null)}
                                        >
                                            <div className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/50 rounded text-yellow-400 text-xs hover:bg-yellow-500/30 transition-colors">
                                                : User | null
                                            </div>
                                            <AnimatePresence>
                                                {hoveredType === 'user' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -5 }}
                                                        className="absolute top-full mt-2 left-0 bg-gray-800 border border-gray-700 rounded shadow-xl p-3 text-xs w-56 z-20"
                                                    >
                                                        <div className="text-yellow-400 font-semibold mb-1">⚠ Type: User | null</div>
                                                        <div className="text-gray-400 text-[10px] mb-2">
                                                            Could be null - TypeScript forces you to handle this case
                                                        </div>
                                                        <div className="text-blue-400 text-[10px] font-mono">
                                                            user?.name
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>

                            {/* Autocomplete Dropdown */}
                            <AnimatePresence>
                                {(stage === 'autocomplete' || stage === 'validation' || stage === 'complete') && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className="absolute hidden md:block bg-gray-800 border border-gray-700 rounded shadow-2xl overflow-hidden z-10"
                                        style={{ top: '90px', left: '176px', width: '192px' }}
                                    >
                                        <div className="text-xs">
                                            <div className="px-3 py-2 bg-blue-500/20 border-l-2 border-blue-500 flex items-center gap-2">
                                                <span className="text-blue-400">●</span>
                                                <span className="text-gray-300">name: string</span>
                                            </div>
                                            <div className="px-3 py-2 hover:bg-gray-700/50 flex items-center gap-2">
                                                <span className="text-blue-400">●</span>
                                                <span className="text-gray-300">email: string</span>
                                            </div>
                                            <div className="px-3 py-2 hover:bg-gray-700/50 flex items-center gap-2">
                                                <span className="text-blue-400">●</span>
                                                <span className="text-gray-300">id: number</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Validation Checkmarks */}
                            <AnimatePresence>
                                {(stage === 'validation' || stage === 'complete') && (
                                    <>
                                        {[0, 1, 2].map((i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
                                                className="absolute hidden md:block"
                                                style={{
                                                    top: `${28 + i * 24}px`,
                                                    right: '12px'
                                                }}
                                            >
                                                <div className="w-5 h-5 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                                                    <svg
                                                        className="w-3 h-3 text-green-500"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <motion.path
                                                            d="M5 13l4 4L19 7"
                                                            initial={{ pathLength: 0 }}
                                                            animate={{ pathLength: 1 }}
                                                            transition={{ delay: i * 0.15 + 0.2, duration: 0.3 }}
                                                        />
                                                    </svg>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </>
                                )}
                            </AnimatePresence>

                            {/* Success Message */}
                            <AnimatePresence>
                                {stage === 'complete' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute bottom-4 left-4 right-4 bg-green-500/10 border border-green-500/30 rounded px-3 py-2 text-[10px] md:text-xs text-green-400"
                                    >
                                        ✓ Caught before deployment
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* WESA Message */}
            <AnimatePresence>
                {stage === 'complete' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 md:mt-8 text-center"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xs md:text-sm text-gray-600"
                        >
                            Type-safe code, fewer bugs, faster development • <span className="text-amber-400 font-semibold">Built by WESA</span>
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}