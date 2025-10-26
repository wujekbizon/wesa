
import { motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'
import { techCategories } from '../data/techs'
import { ReactVisual } from './ui/ReactVisual'
import { DockerVisual } from './ui/DockerVisual'
import { KubernetesVisual } from './ui/KubernetesVisual'
import { TypescriptVisual } from './ui/TypescriptVisual'
import { PostgresVisual } from './ui/PostgresVisual'
import { NodejsVisual } from './ui/NodejsVisual'
import { PythonVisual } from './ui/PythonVisual'
import { RustVisual } from './ui/RustVisual'
import { CppVisual } from './ui/CppVisual'
import { NextjsVisual } from './ui/NextjsVisual'

export default function Technologies() {
    const [activeTech, setActiveTech] = useState<TechVisualType | null>(null)


    return (
        <section id='technologies' data-nav-section className=' bg-white'>
            <div className="max-w-5xl mx-auto px-8 pt-32 pb-24 bg-zinc-700">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
                        <span className="text-amber-500 text-xs font-mono uppercase tracking-widest">
                            For Developers
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        Build with us.
                        <br />
                        <span className="text-amber-500">
                            Grow with us.
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Whether you're building alongside us or building for us — we provide
                        tools, expertise, and opportunities to shape the future.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-300/70 text-xs font-mono uppercase tracking-widest">
                        Click to explore
                    </p>
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto px-8 py-24">
                {techCategories.map((category, catIndex) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                        className="mb-20 last:mb-0"
                    >
                        <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-gray-800/50">
                            <span className="text-gray-600 text-xs font-mono uppercase tracking-widest">
                                {String(catIndex + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                                {category.category}
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {category.items.map((tech, techIndex) => (
                                <motion.button
                                    key={tech.name}
                                    onClick={() => setActiveTech(activeTech === tech.name ? null : tech.name as TechVisualType)}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: techIndex * 0.05 }}
                                    className="w-full text-left group"
                                >
                                    <div className="relative">
                                        <div className="flex items-center justify-between py-4 px-6 border border-gray-800/50 hover:border-gray-700 transition-all duration-300 bg-black/20">
                                            <div className="flex items-center gap-6">
                                                <span className="text-gray-600 text-xs font-mono w-8">
                                                    {String(techIndex + 1).padStart(2, '0')}
                                                </span>
                                                <span className={`text-xl font-mono ${tech.color} transition-opacity duration-300 ${activeTech === tech.name ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                                                    {tech.name}
                                                </span>
                                                <span className="text-sm text-gray-500 font-mono hidden md:block">
                                                    {tech.description}
                                                </span>
                                            </div>
                                            <motion.span
                                                animate={{ rotate: activeTech === tech.name ? 45 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-gray-600 text-xl font-light"
                                            >
                                                +
                                            </motion.span>
                                        </div>

                                        <AnimatePresence>
                                            {activeTech === tech.name && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                                    className="overflow-hidden border-x border-b border-gray-800/50 bg-black/40"
                                                >
                                                    <div className="px-2 sm:px-6 py-2 sm:py-8">
                                                        {tech.visual === 'react' && <ReactVisual />}
                                                        {tech.visual === 'docker' && <DockerVisual />}
                                                        {tech.visual === 'kubernetes' && <KubernetesVisual />}
                                                        {tech.visual === 'typescript' && <TypescriptVisual />}
                                                        {tech.visual === 'postgres' && <PostgresVisual />}
                                                        {tech.visual === 'nodejs' && <NodejsVisual />}
                                                        {tech.visual === 'python' && <PythonVisual />}
                                                        {tech.visual === 'rust' && <RustVisual />}
                                                        {tech.visual === 'cpp' && <CppVisual />}
                                                        {tech.visual === 'nextjs' && <NextjsVisual />}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}