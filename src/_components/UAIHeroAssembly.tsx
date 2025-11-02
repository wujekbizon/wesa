'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Layers, Mic, Brain, Shield, Zap, Database } from 'lucide-react';

export default function UAIHeroAssembly() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // True parallax: background layers move SLOWER than foreground
    const architectureY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const neuralY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const voiceY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const firingY = useTransform(scrollYProgress, [0, 1], [0, 250]);
    const brainY = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const processingY = useTransform(scrollYProgress, [0, 1], [0, 350]);
    const shieldY = useTransform(scrollYProgress, [0, 1], [0, 400]);

    // Persistent architecture background fades in and stays
    const architectureOpacity = useTransform(scrollYProgress, [0, 0.08, 0.95, 1], [0, 0.4, 0.4, 0]);
    
    // Stage activation - each stage lights up during its corresponding layer
    const stage1Opacity = useTransform(scrollYProgress, [0.05, 0.12, 0.22, 0.24], [0, 1, 1, 0.3]); // Neural
    const stage2Opacity = useTransform(scrollYProgress, [0.24, 0.31, 0.41, 0.43], [0.3, 1, 1, 0.3]); // Voice
    const stage3Opacity = useTransform(scrollYProgress, [0.43, 0.50, 0.60, 0.62], [0.3, 1, 1, 0.3]); // Firing
    const stage4Opacity = useTransform(scrollYProgress, [0.62, 0.69, 0.79, 0.81], [0.3, 1, 1, 0.3]); // Brain
    const stage5Opacity = useTransform(scrollYProgress, [0.81, 0.88, 0.98, 0.99], [0.3, 1, 1, 0.3]); // Processing
    const stage6Opacity = useTransform(scrollYProgress, [0.88, 0.92, 0.99, 1], [0.3, 1, 1, 0]); // Shield

    // Sequential fade-in with each layer fading out before the next appears
    const neuralOpacity = useTransform(scrollYProgress, [0.05, 0.12, 0.16, 0.22], [0, 1, 1, 0]);
    const voiceOpacity = useTransform(scrollYProgress, [0.24, 0.31, 0.35, 0.41], [0, 1, 1, 0]);
    const firingOpacity = useTransform(scrollYProgress, [0.43, 0.50, 0.54, 0.60], [0, 1, 1, 0]);
    const brainOpacity = useTransform(scrollYProgress, [0.62, 0.69, 0.73, 0.79], [0, 1, 1, 0]);
    const processingOpacity = useTransform(scrollYProgress, [0.81, 0.88, 0.92, 0.98], [0, 1, 1, 0]);
    const shieldOpacity = useTransform(scrollYProgress, [0.88, 0.92, 0.96, 1], [0, 1, 1, 0]);

    // Hero text fades out slower
    const heroOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.08], [1, 0.95]);

    return (
        <section
            ref={sectionRef}
            className="relative h-[600vh] bg-black"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Hero Text - scroll-driven */}
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="absolute z-50 text-center px-4 max-w-5xl"
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

                {/* Persistent Architecture Background - Positioned at top */}
                <motion.div
                    style={{ y: architectureY, opacity: architectureOpacity }}
                    className="absolute inset-0 flex items-start justify-center pointer-events-none z-5 pt-12 sm:pt-16 md:pt-20"
                >
                    <svg className="w-full max-w-6xl" viewBox="0 0 1200 300">
                        <defs>
                            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
                                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
                            </linearGradient>
                            <radialGradient id="stageGlow">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        {/* Main flow pipeline - left to right */}
                        <path
                            d="M 100 150 L 250 150 L 280 120 L 380 120 L 410 150 L 600 150 L 630 180 L 730 180 L 760 150 L 900 150 L 950 150 L 1100 150"
                            stroke="url(#flowGrad)"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="8 4"
                        />

                        {/* Stage 1: INPUT - Neural Foundation */}
                        <motion.g style={{ opacity: stage1Opacity }}>
                            <circle cx="150" cy="150" r="35" fill="url(#stageGlow)" opacity="0.3" />
                            <circle cx="150" cy="150" r="30" stroke="#8B5CF6" strokeWidth="3" fill="none" />
                            <text x="150" y="215" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="bold">INPUT</text>
                        </motion.g>
                        <circle cx="150" cy="150" r="30" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.2" />

                        {/* Stage 2: PROCESS - Voice Recognition */}
                        <motion.g style={{ opacity: stage2Opacity }}>
                            <circle cx="330" cy="120" r="35" fill="url(#stageGlow)" opacity="0.3" />
                            <circle cx="330" cy="120" r="30" stroke="#06B6D4" strokeWidth="3" fill="none" />
                            <text x="330" y="85" textAnchor="middle" fill="#06B6D4" fontSize="12" fontWeight="bold">PROCESS</text>
                        </motion.g>
                        <circle cx="330" cy="120" r="30" stroke="#06B6D4" strokeWidth="2" fill="none" opacity="0.2" />

                        {/* Stage 3: NEURAL - Firing Neurons */}
                        <motion.g style={{ opacity: stage3Opacity }}>
                            <circle cx="500" cy="150" r="35" fill="url(#stageGlow)" opacity="0.3" />
                            <circle cx="500" cy="150" r="30" stroke="#F59E0B" strokeWidth="3" fill="none" />
                            <text x="500" y="215" textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="bold">NEURAL</text>
                        </motion.g>
                        <circle cx="500" cy="150" r="30" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.2" />

                        {/* Stage 4: ANALYZE - Brain Processing */}
                        <motion.g style={{ opacity: stage4Opacity }}>
                            <circle cx="680" cy="180" r="35" fill="url(#stageGlow)" opacity="0.3" />
                            <circle cx="680" cy="180" r="30" stroke="#3B82F6" strokeWidth="3" fill="none" />
                            <text x="680" y="245" textAnchor="middle" fill="#3B82F6" fontSize="12" fontWeight="bold">ANALYZE</text>
                        </motion.g>
                        <circle cx="680" cy="180" r="30" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.2" />

                        {/* Stage 5: DATA - Processing Streams */}
                        <motion.g style={{ opacity: stage5Opacity }}>
                            <circle cx="830" cy="150" r="35" fill="url(#stageGlow)" opacity="0.3" />
                            <circle cx="830" cy="150" r="30" stroke="#8B5CF6" strokeWidth="3" fill="none" />
                            <text x="830" y="215" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="bold">DATA</text>
                        </motion.g>
                        <circle cx="830" cy="150" r="30" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.2" />

                        {/* Stage 6: OUTPUT - Security Shield */}
                        <motion.g style={{ opacity: stage6Opacity }}>
                            <circle cx="1000" cy="150" r="35" fill="url(#stageGlow)" opacity="0.3" />
                            <circle cx="1000" cy="150" r="30" stroke="#10B981" strokeWidth="3" fill="none" />
                            <text x="1000" y="215" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="bold">OUTPUT</text>
                        </motion.g>
                        <circle cx="1000" cy="150" r="30" stroke="#10B981" strokeWidth="2" fill="none" opacity="0.2" />

                        {/* Connection nodes */}
                        {[150, 250, 330, 410, 500, 600, 680, 760, 830, 1000].map((x, i) => {
                            const y = i === 0 || i === 9 || i === 8 ? 150 : i === 2 || i === 3 ? 120 : i === 6 || i === 7 ? 180 : 150;
                            return (
                                <circle
                                    key={i}
                                    cx={x}
                                    cy={y}
                                    r="4"
                                    fill="#8B5CF6"
                                    opacity="0.4"
                                />
                            );
                        })}

                        {/* Subtle background lines */}
                        {[...Array(15)].map((_, i) => (
                            <line
                                key={`v-${i}`}
                                x1={100 + i * 70}
                                y1="50"
                                x2={100 + i * 70}
                                y2="250"
                                stroke="#8B5CF6"
                                strokeWidth="0.5"
                                opacity="0.05"
                            />
                        ))}
                    </svg>
                </motion.div>

                {/* Layer 1: Neural Network - IMPROVED */}
                <motion.div
                    style={{ y: neuralY, opacity: neuralOpacity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                >
                    <svg className="w-full h-full max-w-5xl" viewBox="0 0 1000 1000">
                        <defs>
                            <radialGradient id="nodeGrad">
                                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
                                <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="nodeCoreGrad">
                                <stop offset="0%" stopColor="#C4B5FD" stopOpacity="1" />
                                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.6" />
                            </radialGradient>
                            <filter id="neuralGlow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        
                        {/* Multi-layer neural network with 4 rings */}
                        {[...Array(4)].map((_, layer) => {
                            const nodeCount = 8 + layer * 2;
                            const radius = 100 + layer * 90;
                            
                            return [...Array(nodeCount)].map((_, i) => {
                                const angle = (i / nodeCount) * Math.PI * 2;
                                const x = 500 + Math.cos(angle) * radius;
                                const y = 500 + Math.sin(angle) * radius;
                                const nodeSize = 12 - layer * 2;
                                const glowSize = 25 - layer * 3;

                                return (
                                    <g key={`${layer}-${i}`}>
                                        {/* Node glow with pulse */}
                                        <motion.circle
                                            cx={x}
                                            cy={y}
                                            r={glowSize}
                                            fill="url(#nodeGrad)"
                                            animate={{
                                                r: [glowSize, glowSize + 8, glowSize],
                                                opacity: [0.4, 0.7, 0.4]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: (layer * 0.2) + (i * 0.1),
                                                ease: "easeInOut"
                                            }}
                                        />
                                        {/* Node core */}
                                        <motion.circle
                                            cx={x}
                                            cy={y}
                                            r={nodeSize}
                                            fill="url(#nodeCoreGrad)"
                                            filter="url(#neuralGlow)"
                                            animate={{
                                                scale: [1, 1.2, 1]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: (layer * 0.2) + (i * 0.1),
                                                ease: "easeInOut"
                                            }}
                                        />
                                        {/* Cross-layer connections */}
                                        {layer < 3 && i % 2 === 0 && (
                                            <motion.line
                                                x1={x}
                                                y1={y}
                                                x2={500 + Math.cos((i / (nodeCount + 2)) * Math.PI * 2) * (radius + 90)}
                                                y2={500 + Math.sin((i / (nodeCount + 2)) * Math.PI * 2) * (radius + 90)}
                                                stroke="#8B5CF6"
                                                strokeWidth="1.5"
                                                strokeOpacity="0.3"
                                                strokeDasharray="4 4"
                                                animate={{
                                                    strokeOpacity: [0.2, 0.5, 0.2],
                                                    strokeDashoffset: [0, -8]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.15,
                                                    ease: "linear"
                                                }}
                                            />
                                        )}
                                        {/* Ring connections */}
                                        {i < nodeCount - 1 && (
                                            <motion.line
                                                x1={x}
                                                y1={y}
                                                x2={500 + Math.cos(((i + 1) / nodeCount) * Math.PI * 2) * radius}
                                                y2={500 + Math.sin(((i + 1) / nodeCount) * Math.PI * 2) * radius}
                                                stroke="#A78BFA"
                                                strokeWidth="2"
                                                strokeOpacity="0.4"
                                                animate={{
                                                    strokeOpacity: [0.2, 0.6, 0.2]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    delay: (layer * 0.3) + (i * 0.2),
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        )}
                                    </g>
                                );
                            });
                        })}
                        
                        {/* Central hub */}
                        <motion.circle
                            cx="500"
                            cy="500"
                            r="35"
                            fill="url(#nodeGrad)"
                            animate={{
                                r: [35, 45, 35],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <circle
                            cx="500"
                            cy="500"
                            r="25"
                            fill="url(#nodeCoreGrad)"
                            filter="url(#neuralGlow)"
                        />
                        
                        {/* Central connections to all layers */}
                        {[...Array(4)].map((_, layer) => {
                            const nodeCount = 8 + layer * 2;
                            const radius = 100 + layer * 90;
                            
                            return [...Array(Math.floor(nodeCount / 2))].map((_, i) => {
                                const angle = ((i * 2) / nodeCount) * Math.PI * 2;
                                const x = 500 + Math.cos(angle) * radius;
                                const y = 500 + Math.sin(angle) * radius;
                                
                                return (
                                    <motion.line
                                        key={`center-${layer}-${i}`}
                                        x1="500"
                                        y1="500"
                                        x2={x}
                                        y2={y}
                                        stroke="#8B5CF6"
                                        strokeWidth="1"
                                        strokeOpacity="0.2"
                                        animate={{
                                            strokeOpacity: [0.1, 0.4, 0.1]
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            delay: layer * 0.5 + i * 0.3,
                                            ease: "easeInOut"
                                        }}
                                    />
                                );
                            });
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
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                >
                    <svg className="w-full max-w-3xl" viewBox="0 0 600 200">
                        {[0, 1, 2, 3, 4].map((i) => {
                            const baseY = 50 + i * 10;
                            const endY = 150 - i * 10;
                            return (
                                <motion.path
                                    key={i}
                                    d={`M 0 100 Q 150 ${baseY} 300 100 T 600 100`}
                                    fill="none"
                                    stroke="#06B6D4"
                                    strokeWidth="2"
                                    strokeOpacity={0.6 - i * 0.1}
                                    animate={{
                                        d: [
                                            `M 0 100 Q 150 ${baseY} 300 100 T 600 100`,
                                            `M 0 100 Q 150 ${endY} 300 100 T 600 100`,
                                            `M 0 100 Q 150 ${baseY} 300 100 T 600 100`,
                                        ]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.1
                                    }}
                                />
                            );
                        })}
                    </svg>
                    <div className="absolute top-1/4 text-center">
                        <Mic className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mx-auto mb-2" />
                        <p className="text-cyan-400 font-semibold text-sm sm:text-base md:text-lg">Voice Recognition</p>
                    </div>
                </motion.div>

                {/* Layer 2.5: Firing Neurons - IMPROVED */}
                <motion.div
                    style={{ y: firingY, opacity: firingOpacity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-25"
                >
                    <svg className="w-full h-full max-w-5xl" viewBox="0 0 1000 1000">
                        <defs>
                            <radialGradient id="neuronPulse">
                                <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
                                <stop offset="50%" stopColor="#FB923C" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
                            </radialGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        
                        {/* Multiple layers of neurons */}
                        {[...Array(3)].map((_, layer) => {
                            const nodeCount = 6 + layer * 2;
                            const radius = 120 + layer * 100;
                            
                            return [...Array(nodeCount)].map((_, i) => {
                                const angle = (i / nodeCount) * Math.PI * 2;
                                const x = 500 + Math.cos(angle) * radius;
                                const y = 500 + Math.sin(angle) * radius;

                                return (
                                    <g key={`${layer}-${i}`}>
                                        {/* Neuron glow */}
                                        <motion.circle
                                            cx={x}
                                            cy={y}
                                            r="20"
                                            fill="url(#neuronPulse)"
                                            opacity="0.4"
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.3, 0.6, 0.3]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: (layer * 0.3) + (i * 0.15),
                                                ease: "easeInOut"
                                            }}
                                        />
                                        {/* Neuron core */}
                                        <motion.circle
                                            cx={x}
                                            cy={y}
                                            r="8"
                                            fill="#F59E0B"
                                            filter="url(#glow)"
                                            animate={{
                                                r: [8, 12, 8],
                                                fill: ["#F59E0B", "#FBBF24", "#F59E0B"]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: (layer * 0.3) + (i * 0.15),
                                                ease: "easeInOut"
                                            }}
                                        />
                                        {/* Connection to center - animated pulse */}
                                        <motion.line
                                            x1={x}
                                            y1={y}
                                            x2={500}
                                            y2={500}
                                            stroke="#F59E0B"
                                            strokeWidth="2"
                                            strokeOpacity="0.6"
                                            strokeDasharray="5 5"
                                            animate={{ 
                                                strokeDashoffset: [0, -10],
                                                strokeOpacity: [0.3, 0.8, 0.3]
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: (layer * 0.3) + (i * 0.15),
                                                ease: "linear"
                                            }}
                                        />
                                    </g>
                                );
                            });
                        })}
                        
                        {/* Central hub with energy waves */}
                        <motion.circle
                            cx="500"
                            cy="500"
                            r="30"
                            fill="url(#neuronPulse)"
                            opacity="0.6"
                            animate={{
                                r: [30, 50, 30],
                                opacity: [0.4, 0.8, 0.4]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <circle
                            cx="500"
                            cy="500"
                            r="20"
                            fill="#F59E0B"
                            filter="url(#glow)"
                        />
                        
                        {/* Energy rings emanating from center */}
                        {[0, 1, 2].map((i) => (
                            <motion.circle
                                key={`ring-${i}`}
                                cx="500"
                                cy="500"
                                r="20"
                                fill="none"
                                stroke="#FBBF24"
                                strokeWidth="2"
                                strokeOpacity="0"
                                animate={{
                                    r: [20, 150],
                                    strokeOpacity: [0.8, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.7,
                                    ease: "easeOut"
                                }}
                            />
                        ))}
                    </svg>
                    <div className="absolute bottom-1/3 text-center">
                        <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-2" />
                        <p className="text-amber-400 font-semibold text-sm sm:text-base md:text-lg">Neural Activation</p>
                    </div>
                </motion.div>

                {/* Layer 3: Processing Brain - IMPROVED */}
                <motion.div
                    style={{ y: brainY, opacity: brainOpacity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
                >
                    <svg className="w-full h-full max-w-5xl" viewBox="0 0 1000 1000">
                        <defs>
                            <radialGradient id="brainGlow1">
                                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="brainGlow2">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="brainGlow3">
                                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
                                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                            </radialGradient>
                            <filter id="brainBlur">
                                <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        
                        {/* Rotating energy rings - multiple layers */}
                        {[0, 1, 2, 3, 4].map((ring) => {
                            const baseRadius = 100 + ring * 50;
                            const duration = 15 + ring * 3;
                            const reverse = ring % 2 === 0;
                            
                            return (
                                <g key={`ring-${ring}`}>
                                    {/* Main ring with gradient */}
                                    <motion.circle
                                        cx="500"
                                        cy="500"
                                        r={baseRadius}
                                        fill="none"
                                        stroke={ring % 3 === 0 ? "#8B5CF6" : ring % 3 === 1 ? "#3B82F6" : "#06B6D4"}
                                        strokeWidth="2"
                                        strokeOpacity="0.3"
                                        strokeDasharray={`${20 + ring * 5} ${10 + ring * 3}`}
                                        animate={{
                                            rotate: reverse ? -360 : 360,
                                            strokeOpacity: [0.2, 0.5, 0.2]
                                        }}
                                        transition={{
                                            rotate: { duration, repeat: Infinity, ease: "linear" },
                                            strokeOpacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                    />
                                    
                                    {/* Energy nodes on rings */}
                                    {[...Array(6 + ring)].map((_, i) => {
                                        const angle = (i / (6 + ring)) * Math.PI * 2;
                                        const x = 500 + Math.cos(angle) * baseRadius;
                                        const y = 500 + Math.sin(angle) * baseRadius;
                                        
                                        return (
                                            <motion.circle
                                                key={`node-${ring}-${i}`}
                                                cx={x}
                                                cy={y}
                                                r="4"
                                                fill={ring % 3 === 0 ? "#8B5CF6" : ring % 3 === 1 ? "#3B82F6" : "#06B6D4"}
                                                filter="url(#brainBlur)"
                                                animate={{
                                                    scale: [1, 1.5, 1],
                                                    opacity: [0.5, 1, 0.5]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.2 + ring * 0.3,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        );
                                    })}
                                </g>
                            );
                        })}
                        
                        {/* Pulsating core layers */}
                        <motion.circle
                            cx="500"
                            cy="500"
                            r="80"
                            fill="url(#brainGlow1)"
                            animate={{
                                r: [80, 100, 80],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.circle
                            cx="500"
                            cy="500"
                            r="60"
                            fill="url(#brainGlow2)"
                            animate={{
                                r: [60, 75, 60],
                                opacity: [0.4, 0.7, 0.4]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                        />
                        <motion.circle
                            cx="500"
                            cy="500"
                            r="40"
                            fill="url(#brainGlow3)"
                            animate={{
                                r: [40, 50, 40],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                        
                        {/* Neural pathways emanating from center */}
                        {[...Array(12)].map((_, i) => {
                            const angle = (i / 12) * Math.PI * 2;
                            const startRadius = 50;
                            const endRadius = 350;
                            const x1 = 500 + Math.cos(angle) * startRadius;
                            const y1 = 500 + Math.sin(angle) * startRadius;
                            const x2 = 500 + Math.cos(angle) * endRadius;
                            const y2 = 500 + Math.sin(angle) * endRadius;
                            
                            return (
                                <motion.line
                                    key={`pathway-${i}`}
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke={i % 3 === 0 ? "#8B5CF6" : i % 3 === 1 ? "#3B82F6" : "#06B6D4"}
                                    strokeWidth="2"
                                    strokeOpacity="0.2"
                                    strokeDasharray="5 10"
                                    animate={{
                                        strokeDashoffset: [0, -15],
                                        strokeOpacity: [0.1, 0.4, 0.1]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "linear"
                                    }}
                                />
                            );
                        })}
                        
                        {/* Synaptic connections - random geometric patterns */}
                        {[...Array(8)].map((_, i) => {
                            const angle1 = (i / 8) * Math.PI * 2;
                            const angle2 = ((i + 2) / 8) * Math.PI * 2;
                            const radius = 150 + (i % 3) * 50;
                            const x1 = 500 + Math.cos(angle1) * radius;
                            const y1 = 500 + Math.sin(angle1) * radius;
                            const x2 = 500 + Math.cos(angle2) * radius;
                            const y2 = 500 + Math.sin(angle2) * radius;
                            
                            return (
                                <motion.path
                                    key={`synapse-${i}`}
                                    d={`M ${x1} ${y1} Q 500 500 ${x2} ${y2}`}
                                    fill="none"
                                    stroke="#3B82F6"
                                    strokeWidth="1.5"
                                    strokeOpacity="0.2"
                                    animate={{
                                        strokeOpacity: [0.1, 0.4, 0.1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        delay: i * 0.4,
                                        ease: "easeInOut"
                                    }}
                                />
                            );
                        })}
                    </svg>
                    
                    {/* Central brain icon */}
                    <div className="absolute">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" />
                        </motion.div>
                    </div>
                    
                    <div className="absolute bottom-1/4 text-center">
                        <p className="text-blue-400 font-semibold text-sm sm:text-base md:text-lg">Intelligence Processing</p>
                    </div>
                </motion.div>

                {/* Layer 3.5: Data Processing Streams - IMPROVED */}
                <motion.div
                    style={{ y: processingY, opacity: processingOpacity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-35"
                >
                    <svg className="w-full h-full max-w-6xl" viewBox="0 0 1200 800">
                        <defs>
                            <linearGradient id="dataStream1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                                <stop offset="30%" stopColor="#8B5CF6" stopOpacity="0.8" />
                                <stop offset="70%" stopColor="#A78BFA" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="dataStream2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
                                <stop offset="30%" stopColor="#06B6D4" stopOpacity="0.8" />
                                <stop offset="70%" stopColor="#22D3EE" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="dataStream3" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                                <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.8" />
                                <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                            </linearGradient>
                            <filter id="dataGlow">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        
                        {/* Central processing node */}
                        <motion.circle
                            cx="600"
                            cy="400"
                            r="60"
                            fill="none"
                            stroke="#8B5CF6"
                            strokeWidth="2"
                            strokeOpacity="0.3"
                            strokeDasharray="5 5"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        
                        {/* Data streams flowing in circular pattern */}
                        {[0, 1, 2, 3, 4, 5].map((i) => {
                            const angle = (i / 6) * Math.PI * 2;
                            const startX = 600 + Math.cos(angle) * 300;
                            const startY = 400 + Math.sin(angle) * 200;
                            const endX = 600 + Math.cos(angle + Math.PI) * 300;
                            const endY = 400 + Math.sin(angle + Math.PI) * 200;
                            const gradient = `dataStream${(i % 3) + 1}`;
                            const color = i % 3 === 0 ? "#8B5CF6" : i % 3 === 1 ? "#06B6D4" : "#3B82F6";
                            
                            return (
                                <g key={`flow-${i}`}>
                                    {/* Curved path */}
                                    <motion.path
                                        d={`M ${startX} ${startY} Q 600 400 ${endX} ${endY}`}
                                        fill="none"
                                        stroke={`url(#${gradient})`}
                                        strokeWidth="3"
                                        filter="url(#dataGlow)"
                                        strokeDasharray="60 40"
                                        animate={{ strokeDashoffset: -100 }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: i * 0.5
                                        }}
                                    />
                                    
                                    {/* Data packets flowing along paths */}
                                    {[0, 1, 2, 3].map((j) => (
                                        <motion.circle
                                            key={`packet-${i}-${j}`}
                                            r="6"
                                            fill={color}
                                            filter="url(#dataGlow)"
                                            animate={{
                                                offsetDistance: ["0%", "100%"]
                                            }}
                                            transition={{
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay: i * 0.5 + j * 1.2
                                            }}
                                        >
                                            <animateMotion
                                                dur="5s"
                                                repeatCount="indefinite"
                                                begin={`${i * 0.5 + j * 1.2}s`}
                                            >
                                                <mpath xlinkHref={`#path-${i}`} />
                                            </animateMotion>
                                        </motion.circle>
                                    ))}
                                    
                                    {/* Hidden path for motion */}
                                    <path
                                        id={`path-${i}`}
                                        d={`M ${startX} ${startY} Q 600 400 ${endX} ${endY}`}
                                        fill="none"
                                        stroke="none"
                                    />
                                </g>
                            );
                        })}
                        
                        {/* Central processing core */}
                        <motion.circle
                            cx="600"
                            cy="400"
                            r="30"
                            fill="#8B5CF6"
                            opacity="0.2"
                            animate={{
                                r: [30, 40, 30],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <circle cx="600" cy="400" r="20" fill="#8B5CF6" opacity="0.6" filter="url(#dataGlow)" />
                        
                        {/* Processing indicators */}
                        {[0, 1, 2, 3].map((i) => (
                            <motion.circle
                                key={`indicator-${i}`}
                                cx={600 + Math.cos((i / 4) * Math.PI * 2) * 30}
                                cy={400 + Math.sin((i / 4) * Math.PI * 2) * 30}
                                r="4"
                                fill="#06B6D4"
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                    scale: [0.8, 1.2, 0.8]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </svg>
                    <div className="absolute top-1/4 text-center">
                        <Database className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                        <p className="text-purple-400 font-semibold text-sm sm:text-base md:text-lg">Data Processing</p>
                    </div>
                </motion.div>

                {/* Layer 4: Security Shield */}
                <motion.div
                    style={{ y: shieldY, opacity: shieldOpacity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-40"
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
                        {[0, 1, 2].map((i) => (
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
}