'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Bug, Users } from 'lucide-react';

export default function SoftwareArchitectureChallenge() {
  const challenges = [
    {
      title: "Scaling Bottlenecks",
      description: "Monolithic systems that break under load, requiring expensive vertical scaling.",
      solution: "We architect distributed microservices and implement auto-scaling to ensure smooth performance under any load.",
      icon: Zap,
    },
    {
      title: "Technical Debt",
      description: "Legacy code and quick fixes compound over time, making changes risky and slow.",
      solution: "We modernize codebases using modular refactoring and introduce CI/CD pipelines to reduce debt over time.",
      icon: Bug,
    },
    {
      title: "Team Friction",
      description: "Large codebases where changes conflict, slowing down development teams.",
      solution: "We enable domain-driven design and micro frontends to decouple workstreams and improve collaboration.",
      icon: Users,
    },
  ];

  return (
    <div className="relative bg-white text-black py-20 md:py-28 overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251,191,36,0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251,191,36,0.25) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
            <span className="text-amber-600 text-xs font-mono uppercase tracking-widest">
              The Challenge
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
            Common Architecture Pitfalls
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Most businesses struggle with systems that weren’t designed for growth. Technical debt accumulates, and innovation becomes impossible.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((item, i) => {
            const Icon = item.icon;
            const [hovered, setHovered] = useState(false);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onClick={() => setHovered(!hovered)} // tap toggle for mobile
                  className="relative bg-gray-50 border border-gray-200 rounded-2xl p-8 cursor-pointer overflow-hidden group transition-all duration-300 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 min-h-[300px] flex flex-col justify-between"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-zinc-900 text-white rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Hover Reveal Area */}
                  <AnimatePresence>
                    {hovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="absolute inset-0 bg-white/95 backdrop-blur-md border border-amber-100 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-2xl"
                      >
                        <h4 className="text-amber-600 font-semibold uppercase tracking-widest text-xs mb-2">
                          Our Fix
                        </h4>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                          {item.solution}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover Hint */}
                  {!hovered && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-80 group-hover:opacity-0 transition-opacity">
                      Hover to see our solution →
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
