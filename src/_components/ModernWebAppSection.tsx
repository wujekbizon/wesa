'use client'

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Code2, Palette, ArrowRight, Check } from 'lucide-react';

const techStack = [
  {
    icon: Zap,
    title: 'Next.js 16',
    subtitle: 'The Foundation',
    features: [
      'Turbopack: 5-10x faster builds',
      '"use cache" for optimal performance',
      'React 19.2 with View Transitions',
      'Built-in SEO optimization'
    ],
    color: 'cyan',
    why: 'Blazing-fast development, optimal production performance'
  },
  {
    icon: Code2,
    title: 'React 19.2',
    subtitle: '+ TypeScript',
    features: [
      'Activity components for seamless UX',
      'Partial Pre-rendering',
      'Type-safe development',
      'Modern hooks & patterns'
    ],
    color: 'blue',
    why: 'Bulletproof code, faster iterations, fewer bugs'
  },
  {
    icon: Palette,
    title: 'Tailwind v4',
    subtitle: '+ Modern Tooling',
    features: [
      '5x faster builds',
      'CSS-first configuration',
      'Framer Motion animations',
      'Component libraries'
    ],
    color: 'purple',
    why: 'Rapid UI development, premium user experience'
  }
];

const metrics = [
  { label: 'Page Load', value: '<1s', icon: '⚡' },
  { label: 'Lighthouse Score', value: '90+', icon: '🎯' },
  { label: 'Mobile-First', value: '100%', icon: '📱' },
  { label: 'Time-to-Market', value: '3x', icon: '🚀' },
  { label: 'Conversion Boost', value: '+7%', icon: '💰' }
];

export default function ModernWebAppsSection() {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  const getColorClasses = (color: string) => {
    const colors: any = {
      cyan: {
        border: 'border-cyan-500/30',
        iconBg: 'bg-cyan-500/10',
        icon: 'text-cyan-400',
        glow: 'group-hover:shadow-cyan-500/20',
        gradient: 'from-cyan-500/20 to-transparent'
      },
      blue: {
        border: 'border-blue-500/30',
        iconBg: 'bg-blue-500/10',
        icon: 'text-blue-400',
        glow: 'group-hover:shadow-blue-500/20',
        gradient: 'from-blue-500/20 to-transparent'
      },
      purple: {
        border: 'border-purple-500/30',
        iconBg: 'bg-purple-500/10',
        icon: 'text-purple-400',
        glow: 'group-hover:shadow-purple-500/20',
        gradient: 'from-purple-500/20 to-transparent'
      }
    };
    return colors[color];
  };

  return (
    <section
      id="web"
      data-nav-section
      ref={containerRef}
      className="relative bg-black text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(251, 191, 36, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-cyan-500/10 border-2 border-cyan-500/20 rounded-full mb-6"
          >
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">
              Modern Web Development
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Performance-First
            </span>
            <br />
            <span className="text-white">Web Applications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Every 100ms of delay costs 1% in conversions. We build web apps that load in under a second using the latest 2025 tech stack.
          </motion.p>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            const colors = getColorClasses(tech.color);
            
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
                className="group relative"
              >
                <div className={`relative bg-zinc-900/50 backdrop-blur-sm border-2 ${colors.border} rounded-2xl p-6 h-full transition-all duration-500 hover:bg-zinc-900/70 hover:shadow-2xl ${colors.glow}`}>
                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`w-14 h-14 ${colors.iconBg} border-2 ${colors.border} rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-1 font-mono">
                    {tech.title}
                  </h3>
                  <p className={`text-sm ${colors.icon} mb-4 font-mono`}>
                    {tech.subtitle}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {tech.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <Check className={`w-4 h-4 ${colors.icon} mt-0.5 flex-shrink-0`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className={`pt-4 border-t ${colors.border}`}>
                    <p className="text-xs text-gray-500 mb-1 font-mono uppercase tracking-wide">
                      Why?
                    </p>
                    <p className="text-sm text-gray-300">
                      {tech.why}
                    </p>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-zinc-900/30 via-zinc-800/30 to-zinc-900/30 backdrop-blur-sm border border-amber-500/10 rounded-xl p-6"
        >
          <h3 className="text-center text-sm font-bold text-gray-400 mb-6 font-mono uppercase tracking-wider">
            The Results That Matter
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center group cursor-default"
              >
                <div className="text-2xl mb-1 transition-transform duration-300 group-hover:scale-110">
                  {metric.icon}
                </div>
                <div className="text-xl font-bold text-cyan-400 mb-1 font-mono transition-colors duration-300 group-hover:text-cyan-300">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/grzegorz-wolfinger-b88856229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl border border-amber-500/30 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-amber-400 font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 transition-transform group-hover:rotate-12" />
              <span>Let's Build Something Fast</span>
              <span className="absolute inset-0 rounded-xl bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </a>

          <p className="mt-4 text-xs text-gray-600 font-mono">
            Connect on LinkedIn to start your project
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}