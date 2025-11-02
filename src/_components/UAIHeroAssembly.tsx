'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Layers, Mic, Brain, Shield } from 'lucide-react';

export default function UAIHeroAssembly() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Parallax speeds for each layer
    const neuralY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const voiceY = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const brainY = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const shieldY = useTransform(scrollYProgress, [0, 1], [0, -550]);

    // Sequential opacity for layers - they stay visible longer
    const neuralOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.85], [0, 1, 1]);
    const voiceOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.85], [0, 1, 1]);
    const brainOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.85], [0, 1, 1]);
    const shieldOpacity = useTransform(scrollYProgress, [0.5, 0.7, 0.85], [0, 1, 1]);

    // Hero text fades gradually
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.4], [1, 1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.85]);

    return (
        <section
            ref={sectionRef}
            className="relative h-[200vh] bg-black"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background particles */}
                <div className="absolute inset-0">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-purple-500 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                {/* Hero Text - scroll-driven */}
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="absolute z-20 text-center px-4 max-w-5xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                        <span className="text-purple-400 text-sm font-medium">
                            AI Innovation Partner 2024
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
                        <span className="text-white">Building Intelligence,</span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Layer by Layer
                        </span>
                    </h1>

                    <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        The Underground AI - Voice Assistant Platform
                    </p>

                    <div className="flex items-center justify-center gap-2 text-purple-400">
                        <span className="text-sm">Scroll to explore</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowRight className="w-4 h-4 rotate-90" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Layer 1: Neural Network */}
                <motion.div
                    style={{ y: neuralY, opacity: neuralOpacity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 800">
                        <defs>
                            <radialGradient id="nodeGrad">
                                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        {[...Array(12)].map((_, i) => {
                            const angle = (i / 12) * Math.PI * 2;
                            const radius = 150 + (i % 3) * 80;
                            const x = 400 + Math.cos(angle) * radius;
                            const y = 400 + Math.sin(angle) * radius;

                            return (
                                <g key={i}>
                                    <circle
                                        cx={x}
                                        cy={y}
                                        r="8"
                                        fill="url(#nodeGrad)"
                                    />
                                    {i < 11 && (
                                        <line
                                            x1={x}
                                            y1={y}
                                            x2={400 + Math.cos(((i + 1) / 12) * Math.PI * 2) * (150 + ((i + 1) % 3) * 80)}
                                            y2={400 + Math.sin(((i + 1) / 12) * Math.PI * 2) * (150 + ((i + 1) % 3) * 80)}
                                            stroke="#8B5CF6"
                                            strokeWidth="1"
                                            strokeOpacity="0.3"
                                        />
                                    )}
                                </g>
                            );
                        })}
                    </svg>
                    <div className="absolute bottom-1/4 text-center">
                        <Layers className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                        <p className="text-purple-400 font-semibold text-sm sm:text-base md:text-lg">Neural Foundation</p>
                    </div>
                </motion.div>

                {/* Layer 2: Voice Waves */}
                <motion.div
                    style={{ y: voiceY, opacity: voiceOpacity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <svg className="w-full max-w-3xl" viewBox="0 0 600 200">
                        {[...Array(5)].map((_, i) => (
                            <motion.path
                                key={i}
                                d={`M 0 100 Q 150 ${50 + i * 10} 300 100 T 600 100`}
                                fill="none"
                                stroke="#06B6D4"
                                strokeWidth="2"
                                strokeOpacity={0.6 - i * 0.1}
                                animate={{
                                    d: [
                                        `M 0 100 Q 150 ${50 + i * 10} 300 100 T 600 100`,
                                        `M 0 100 Q 150 ${150 - i * 10} 300 100 T 600 100`,
                                        `M 0 100 Q 150 ${50 + i * 10} 300 100 T 600 100`,
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.1
                                }}
                            />
                        ))}
                    </svg>
                    <div className="absolute top-1/4 text-center">
                        <Mic className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mx-auto mb-2" />
                        <p className="text-cyan-400 font-semibold text-sm sm:text-base md:text-lg">Voice Recognition</p>
                    </div>
                </motion.div>

                {/* Layer 3: Processing Brain */}
                <motion.div
                    style={{ y: brainY, opacity: brainOpacity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="relative w-48 h-48 sm:w-64 sm:h-64"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30" />
                        <div className="absolute inset-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-40" />
                        <div className="absolute inset-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-50" />
                    </motion.div>
                    <div className="absolute">
                        <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" />
                    </div>
                    <div className="absolute bottom-1/4 text-center">
                        <p className="text-blue-400 font-semibold text-sm sm:text-base md:text-lg">Intelligence Processing</p>
                    </div>
                </motion.div>

                {/* Layer 4: Security Shield */}
                <motion.div
                    style={{ y: shieldY, opacity: shieldOpacity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <svg className="w-72 h-72 sm:w-96 sm:h-96" viewBox="0 0 200 200">
                        <defs>
                            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M 100 20 L 170 60 L 170 120 Q 170 160 100 180 Q 30 160 30 120 L 30 60 Z"
                            fill="url(#shieldGrad)"
                            stroke="#10B981"
                            strokeWidth="2"
                        />
                        {[...Array(3)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx="100"
                                cy="100"
                                r={30 + i * 20}
                                fill="none"
                                stroke="#10B981"
                                strokeWidth="1"
                                strokeOpacity="0.3"
                                strokeDasharray="5,5"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 10 + i * 5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </svg>
                    <div className="absolute">
                        <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" />
                    </div>
                    <div className="absolute top-2/3 text-center">
                        <p className="text-green-400 font-semibold text-sm sm:text-base md:text-lg">Security Architecture</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};