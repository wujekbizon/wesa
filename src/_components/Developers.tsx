'use client'
import { motion } from 'framer-motion'
import { Code2, Cpu, Layers, Users, TerminalSquare, Github, ArrowRight } from 'lucide-react'
import FrontendCodePreview from './FrontendCodePreview'
import FrontendServiceCard from './ui/FrontendServiceCard'

export default function Developers() {
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
    <section className="min-h-screen bg-black text-white font-sans">
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



      {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/2.5 overflow-hidden"
            >
              <div className="relative z-10 flex-none px-6 py-6 order-last">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">DevOps & Infrastructure</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Docker containerization strategy, Kubernetes orchestration setup, CI/CD pipeline configuration, and cloud deployment optimization. Ship faster, scale smarter.
                </p>
              </div>

              <div className="pointer-events-none relative flex-auto select-none" style={{ minHeight: '10rem' }} aria-hidden="true">
                <div className="absolute inset-x-0 top-0 isolate overflow-hidden pt-6" style={{ transform: 'translateY(0rem) scale(0.98)' }}>
                  <div className="mx-auto h-40 w-72 rounded-3xl bg-gray-800 p-1.5" style={{ boxShadow: '0 1px 0 0 rgb(255 255 255 / 0.05) inset, 0px 2px 5px 0 rgb(0 0 0 / 0.40)', backgroundImage: 'linear-gradient(180deg, rgb(255 255 255 / 0.05) 0%, rgb(255 255 255 / 0) 67.19%)' }}>
                    <div className="relative h-36 overflow-hidden rounded-2xl bg-gray-950/50 px-4 pt-3 ring-1 ring-inset ring-black/5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-[0.625rem] text-gray-500 font-mono">deployment.yml</span>
                      </div>
                      <div className="font-mono text-xs space-y-1 text-gray-400">
                        <div><span className="text-blue-400">apiVersion:</span> apps/v1</div>
                        <div><span className="text-blue-400">kind:</span> Deployment</div>
                        <div><span className="text-blue-400">replicas:</span> <span className="text-green-400">3</span></div>
                        <div><span className="text-blue-400">image:</span> <span className="text-amber-400">app:latest</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-gray-900"></div>
              </div>
            </motion.div>
    */}
      {/* What We Offer Section */}
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
      {/* Desktop Layout - 3 columns × 4 rows */}
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

      {/* What We Need Section */}
      <div className="py-32 border-t border-gray-800">
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
            {/* Card 1 - Open Positions */}
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

            {/* Card 2 - Community */}
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
      </div>

      {/* Footer CTA */}
      <div className="py-24 border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-8 text-center"
        >
          <Github className="w-16 h-16 mx-auto mb-6 text-gray-600" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Open Source & Community
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Explore our packages, contribute to our projects, or simply learn from our code
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black rounded-lg font-semibold hover:bg-amber-400 transition-colors">
              View on GitHub
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:border-amber-500/30 hover:text-white transition-colors">
              Browse npm Packages
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}