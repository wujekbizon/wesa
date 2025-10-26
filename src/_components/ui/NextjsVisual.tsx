import { fullCodeNext } from '@/src/data/codeSnippets'
import { renderColoredCode } from '@/src/helpers/renderColoredCode'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export const NextjsVisual = () => {
    const [typedCode, setTypedCode] = useState('')
    const [typedUrl, setTypedUrl] = useState('')
    const [stage, setStage] = useState<'idle' | 'typing-url' | 'request' | 'server' | 'fetching' | 'rendering' | 'complete'>('idle')

    const targetUrl = '/products'

    useEffect(() => {
        let codeIndex = 0
        const codeInterval = setInterval(() => {
            if (codeIndex <= fullCodeNext.length) {
                setTypedCode(fullCodeNext.slice(0, codeIndex))
                codeIndex++
            } else {
                clearInterval(codeInterval)
                setTimeout(() => {
                    setStage('typing-url')
                    let urlIndex = 0
                    const urlInterval = setInterval(() => {
                        if (urlIndex <= targetUrl.length) {
                            setTypedUrl(targetUrl.slice(0, urlIndex))
                            urlIndex++
                        } else {
                            clearInterval(urlInterval)
                            setTimeout(() => setStage('request'), 300)
                            setTimeout(() => setStage('server'), 800)
                            setTimeout(() => setStage('fetching'), 1300)
                            setTimeout(() => setStage('rendering'), 2300)
                            setTimeout(() => setStage('complete'), 3300)
                        }
                    }, 80)
                }, 500)
            }
        }, 30)

        return () => clearInterval(codeInterval)
    }, [])

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1 min-h-[280px] md:min-h-[360px]">
                    <div className="bg-gray-900 rounded-lg border border-gray-800 h-full overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-800/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-xs text-gray-400 font-mono ml-2">app/products/page.tsx</span>
                        </div>
                        <div className="p-4 md:p-6 font-mono text-xs md:text-sm overflow-auto h-[calc(100%-48px)]">
                            {renderColoredCode(typedCode)}
                            {typedCode.length < fullCodeNext.length && (
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="inline-block w-2 h-4 bg-cyan-400 ml-1"
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex-1 min-h-[280px] md:min-h-[360px]">
                    <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-300 h-full overflow-hidden shadow-lg">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-300 bg-white">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-gray-300" />
                                <div className="w-3 h-3 rounded-full bg-gray-300" />
                                <div className="w-3 h-3 rounded-full bg-gray-300" />
                            </div>
                            <span className="text-xs text-gray-500 font-mono ml-2">Request Flow</span>
                        </div>
                        
                        <div className="p-6 md:p-8 h-[calc(100%-48px)] flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: stage !== 'idle' ? 1 : 0, y: stage !== 'idle' ? 0 : -20 }}
                                className="mb-6"
                            >
                                <div className="bg-white rounded-lg border-2 border-gray-300 overflow-hidden shadow-md">
                                    <div className="bg-gray-200 px-3 py-2 flex items-center gap-2">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-red-400" />
                                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                            <div className="w-2 h-2 rounded-full bg-green-400" />
                                        </div>
                                        <div className="flex-1 bg-white rounded px-2 py-1 text-xs font-mono text-gray-600">
                                            localhost:3000<span className="text-blue-600">{typedUrl}</span>
                                            {stage === 'typing-url' && typedUrl.length < targetUrl.length && (
                                                <motion.span
                                                    animate={{ opacity: [1, 0, 1] }}
                                                    transition={{ duration: 0.6, repeat: Infinity }}
                                                    className="inline-block w-1 h-3 bg-blue-600 ml-0.5"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="px-3 py-2 text-xs text-gray-500 font-mono">
                                        🌐 Browser
                                    </div>
                                </div>
                            </motion.div>
                            <AnimatePresence>
                                {stage !== 'idle' && stage !== 'typing-url' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 40 }}
                                        className="flex justify-center items-center"
                                    >
                                        <motion.div
                                            animate={{ y: [0, 5, 0] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="text-2xl text-slate-600"
                                        >
                                            ↓
                                        </motion.div>
                                        <span className="ml-2 text-xs text-gray-500 font-mono">
                                            {stage === 'request' && 'GET /products'}
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {(stage === 'server' || stage === 'fetching' || stage === 'rendering' || stage === 'complete') && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="my-4"
                                    >
                                        <div className={`bg-linear-to-br from-gray-800 to-gray-900 rounded-lg border-2 p-4 transition-all ${
                                            stage === 'fetching' ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' : 'border-gray-700'
                                        }`}>
                                            <div className="text-white text-sm font-mono mb-2">
                                                ⚡ Next.js Server
                                            </div>
                                            <div className="space-y-2 text-xs">
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <motion.div
                                                        animate={{ scale: stage === 'server' || stage === 'fetching' ? [1, 1.2, 1] : 1 }}
                                                        transition={{ duration: 0.5, repeat: stage === 'server' ? Infinity : 0 }}
                                                        className={stage === 'server' || stage === 'fetching' ? 'text-green-400' : 'text-gray-600'}
                                                    >
                                                        ✓
                                                    </motion.div>
                                                    <span>Route: /products</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <motion.div
                                                        animate={{ 
                                                            scale: stage === 'fetching' ? [1, 1.2, 1] : 1,
                                                            rotate: stage === 'fetching' ? [0, 360] : 0
                                                        }}
                                                        transition={{ duration: 1, repeat: stage === 'fetching' ? Infinity : 0 }}
                                                        className={stage === 'fetching' || stage === 'rendering' || stage === 'complete' ? 'text-green-400' : 'text-gray-600'}
                                                    >
                                                        {stage === 'fetching' ? '⟳' : '✓'}
                                                    </motion.div>
                                                    <span>Fetch API data</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <motion.div
                                                        animate={{ scale: stage === 'rendering' ? [1, 1.2, 1] : 1 }}
                                                        transition={{ duration: 0.5, repeat: stage === 'rendering' ? Infinity : 0 }}
                                                        className={(stage === 'rendering' || stage === 'complete') ? 'text-green-400' : 'text-gray-600'}
                                                    >
                                                        {(stage === 'rendering' || stage === 'complete') ? '✓' : '○'}
                                                    </motion.div>
                                                    <span>Render HTML</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {(stage === 'rendering' || stage === 'complete') && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 40 }}
                                        className="flex justify-center items-center"
                                    >
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="text-2xl text-zinc-500"
                                        >
                                            ↑
                                        </motion.div>
                                        <span className="ml-2 text-xs text-gray-500 font-mono">
                                            Pre-rendered HTML
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {stage === 'complete' && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="mt-4 text-center"
                                    >
                                        <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                                            ⚡ Server-Side Rendered • SEO Ready
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: stage === 'complete' ? 1 : 0 }}
                className="mt-4 text-center"
            >
                <p className="text-xs md:text-sm text-gray-600">
                    <span className="text-green-400 font-semibold">Next.js</span> renders on the server with data already fetched — fast, SEO-friendly, full-stack
                </p>
            </motion.div>
        </div>
    )
}
