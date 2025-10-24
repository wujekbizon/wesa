'use client'

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Lightbulb, TrendingUp } from 'lucide-react';

export default function CaseStudy() {
    return (
        <section className="relative py-24 md:py-32 bg-white border-t border-gray-200">
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
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-amber-500/10 border-2 border-amber-500/30 rounded-full mb-6"
                    >
                        <span className="text-amber-600 text-xs font-mono uppercase tracking-widest">
                            Featured Case Study
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900"
                    >
                        From Simple Monolith to{' '}
                        <span className="bg-linear-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                            Secure Exam Platform
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                    >
                        How we evolved Wolfmed Edukacja's medical exam system from a 2-tier MVP to a secure, scalable architecture.
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="group">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="w-10 h-10 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-zinc-900 font-mono mb-1">Challenge</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Evolve a simple MVP into a secure, compliant exam platform capable of handling timed assessments.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="w-10 h-10 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-zinc-900 font-mono mb-1">Solution</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Introduced lifecycle-based domain design with{' '}
                                        <code className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded text-sm text-gray-800 font-mono">
                                            test_sessions
                                        </code>{' '}
                                        and{' '}
                                        <code className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded text-sm text-gray-800 font-mono">
                                            completed_tests
                                        </code>{' '}
                                        tables — enabling fairness, auditability, and scalability.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="w-10 h-10 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-zinc-900 font-mono mb-1">Outcome</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Clear domain boundaries and DDD principles prepared the system for 3-tier and eventual microservice evolution.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 p-5 bg-gray-50 border-l-4 border-amber-500 rounded-r-lg">
                            <p className="text-gray-700 italic font-medium">
                                "You don't need microservices from day one — just design with tomorrow in mind."
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 md:p-8 h-full">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <span className="text-gray-500 font-mono text-sm">architecture-evolution.log</span>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4">
                                    Architecture Evolution
                                </h4>

                                {/* Evolution Steps */}
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">🏗️</span>
                                        <div>
                                            <p className="font-mono text-sm">
                                                <span className="text-amber-600 font-bold">MVP:</span>
                                            </p>
                                            <p className="text-gray-600 text-sm mt-1">
                                                Next.js (UI + Logic) → PostgreSQL
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">🧠</span>
                                        <div>
                                            <p className="font-mono text-sm">
                                                <span className="text-cyan-600 font-bold">Refactor:</span>
                                            </p>
                                            <p className="text-gray-600 text-sm mt-1">
                                                Added{' '}
                                                <code className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs">
                                                    test_sessions
                                                </code>{' '}
                                                +{' '}
                                                <code className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs">
                                                    completed_tests
                                                </code>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">⚙️</span>
                                        <div>
                                            <p className="font-mono text-sm">
                                                <span className="text-emerald-600 font-bold">Future:</span>
                                            </p>
                                            <p className="text-gray-600 text-sm mt-1">
                                                Express API + React UI + DB service (3-tier)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">☁️</span>
                                        <div>
                                            <p className="font-mono text-sm">
                                                <span className="text-purple-600 font-bold">Scalable Path:</span>
                                            </p>
                                            <p className="text-gray-600 text-sm mt-1">
                                                Modular → Microservices-ready
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.a
                        href="https://www.linkedin.com/pulse/from-simple-monolith-secure-exam-platform-wolfmed-grzegorz-wolfinger-tglsf/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-amber-500 to-amber-400 rounded-xl font-semibold text-black border-2 border-black overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10 text-lg">Read Full Article</span>
                        <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}