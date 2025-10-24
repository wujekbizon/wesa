import { motion } from 'framer-motion';

export default function ArchitectureHeader() {
  return (
    <div className="relative z-10 pt-32 pb-20 text-center bg-white">
      {/* Badge - flipped colors for white bg */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6"
      >
        <span className="text-amber-600 text-xs font-mono uppercase tracking-widest">
          Our Approach
        </span>
      </motion.div>

      {/* Main Title - darker gradient for visibility on white */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
          Architecture We Use
        </span>
      </motion.h2>

      {/* Subtitle - dark text on white */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
      >
        Battle-tested patterns that scale from startup to enterprise
      </motion.p>

      {/* Enhanced Technical Overview Box - light theme */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 mx-auto max-w-3xl bg-gray-50 border border-gray-200 rounded-xl p-6 text-left font-mono text-sm shadow-lg"
      >
        {/* Header with badge */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-gray-500">architecture-handbook.ts</span>
          </div>
          <span className="text-xs px-2 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-700">
            v2.0
          </span>
        </div>

        {/* Code Content - dark text on light bg */}
        <div className="space-y-2 text-gray-700">
          <p>
            <span className="text-purple-600">const</span>{' '}
            <span className="text-cyan-700">experience</span> = {'{'}
          </p>
          <p className="pl-4">
            <span className="text-gray-600">yearsInProduction:</span>{' '}
            <span className="text-green-600">10+</span>,
          </p>
          <p className="pl-4">
            <span className="text-gray-600">yearsInProduction:</span>{' '}
            <span className="text-green-600">50+</span>,
          </p>
          <p className="pl-4">
            <span className="text-gray-600">teamSize:</span>{' '}
            <span className="text-orange-600">"startup → enterprise"</span>
          </p>
          <p>{'};'}</p>
          
          <p className="pt-3">
            <span className="text-purple-600">const</span>{' '}
            <span className="text-cyan-700">patterns</span> = [
          </p>
          <p className="pl-4">
            <span className="text-orange-600">"Monolithic"</span>,{' '}
            <span className="text-gray-400">// Perfect for MVPs & rapid iteration</span>
          </p>
          <p className="pl-4">
            <span className="text-orange-600">"Microservices"</span>,{' '}
            <span className="text-gray-400">// When you need independent scaling</span>
          </p>
          <p>];</p>

          <p className="pt-3">
            <span className="text-purple-600">const</span>{' '}
            <span className="text-cyan-700">focusAreas</span> = [
          </p>
          <p className="pl-4">
            <span className="text-orange-600">"Scalability"</span>,{' '}
            <span className="text-orange-600">"Deployment"</span>,{' '}
            <span className="text-orange-600">"Maintainability"</span>
          </p>
          <p>];</p>

          <p className="pt-4 text-green-600">
            <span className="text-gray-400">// We don't just design systems,</span>
          </p>
          <p className="text-green-600">
            <span className="text-gray-400">// we build them to last</span>
          </p>
          <p className="pt-2">
            <span className="text-cyan-700">explore</span>
            <span className="text-yellow-600">(</span>
            <span className="text-gray-900">patterns</span>
            <span className="text-yellow-600">)</span>;
          </p>
        </div>
      </motion.div>

      {/* Scroll Indicator - darker for visibility */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-12 text-gray-400 flex justify-center items-center gap-2 text-sm font-mono"
      >
        <span>↓</span> scroll to explore patterns
      </motion.div>
    </div>
  );
}