'use client'
import { motion } from 'framer-motion'
import { Code2, Cpu, Layers, Users, TerminalSquare, Github, ArrowRight } from 'lucide-react'
import FrontendCodePreview from './FrontendCodePreview'
import FrontendServiceCard from './ui/FrontendServiceCard'
import Technologies from './Technologies'
import Opportunities from './Opportunities'
import Services from './Services'

export default function Developers() {
  

  return (
    <section className="min-h-screen bg-black text-white font-sans">
     
      <Technologies />
      <Services />
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
      
      <Opportunities />
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