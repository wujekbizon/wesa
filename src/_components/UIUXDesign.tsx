'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Layers, Sparkles, ArrowRight, Monitor, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function UIUXDesign() {
  const [currentStage, setCurrentStage] = useState(0);
  
  const stages = [
    { name: 'Sketch', color: '#9ca3af' },
    { name: 'Wireframe', color: '#6b7280' },
    { name: 'Mid-Fidelity', color: '#8b5cf6' },
    { name: 'High-Fidelity', color: '#a855f7' },
    { name: 'Final Polish', color: '#c084fc' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  // Stage 1: Rough Sketch
  const SketchStage = () => (
    <svg viewBox="0 0 375 812" className="w-full h-full">
      <rect x="20" y="60" width="335" height="60" fill="none" stroke="#9ca3af" strokeWidth="3" strokeDasharray="5,5" />
      <line x1="30" y1="80" x2="120" y2="80" stroke="#9ca3af" strokeWidth="2" />
      <line x1="30" y1="100" x2="90" y2="100" stroke="#9ca3af" strokeWidth="2" />
      
      <rect x="20" y="140" width="160" height="120" fill="none" stroke="#9ca3af" strokeWidth="3" strokeDasharray="5,5" />
      <rect x="195" y="140" width="160" height="120" fill="none" stroke="#9ca3af" strokeWidth="3" strokeDasharray="5,5" />
      
      <rect x="20" y="280" width="335" height="200" fill="none" stroke="#9ca3af" strokeWidth="3" strokeDasharray="5,5" />
      <line x1="40" y1="310" x2="150" y2="310" stroke="#9ca3af" strokeWidth="2" />
      <line x1="40" y1="340" x2="200" y2="340" stroke="#9ca3af" strokeWidth="1" />
      <line x1="40" y1="360" x2="180" y2="360" stroke="#9ca3af" strokeWidth="1" />
      
      <circle cx="187.5" cy="600" r="30" fill="none" stroke="#9ca3af" strokeWidth="3" />
    </svg>
  );

  // Stage 2: Low-Fi Wireframe
  const WireframeStage = () => (
    <svg viewBox="0 0 375 812" className="w-full h-full">
      <rect x="20" y="60" width="335" height="60" fill="#f3f4f6" stroke="#6b7280" strokeWidth="2" rx="8" />
      <rect x="30" y="75" width="80" height="30" fill="#d1d5db" rx="4" />
      
      <rect x="20" y="140" width="160" height="120" fill="#f9fafb" stroke="#6b7280" strokeWidth="2" rx="8" />
      <rect x="195" y="140" width="160" height="120" fill="#f9fafb" stroke="#6b7280" strokeWidth="2" rx="8" />
      
      <rect x="20" y="280" width="335" height="200" fill="#f9fafb" stroke="#6b7280" strokeWidth="2" rx="8" />
      <rect x="30" y="300" width="120" height="16" fill="#d1d5db" rx="4" />
      <rect x="30" y="330" width="200" height="8" fill="#e5e7eb" rx="4" />
      <rect x="30" y="350" width="180" height="8" fill="#e5e7eb" rx="4" />
      <rect x="30" y="370" width="220" height="8" fill="#e5e7eb" rx="4" />
      
      <rect x="20" y="500" width="335" height="60" fill="#6b7280" rx="12" />
      <rect x="155" y="515" width="65" height="30" fill="white" rx="6" />
    </svg>
  );

  // Stage 3: Mid-Fidelity
  const MidFiStage = () => (
    <svg viewBox="0 0 375 812" className="w-full h-full">
      <defs>
        <linearGradient id="midGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      <rect x="20" y="60" width="335" height="60" fill="url(#midGrad)" stroke="#8b5cf6" strokeWidth="2" rx="12" />
      <text x="30" y="95" fill="#1f2937" fontSize="20" fontWeight="bold">Dashboard</text>
      
      <rect x="20" y="140" width="160" height="120" fill="#faf5ff" stroke="#8b5cf6" strokeWidth="2" rx="12" />
      <circle cx="100" cy="180" r="25" fill="#8b5cf6" opacity="0.3" />
      <text x="60" y="230" fill="#1f2937" fontSize="14" fontWeight="600">Analytics</text>
      
      <rect x="195" y="140" width="160" height="120" fill="#faf5ff" stroke="#8b5cf6" strokeWidth="2" rx="12" />
      <circle cx="275" cy="180" r="25" fill="#8b5cf6" opacity="0.3" />
      <text x="240" y="230" fill="#1f2937" fontSize="14" fontWeight="600">Reports</text>
      
      <rect x="20" y="280" width="335" height="200" fill="white" stroke="#e5e7eb" strokeWidth="2" rx="12" />
      <text x="30" y="310" fill="#1f2937" fontSize="16" fontWeight="bold">Recent Activity</text>
      <rect x="30" y="330" width="315" height="40" fill="#f9fafb" rx="8" />
      <rect x="30" y="380" width="315" height="40" fill="#f9fafb" rx="8" />
      <rect x="30" y="430" width="315" height="40" fill="#f9fafb" rx="8" />
      
      <rect x="100" y="520" width="175" height="50" fill="#8b5cf6" rx="25" />
      <text x="140" y="550" fill="white" fontSize="16" fontWeight="600">Get Started</text>
    </svg>
  );

  // Stage 4: High-Fidelity
  const HighFiStage = () => (
    <svg viewBox="0 0 375 812" className="w-full h-full">
      <defs>
        <linearGradient id="highGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="highGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
        </filter>
      </defs>
      
      {/* Header with gradient */}
      <rect x="0" y="0" width="375" height="140" fill="url(#highGrad1)" />
      <text x="30" y="90" fill="white" fontSize="28" fontWeight="bold">Dashboard</text>
      <text x="30" y="115" fill="white" fontSize="14" opacity="0.9">Welcome back, John</text>
      
      {/* Stats Cards */}
      <g filter="url(#shadow)">
        <rect x="20" y="160" width="160" height="130" fill="white" rx="16" />
        <circle cx="60" cy="200" r="20" fill="#fef3c7" />
        <path d="M 55 195 L 58 202 L 65 192" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />
        <text x="50" y="245" fill="#1f2937" fontSize="24" fontWeight="bold">2.4K</text>
        <text x="50" y="265" fill="#6b7280" fontSize="12">Total Views</text>
      </g>
      
      <g filter="url(#shadow)">
        <rect x="195" y="160" width="160" height="130" fill="white" rx="16" />
        <circle cx="235" cy="200" r="20" fill="#ddd6fe" />
        <path d="M 230 200 L 235 205 L 240 195" stroke="#8b5cf6" strokeWidth="2" fill="none" strokeLinecap="round" />
        <text x="225" y="245" fill="#1f2937" fontSize="24" fontWeight="bold">847</text>
        <text x="225" y="265" fill="#6b7280" fontSize="12">Conversions</text>
      </g>
      
      {/* Activity Section */}
      <rect x="20" y="310" width="335" height="240" fill="white" rx="16" filter="url(#shadow)" />
      <text x="35" y="340" fill="#1f2937" fontSize="18" fontWeight="bold">Recent Activity</text>
      
      {/* Activity Items */}
      <g>
        <circle cx="45" cy="375" r="8" fill="#a855f7" />
        <text x="70" y="380" fill="#1f2937" fontSize="14">New user registered</text>
        <text x="70" y="395" fill="#9ca3af" fontSize="11">2 minutes ago</text>
      </g>
      <g>
        <circle cx="45" cy="425" r="8" fill="#fbbf24" />
        <text x="70" y="430" fill="#1f2937" fontSize="14">Payment received</text>
        <text x="70" y="445" fill="#9ca3af" fontSize="11">1 hour ago</text>
      </g>
      <g>
        <circle cx="45" cy="475" r="8" fill="#8b5cf6" />
        <text x="70" y="480" fill="#1f2937" fontSize="14">Report generated</text>
        <text x="70" y="495" fill="#9ca3af" fontSize="11">3 hours ago</text>
      </g>
      
      {/* CTA Button */}
      <rect x="85" y="580" width="205" height="56" fill="url(#highGrad2)" rx="28" filter="url(#shadow)" />
      <text x="140" y="613" fill="black" fontSize="16" fontWeight="700">View Details</text>
    </svg>
  );

  // Stage 5: Final Polish
  const FinalStage = () => (
    <svg viewBox="0 0 375 812" className="w-full h-full">
      <defs>
        <linearGradient id="finalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="finalGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="shadowStrong">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodOpacity="0.15"/>
        </filter>
      </defs>
      
      {/* Premium Header */}
      <rect x="0" y="0" width="375" height="160" fill="url(#finalGrad1)" />
      <circle cx="335" cy="50" r="18" fill="white" opacity="0.2" />
      <circle cx="310" cy="70" r="12" fill="white" opacity="0.15" />
      <text x="30" y="95" fill="white" fontSize="32" fontWeight="900">Dashboard</text>
      <text x="30" y="125" fill="white" fontSize="15" opacity="0.95">Welcome back, John 👋</text>
      
      {/* Premium Stats Cards */}
      <g filter="url(#shadowStrong)">
        <rect x="20" y="180" width="160" height="140" fill="white" rx="20" />
        <circle cx="65" cy="225" r="24" fill="#fef3c7" />
        <path d="M 58 220 L 62 228 L 72 215" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="50" y="275" fill="#1f2937" fontSize="28" fontWeight="900">2.4K</text>
        <text x="50" y="295" fill="#6b7280" fontSize="13">Total Views</text>
        <text x="50" y="310" fill="#10b981" fontSize="11" fontWeight="600">↑ 12.5%</text>
      </g>
      
      <g filter="url(#shadowStrong)">
        <rect x="195" y="180" width="160" height="140" fill="white" rx="20" />
        <circle cx="240" cy="225" r="24" fill="#ddd6fe" />
        <path d="M 233 225 L 238 230 L 247 220" stroke="#8b5cf6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="225" y="275" fill="#1f2937" fontSize="28" fontWeight="900">847</text>
        <text x="225" y="295" fill="#6b7280" fontSize="13">Conversions</text>
        <text x="225" y="310" fill="#10b981" fontSize="11" fontWeight="600">↑ 8.2%</text>
      </g>
      
      {/* Premium Activity Section */}
      <rect x="20" y="340" width="335" height="260" fill="white" rx="20" filter="url(#shadowStrong)" />
      <text x="40" y="375" fill="#1f2937" fontSize="20" fontWeight="900">Recent Activity</text>
      <text x="290" y="375" fill="#8b5cf6" fontSize="13" fontWeight="600">View All</text>
      
      {/* Refined Activity Items */}
      <g>
        <rect x="40" y="395" width="295" height="60" fill="#faf5ff" rx="12" />
        <circle cx="60" cy="425" r="12" fill="#a855f7" />
        <path d="M 57 425 L 60 428 L 63 422" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <text x="85" y="422" fill="#1f2937" fontSize="15" fontWeight="600">New user registered</text>
        <text x="85" y="438" fill="#9ca3af" fontSize="12">2 minutes ago</text>
      </g>
      
      <g>
        <rect x="40" y="465" width="295" height="60" fill="#fffbeb" rx="12" />
        <circle cx="60" cy="495" r="12" fill="#fbbf24" />
        <text x="75" y="490" fill="white" fontSize="16" fontWeight="bold">$</text>
        <text x="85" y="492" fill="#1f2937" fontSize="15" fontWeight="600">Payment received</text>
        <text x="85" y="508" fill="#9ca3af" fontSize="12">1 hour ago</text>
      </g>
      
      <g>
        <rect x="40" y="535" width="295" height="60" fill="#f5f3ff" rx="12" />
        <circle cx="60" cy="565" r="12" fill="#8b5cf6" />
        <path d="M 56 565 L 60 565 L 60 561 L 64 565 L 60 569 L 60 565" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <text x="85" y="562" fill="#1f2937" fontSize="15" fontWeight="600">Report generated</text>
        <text x="85" y="578" fill="#9ca3af" fontSize="12">3 hours ago</text>
      </g>
      
      {/* Premium CTA Button */}
      <g filter="url(#glow)">
        <rect x="75" y="630" width="225" height="60" fill="url(#finalGrad2)" rx="30" />
        <text x="122" y="665" fill="black" fontSize="18" fontWeight="900">View Full Report</text>
      </g>
    </svg>
  );

  const renderStage = (stage: number) => {
    switch(stage) {
      case 0: return <SketchStage />;
      case 1: return <WireframeStage />;
      case 2: return <MidFiStage />;
      case 3: return <HighFiStage />;
      case 4: return <FinalStage />;
      default: return <SketchStage />;
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 md:py-48 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          
          {/* Left - Figma Mockup (3 columns - main attraction) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            {/* Browser/Figma Window */}
            <div className="relative">
              {/* Browser Chrome */}
              <div className="bg-white rounded-t-2xl border border-gray-200 shadow-2xl overflow-hidden">
                {/* Top Bar */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-3 py-1.5 text-xs text-gray-600 font-mono">
                    figma.com/file/mobile-app-design
                  </div>
                </div>

                {/* Figma Interface */}
                <div className="bg-white">
                  {/* Toolbar */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 2C6.34 2 5 3.34 5 5C5 6.66 6.34 8 8 8H11V2H8Z"/>
                        <path d="M11 8H14C15.66 8 17 6.66 17 5C17 3.34 15.66 2 14 2H11V8Z"/>
                        <path d="M11 8V14H8C6.34 14 5 12.66 5 11C5 9.34 6.34 8 8 8H11Z"/>
                      </svg>
                      <span className="font-semibold text-sm">Mobile App Design</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {/* Stage Indicator */}
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                        <span className="text-xs font-mono text-purple-700">
                          {stages[currentStage].name}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Main Canvas */}
                  <div className="bg-gray-50 p-8 min-h-[600px] flex items-center justify-center">
                    <div className="relative">
                      {/* Phone Frame */}
                      <div className="bg-white rounded-[2.5rem] shadow-2xl border-8 border-gray-800 overflow-hidden" style={{ width: '375px', height: '812px' }}>
                        {/* Animated Content */}
                        <div className="relative w-full h-full">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentStage}
                              initial={{ 
                                rotateY: -90,
                                opacity: 0,
                                scale: 0.8
                              }}
                              animate={{ 
                                rotateY: 0,
                                opacity: 1,
                                scale: 1
                              }}
                              exit={{ 
                                rotateY: 90,
                                opacity: 0,
                                scale: 0.8
                              }}
                              transition={{ 
                                duration: 0.6,
                                ease: "easeInOut"
                              }}
                              style={{ 
                                transformStyle: 'preserve-3d',
                                perspective: 1000
                              }}
                              className="absolute inset-0"
                            >
                              {renderStage(currentStage)}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Stage Progress Dots */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                        {stages.map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i === currentStage ? 'bg-purple-600 w-6' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Panel */}
                  <div className="bg-white border-t border-gray-200 px-4 py-2 flex items-center justify-between text-xs text-gray-600">
                    <span>1 artboard selected</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 via-purple-100 to-amber-100 rounded-3xl blur-3xl opacity-30 -z-10" />
            </div>
          </motion.div>

          {/* Right - Content (2 columns - supporting) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2 order-1 lg:order-2"
          >
            <div>
              <div className="inline-block px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full mb-4">
                <span className="text-purple-600 text-xs font-mono uppercase tracking-wider">
                  Design Process
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black leading-tight">
                From Concept to
                <span className="block mt-1 bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">
                  Pixel-Perfect
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Watch designs evolve through our iterative process, from rough sketches to polished interfaces.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: Sparkles, title: 'Discovery', desc: 'Research & wireframes', color: 'purple' },
                { icon: Layers, title: 'Iteration', desc: 'Multiple design rounds', color: 'purple' },
                { icon: Palette, title: 'Polish', desc: 'Pixel-perfect refinement', color: 'amber' },
                { icon: Monitor, title: 'Handoff', desc: 'Developer-ready specs', color: 'amber' }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-8 h-8 ${item.color === 'purple' ? 'bg-purple-50 border-purple-200' : 'bg-amber-50 border-amber-200'} border rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-4 h-4 ${item.color === 'purple' ? 'text-purple-600' : 'text-amber-600'}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-sm mb-0.5">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs font-mono rounded-lg">
                  {tech}
                </span>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              View Design Portfolio
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}