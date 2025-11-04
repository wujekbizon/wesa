
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
        <section id='technologies' data-nav-section className='bg-white'>
            <div className="max-w-5xl mx-auto px-8 pt-32 pb-32 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 border-b border-gray-800/30">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8 shadow-lg shadow-amber-500/5">
                        <span className="text-amber-500 text-xs font-mono uppercase tracking-widest">
                            For Developers
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        Build with us.
                        <br />
                        <span className="text-amber-500 font-extrabold">
                            Grow with us.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
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
                    <p className="text-gray-400 text-xs font-mono uppercase tracking-widest">
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
                        className="mb-16 last:mb-0"
                    >
                        <div className="flex items-baseline gap-4 mb-8 pb-6 border-b border-gray-800/30">
                            <span className="text-gray-500 text-sm font-mono uppercase tracking-wider">
                                {String(catIndex + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-lg font-mono font-semibold text-gray-300 uppercase tracking-wide">
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
                                    className="w-full text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                                >
                                    <div className="relative">
                                        <div className="flex items-center justify-between py-5 px-6 border border-gray-800/40 rounded-lg bg-gradient-to-r from-gray-900 to-gray-950/50 backdrop-blur-sm shadow-lg shadow-black/10 hover:border-amber-500/30 hover:bg-gradient-to-r hover:from-gray-900 hover:via-gray-900 hover:to-amber-500/5 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
                                            <div className="flex items-center gap-6">
                                                <span className="text-gray-500 text-sm font-mono w-10">
                                                    {String(techIndex + 1).padStart(2, '0')}
                                                </span>
                                                <span className={`text-2xl font-bold font-mono ${tech.name === 'Next.js' ? 'text-white' : tech.color} transition-opacity duration-300 ${activeTech === tech.name ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                                                    {tech.name}
                                                </span>
                                                <span className="text-base text-gray-400 font-mono hidden md:block opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                                    {tech.description}
                                                </span>
                                            </div>
                                            <motion.span
                                                animate={{ rotate: activeTech === tech.name ? 45 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-gray-500 group-hover:text-amber-500/70 text-2xl font-light transition-colors duration-300"
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
                                                    className="overflow-hidden border-x border-b border-t border-gray-800/40 border-t-amber-500/20 rounded-b-lg bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 backdrop-blur-md"
                                                >
                                                    <div className="px-4 py-6 sm:px-8 sm:py-10">
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
