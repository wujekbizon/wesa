'use client'

import { motion } from 'framer-motion';
import { Mic, Send, Menu, Home, MessageSquare, Settings, User, Zap, Clock, Bell, Shield, Palette } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MobileDevelopment() {
  const [activeTab, setActiveTab] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState('chat');
  
  useEffect(() => {

    const sequence = async () => {

      await new Promise(resolve => setTimeout(resolve, 3000));

      setDrawerOpen(true);
      await new Promise(resolve => setTimeout(resolve, 1500));

      setDrawerOpen(false);
      await new Promise(resolve => setTimeout(resolve, 1000));

      setActiveTab(0);
      setActiveScreen('home');
      await new Promise(resolve => setTimeout(resolve, 2000));

      setActiveTab(1);
      setActiveScreen('chat');

      await new Promise(resolve => setTimeout(resolve, 1500));
      setActiveTab(2);
      setActiveScreen('settings');

      await new Promise(resolve => setTimeout(resolve, 2000));
      setActiveTab(1);
      setActiveScreen('chat');

      await new Promise(resolve => setTimeout(resolve, 1000));
    };
    
    sequence();
    const interval = setInterval(sequence, 16000);
    
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { icon: Home, label: 'Home' },
    { icon: MessageSquare, label: 'Chat' },
    { icon: Settings, label: 'Settings' }
  ];

  const messages = [
    { text: "Hey! How can I help you today?", isAi: true, delay: 0 },
    { text: "Can you help me with my schedule?", isAi: false, delay: 1.5 },
    { text: "Of course! I can help you organize your day.", isAi: true, delay: 3 }
  ];

  return (
    <section className="relative bg-white py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 via-white to-gray-400" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <div>
              <div className="inline-block px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
                <span className="text-amber-600 text-xs font-mono uppercase tracking-wider">
                  Mobile Excellence
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black leading-tight">
                Native & Cross-Platform
                <span className="block mt-1 bg-linear-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                  Mobile Apps
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Build stunning mobile experiences that users love. From concept to deployment.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance' },
                { icon: Mic, title: 'Native Features', desc: 'Full device access' },
                { icon: User, title: 'User-Centric', desc: 'Intuitive interfaces' }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
                >
                  <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-sm mb-0.5">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {['React Native', 'Flutter', 'iOS', 'Android'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-black text-white text-xs font-mono rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:col-span-3"
          >
            <div className="relative w-[340px] h-[680px]">
              <div className="absolute inset-0 bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="relative w-full h-full bg-zinc-900 rounded-[2.5rem] overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50" />
                  <div className="absolute top-0 left-0 right-0 h-12 bg-zinc-900 z-40 flex items-center justify-between px-8 pt-2">
                    <span className="text-white text-xs font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <div className="w-1 h-1 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute inset-0 pt-12 pb-20">
                    <div className="flex items-center justify-between px-6 py-4 bg-zinc-800/50 backdrop-blur-sm border-b border-zinc-700">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-xl bg-zinc-800 border border-amber-500/20 flex items-center justify-center"
                      >
                        <Menu className="w-5 h-5 text-amber-400" />
                      </motion.button>
                      
                      <h3 className="text-white font-semibold">Voice AI</h3>
                      
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                        <User className="w-5 h-5 text-black" />
                      </div>
                    </div>
                    <div className="relative flex-1 h-full overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-zinc-900"
                        initial={false}
                        animate={{
                          y: activeScreen === 'chat' ? 0 : '100%',
                          opacity: activeScreen === 'chat' ? 1 : 0
                        }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                      >
                        <div className="h-full overflow-hidden p-4 space-y-3">
                          {messages.map((msg, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ delay: msg.delay, duration: 0.4 }}
                              className={`flex ${msg.isAi ? 'justify-start' : 'justify-end'}`}
                            >
                              <div className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                                msg.isAi 
                                  ? 'bg-zinc-800 border border-amber-500/20 text-white' 
                                  : 'bg-gradient-to-r from-amber-500 to-amber-400 text-black'
                              }`}>
                                <p className="text-sm">{msg.text}</p>
                              </div>
                            </motion.div>
                          ))}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.5 }}
                            className="flex justify-center py-8"
                          >
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="w-1 bg-amber-400 rounded-full"
                                  animate={{
                                    height: [12, 24, 12, 32, 12],
                                  }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                    ease: "easeInOut"
                                  }}
                                />
                              ))}
                            </div>
                          </motion.div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-3 flex items-center gap-3">
                              <input 
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500"
                              />
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-9 h-9 bg-gradient-to-r from-amber-500 to-amber-400 rounded-xl flex items-center justify-center"
                              >
                                <Send className="w-4 h-4 text-black" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-zinc-900 p-6"
                        initial={false}
                        animate={{
                          y: activeScreen === 'home' ? 0 : '100%',
                          opacity: activeScreen === 'home' ? 1 : 0
                        }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                      >
                        <h4 className="text-white text-lg font-semibold mb-4">Recent Conversations</h4>
                        <div className="space-y-3">
                          {[
                            { title: 'Morning Briefing', time: '2h ago', icon: Clock },
                            { title: 'Task Planning', time: '5h ago', icon: Zap },
                            { title: 'Voice Notes', time: '1d ago', icon: Mic }
                          ].map((item, i) => (
                            <motion.div
                              key={item.title}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex items-center gap-3"
                            >
                              <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-amber-400" />
                              </div>
                              <div className="flex-1">
                                <h5 className="text-white text-sm font-medium">{item.title}</h5>
                                <p className="text-gray-500 text-xs">{item.time}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-zinc-900 p-6"
                        initial={false}
                        animate={{
                          y: activeScreen === 'settings' ? 0 : '100%',
                          opacity: activeScreen === 'settings' ? 1 : 0
                        }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                      >
                        <h4 className="text-white text-lg font-semibold mb-4">Settings</h4>
                        <div className="space-y-3">
                          {[
                            { title: 'Notifications', icon: Bell, desc: 'Push & alerts' },
                            { title: 'Privacy', icon: Shield, desc: 'Data & security' },
                            { title: 'Appearance', icon: Palette, desc: 'Theme & display' }
                          ].map((item, i) => (
                            <motion.div
                              key={item.title}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex items-center gap-3"
                            >
                              <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-amber-400" />
                              </div>
                              <div className="flex-1">
                                <h5 className="text-white text-sm font-medium">{item.title}</h5>
                                <p className="text-gray-500 text-xs">{item.desc}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-zinc-900 border-t border-zinc-800">
                    <div className="flex items-center justify-around h-full px-8">
                      {tabs.map((tab, i) => (
                        <motion.button
                          key={tab.label}
                          whileTap={{ scale: 0.9 }}
                          className="flex flex-col items-center gap-1"
                          animate={{
                            scale: activeTab === i ? 1.1 : 1
                          }}
                        >
                          <tab.icon className={`w-6 h-6 ${
                            activeTab === i ? 'text-amber-400' : 'text-gray-500'
                          }`} />
                          <span className={`text-[10px] ${
                            activeTab === i ? 'text-amber-400' : 'text-gray-500'
                          }`}>
                            {tab.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  {activeScreen === 'chat' && (
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(251, 191, 36, 0.4)',
                          '0 0 0 12px rgba(251, 191, 36, 0)',
                          '0 0 0 0 rgba(251, 191, 36, 0)'
                        ]
                      }}
                      transition={{
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeOut" }
                      }}
                      className="absolute bottom-32 right-6 w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Mic className="w-6 h-6 text-black" />
                    </motion.button>
                  )}
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: drawerOpen ? 0 : '-100%' }}
                    transition={{ type: 'spring', damping: 25 }}
                    className="absolute inset-y-0 left-0 w-64 bg-zinc-800/95 backdrop-blur-xl border-r border-zinc-700 z-50"
                  >
                    <div className="p-6 space-y-6 pt-16">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                          <User className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">John Doe</h4>
                          <p className="text-gray-400 text-xs">Premium User</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {['Voice History', 'Preferences', 'Help & Support', 'About'].map((item) => (
                          <button
                            key={item}
                            className="w-full text-left px-4 py-3 text-gray-300 hover:bg-zinc-700/50 rounded-lg transition-colors text-sm"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/40 rounded-[3rem] blur-2xl -z-10 transform translate-y-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}