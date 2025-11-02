'use client';

import { motion} from 'framer-motion';
import { Cloud, DollarSign, Globe, Lock, Shield, Database, Mic, ArrowRight, Rocket } from 'lucide-react';

export default function UAIFeaturesCTA() {
    const features = [
      {
        icon: Mic,
        title: "Secure Voice Chat",
        description: "Voice technology hosted by you, ensuring big tech won't be listening in on your AI conversations.",
        color: "from-purple-500 to-purple-600"
      },
      {
        icon: Cloud,
        title: "Cloud Flexibility",
        description: "Easily scaled up or down to meet changing business demands with cloud-hosted models.",
        color: "from-cyan-500 to-blue-600"
      },
      {
        icon: Shield,
        title: "Enhanced Security",
        description: "On-premise models located within your network, not subject to cloud-based security risks.",
        color: "from-green-500 to-emerald-600"
      },
      {
        icon: DollarSign,
        title: "Cost-Effective",
        description: "More affordable than on-premises solutions for businesses with fluctuating workloads.",
        color: "from-amber-500 to-orange-600"
      },
      {
        icon: Database,
        title: "Data Integrity",
        description: "Track data lineage and ensure information integrity with full control over your AI models.",
        color: "from-blue-500 to-indigo-600"
      },
      {
        icon: Lock,
        title: "Local Control",
        description: "Full ownership of hardware and software with complete control over your AI infrastructure.",
        color: "from-purple-500 to-pink-600"
      }
    ];
  
    return (
      <section className="relative bg-black py-24">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
  
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need for enterprise-grade AI
            </p>
          </motion.div>
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className={`absolute -inset-2 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all`} />
                <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full backdrop-blur-sm group-hover:border-purple-500/30 transition-colors">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
  
          {/* CTA Section */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl" />
            </div>
  
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gray-900/30 backdrop-blur-xl border border-gray-800 rounded-3xl p-12"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-white">Ready to Build</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Your AI Assistant?
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Join Australian enterprises leveraging cutting-edge AI technology with The Underground AI
              </p>
  
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <motion.a
                  href="https://www.theunderground.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <Globe className="w-6 h-6" />
                  Explore The Underground AI
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/wesa-ai-software-architecture-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border-2 border-white/10 text-white text-lg font-bold rounded-full hover:bg-white/10 backdrop-blur-sm transition-colors"
                >
                  <Rocket className="w-6 h-6" />
                  Start Your AI Project
                </motion.a>
              </div>
  
              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-8 border-t border-gray-800"
              >
                <p className="text-purple-400/80 text-sm mb-3">Built with cutting-edge technology</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['AI/ML Models', 'Voice Recognition', 'Cloud Infrastructure', 'Enterprise Security', 'Custom Integration'].map((tech) => (
                    <span key={tech} className="text-sm text-gray-500 px-3 py-1 bg-gray-800/50 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
  
              {/* Collaboration credit */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-gray-600 text-sm"
              >
                <p>A partnership between The Underground AI & Wesa Startup</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
  
        {/* Floating particles in background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>
    );
  };