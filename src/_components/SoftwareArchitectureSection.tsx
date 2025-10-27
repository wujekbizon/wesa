'use client'

import { motion } from 'framer-motion';
import { ArrowRight, } from 'lucide-react';
import SoftwareArchitectureHero from './SoftwareArchitectureHero';
import SoftwareArchitectureChallenge from './SoftwareArchitectureChallenge';
import SoftwareArchitectureMethodology from './SoftwareArchitectureMetodology';
import SoftwareArchitectureSolutionAndTech from './SoftwareArchitectureSolutionsAndTech';
import SoftwareArchitectureStudy from './SoftwareArchitectureStudy';

export default function SoftwareArchitectureSection() {

    const processSteps = [
        { step: "01", title: "Discovery & Analysis", duration: "1-2 weeks" },
        { step: "02", title: "Architecture Design", duration: "2-3 weeks" },
        { step: "03", title: "Proof of Concept", duration: "2-4 weeks" },
        { step: "04", title: "Implementation", duration: "8-16 weeks" },
        { step: "05", title: "Optimization & Scale", duration: "Ongoing" }
    ];

    return (
        <section id="software-architecture" className="relative bg-black text-white">
            <SoftwareArchitectureHero />
            <SoftwareArchitectureChallenge />
            <SoftwareArchitectureMethodology />
            <SoftwareArchitectureStudy />
            <SoftwareArchitectureSolutionAndTech />



            {/* Process Overview */}
            <div className="relative bg-black py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-block px-4 py-2 bg-amber-500/10 border-2 border-amber-500/20 rounded-full mb-6">
                            <span className="text-amber-400 text-xs font-mono uppercase tracking-widest">
                                Our Process
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            From Concept to Production
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

                        <div className="grid md:grid-cols-5 gap-8">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative text-center"
                                >
                                    <div className="relative z-10 w-24 h-24 bg-zinc-900 border-2 border-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-amber-500/40 transition-all duration-300">
                                        <span className="text-3xl font-bold text-white font-mono">{step.step}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-500 font-mono">{step.duration}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-gradient-to-b from-black to-zinc-950 py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Build Something Exceptional?
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            Let's discuss your architecture needs and design a system that scales with your ambitions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 rounded-xl font-semibold text-black border-2 border-black transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20"
                            >
                                <span className="text-lg">Get Architecture Consultation</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-zinc-700 rounded-xl font-semibold text-white hover:border-zinc-600 transition-all duration-300"
                            >
                                <span className="text-lg">View Case Studies</span>
                            </motion.button>
                        </div>

                        <p className="mt-8 text-sm text-gray-600 font-mono">
                            Trusted by startups to enterprises • 50+ successful migrations
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}