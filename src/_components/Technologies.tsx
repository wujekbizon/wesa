import { motion } from 'framer-motion'

export default function Technologies() {

    const techStack = [
        { name: 'React', color: 'text-cyan-400' },
        { name: 'Next.js', color: 'text-white' },
        { name: 'TypeScript', color: 'text-blue-400' },
        { name: 'Node.js', color: 'text-green-400' },
        { name: 'Python', color: 'text-yellow-400' },
        { name: 'PostgreSQL', color: 'text-blue-300' },
        { name: 'Docker', color: 'text-blue-400' },
        { name: 'Kubernetes', color: 'text-cyan-300' },
        { name: 'Rust', color: 'text-orange-400' },
        { name: 'C++', color: 'text-pink-400' },
        { name: 'Vue', color: 'text-green-300' },
        { name: 'Tailwind', color: 'text-cyan-400' },
    ]

    return (
        <section id='technologies' data-nav-section>
            <div className="max-w-5xl mx-auto px-8 pt-32 pb-24">
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
            </div>
            <div className="max-w-5xl mx-auto px-8 py-16 border-t border-b border-gray-800">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-gray-500 text-sm font-mono uppercase tracking-widest mb-8">
                        Technologies We Work With
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.03, duration: 0.3 }}
                            className="group"
                        >
                            <p className={`text-sm font-mono ${tech.color} opacity-60 group-hover:opacity-100 transition-opacity`}>
                                {tech.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}