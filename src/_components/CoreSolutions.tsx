'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Palette, Boxes, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    icon: Code2,
    title: 'Software Architecture',
    description: 'Scalable system design from monolithic to microservices. We architect solutions that grow with your business.',
    color: 'amber',
    gradient: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    textColor: 'text-amber-400',
    features: ['Microservices', 'Cloud-Native', 'API Design']
  },
  {
    icon: Palette,
    title: 'Modern Web Apps',
    description: 'High-performance web applications built with cutting-edge frameworks and best practices.',
    color: 'cyan',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/30',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    textColor: 'text-cyan-400',
    features: ['React/Next.js', 'Performance', 'SEO Ready']
  },
  {
    icon: Boxes,
    title: 'UI/UX Design',
    description: 'Stunning interfaces that captivate users. From wireframes to pixel-perfect implementations.',
    color: 'purple',
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
    textColor: 'text-purple-400',
    features: ['Design Systems', 'Prototyping', 'Animation']
  }
];

export default function CoreSolutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <section
    id='core-solutions'
      ref={containerRef}
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6"
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
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Core Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            End-to-end digital solutions that transform ideas into reality
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${solution.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className={`relative bg-zinc-900 border ${solution.borderColor} rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-opacity-50 group-hover:translate-y-[-4px]`}>
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 ${solution.iconBg} border ${solution.borderColor} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`w-8 h-8 ${solution.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className={`px-3 py-1 ${solution.iconBg} border ${solution.borderColor} rounded-full text-xs font-mono ${solution.textColor}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Decorative Lines */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
                       style={{ color: solution.iconColor.replace('text-', '') }} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/solutions">
            <motion.button
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-semibold text-black overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative z-10 text-lg">Explore All Solutions</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>

          <p className="mt-4 text-sm text-gray-500 font-mono">
            Or scroll down to explore our architecture patterns
          </p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-20 h-20 bg-amber-500/10 rounded-2xl blur-xl hidden lg:block"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl hidden lg:block"
        />
      </motion.div>
    </section>
  );
}