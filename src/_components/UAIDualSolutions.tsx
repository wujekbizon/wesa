'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cloud, Zap, DollarSign, Globe, Lock, Shield, Database } from 'lucide-react';

export default function UAIDualSolutions() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    });
  
    const leftY = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const rightY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
    return (
      <section
        ref={sectionRef}
        className="relative min-h-screen bg-black py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Choose Your
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Deployment Model
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Flexible solutions for every security requirement
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cloud Solution */}
            <motion.div
              style={{ y: leftY }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-3xl p-8 h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mb-4">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full ml-4">
                    <span className="text-cyan-400 text-sm font-semibold">Scalable</span>
                  </div>
                </div>
  
                <h3 className="text-3xl font-bold text-white mb-4">
                  Cloud-Hosted AI
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Customized AI models for diverse industries, accessible via cloud. 
                  Trained with the latest industry-specific compliance and regulations.
                </p>
  
                <div className="space-y-3">
                  {[
                    { icon: Zap, text: "Instant Scalability" },
                    { icon: DollarSign, text: "Cost-Effective" },
                    { icon: Globe, text: "Global Accessibility" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <item.icon className="w-5 h-5 text-cyan-400" />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
  
                {/* Floating cloud nodes */}
                <div className="absolute top-4 right-4 opacity-20">
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    {[...Array(6)].map((_, i) => {
                      const angle = (i / 6) * Math.PI * 2;
                      const x = 60 + Math.cos(angle) * 30;
                      const y = 60 + Math.sin(angle) * 30;
                      return (
                        <motion.circle
                          key={i}
                          cx={x}
                          cy={y}
                          r="4"
                          fill="#06B6D4"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>
            </motion.div>
  
            {/* On-Premise Solution */}
            <motion.div
              style={{ y: rightY }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-3xl p-8 h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-green-500 rounded-2xl mb-4">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full ml-4">
                    <span className="text-green-400 text-sm font-semibold">Maximum Security</span>
                  </div>
                </div>
  
                <h3 className="text-3xl font-bold text-white mb-4">
                  On-Premise AI
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Advanced AI solutions for sectors requiring high-security data handling. 
                  Operating in an airlocked environment for maximum data protection.
                </p>
  
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: "Enhanced Security" },
                    { icon: Database, text: "Data Integrity" },
                    { icon: Lock, text: "Local Control" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <item.icon className="w-5 h-5 text-green-400" />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
  
                {/* Locked vault visual */}
                <div className="absolute top-4 right-4 opacity-20">
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <motion.rect
                      x="30"
                      y="40"
                      width="60"
                      height="50"
                      rx="5"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.circle
                      cx="60"
                      cy="65"
                      r="8"
                      fill="#10B981"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };