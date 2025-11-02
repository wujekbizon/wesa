'use client';

import { motion } from 'framer-motion';
import { Target, Rocket, CheckCircle } from 'lucide-react';

export default function WolfmedChallengeSolution() {
  const challenges = [
    'Fragmented learning materials',
    'No progress tracking',
    'Limited accessibility',
  ];

  const solutions = [
    'Centralized knowledge hub',
    'Real-time analytics',
    'Mobile-first design',
  ];

  return (
    <section id="challenge" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 bg-linear-to-b from-black via-gray-900 to-black">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-amber-500/5 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-400 text-sm font-medium">Case Study</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Journey
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            From identifying critical pain points to delivering a transformative solution
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6 w-fit">
              <Target className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-medium">The Challenge</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Outdated Learning. <br /> Limited Resources.
            </h3>

            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
              Polish medical caregivers struggled with scattered resources,
              outdated materials, and no centralized platform for continuous
              education.
            </p>

            <div className="space-y-4">
              {challenges.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
                  <span className="text-gray-400 text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6 w-fit">
              <Rocket className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">The Solution</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent leading-tight">
              One Platform. <br /> Infinite Growth.
            </h3>

            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
              A modern, comprehensive platform that brings together testing,
              procedures, and analytics in one seamless experience.
            </p>
            <div className="space-y-4">
              {solutions.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}