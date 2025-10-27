"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Sparkles } from "lucide-react";
import { capabilities, PARTICLES, technologies } from "../data/softwareSolutionsData";

export default function SoftwareArchitectureSolutionsAndTech() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };

        const section = sectionRef.current;
        if (section) {
            section.addEventListener('mousemove', handleMouseMove);
            return () => section.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-24 overflow-hidden"
        >
            <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    backgroundImage: `linear-gradient(rgba(161,161,170,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(161,161,170,0.3) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />
            <motion.div
                className="absolute pointer-events-none"
                animate={{
                    left: mousePos.x,
                    top: mousePos.y,
                    opacity: mousePos.x ? 0.6 : 0
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 200
                }}
                style={{
                    width: '500px',
                    height: '500px',
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle, rgba(161,161,170,0.1) 0%, transparent 70%)',
                }}
            />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {PARTICLES.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-zinc-400/30 rounded-full"
                        style={{
                            left: particle.left,
                            top: particle.top,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full mb-6 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                        <span className="text-zinc-400 text-xs font-medium uppercase tracking-wider">
                            Engineering Excellence
                        </span>
                    </motion.div>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Where Vision Meets Infrastructure
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        We architect scalable systems that empower businesses to grow with confidence.
                    </motion.p>
                </motion.div>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-7">
                        <div className="relative grid sm:grid-cols-2 gap-5">
                            {capabilities.map((cap, i) => {
                                const Icon = cap.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        onMouseEnter={() => setActiveCard(i)}
                                        onMouseLeave={() => setActiveCard(null)}
                                        className="group relative"
                                    >
                                        <motion.div
                                            className={`absolute inset-0 bg-linear-to-r ${cap.color} blur-xl rounded-3xl`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: activeCard === i ? 0.15 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <motion.div
                                            className="relative bg-zinc-900/70 backdrop-blur-sm border border-zinc-800/80 rounded-2xl p-7 transition-colors duration-300"
                                            whileHover={{
                                                y: -4,
                                                borderColor: "rgba(113, 113, 122, 0.5)",
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div
                                                className={`relative w-14 h-14 bg-linear-to-br ${cap.color} rounded-xl flex items-center justify-center mb-5 shadow-lg`}
                                                whileHover={{ scale: 1.05, rotate: 3 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Icon className="w-7 h-7 text-white" />

                                                {activeCard === i && (
                                                    <motion.div
                                                        className="absolute inset-0 rounded-xl border-2 border-zinc-400/50"
                                                        initial={{ scale: 1, opacity: 1 }}
                                                        animate={{ scale: 1.3, opacity: 0 }}
                                                        transition={{ duration: 1, repeat: Infinity }}
                                                    />
                                                )}
                                            </motion.div>

                                            <h3 className="text-lg font-semibold mb-2.5 text-white group-hover:text-zinc-300 transition-colors duration-300">
                                                {cap.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                                                {cap.description}
                                            </p>

                                            <motion.div
                                                className="absolute top-4 right-4 w-1.5 h-1.5 bg-zinc-500 rounded-full"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: activeCard === i ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <motion.div
                            className="sticky top-8 bg-linear-to-br from-zinc-900/90 via-zinc-900/80 to-zinc-950/90 rounded-2xl border border-zinc-800/70 p-8 shadow-2xl backdrop-blur-sm"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="flex items-center gap-3 mb-7">
                                <div className="w-11 h-11 bg-linear-to-br from-zinc-700 to-zinc-800 rounded-xl flex items-center justify-center">
                                    <Cpu className="w-5 h-5 text-zinc-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
                                    <p className="text-xs text-zinc-500 font-mono">PRODUCTION_READY</p>
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                {technologies.map((tech, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                                        whileHover={{ x: 4 }}
                                        className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-800/60 transition-colors duration-300 hover:border-zinc-700/80"
                                    >
                                        <div className="relative flex items-center gap-3.5">
                                            <div className="text-2xl">{tech.icon}</div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300" />
                                                    <h4 className="font-semibold text-sm text-white group-hover:text-zinc-300 transition-colors duration-300">
                                                        {tech.name}
                                                    </h4>
                                                </div>
                                                <p className="text-xs text-gray-600 font-mono mt-0.5 group-hover:text-gray-500 transition-colors duration-300">
                                                    {tech.category}
                                                </p>
                                            </div>

                                            <motion.div
                                                className="w-1.5 h-1.5 bg-emerald-500/80 rounded-full shadow-lg shadow-emerald-500/30"
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-7 pt-7 border-t border-zinc-800/70 grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-xl font-bold text-zinc-300">99.9%</div>
                                    <div className="text-xs text-gray-600 font-mono mt-0.5">Uptime</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-zinc-300">50ms</div>
                                    <div className="text-xs text-gray-600 font-mono mt-0.5">Latency</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-zinc-300">10x</div>
                                    <div className="text-xs text-gray-600 font-mono mt-0.5">Scale</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}