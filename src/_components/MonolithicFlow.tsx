import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Database, Server, Users, ShoppingCart, Bell, Package, Globe, Code, Layout, Layers } from 'lucide-react';

export default function MonolithicFlow() {
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

    const userOpacity = useTransform(smoothProgress, [0.1, 0.15], [0, 1]);
    const userY = useTransform(smoothProgress, [0.1, 0.15], [20, 0]);

    const line1Progress = useTransform(smoothProgress, [0.15, 0.22], [0, 1]);

    const lbOpacity = useTransform(smoothProgress, [0.22, 0.28], [0, 1]);
    const lbY = useTransform(smoothProgress, [0.22, 0.28], [20, 0]);

    const line2Progress = useTransform(smoothProgress, [0.28, 0.35], [0, 1]);

    const uiOpacity = useTransform(smoothProgress, [0.35, 0.42], [0, 1]);
    const uiY = useTransform(smoothProgress, [0.35, 0.42], [20, 0]);

    const line3Progress = useTransform(smoothProgress, [0.42, 0.49], [0, 1]);

    const coreOpacity = useTransform(smoothProgress, [0.49, 0.56], [0, 1]);
    const coreY = useTransform(smoothProgress, [0.49, 0.56], [20, 0]);

    const line4Progress = useTransform(smoothProgress, [0.56, 0.63], [0, 1]);

    const cacheOpacity = useTransform(smoothProgress, [0.63, 0.69], [0, 1]);
    const cacheX = useTransform(smoothProgress, [0.63, 0.69], [-20, 0]);

    const dbOpacity = useTransform(smoothProgress, [0.69, 0.75], [0, 1]);
    const dbX = useTransform(smoothProgress, [0.69, 0.75], [20, 0]);

    const line5Progress = useTransform(smoothProgress, [0.73, 0.80], [0, 1]);

    const storageOpacity = useTransform(smoothProgress, [0.75, 0.82], [0, 1]);
    const storageY = useTransform(smoothProgress, [0.75, 0.82], [20, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity: containerOpacity, scale: containerScale }}
            className="min-h-screen flex items-center justify-center py-32 bg-black"
        >
            <div className="relative w-full max-w-5xl px-4">
                <motion.div
                    style={{ opacity: containerOpacity }}
                    className="mb-16"
                >
                    <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
                        <span className="text-amber-400 text-xs font-mono uppercase tracking-wider">Pattern 01</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 font-mono">Monolithic Architecture</h3>
                    <p className="text-gray-400 text-sm md:text-base font-mono">Single deployable unit • Shared codebase • Centralized data</p>
                </motion.div>

                <div className="relative flex flex-col items-center space-y-0">

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
                                        <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">Entry Point</span>
                                    </div>
                                    <p className="text-gray-400 text-xs md:text-sm mb-3 font-mono">User-facing interfaces</p>
                                    <div className="text-xs md:text-sm text-gray-500 space-y-1.5 font-mono">
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>HTTP/HTTPS Protocol</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>RESTful Endpoints</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>Request/Response Cycle</span>
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

                    <motion.div
                        style={{ opacity: lbOpacity, y: lbY }}
                        className="relative w-full max-w-2xl mb-6"
                    >
                        <div className="bg-zinc-900 border-2 border-purple-500/30 rounded-xl p-5 md:p-6 shadow-lg hover:border-purple-500/50 transition-colors">
                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-500/10 border-2 border-purple-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <Globe className="w-6 h-6 md:w-7 md:h-7 text-purple-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <p className="text-white font-semibold text-base md:text-lg font-mono">Load Balancer</p>
                                        <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">Distribution</span>
                                    </div>
                                    <p className="text-gray-400 text-xs md:text-sm mb-3 font-mono">Traffic distribution layer</p>
                                    <div className="text-xs md:text-sm text-gray-500 space-y-1.5 font-mono">
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>Round Robin Algorithm</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>Health Check Monitoring</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>SSL/TLS Termination</span>
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
                            style={{ scaleY: line2Progress }}
                            className="w-0.5 h-full bg-linear-to-b from-purple-400 to-indigo-400 origin-top"
                        />
                    </motion.div>

                    <motion.div
                        style={{ opacity: uiOpacity, y: uiY }}
                        className="relative w-full max-w-2xl mb-6"
                    >
                        <div className="bg-zinc-900 border-2 border-indigo-500/30 rounded-xl p-5 md:p-6 shadow-lg hover:border-indigo-500/50 transition-colors">
                            <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-500/10 border-2 border-indigo-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <Layout className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <p className="text-white font-semibold text-base md:text-lg font-mono">Presentation Layer</p>
                                        <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">UI Logic</span>
                                    </div>
                                    <p className="text-gray-400 text-xs md:text-sm font-mono">Request handling & rendering</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs md:text-sm font-mono">
                                <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-indigo-300 text-center">Controllers</div>
                                <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-indigo-300 text-center">Views</div>
                                <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-indigo-300 text-center">Routing</div>
                                <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-indigo-300 text-center">Middleware</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative w-full flex justify-center mb-6"
                        style={{ height: '48px' }}
                    >
                        <motion.div
                            style={{ scaleY: line3Progress }}
                            className="w-0.5 h-full bg-linear-to-b from-indigo-400 to-amber-400 origin-top"
                        />
                    </motion.div>

                    <motion.div
                        style={{ opacity: coreOpacity, y: coreY }}
                        className="relative w-full max-w-4xl mb-6"
                    >
                        <div className="absolute -inset-1 bg-linear-to-r from-amber-500/20 to-orange-500/20 rounded-xl blur-xl"></div>
                        <div className="relative bg-zinc-900 border-2 border-amber-500/30 rounded-xl p-6 md:p-8 shadow-lg">
                            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-500/10 border-2 border-amber-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <Server className="w-7 h-7 md:w-9 md:h-9 text-amber-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <p className="text-white font-bold text-lg md:text-xl font-mono">Application Core</p>
                                        <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">Monolith</span>
                                    </div>
                                    <p className="text-gray-400 text-xs md:text-sm font-mono">Tightly coupled business logic</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                                <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 md:p-4 hover:border-amber-500/30 transition-colors">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <Code className="w-4 h-4 md:w-5 md:h-5 text-amber-400 shrink-0" />
                                        <span className="text-white text-xs md:text-sm font-semibold font-mono">Authentication</span>
                                    </div>
                                    <div className="text-[10px] md:text-xs text-gray-500 space-y-1 font-mono">
                                        <div>• Session Management</div>
                                        <div>• Token Validation</div>
                                        <div>• Access Control</div>
                                    </div>
                                </div>

                                <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 md:p-4 hover:border-amber-500/30 transition-colors">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-amber-400 shrink-0" />
                                        <span className="text-white text-xs md:text-sm font-semibold font-mono">Order Processing</span>
                                    </div>
                                    <div className="text-[10px] md:text-xs text-gray-500 space-y-1 font-mono">
                                        <div>• Cart Operations</div>
                                        <div>• Checkout Flow</div>
                                        <div>• Payment Gateway</div>
                                    </div>
                                </div>

                                <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 md:p-4 hover:border-amber-500/30 transition-colors">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <Package className="w-4 h-4 md:w-5 md:h-5 text-amber-400 shrink-0" />
                                        <span className="text-white text-xs md:text-sm font-semibold font-mono">Inventory</span>
                                    </div>
                                    <div className="text-[10px] md:text-xs text-gray-500 space-y-1 font-mono">
                                        <div>• Stock Tracking</div>
                                        <div>• Warehouse Logic</div>
                                        <div>• Fulfillment</div>
                                    </div>
                                </div>

                                <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 md:p-4 hover:border-amber-500/30 transition-colors">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <Bell className="w-4 h-4 md:w-5 md:h-5 text-amber-400 shrink-0" />
                                        <span className="text-white text-xs md:text-sm font-semibold font-mono">Notifications</span>
                                    </div>
                                    <div className="text-[10px] md:text-xs text-gray-500 space-y-1 font-mono">
                                        <div>• Event Triggers</div>
                                        <div>• Template Engine</div>
                                        <div>• Delivery Queue</div>
                                    </div>
                                </div>

                                <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 md:p-4 hover:border-amber-500/30 transition-colors">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <Users className="w-4 h-4 md:w-5 md:h-5 text-amber-400 shrink-0" />
                                        <span className="text-white text-xs md:text-sm font-semibold font-mono">User Management</span>
                                    </div>
                                    <div className="text-[10px] md:text-xs text-gray-500 space-y-1 font-mono">
                                        <div>• Profile CRUD</div>
                                        <div>• Preferences</div>
                                        <div>• Role Assignment</div>
                                    </div>
                                </div>

                                <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 md:p-4 hover:border-amber-500/30 transition-colors">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <Layers className="w-4 h-4 md:w-5 md:h-5 text-amber-400 shrink-0" />
                                        <span className="text-white text-xs md:text-sm font-semibold font-mono">Analytics</span>
                                    </div>
                                    <div className="text-[10px] md:text-xs text-gray-500 space-y-1 font-mono">
                                        <div>• Event Tracking</div>
                                        <div>• Data Aggregation</div>
                                        <div>• Report Generation</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-amber-500/5 border-2 border-amber-500/20 rounded-lg p-3 md:p-4 text-xs md:text-sm font-mono text-amber-400">
                                <span className="font-semibold">Shared Infrastructure:</span> <span className="text-amber-300/70">ORM, Utilities, Configuration, Logging, Error Handling</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative w-full flex justify-center mb-6"
                        style={{ height: '64px' }}
                    >
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 64" preserveAspectRatio="xMidYMid meet">
                            <motion.path
                                d="M 200 0 L 133 64"
                                stroke="rgb(251, 191, 36)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="1000"
                                strokeDashoffset={useTransform(line4Progress, [0, 1], [1000, 0])}
                            />
                            <motion.path
                                d="M 200 0 L 267 64"
                                stroke="rgb(251, 191, 36)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="1000"
                                strokeDashoffset={useTransform(line4Progress, [0, 1], [1000, 0])}
                            />
                        </svg>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-6">
                        <motion.div
                            style={{ opacity: cacheOpacity, x: cacheX }}
                            className="bg-zinc-900 border-2 border-red-500/30 rounded-xl p-5 md:p-6 shadow-lg hover:border-red-500/50 transition-colors"
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-red-500/10 border-2 border-red-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <Layers className="w-6 h-6 md:w-7 md:h-7 text-red-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <p className="text-white font-semibold text-base md:text-lg font-mono">Cache Layer</p>
                                        <span className="text-xs font-mono text-red-400 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">Memory</span>
                                    </div>
                                    <p className="text-gray-400 text-xs md:text-sm mb-3 font-mono">In-memory data store</p>
                                    <div className="text-xs md:text-sm text-gray-500 space-y-1.5 font-mono">
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>Key-Value Storage</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>TTL Expiration</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>Cache Invalidation</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: dbOpacity, x: dbX }}
                            className="bg-zinc-900 border-2 border-emerald-500/30 rounded-xl p-5 md:p-6 shadow-lg hover:border-emerald-500/50 transition-colors"
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-lg flex items-center justify-center shrink-0">
                                    <Database className="w-6 h-6 md:w-7 md:h-7 text-emerald-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <p className="text-white font-semibold text-base md:text-lg font-mono">Database</p>
                                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Persistence</span>
                                    </div>
                                    <p className="text-gray-400 text-xs md:text-sm mb-3 font-mono">Relational data store</p>
                                    <div className="text-xs md:text-sm text-gray-500 space-y-1.5 font-mono">
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>Normalized Schema</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>ACID Transactions</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>Foreign Key Relations</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="relative w-full flex justify-center mb-6"
                        style={{ height: '48px' }}
                    >
                        <motion.div
                            style={{ scaleY: line5Progress }}
                            className="w-0.5 h-full bg-linear-to-b from-emerald-400 to-gray-500 origin-top"
                        />
                    </motion.div>

                    <motion.div
                        style={{ opacity: storageOpacity, y: storageY }}
                        className="relative w-full max-w-2xl"
                    >
                        <div className="bg-zinc-900 border-2 border-zinc-700 rounded-xl p-5 md:p-6 shadow-lg hover:border-zinc-600 transition-colors">
                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-800 border-2 border-zinc-700 rounded-lg flex items-center justify-center shrink-0">
                                    <Server className="w-6 h-6 md:w-7 md:h-7 text-zinc-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <p className="text-white font-semibold text-base md:text-lg font-mono">File Storage</p>
                                        <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-2 py-1 rounded border border-zinc-700">Assets</span>
                                    </div>
                                    <p className="text-gray-400 text-xs md:text-sm mb-3 font-mono">Persistent file system</p>
                                    <div className="text-xs md:text-sm text-gray-500 space-y-1.5 font-mono">
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full shrink-0 mt-1.5"></div>
                                            <span>Static Assets</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full shrink-0"></div>
                                            <span>User Uploads</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}