
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Database, Server, Users, ShoppingCart, Bell, Package, Globe, Zap, GitBranch, Activity, Lock, Webhook } from 'lucide-react';

export default function MicroservicesFlow() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const containerOpacity = useTransform(smoothProgress, [0, 0.1, 0.85, 0.95], [0, 1, 1, 0]);
    const containerScale = useTransform(smoothProgress, [0, 0.1], [0.95, 1]);

    const userOpacity = useTransform(smoothProgress, [0.1, 0.13], [0, 1]);
    const userY = useTransform(smoothProgress, [0.1, 0.13], [20, 0]);

    const line1Progress = useTransform(smoothProgress, [0.15, 0.22], [0, 1]);

    const gatewayOpacity = useTransform(smoothProgress, [0.22, 0.28], [0, 1]);
    const gatewayY = useTransform(smoothProgress, [0.22, 0.28], [20, 0]);

    const line2Progress = useTransform(smoothProgress, [0.28, 0.35], [0, 1]);

    const meshOpacity = useTransform(smoothProgress, [0.35, 0.42], [0, 1]);
    const meshY = useTransform(smoothProgress, [0.35, 0.42], [20, 0]);

    const line3Progress = useTransform(smoothProgress, [0.42, 0.49], [0, 1]);

    const service1Opacity = useTransform(smoothProgress, [0.45, 0.47], [0, 1]);
    const service1X = useTransform(smoothProgress, [0.45, 0.47], [-20, 0]);

    const service2Opacity = useTransform(smoothProgress, [0.47, 0.49], [0, 1]);
    const service2X = useTransform(smoothProgress, [0.47, 0.49], [-10, 0]);

    const service3Opacity = useTransform(smoothProgress, [0.49, 0.52], [0, 1]);

    const service4Opacity = useTransform(smoothProgress, [0.52, 0.55], [0, 1]);
    const service4X = useTransform(smoothProgress, [0.52, 0.55], [10, 0]);

    const service5Opacity = useTransform(smoothProgress, [0.57, 0.59], [0, 1]);
    const service5X = useTransform(smoothProgress, [0.57, 0.59], [20, 0]);

    const line4Progress = useTransform(smoothProgress, [0.57, 0.63], [0, 1]);

    const db1Opacity = useTransform(smoothProgress, [0.63, 0.65], [0, 1]);
    const db1X = useTransform(smoothProgress, [0.63, 0.65], [-20, 0]);

    const db2Opacity = useTransform(smoothProgress, [0.64, 0.66], [0, 1]);
    const db2X = useTransform(smoothProgress, [0.64, 0.66], [-10, 0]);

    const db3Opacity = useTransform(smoothProgress, [0.65, 0.68], [0, 1]);

    const db4Opacity = useTransform(smoothProgress, [0.66, 0.69], [0, 1]);
    const db4X = useTransform(smoothProgress, [0.66, 0.69], [10, 0]);

    const db5Opacity = useTransform(smoothProgress, [0.67, 0.7], [0, 1]);
    const db5X = useTransform(smoothProgress, [0.67, 0.7], [20, 0]);

    const line5Progress = useTransform(smoothProgress, [0.7, 0.72], [0, 1]);

    const infraOpacity = useTransform(smoothProgress, [0.71, 0.76], [0, 1]);
    const infraY = useTransform(smoothProgress, [0.71, 0.85], [20, 0]);

    return (
        <motion.div
            id='microservices'
            ref={ref}
            style={{ opacity: containerOpacity, scale: containerScale }}
            className="min-h-screen flex items-center justify-center py-32 bg-black"
        >
            <div className="relative w-full max-w-5xl px-4">
                <motion.div
                    style={{ opacity: containerOpacity }}
                    className="mb-16"
                >
                    <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
                        <span className="text-cyan-400 text-xs font-mono uppercase tracking-wider">Pattern 02</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 font-mono">Microservices Architecture</h3>
                    <p className="text-gray-400 text-sm md:text-base font-mono">Distributed services • Independent deployment • Polyglot persistence</p>
                </motion.div>

                <div className="relative flex flex-col items-center space-y-0">

                    {/* Client Layer */}
                    <motion.div
                        style={{ opacity: userOpacity, y: userY }}
                        className="relative w-full max-w-2xl mb-6"
                    >
                        <div className="bg-zinc-900 border-2 border-blue-500/30 rounded-xl p-5 md:p-6 shadow-lg hover:border-blue-500/50 transition-colors">
                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <Users className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <p className="text-white font-semibold text-base md:text-lg font-mono">Client Layer</p>
                                        <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">Multi-Channel</span>
                                    </div>
                                    <p className="text-gray-400 text-xs md:text-sm mb-3 font-mono">Diverse access patterns</p>
                                    <div className="text-xs md:text-sm text-gray-500 space-y-1.5 font-mono">
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>Web, Mobile, IoT Clients</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>Third-Party API Consumers</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>GraphQL & REST Protocols</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative w-full flex justify-center mb-6"
                        style={{ height: '48px' }}
                    >
                        <motion.div
                            style={{ scaleY: line1Progress }}
                            className="w-0.5 h-full bg-linear-to-b from-blue-400 to-purple-400 origin-top"
                        />
                    </motion.div>

                    {/* API Gateway */}
                    <motion.div
                        style={{ opacity: gatewayOpacity, y: gatewayY }}
                        className="relative w-full max-w-2xl mb-6"
                    >
                        <div className="bg-zinc-900 border-2 border-purple-500/30 rounded-xl p-5 md:p-6 shadow-lg hover:border-purple-500/50 transition-colors">
                            <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-500/10 border-2 border-purple-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <Globe className="w-6 h-6 md:w-7 md:h-7 text-purple-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <p className="text-white font-semibold text-base md:text-lg font-mono">API Gateway</p>
                                        <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">Entry Point</span>
                                    </div>
                                    <p className="text-gray-400 text-xs md:text-sm font-mono">Unified access layer</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs md:text-sm font-mono">
                                <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-purple-300 text-center">Request Routing</div>
                                <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-purple-300 text-center">Authentication</div>
                                <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-purple-300 text-center">Rate Limiting</div>
                                <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-purple-300 text-center">Transformation</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative w-full flex justify-center mb-6"
                        style={{ height: '48px' }}
                    >
                        <motion.div
                            style={{ scaleY: line2Progress }}
                            className="w-0.5 h-full bg-linear-to-b from-purple-400 to-cyan-400 origin-top"
                        />
                    </motion.div>

                    {/* Service Mesh */}
                    <motion.div
                        style={{ opacity: meshOpacity, y: meshY }}
                        className="relative w-full max-w-3xl mb-6"
                    >
                        <div className="bg-zinc-900 border-2 border-cyan-500/30 rounded-xl p-5 md:p-6 shadow-lg hover:border-cyan-500/50 transition-colors">
                            <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <GitBranch className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <p className="text-white font-semibold text-base md:text-lg font-mono">Service Mesh</p>
                                        <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">Infrastructure</span>
                                    </div>
                                    <p className="text-gray-400 text-xs md:text-sm font-mono">Service-to-service communication</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs md:text-sm font-mono">
                                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-cyan-300 text-center">Service Discovery</div>
                                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-cyan-300 text-center">Load Balancing</div>
                                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-cyan-300 text-center">Circuit Breaking</div>
                                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-cyan-300 text-center">mTLS Security</div>
                                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-cyan-300 text-center">Observability</div>
                                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-cyan-300 text-center">Retry Logic</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative w-full flex justify-center mb-6"
                        style={{ height: '64px' }}
                    >
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 64" preserveAspectRatio="xMidYMid meet" style={{ zIndex: 10 }}>
                            <defs>
                                <linearGradient id="gradient-red" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgb(34, 211, 238)" />
                                    <stop offset="100%" stopColor="rgb(239, 68, 68)" />
                                </linearGradient>
                                <linearGradient id="gradient-amber" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgb(34, 211, 238)" />
                                    <stop offset="100%" stopColor="rgb(251, 191, 36)" />
                                </linearGradient>
                                <linearGradient id="gradient-emerald" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgb(34, 211, 238)" />
                                    <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                                </linearGradient>
                                <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgb(34, 211, 238)" />
                                    <stop offset="100%" stopColor="rgb(59, 130, 246)" />
                                </linearGradient>
                                <linearGradient id="gradient-pink" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgb(34, 211, 238)" />
                                    <stop offset="100%" stopColor="rgb(236, 72, 153)" />
                                </linearGradient>
                            </defs>
                            <motion.path
                                d="M 500 0 L 100 64"
                                stroke="url(#gradient-red)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="1000"
                                strokeDashoffset={useTransform(line3Progress, [0, 1], [1000, 0])}
                            />
                            <motion.path
                                d="M 500 0 L 300 64"
                                stroke="url(#gradient-amber)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="1000"
                                strokeDashoffset={useTransform(line3Progress, [0, 1], [1000, 0])}
                            />
                            <motion.path
                                d="M 500 0 L 700 64"
                                stroke="url(#gradient-blue)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="1000"
                                strokeDashoffset={useTransform(line3Progress, [0, 1], [1000, 0])}
                            />
                            <motion.path
                                d="M 500 0 L 900 64"
                                stroke="url(#gradient-pink)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="1000"
                                strokeDashoffset={useTransform(line3Progress, [0, 1], [1000, 0])}
                            />
                            {/* Center line with gradient */}
                            <motion.path
                                d="M 500 0 L 500 64"
                                stroke="rgb(16, 185, 129)"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="1000"
                                strokeDashoffset={useTransform(line3Progress, [0, 1], [1000, 0])}
                                style={{ opacity: 1 }}
                            />
                        </svg>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full max-w-5xl mb-6">
                        <motion.div
                            style={{ opacity: service1Opacity, x: service1X }}
                            className="bg-zinc-900 border-2 border-red-500/30 rounded-xl p-4 md:p-5 shadow-lg hover:border-red-500/50 transition-colors"
                        >
                            <div className="flex flex-col items-center mb-3">
                                <div className="w-12 h-12 bg-red-500/10 border-2 border-red-500/30 rounded-lg flex items-center justify-center mb-3">
                                    <Lock className="w-6 h-6 text-red-400" />
                                </div>
                                <p className="text-white font-semibold text-sm font-mono text-center mb-1">Auth Service</p>
                                <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">Security</span>
                            </div>
                            <div className="text-xs text-gray-500 space-y-1 font-mono mb-3">
                                <div>• JWT & OAuth2</div>
                                <div>• Session Mgmt</div>
                                <div>• RBAC Controls</div>
                                <div>• Token Refresh</div>
                            </div>
                            <div className="pt-3 border-t border-zinc-800 text-[10px] font-mono text-red-400/70 text-center">
                                Node.js • Express
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: service2Opacity, x: service2X }}
                            className="bg-zinc-900 border-2 border-amber-500/30 rounded-xl p-4 md:p-5 shadow-lg hover:border-amber-500/50 transition-colors"
                        >
                            <div className="flex flex-col items-center mb-3">
                                <div className="w-12 h-12 bg-amber-500/10 border-2 border-amber-500/30 rounded-lg flex items-center justify-center mb-3">
                                    <Package className="w-6 h-6 text-amber-400" />
                                </div>
                                <p className="text-white font-semibold text-sm font-mono text-center mb-1">Product Service</p>
                                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">Catalog</span>
                            </div>
                            <div className="text-xs text-gray-500 space-y-1 font-mono mb-3">
                                <div>• Product Catalog</div>
                                <div>• Search & Filter</div>
                                <div>• Categories</div>
                                <div>• Price Engine</div>
                            </div>
                            <div className="pt-3 border-t border-zinc-800 text-[10px] font-mono text-amber-400/70 text-center">
                                Java • Spring Boot
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: service3Opacity }}
                            className="bg-zinc-900 border-2 border-emerald-500/30 rounded-xl p-4 md:p-5 shadow-lg hover:border-emerald-500/50 transition-colors"
                        >
                            <div className="flex flex-col items-center mb-3">
                                <div className="w-12 h-12 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-lg flex items-center justify-center mb-3">
                                    <ShoppingCart className="w-6 h-6 text-emerald-400" />
                                </div>
                                <p className="text-white font-semibold text-sm font-mono text-center mb-1">Order Service</p>
                                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Commerce</span>
                            </div>
                            <div className="text-xs text-gray-500 space-y-1 font-mono mb-3">
                                <div>• Cart Operations</div>
                                <div>• Checkout Flow</div>
                                <div>• Payment Gateway</div>
                                <div>• Order History</div>
                            </div>
                            <div className="pt-3 border-t border-zinc-800 text-[10px] font-mono text-emerald-400/70 text-center">
                                Go • Gin
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: service4Opacity, x: service4X }}
                            className="bg-zinc-900 border-2 border-blue-500/30 rounded-xl p-4 md:p-5 shadow-lg hover:border-blue-500/50 transition-colors"
                        >
                            <div className="flex flex-col items-center mb-3">
                                <div className="w-12 h-12 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg flex items-center justify-center mb-3">
                                    <Server className="w-6 h-6 text-blue-400" />
                                </div>
                                <p className="text-white font-semibold text-sm font-mono text-center mb-1">Inventory Service</p>
                                <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">Stock</span>
                            </div>
                            <div className="text-xs text-gray-500 space-y-1 font-mono mb-3">
                                <div>• Stock Tracking</div>
                                <div>• Warehouse Mgmt</div>
                                <div>• Fulfillment</div>
                                <div>• Availability API</div>
                            </div>
                            <div className="pt-3 border-t border-zinc-800 text-[10px] font-mono text-blue-400/70 text-center">
                                Python • FastAPI
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: service5Opacity, x: service5X }}
                            className="bg-zinc-900 border-2 border-pink-500/30 rounded-xl p-4 md:p-5 shadow-lg hover:border-pink-500/50 transition-colors"
                        >
                            <div className="flex flex-col items-center mb-3">
                                <div className="w-12 h-12 bg-pink-500/10 border-2 border-pink-500/30 rounded-lg flex items-center justify-center mb-3">
                                    <Bell className="w-6 h-6 text-pink-400" />
                                </div>
                                <p className="text-white font-semibold text-sm font-mono text-center mb-1">Notification Service</p>
                                <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-2 py-1 rounded border border-pink-500/20">Messaging</span>
                            </div>
                            <div className="text-xs text-gray-500 space-y-1 font-mono mb-3">
                                <div>• Email Delivery</div>
                                <div>• SMS Gateway</div>
                                <div>• Push Notifications</div>
                                <div>• Event Webhooks</div>
                            </div>
                            <div className="pt-3 border-t border-zinc-800 text-[10px] font-mono text-pink-400/70 text-center">
                                Node.js • NestJS
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full max-w-5xl mb-6">
                        <motion.div className="flex justify-center" style={{ height: '48px' }}>
                            <motion.div
                                style={{ scaleY: line4Progress }}
                                className="w-0.5 h-full bg-red-400 origin-top"
                            />
                        </motion.div>
                        <motion.div className="flex justify-center" style={{ height: '48px' }}>
                            <motion.div
                                style={{ scaleY: line4Progress }}
                                className="w-0.5 h-full bg-amber-400 origin-top"
                            />
                        </motion.div>
                        <motion.div className="flex justify-center" style={{ height: '48px' }}>
                            <motion.div
                                style={{ scaleY: line4Progress }}
                                className="w-0.5 h-full bg-emerald-400 origin-top"
                            />
                        </motion.div>
                        <motion.div className="flex justify-center" style={{ height: '48px' }}>
                            <motion.div
                                style={{ scaleY: line4Progress }}
                                className="w-0.5 h-full bg-blue-400 origin-top"
                            />
                        </motion.div>
                        <motion.div className="flex justify-center" style={{ height: '48px' }}>
                            <motion.div
                                style={{ scaleY: line4Progress }}
                                className="w-0.5 h-full bg-pink-400 origin-top"
                            />
                        </motion.div>
                    </div>

                    {/* Database Layer */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full max-w-5xl mb-6">
                        <motion.div
                            style={{ opacity: db1Opacity, x: db1X }}
                            className="bg-zinc-900 border-2 border-red-500/20 rounded-xl p-4 shadow-lg hover:border-red-500/40 transition-colors"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-red-500/10 border-2 border-red-500/30 rounded-lg flex items-center justify-center mb-2">
                                    <Database className="w-5 h-5 text-red-400" />
                                </div>
                                <p className="text-red-400 font-mono text-xs font-semibold mb-1">Auth DB</p>
                                <span className="text-[10px] font-mono text-gray-500 bg-zinc-800 px-2 py-0.5 rounded">PostgreSQL</span>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: db2Opacity, x: db2X }}
                            className="bg-zinc-900 border-2 border-amber-500/20 rounded-xl p-4 shadow-lg hover:border-amber-500/40 transition-colors"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-amber-500/10 border-2 border-amber-500/30 rounded-lg flex items-center justify-center mb-2">
                                    <Database className="w-5 h-5 text-amber-400" />
                                </div>
                                <p className="text-amber-400 font-mono text-xs font-semibold mb-1">Product DB</p>
                                <span className="text-[10px] font-mono text-gray-500 bg-zinc-800 px-2 py-0.5 rounded">MongoDB</span>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: db3Opacity }}
                            className="bg-zinc-900 border-2 border-emerald-500/20 rounded-xl p-4 shadow-lg hover:border-emerald-500/40 transition-colors"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-lg flex items-center justify-center mb-2">
                                    <Database className="w-5 h-5 text-emerald-400" />
                                </div>
                                <p className="text-emerald-400 font-mono text-xs font-semibold mb-1">Order DB</p>
                                <span className="text-[10px] font-mono text-gray-500 bg-zinc-800 px-2 py-0.5 rounded">PostgreSQL</span>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: db4Opacity, x: db4X }}
                            className="bg-zinc-900 border-2 border-blue-500/20 rounded-xl p-4 shadow-lg hover:border-blue-500/40 transition-colors"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg flex items-center justify-center mb-2">
                                    <Database className="w-5 h-5 text-blue-400" />
                                </div>
                                <p className="text-blue-400 font-mono text-xs font-semibold mb-1">Inventory DB</p>
                                <span className="text-[10px] font-mono text-gray-500 bg-zinc-800 px-2 py-0.5 rounded">Cassandra</span>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: db5Opacity, x: db5X }}
                            className="bg-zinc-900 border-2 border-pink-500/20 rounded-xl p-4 shadow-lg hover:border-pink-500/40 transition-colors"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-pink-500/10 border-2 border-pink-500/30 rounded-lg flex items-center justify-center mb-2">
                                    <Database className="w-5 h-5 text-pink-400" />
                                </div>
                                <p className="text-pink-400 font-mono text-xs font-semibold mb-1">Notif DB</p>
                                <span className="text-[10px] font-mono text-gray-500 bg-zinc-800 px-2 py-0.5 rounded">Redis</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="relative w-full flex justify-center mb-6"
                        style={{ height: '48px' }}
                    >
                        <motion.div
                            style={{ scaleY: line5Progress }}
                            className="w-0.5 h-full bg-linear-to-b from-cyan-400 to-gray-500 origin-top"
                        />
                    </motion.div>

                    <motion.div
                        style={{ opacity: infraOpacity, y: infraY }}
                        className="relative w-full max-w-4xl"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="bg-zinc-900 border-2 border-violet-500/30 rounded-xl p-5 md:p-6 shadow-lg hover:border-violet-500/50 transition-colors">
                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    <div className="w-12 h-12 bg-violet-500/10 border-2 border-violet-500/30 rounded-lg flex items-center justify-center shrink-0">
                                        <Webhook className="w-6 h-6 text-violet-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white font-semibold text-sm md:text-base font-mono mb-1">Message Queue</p>
                                        <p className="text-gray-500 text-xs font-mono mb-2">Event-driven messaging</p>
                                        <div className="text-xs text-gray-600 space-y-1 font-mono">
                                            <div>• Async Communication</div>
                                            <div>• Event Streaming</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-900 border-2 border-orange-500/30 rounded-xl p-5 md:p-6 shadow-lg hover:border-orange-500/50 transition-colors">
                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-500/10 border-2 border-orange-500/30 rounded-lg flex items-center justify-center shrink-0">
                                        <Activity className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white font-semibold text-sm md:text-base font-mono mb-1">Observability</p>
                                        <p className="text-gray-500 text-xs font-mono mb-2">Monitoring & tracing</p>
                                        <div className="text-xs text-gray-600 space-y-1 font-mono">
                                            <div>• Metrics & Logs</div>
                                            <div>• Distributed Tracing</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-900 border-2 border-sky-500/30 rounded-xl p-5 md:p-6 shadow-lg hover:border-sky-500/50 transition-colors">
                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    <div className="w-12 h-12 bg-sky-500/10 border-2 border-sky-500/30 rounded-lg flex items-center justify-center shrink-0">
                                        <Zap className="w-6 h-6 text-sky-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white font-semibold text-sm md:text-base font-mono mb-1">Orchestration</p>
                                        <p className="text-gray-500 text-xs font-mono mb-2">Container management</p>
                                        <div className="text-xs text-gray-600 space-y-1 font-mono">
                                            <div>• Auto-scaling</div>
                                            <div>• Self-healing</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cyan-500/5 border-2 border-cyan-500/20 rounded-lg p-3 md:p-4 text-xs md:text-sm font-mono text-cyan-400">
                            <span className="font-semibold">Key Benefits:</span> <span className="text-cyan-300/70">Independent Deployment • Technology Diversity • Fault Isolation • Horizontal Scaling</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}