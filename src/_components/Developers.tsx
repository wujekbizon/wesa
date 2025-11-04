'use client'
import { motion } from 'framer-motion'
import { Github, ArrowRight } from 'lucide-react'
import Technologies from './Technologies'
import Opportunities from './Opportunities'
import Services from './Services'

export default function Developers() {


  return (
    <section className="min-h-screen bg-black text-white font-sans">

      <Technologies />
      <Services />

      <Opportunities />
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