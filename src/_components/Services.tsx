import { motion } from 'framer-motion'
import { Code2, Cpu, Layers, Users, TerminalSquare, Github } from 'lucide-react'
import FrontendCodePreview from './FrontendCodePreview'
import FrontendServiceCard from './ui/FrontendServiceCard'

export default function Services() {
    return (
        <section id='services' data-nav-section>
            <div className="py-32">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
                            <span className="text-amber-500 text-[10px] uppercase tracking-widest">
                                What We Offer
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                            Services for Developer Teams
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-300/80 max-w-xl mx-auto">
                            Expert consultation and implementation across the full stack
                        </p>
                    </motion.div>

                    {/* Mobile/Tablet Layout - 2 columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 xl:hidden">
                        {[0, 2].map((startIndex) => (
                            <div key={`col-${startIndex}`} className="flex flex-col gap-3">
                                {startIndex === 0 ? (
                                    <>
                                        {/* Tall Card 1 - Frontend */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6 }}
                                            className="group relative isolate flex flex-col rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-lg overflow-visible aspect-3/4 min-h-[300px] max-h-[500px]"
                                        >
                                            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-white/5 via-gray-900/20 to-transparent opacity-70" />
                                            <FrontendCodePreview />
                                            <div className="relative z-0 flex-none px-6 pt-8 pb-6">
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div className="w-9 h-9 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500 shrink-0">
                                                        <Code2 className="w-5 h-5" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-semibold text-white mb-2">Frontend as a Service</h3>
                                                        <p className="text-sm text-gray-400 leading-relaxed">
                                                            Complete React & Next.js architecture setup with TypeScript configuration, component library scaffolding, and Tailwind design system integration.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Short Card 2 - DevOps */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.1 }}
                                            className="group relative rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-lg overflow-hidden aspect-4/3 min-h-[220px] max-h-[300px]"
                                        >
                                            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-white/5 via-gray-900/20 to-transparent opacity-70" />
                                            <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
                                                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500 mb-4">
                                                    <Layers className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-xl font-semibold text-white mb-2">DevOps & Infrastructure</h3>
                                                <p className="text-sm text-gray-400 leading-relaxed">
                                                    Docker containerization, Kubernetes orchestration, and CI/CD pipeline configuration.
                                                </p>
                                            </div>
                                        </motion.div>
                                    </>
                                ) : (
                                    <>
                                        {/* Short Card 3 - Team Collaboration */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            className="group relative rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-lg overflow-hidden aspect-4/3 min-h-[220px] max-h-[300px]"
                                        >
                                            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-white/5 via-gray-900/20 to-transparent opacity-70" />
                                            <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
                                                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500 mb-4">
                                                    <Users className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-xl font-semibold text-white mb-2">Team Collaboration</h3>
                                                <p className="text-sm text-gray-400 leading-relaxed">
                                                    Code review processes, documentation standards, and development workflow optimization.
                                                </p>
                                            </div>
                                        </motion.div>

                                        {/* Tall Card 4 - Backend */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className="group relative isolate flex flex-col rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-lg overflow-visible aspect-3/4 min-h-[300px] max-h-[500px]"
                                        >
                                            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-white/5 via-gray-900/20 to-transparent opacity-70" />
                                            <FrontendCodePreview />
                                            <div className="relative z-10 flex-none px-6 py-6 order-last">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500">
                                                        <Cpu className="w-5 h-5" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white">Backend Architecture</h3>
                                                </div>
                                                <p className="text-sm text-gray-400 leading-relaxed">
                                                    Scalable Node.js/NestJS microservices design with PostgreSQL database modeling and comprehensive API design.
                                                </p>
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden xl:grid xl:grid-cols-3 xl:grid-rows-4 xl:gap-3 xl:max-w-[1248px] xl:mx-auto xl:items-start">
                {/* Row 1, Col 1 - Short Card: Technical Consulting */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group h-full w-full relative rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-lg overflow-hidden xl:col-start-1 xl:row-start-1 aspect-4/3 min-h-[220px] max-h-[300px]"
                >
                    <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-white/5 via-gray-900/20 to-transparent opacity-70" />
                    <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
                        <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500 mb-4">
                            <TerminalSquare className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Technical Consulting</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Expert guidance on architecture decisions, technology stack selection, and project planning.
                        </p>
                    </div>
                </motion.div>

                <FrontendServiceCard />

                {/* Row 1, Col 3 - Short Card: DevOps */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="group h-full w-full relative rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-lg overflow-hidden xl:col-start-3 xl:row-start-1 aspect-4/3 min-h-[220px] max-h-[300px]"
                >
                    <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-white/5 via-gray-900/20 to-transparent opacity-70" />
                    <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
                        <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500 mb-4">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">DevOps & Infrastructure</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Docker containerization, Kubernetes orchestration, and CI/CD pipeline configuration.
                        </p>
                    </div>
                </motion.div>

                {/* Row 2-3, Col 1 - Tall Card: Backend (spans 2 rows) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="group h-full w-full relative isolate flex flex-col rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-lg overflow-visible xl:col-start-1 xl:row-start-2 xl:row-span-2 aspect-3/4 min-h-[300px]"
                >
                    <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-white/5 via-gray-900/20 to-transparent opacity-70" />
                    <FrontendCodePreview />
                    <div className="relative z-10 flex-none px-6 py-6 order-last mt-auto">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500">
                                <Cpu className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Backend Architecture</h3>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Scalable Node.js/NestJS microservices design with PostgreSQL database modeling and comprehensive API design.
                        </p>
                    </div>
                </motion.div>

                {/* Row 3, Col 2 - Short Card: Team Collaboration */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="group h-full w-full relative rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-lg overflow-hidden xl:col-start-2 xl:row-start-3 aspect-4/3 min-h-[220px] max-h-[300px]"
                >
                    <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-white/5 via-gray-900/20 to-transparent opacity-70" />
                    <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
                        <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500 mb-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Team Collaboration</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Code review processes, documentation standards, and development workflow optimization.
                        </p>
                    </div>
                </motion.div>

                {/* Row 2-3, Col 3 - Tall Card: Open Source (spans 2 rows) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="group h-full w-full relative isolate flex flex-col rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-lg overflow-visible xl:col-start-3 xl:row-start-2 xl:row-span-2 aspect-3/4 min-h-[300px]"
                >
                    <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-white/5 via-gray-900/20 to-transparent opacity-70" />
                    <FrontendCodePreview />
                    <div className="relative z-10 flex-none px-6 py-6 order-last mt-auto">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500">
                                <Github className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Open Source</h3>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Contributing to and maintaining open source projects that benefit the developer community.
                        </p>
                    </div>
                </motion.div>

                {/* Row 4, Col 1 - Short Card: API Development */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="group h-full w-full relative rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-lg overflow-hidden xl:col-start-1 xl:row-start-4 aspect-4/3 min-h-[220px] max-h-[300px]"
                >
                    <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-white/5 via-gray-900/20 to-transparent opacity-70" />
                    <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
                        <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500 mb-4">
                            <Code2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">API Development</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            RESTful and GraphQL API design, documentation, and implementation with best practices.
                        </p>
                    </div>
                </motion.div>

                {/* Row 4, Col 2 - Short Card: Performance Optimization */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="group h-full w-full relative rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-lg overflow-hidden xl:col-start-2 xl:row-start-4 aspect-4/3 min-h-[220px] max-h-[300px]"
                >
                    <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-white/5 via-gray-900/20 to-transparent opacity-70" />
                    <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
                        <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500 mb-4">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Performance Optimization</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Code profiling, bundle optimization, and performance tuning for faster applications.
                        </p>
                    </div>
                </motion.div>

                {/* Row 4, Col 3 - Short Card: Testing & Quality */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="group h-full w-full relative rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-lg overflow-hidden xl:col-start-3 xl:row-start-4 aspect-4/3 min-h-[220px] max-h-[300px]"
                >
                    <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-white/5 via-gray-900/20 to-transparent opacity-70" />
                    <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
                        <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500 mb-4">
                            <TerminalSquare className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Testing & Quality</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Comprehensive testing strategies including unit, integration, and end-to-end tests.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}