'use client'

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Palette, Boxes, Smartphone, ArrowRight } from 'lucide-react';

interface Solution {
  icon: any;
  title: string;
  description: string;
  accentColor: string;
  features: string[];
}

const solutions: Solution[] = [
  {
    icon: Code2,
    title: 'Software Architecture',
    description: 'Scalable system design from monolithic to microservices. We architect solutions that grow with your business.',
    accentColor: 'amber',
    features: ['Microservices', 'Cloud-Native', 'API Design']
  },
  {
    icon: Palette,
    title: 'Modern Web Apps',
    description: 'High-performance web applications built with cutting-edge frameworks and best practices.',
    accentColor: 'cyan',
    features: ['React/Next.js', 'Performance', 'SEO Ready']
  },
  {
    icon: Boxes,
    title: 'UI/UX Design',
    description: 'Stunning interfaces that captivate users. From wireframes to pixel-perfect implementations.',
    accentColor: 'purple',
    features: ['Design Systems', 'Prototyping', 'Animation']
  }
];

const mobileSolution: Solution = {
  icon: Smartphone,
  title: 'Mobile Development',
  description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android. From concept to App Store deployment.',
  accentColor: 'green',
  features: ['iOS & Android', 'React Native', 'Flutter', 'Native Performance', 'App Store Optimization']
};

export default function CoreSolutions() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  const getColorClasses = (color: string) => {
    const colors: any = {
      amber: {
        border: 'border-amber-500/20',
        iconBg: 'bg-amber-500/10',
        icon: 'text-amber-400',
        badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400'
      },
      cyan: {
        border: 'border-cyan-500/20',
        iconBg: 'bg-cyan-500/10',
        icon: 'text-cyan-400',
        badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
      },
      purple: {
        border: 'border-purple-500/20',
        iconBg: 'bg-purple-500/10',
        icon: 'text-purple-400',
        badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400'
      },
      green: {
        border: 'border-green-500/20',
        iconBg: 'bg-green-500/10',
        icon: 'text-green-400',
        badge: 'bg-green-500/10 border-green-500/20 text-green-400'
      }
    };
    return colors[color];
  };

  const SolutionCard = ({ solution, index, fullWidth = false }: { solution: Solution; index: number; fullWidth?: boolean }) => {
    const Icon = solution.icon;
    const colors = getColorClasses(solution.accentColor);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative"
      >
        <div className={`relative bg-zinc-900/50 backdrop-blur-sm border-2 ${colors.border} rounded-2xl p-8 h-full transition-all duration-300 hover:bg-zinc-900/70 hover:border-opacity-40 ${fullWidth ? 'md:flex md:items-center md:gap-8' : ''}`}>
          <div className={fullWidth ? 'md:flex md:items-start md:gap-8 md:flex-1' : ''}>
            <div className="mb-6 md:mb-0">
              <div className={`w-16 h-16 ${colors.iconBg} border-2 ${colors.border} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${fullWidth ? 'md:w-20 md:h-20' : ''}`}>
                <Icon className={`w-8 h-8 ${colors.icon} ${fullWidth ? 'md:w-10 md:h-10' : ''}`} />
              </div>
            </div>

            <div className="flex-1">
              <h3 className={`text-2xl font-bold text-white mb-4 font-mono ${fullWidth ? 'md:text-3xl' : ''}`}>
                {solution.title}
              </h3>
              
              <p className={`text-gray-400 mb-6 leading-relaxed ${fullWidth ? 'md:text-lg' : ''}`}>
                {solution.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {solution.features.map((feature) => (
                  <span
                    key={feature}
                    className={`px-3 py-1.5 border ${colors.badge} rounded-lg text-xs font-mono transition-all duration-300 hover:bg-opacity-80`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Subtle bottom accent line */}
          <div className={`absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-${solution.accentColor}-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id='core'
      ref={containerRef}
      className="relative bg-black text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Simplified background */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-zinc-950 to-black" />
      
      {/* Subtle grid pattern */}
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

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-amber-500/10 border-2 border-amber-500/20 rounded-full mb-6"
          >
            <span className="text-amber-400 text-xs font-mono uppercase tracking-widest">
              What We Offer
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-linear-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
              Core Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            End-to-end digital solutions that transform ideas into reality
          </motion.p>
        </div>

        {/* Solutions Grid - Top 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} solution={solution} index={index} />
          ))}
        </div>

        {/* Full-width Mobile Card */}
        <SolutionCard solution={mobileSolution} index={3} fullWidth={true} />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/solutions"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-amber-500 to-amber-400 rounded-xl font-semibold text-black border-2 border-black overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
              <span className="relative z-10 text-lg">Explore All Solutions</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <p className="mt-6 text-sm text-gray-500 font-mono">
            Or scroll down to explore our architecture patterns
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}