import { motion } from 'framer-motion'
import { Users, TerminalSquare, ArrowRight } from 'lucide-react'

export default function Opportunities() {
    return (
        <section id='join' className="py-32 border-t border-gray-800">
            <div className="max-w-5xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
                        <span className="text-amber-500 text-xs font-mono uppercase tracking-widest">
                            Join Our Team
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        We're Looking for Developers Like You
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Opportunities to build, contribute, and grow together
                    </p>
                </motion.div>

                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/2.5 overflow-hidden"
                    >
                        <div className="relative z-10 flex-none px-6 py-6 order-last">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Open Positions</h3>
                                </div>
                                <button className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-black rounded-lg font-semibold text-sm hover:bg-amber-400 transition-colors">
                                    View Roles
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                We're expanding our team. Looking for Frontend, Backend, and DevOps engineers passionate about clean code and open collaboration.
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                                <div className="px-3 py-2 bg-gray-800 rounded-lg text-gray-300">Senior Frontend Engineer</div>
                                <div className="px-3 py-2 bg-gray-800 rounded-lg text-gray-300">Backend/Infrastructure Engineer</div>
                                <div className="px-3 py-2 bg-gray-800 rounded-lg text-gray-300">Full-Stack Developer</div>
                                <div className="px-3 py-2 bg-gray-800 rounded-lg text-gray-300">DevOps Specialist</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group relative isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/2.5 overflow-hidden"
                    >
                        <div className="relative z-10 flex-none px-6 py-6 order-last">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500">
                                        <TerminalSquare className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Community Contributors</h3>
                                </div>
                                <button className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-black rounded-lg font-semibold text-sm hover:bg-amber-400 transition-colors">
                                    Join Community
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                We believe in knowledge sharing. Explore our packages, contribute to our GitHub projects, and join our developer community.
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                                <div className="px-3 py-2 bg-gray-800 rounded-lg text-gray-300">Open source maintainers</div>
                                <div className="px-3 py-2 bg-gray-800 rounded-lg text-gray-300">Technical writers</div>
                                <div className="px-3 py-2 bg-gray-800 rounded-lg text-gray-300">Package developers</div>
                                <div className="px-3 py-2 bg-gray-800 rounded-lg text-gray-300">Code reviewers</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}