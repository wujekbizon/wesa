'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Users, BookOpen, TrendingUp, ExternalLink, Sparkles, Award, Globe, Code, Zap } from 'lucide-react';
import { useRef } from 'react';

export default function WolfmedShowcase() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    const metrics = [
        { icon: BookOpen, label: 'Test Questions', value: '624+', color: 'from-amber-400 to-orange-500' },
        { icon: Award, label: 'Procedures', value: '31', color: 'from-amber-500 to-yellow-500' },
        { icon: Users, label: 'Active Learners', value: 'Growing', color: 'from-orange-400 to-amber-600' },
        { icon: TrendingUp, label: 'Success Rate', value: 'High', color: 'from-yellow-500 to-amber-500' }
    ];

    const techStack = [
        'Next.js 14', 'React', 'TypeScript', 'Tailwind CSS',
        'Framer Motion', 'Supabase', 'Vercel', 'PostgreSQL'
    ];

    const features = [
        {
            title: 'Interactive Testing Platform',
            description: 'Comprehensive test database for medical caregivers with real-time progress tracking'
        },
        {
            title: 'Medical Procedures Library',
            description: 'Detailed step-by-step procedures and algorithms for healthcare professionals'
        },
        {
            title: 'Educational Blog',
            description: 'Regular articles and professional advice from experienced medical caregivers'
        },
        {
            title: 'Progress Analytics',
            description: 'Detailed statistics and performance analysis to track learning outcomes'
        }
    ];

    return (
        <section
            id='medical'
            data-nav-section
            ref={containerRef}
            className=" relative bg-gradient-to-b from-white via-amber-50/30 to-white py-20 md:py-32 overflow-hidden"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(245, 158, 11) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Gradient orbs */}
            <motion.div
                className="absolute top-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                style={{ opacity, y }}
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span className="text-amber-700 text-sm font-medium tracking-wide">
                            Featured Project
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
                    >
                        Wolfmed Edukacja
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Poland's Modern Medical Education Platform
                    </motion.p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
                    {/* Left Column - Project Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Description */}
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Project</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                A comprehensive online learning platform designed for Polish medical caregivers.
                                Wolfmed Edukacja provides access to extensive test databases, medical procedures,
                                and educational resources to support professional development in healthcare.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Built with modern web technologies to ensure fast performance, accessibility,
                                and an intuitive learning experience for medical professionals across Poland.
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-3">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-xl p-4 hover:shadow-md transition-shadow"
                                >
                                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Code className="w-5 h-5 text-amber-400" />
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-3 py-1.5 bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-mono rounded-lg"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="https://wolfmed-edukacja.pl/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <Globe className="w-5 h-5" />
                                Visit Platform
                                <ExternalLink className="w-4 h-4" />
                            </motion.a>

                            <motion.a
                                href="https://www.linkedin.com/in/grzegorz-wolfinger-b88856229/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-amber-500 text-amber-700 font-semibold rounded-xl hover:bg-amber-50 transition-colors"
                            >
                                <Zap className="w-5 h-5" />
                                Start Your Project
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Column - Interactive Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Browser Frame */}
                        <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
                            {/* Browser Chrome */}
                            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex-1 mx-4 bg-gray-700 rounded-lg px-3 py-1.5 flex items-center gap-2">
                                    <Globe className="w-3 h-3 text-gray-400" />
                                    <span className="text-xs text-gray-300 font-mono">wolfmed-edukacja.pl</span>
                                </div>
                            </div>

                            {/* Website Preview */}
                            <div className="relative aspect-[16/10] bg-white">
                                <iframe
                                    src="https://wolfmed-edukacja.pl/"
                                    className="w-full h-full"
                                    title="Wolfmed Edukacja Platform"
                                    loading="lazy"
                                />

                                {/* Hover overlay with glow effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent pointer-events-none opacity-0 hover:opacity-100 transition-opacity"
                                    whileHover={{ opacity: 1 }}
                                />
                            </div>

                            {/* Bottom badge */}
                            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-amber-500/30">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-xs text-white font-medium">Live Platform</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating accent */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4 shadow-xl"
                        >
                            <Heart className="w-8 h-8 text-white" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Metrics Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {metrics.map((metric, index) => {
                            const Icon = metric.icon;
                            return (
                                <motion.div
                                    key={metric.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 group-hover:scale-110 transition-transform">
                                        <Icon className="w-8 h-8 text-amber-400" />
                                    </div>
                                    <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-1`}>
                                        {metric.value}
                                    </div>
                                    <div className="text-sm text-gray-400">{metric.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Client & Developer Credits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 grid md:grid-cols-2 gap-6"
                >
                    {/* Client */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3">
                            <Users className="w-6 h-6 text-amber-600" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Client</h4>
                        <p className="text-gray-700 font-semibold mb-1">Wolfmed Edukacja</p>
                        <p className="text-sm text-gray-500">Medical Education Platform</p>
                    </div>

                    {/* Developer */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500 rounded-full mb-3">
                            <Code className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Developed By</h4>
                        <p className="text-gray-900 font-semibold mb-1">Wesa Startup</p>
                        <p className="text-sm text-amber-700">Grzegorz Wolfinger</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}