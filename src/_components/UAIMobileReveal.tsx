'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mic } from 'lucide-react';

export default function UAIMobileReveal() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    });
  
    const phoneScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1]);
    const phoneOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const rotateY = useTransform(scrollYProgress, [0, 1], [10, -10]);
  
    return (
      <section
        ref={sectionRef}
        className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center py-20"
      >
        {/* Background AI components faded */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500 rounded-full blur-3xl" />
        </div>
  
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              The Complete
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Voice Assistant
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Powered by Industry-Specific AI
            </p>
          </motion.div>
  
          {/* Mobile Phone Mockup */}
          <motion.div
            style={{ 
              scale: phoneScale, 
              opacity: phoneOpacity,
              rotateY: rotateY
            }}
            className="relative mx-auto w-full max-w-sm"
          >
            {/* Phone Frame */}
            <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />
              
              {/* Screen */}
              <div className="relative bg-black rounded-[2.5rem] overflow-hidden h-[600px]">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-900/50 to-transparent z-10 flex items-center justify-between px-8 pt-2">
                  <span className="text-white text-xs">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 border border-white rounded-sm" />
                    <div className="w-4 h-4 border border-white rounded-sm" />
                    <div className="w-4 h-4 border border-white rounded-sm" />
                  </div>
                </div>
  
                {/* Chat Interface */}
                <div className="h-full bg-gradient-to-b from-gray-950 to-black p-6 pt-16 flex flex-col justify-end gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="self-start max-w-[80%]"
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl rounded-tl-sm px-4 py-3">
                      <p className="text-white text-sm">Hey, how can I help you today?</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 ml-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Mic className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs text-gray-500">AI Assistant</span>
                    </div>
                  </motion.div>
  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="self-end max-w-[80%]"
                  >
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl rounded-tr-sm px-4 py-3">
                      <p className="text-white text-sm">What are today's priorities?</p>
                    </div>
                  </motion.div>
  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="self-start max-w-[80%]"
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl rounded-tl-sm px-4 py-3">
                      <p className="text-white text-sm">Based on your industry data, here are your top 3 priorities...</p>
                    </div>
                  </motion.div>
  
                  {/* Voice indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                    className="self-center flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Mic className="w-4 h-4 text-purple-400" />
                    </motion.div>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-purple-400 rounded-full"
                          animate={{ height: [8, 16, 8] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-purple-400">Listening...</span>
                  </motion.div>
                </div>
              </div>
            </div>
  
            {/* Floating feature badges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="absolute -left-4 top-1/4 bg-purple-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl px-4 py-2"
            >
              <p className="text-purple-400 text-sm font-semibold whitespace-nowrap">
                🎯 Industry-Specific
              </p>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
              className="absolute -right-4 top-1/2 bg-cyan-600/20 backdrop-blur-xl border border-cyan-500/30 rounded-2xl px-4 py-2"
            >
              <p className="text-cyan-400 text-sm font-semibold whitespace-nowrap">
                🔊 Voice-Enabled
              </p>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-green-600/20 backdrop-blur-xl border border-green-500/30 rounded-2xl px-4 py-2"
            >
              <p className="text-green-400 text-sm font-semibold whitespace-nowrap">
                🔒 Secure by Design
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  };