'use client';

import { motion } from 'framer-motion';
import {
    Globe,
    Rocket,
    ArrowRight,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { keyFeatures } from '../data/clients';
import WofmedChallengeSolution from './WofmedChallengeSolution';
import WolfmedHeroSection from './WolfmedHeroSection';

export default function WolfmedShowcase() {
    const containerRef = useRef(null);
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

    return (
        <section
            id="medical"
            data-nav-section
            ref={containerRef}
            className="relative overflow-hidden"
        >
            <WolfmedHeroSection />
            <WofmedChallengeSolution />
            <div className="relative py-24 sm:py-32 bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)
                            `,
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title text-white mb-4">
                            What Makes It Special
                        </h2>
                        <p className="section-subtitle text-gray-400">
                            Features that drive results
                        </p>
                    </motion.div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {keyFeatures.map((feature: any, index: number) => {
                            const Icon = feature.icon;
                            const isHovered = hoveredFeature === index;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onHoverStart={() => setHoveredFeature(index)}
                                    onHoverEnd={() => setHoveredFeature(null)}
                                    className="relative group cursor-pointer"
                                >
                                    <motion.div
                                        className="absolute -inset-4 bg-linear-to-r from-amber-500/0 to-orange-500/0 rounded-2xl blur-2xl transition-all"
                                        animate={{
                                            opacity: isHovered ? 0.3 : 0,
                                            scale: isHovered ? 1.1 : 1,
                                        }}
                                    />
                                    <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 h-full backdrop-blur-sm group-hover:border-amber-500/30 transition-colors">
                                        <div className="mb-6">
                                            <motion.div
                                                animate={{
                                                    rotate: isHovered ? 360 : 0,
                                                    scale: isHovered ? 1.1 : 1,
                                                }}
                                                transition={{ duration: 0.6 }}
                                                className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-amber-500 to-orange-500 rounded-2xl"
                                            >
                                                <Icon className="w-8 h-8 text-white" />
                                            </motion.div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            {feature.description}
                                        </p>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
                                            <span className="text-amber-400 text-sm font-bold">
                                                {feature.highlight}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="relative py-24 sm:py-32 bg-black text-center overflow-hidden">
                <div className="absolute inset-0 opacity-25">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient id="cta-grad" cx="50%" cy="40%">
                                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5">
                                    <animate
                                        attributeName="stop-opacity"
                                        values="0.5;0.7;0.5"
                                        dur="8s"
                                        repeatCount="indefinite"
                                    />
                                </stop>
                                <stop offset="40%" stopColor="#fb923c" stopOpacity="0.3">
                                    <animate
                                        attributeName="stop-opacity"
                                        values="0.3;0.5;0.3"
                                        dur="8s"
                                        repeatCount="indefinite"
                                    />
                                </stop>
                                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                            </radialGradient>
                            <filter id="cta-glow">
                                <feGaussianBlur stdDeviation="90" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <circle cx="50%" cy="40%" r="40%" fill="url(#cta-grad)" filter="url(#cta-glow)">
                            <animate
                                attributeName="r"
                                values="40%;45%;40%"
                                dur="15s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </svg>
                </div>
                <div className="absolute inset-0 opacity-[0.02]">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)
                            `,
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title mb-6 text-4xl sm:text-5xl">
                            <span className="text-white">Ready to Transform</span>
                            <br />
                            <span className="bg-linear-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                                Your Vision?
                            </span>
                        </h2>
                        <p className="section-subtitle text-gray-400 mb-12 max-w-2xl mx-auto">
                            Let's build something exceptional together. Just like Wolfmed
                            Edukacja.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.a
                                href="https://wolfmed-edukacja.pl/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-amber-500 to-orange-500 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transition-shadow"
                            >
                                <Globe className="w-6 h-6" />
                                Explore Live Platform
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
                                Start Your Project
                            </motion.a>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-16 pt-8 border-t border-gray-800"
                        >
                            <p className="text-base text-amber-400/80 mb-3">Built with modern technology</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['Next.js', 'React', 'TypeScript', 'Drizzle ORM', 'Neon DB'].map((tech) => (
                                    <span key={tech} className="text-sm text-zinc-400">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-12 text-zinc-500 text-sm"
                        >
                            <p>A collaboration between Wolfmed Edukacja & Wesa Startup</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}