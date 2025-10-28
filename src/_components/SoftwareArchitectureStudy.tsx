import { motion } from 'framer-motion';
import { CheckCircle2, Lightbulb, TrendingUp } from 'lucide-react';

export default function SoftwareArchitectureStudy() {
    return (
        <div className="relative bg-white text-black py-20 md:py-28">
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(251, 191, 36, 0.5) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block px-4 py-2 bg-amber-500/10 border-2 border-amber-500/30 rounded-full mb-6">
                        <span className="text-amber-600 text-xs font-mono uppercase tracking-widest">
                            Featured Case Study
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-zinc-900">
                        E-commerce Platform Transformation
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 md:p-10"
                >
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-start gap-3 mb-2">
                                <div className="w-10 h-10 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Challenge</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Monolithic system struggling with 10M+ monthly users, frequent downtime during peak hours
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start gap-3 mb-2">
                                <div className="w-10 h-10 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Solution</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Microservices architecture with event-driven design and independent service scaling
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start gap-3 mb-2">
                                <div className="w-10 h-10 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Outcome</h3>
                                    <p className="text-gray-700 font-semibold leading-relaxed">
                                        99.99% uptime, 60% faster deployment cycles, 40% infrastructure cost reduction
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}