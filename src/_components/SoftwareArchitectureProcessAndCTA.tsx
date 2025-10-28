'use client'

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Zap, CheckCircle2, Shield } from 'lucide-react';

export default function SoftwareArchitectureProcessAndCTA() {
    const timelineSteps = [
        { 
            week: "Week 1", 
            title: "Discovery", 
            description: "Requirements & planning",
            icon: Zap
        },
        { 
            week: "Week 2", 
            title: "Architecture", 
            description: "Design & validation",
            icon: Clock
        },
        { 
            week: "Week 4", 
            title: "Development", 
            description: "Build & integrate",
            icon: CheckCircle2
        },
        { 
            week: "Week 8", 
            title: "Delivery", 
            description: "Deploy & optimize",
            icon: Shield,
            highlight: true
        }
    ];

    return (
        <section className="relative bg-linear-to-b from-zinc-950 via-black to-zinc-950 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Process Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                        <span className="text-amber-400 text-xs font-mono uppercase tracking-widest">
                            Rapid Delivery
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                        From Concept to Production in 8 Weeks
                    </h2>
                    <p className="text-lg text-gray-400">
                        Our streamlined process ensures small to medium projects are delivered with precision and speed
                    </p>
                </motion.div>

                <div className="relative mb-20">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-zinc-700 to-transparent" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {timelineSteps.map((step, index) => {
                            const Icon = step.icon;
                            const progressBadges = [
                                { bg: 'bg-zinc-700', text: 'text-zinc-400', label: '0%' },
                                { bg: 'bg-gradient-to-r from-zinc-700 via-amber-500/40 to-zinc-700', text: 'text-amber-300', label: '25%' },
                                { bg: 'bg-gradient-to-r from-zinc-700 via-amber-500/70 to-amber-500/70', text: 'text-black', label: '50%' },
                                { bg: 'bg-amber-500', text: 'text-black', label: 'Guaranteed' }
                            ];
                            const badge = progressBadges[index];
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className={`relative z-10 bg-zinc-900/80 backdrop-blur-sm border-2 ${
                                        step.highlight 
                                            ? 'border-amber-500/40 shadow-lg shadow-amber-500/10' 
                                            : 'border-zinc-800'
                                    } rounded-2xl p-6 transition-all duration-300 hover:border-zinc-700`}>
                                        <div className={`w-16 h-16 ${
                                            step.highlight 
                                                ? 'bg-linear-to-br from-amber-500 to-amber-600' 
                                                : 'bg-zinc-800'
                                        } rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                            <Icon className={`w-8 h-8 ${
                                                step.highlight ? 'text-black' : 'text-zinc-400'
                                            }`} />
                                        </div>
                                        
                                        <div className="text-center">
                                            <p className={`text-sm font-mono mb-2 ${
                                                step.highlight ? 'text-amber-400' : 'text-gray-500'
                                            }`}>
                                                {step.week}
                                            </p>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-400">
                                                {step.description}
                                            </p>
                                        </div>

                                        <div className="absolute -top-3 -right-3">
                                            <div className={`${badge.bg} ${badge.text} text-xs font-bold px-3 py-1 rounded-full`}>
                                                {badge.label}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Accelerate Your Project?
                    </h3>
                    <p className="text-lg text-gray-400 mb-10">
                        Let's discuss your requirements and map out a clear path to production
                    </p>

                    <motion.a
                        href="https://www.linkedin.com/in/grzegorz-wolfinger-b88856229/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="group relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl border border-amber-500/30 bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-amber-400 font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
                    >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 transition-transform group-hover:translate-x-1" />
                        <span>Get Architecture Consultation</span>
                        <span className="absolute inset-0 rounded-xl bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>

                    <p className="mt-8 text-sm text-gray-600 font-mono">
                        Trusted by startups to enterprises • 8-week guarantee on small projects
                    </p>
                </motion.div>
            </div>
        </section>
    );
}