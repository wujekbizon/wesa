'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Layers,
    ArrowRight,
    CheckCircle2,
    Zap,
    Shield,
    TrendingUp,
    GitBranch,
    Database,
    Lock,
    BarChart3,
    Users,
    Lightbulb
} from 'lucide-react';


import SoftwareArchitectureHero from './SoftwareArchitectureHero';
import SoftwareArchitectureChallenge from './SoftwareArchitectureChallenge';
import SoftwareArchitectureMethodology from './SoftwareArchitectureMetodology';

export default function SoftwareArchitectureSection() {
    const capabilities = [
        {
            icon: Layers,
            title: "Scalable System Design",
            description: "Architectures that grow seamlessly from MVP to enterprise scale without costly rewrites."
        },
        {
            icon: Shield,
            title: "Security-First Architecture",
            description: "Built-in security patterns, data protection, and compliance from the ground up."
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "High-throughput systems designed for speed, efficiency, and optimal resource utilization."
        },
        {
            icon: TrendingUp,
            title: "Future-Proof Solutions",
            description: "Modular architectures that adapt to changing business needs and emerging technologies."
        },
        {
            icon: GitBranch,
            title: "Microservices Expertise",
            description: "Distributed systems that enable independent scaling, deployment, and team autonomy."
        },
        {
            icon: Database,
            title: "Data Architecture",
            description: "Robust data modeling, storage strategies, and real-time processing pipelines."
        }
    ];

    const technologies = [
        { name: "AWS / Azure / GCP", category: "Cloud Infrastructure" },
        { name: "Kubernetes & Docker", category: "Containerization" },
        { name: "Redis & Kafka", category: "Caching & Messaging" },
        { name: "PostgreSQL & MongoDB", category: "Database Systems" },
        { name: "GraphQL & REST", category: "API Design" },
        { name: "Terraform & CI/CD", category: "DevOps & IaC" }
    ];

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

            {/* Core Capabilities */}
            <div className="relative bg-white text-black py-20 md:py-28">
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

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-block px-4 py-2 bg-amber-500/10 border-2 border-amber-500/30 rounded-full mb-6">
                            <span className="text-amber-600 text-xs font-mono uppercase tracking-widest">
                                What We Deliver
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
                            Core Capabilities
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map((capability, index) => {
                            const Icon = capability.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-zinc-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-zinc-900">{capability.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Technology Stack */}
            <div className="relative bg-zinc-950 py-20 md:py-28">
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
                                Technologies We Master
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Modern Tech Stack
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                                    <CheckCircle2 className="w-5 h-5 text-amber-400" />
                                </div>
                                <p className="text-sm text-gray-500 font-mono">{tech.category}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Use Case - Single Example */}
            <div className="relative bg-white text-black py-20 md:py-28">
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

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-block px-4 py-2 bg-amber-500/10 border-2 border-amber-500/30 rounded-full mb-6">
                            <span className="text-amber-600 text-xs font-mono uppercase tracking-widest">
                                Featured Case Study
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
                            E-commerce Platform Transformation
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 md:p-10"
                    >
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <div className="flex items-start gap-3 mb-2">
                                    <div className="w-10 h-10 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg flex items-center justify-center shrink-0">
                                        <Lightbulb className="w-5 h-5 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Challenge</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Monolithic system struggling with 10M+ monthly users, frequent downtime during peak hours
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-start gap-3 mb-2">
                                    <div className="w-10 h-10 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-lg flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Solution</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Microservices architecture with event-driven design and independent service scaling
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-start gap-3 mb-2">
                                    <div className="w-10 h-10 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-lg flex items-center justify-center shrink-0">
                                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Outcome</h3>
                                        <p className="text-gray-700 font-semibold leading-relaxed">
                                            99.99% uptime, 60% faster deployment cycles, 40% infrastructure cost reduction
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

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