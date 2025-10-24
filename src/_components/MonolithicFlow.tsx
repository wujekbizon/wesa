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

    // Container animations
    const containerOpacity = useTransform(smoothProgress, [0, 0.1, 0.85, 0.95], [0, 1, 1, 0]);
    const containerScale = useTransform(smoothProgress, [0, 0.1], [0.95, 1]);

    // Flow progression
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
    const cacheX = useTransform(smoothProgress, [0.63, 0.69], [-30, 0]);

    const dbOpacity = useTransform(smoothProgress, [0.69, 0.75], [0, 1]);
    const dbX = useTransform(smoothProgress, [0.69, 0.75], [30, 0]);

    const line5Progress = useTransform(smoothProgress, [0.73, 0.80], [0, 1]);

    const storageOpacity = useTransform(smoothProgress, [0.75, 0.82], [0, 1]);
    const storageY = useTransform(smoothProgress, [1, 1], [20, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity: containerOpacity, scale: containerScale }}
            className="min-h-screen flex items-center justify-center py-32"
        >
            <div className="relative w-full max-w-5xl px-4">
                {/* Title */}
                <motion.div
                    style={{ opacity: containerOpacity }}
                    className="mb-16"
                >
                    <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
                        <span className="text-amber-400 text-xs font-mono uppercase tracking-wider">Pattern 01</span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-3 font-mono">Monolithic Architecture</h3>
                    <p className="text-gray-500 text-sm font-mono">Single deployable unit • Shared codebase • Centralized data</p>
                </motion.div>

                {/* Flow Diagram */}
                <div className="relative flex flex-col items-center space-y-8">

                    {/* User Layer */}
                    <motion.div
                        style={{ opacity: userOpacity, y: userY }}
                        className="relative w-full max-w-md"
                    >
                        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded flex items-center justify-center">
                                    <Users className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-white font-mono text-sm font-semibold">Client Layer</p>
                                    <p className="text-gray-500 text-xs font-mono">Web, Mobile, Desktop</p>
                                </div>
                            </div>
                            <div className="text-xs font-mono text-gray-600 space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                    <span>HTTP/HTTPS Requests</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                    <span>RESTful API Calls</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connection Line 1 */}
                    <motion.div
                        style={{ scaleY: line1Progress }}
                        className="w-px h-16 bg-linear-to-b from-blue-500/50 to-purple-500/50 origin-top"
                    />

                    {/* Load Balancer */}
                    <motion.div
                        style={{ opacity: lbOpacity, y: lbY }}
                        className="relative w-full max-w-md"
                    >
                        <div className="bg-zinc-900 border border-purple-500/30 rounded-lg p-6">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 rounded flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-white font-mono text-sm font-semibold">Load Balancer</p>
                                    <p className="text-gray-500 text-xs font-mono">nginx / HAProxy</p>
                                </div>
                            </div>
                            <div className="text-xs font-mono text-gray-600 space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                                    <span>Request Distribution</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                                    <span>SSL Termination</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connection Line 2 */}
                    <motion.div
                        style={{ scaleY: line2Progress }}
                        className="w-px h-16 bg-linear-to-b from-purple-500/50 to-indigo-500/50 origin-top"
                    />

                    {/* UI/Presentation Layer */}
                    <motion.div
                        style={{ opacity: uiOpacity, y: uiY }}
                        className="relative w-full max-w-md"
                    >
                        <div className="bg-zinc-900 border border-indigo-500/30 rounded-lg p-6">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/30 rounded flex items-center justify-center">
                                    <Layout className="w-6 h-6 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-white font-mono text-sm font-semibold">Presentation Layer</p>
                                    <p className="text-gray-500 text-xs font-mono">MVC / Templates</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-gray-600">
                                <div className="bg-zinc-800 rounded px-2 py-1.5">Controllers</div>
                                <div className="bg-zinc-800 rounded px-2 py-1.5">Views</div>
                                <div className="bg-zinc-800 rounded px-2 py-1.5">Routing</div>
                                <div className="bg-zinc-800 rounded px-2 py-1.5">Middleware</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connection Line 3 */}
                    <motion.div
                        style={{ scaleY: line3Progress }}
                        className="w-px h-16 bg-linear-to-b from-indigo-500/50 to-amber-500/50 origin-top"
                    />

                    {/* Monolithic Core */}
                    <motion.div
                        style={{ opacity: coreOpacity, y: coreY }}
                        className="relative w-full max-w-2xl"
                    >
                        <div className="absolute -inset-1 bg-linear-to-r from-amber-500/20 to-orange-500/20 rounded-lg blur-xl"></div>
                        <div className="relative bg-zinc-900 border border-amber-500/30 rounded-lg p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded flex items-center justify-center">
                                    <Server className="w-8 h-8 text-amber-400" />
                                </div>
                                <div>
                                    <p className="text-white font-mono text-lg font-semibold">Application Core</p>
                                    <p className="text-gray-500 text-xs font-mono">Tightly Coupled Components</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-4">
                                <div className="bg-zinc-800 border border-zinc-700 rounded p-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Code className="w-4 h-4 text-amber-400" />
                                        <span className="text-white text-xs font-mono font-semibold">Auth Module</span>
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                        <div>• Login/Logout</div>
                                        <div>• Session Mgmt</div>
                                        <div>• JWT Tokens</div>
                                    </div>
                                </div>

                                <div className="bg-zinc-800 border border-zinc-700 rounded p-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <ShoppingCart className="w-4 h-4 text-amber-400" />
                                        <span className="text-white text-xs font-mono font-semibold">Order Module</span>
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                        <div>• Cart Logic</div>
                                        <div>• Checkout</div>
                                        <div>• Payment</div>
                                    </div>
                                </div>

                                <div className="bg-zinc-800 border border-zinc-700 rounded p-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Package className="w-4 h-4 text-amber-400" />
                                        <span className="text-white text-xs font-mono font-semibold">Inventory</span>
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                        <div>• Stock Mgmt</div>
                                        <div>• Warehousing</div>
                                        <div>• Tracking</div>
                                    </div>
                                </div>

                                <div className="bg-zinc-800 border border-zinc-700 rounded p-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Bell className="w-4 h-4 text-amber-400" />
                                        <span className="text-white text-xs font-mono font-semibold">Notifications</span>
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                        <div>• Email/SMS</div>
                                        <div>• Push Notifs</div>
                                        <div>• Templates</div>
                                    </div>
                                </div>

                                <div className="bg-zinc-800 border border-zinc-700 rounded p-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Users className="w-4 h-4 text-amber-400" />
                                        <span className="text-white text-xs font-mono font-semibold">User Mgmt</span>
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                        <div>• Profiles</div>
                                        <div>• Preferences</div>
                                        <div>• Roles</div>
                                    </div>
                                </div>

                                <div className="bg-zinc-800 border border-zinc-700 rounded p-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Layers className="w-4 h-4 text-amber-400" />
                                        <span className="text-white text-xs font-mono font-semibold">Analytics</span>
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                        <div>• Tracking</div>
                                        <div>• Reporting</div>
                                        <div>• Metrics</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-amber-500/5 border border-amber-500/20 rounded p-3 text-xs font-mono text-amber-400">
                                Shared: ORM, Utils, Config, Logging, Error Handling
                            </div>
                        </div>
                    </motion.div>

                    {/* Connection Line 4 - Split */}
                    <motion.div
                        style={{ scaleY: line4Progress }}
                        className="relative w-full h-20"
                    >
                        <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                            <motion.path
                                d="M 50% 0 L 30% 100"
                                stroke="rgba(251, 191, 36, 0.3)"
                                strokeWidth="1"
                                fill="none"
                                style={{ pathLength: line4Progress }}
                            />
                            <motion.path
                                d="M 50% 0 L 70% 100"
                                stroke="rgba(251, 191, 36, 0.3)"
                                strokeWidth="1"
                                fill="none"
                                style={{ pathLength: line4Progress }}
                            />
                        </svg>
                    </motion.div>

                    {/* Data Layer - Split */}
                    <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
                        <motion.div
                            style={{ opacity: cacheOpacity, x: cacheX }}
                            className="bg-zinc-900 border border-red-500/30 rounded-lg p-6"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-red-500/10 border border-red-500/30 rounded flex items-center justify-center">
                                    <Layers className="w-6 h-6 text-red-400" />
                                </div>
                                <div>
                                    <p className="text-white font-mono text-sm font-semibold">Cache Layer</p>
                                    <p className="text-gray-500 text-xs font-mono">Redis / Memcached</p>
                                </div>
                            </div>
                            <div className="text-xs font-mono text-gray-600 space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                                    <span>Session Store</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                                    <span>Query Cache</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: dbOpacity, x: dbX }}
                            className="bg-zinc-900 border border-emerald-500/30 rounded-lg p-6"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded flex items-center justify-center">
                                    <Database className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-white font-mono text-sm font-semibold">Database</p>
                                    <p className="text-gray-500 text-xs font-mono">PostgreSQL / MySQL</p>
                                </div>
                            </div>
                            <div className="text-xs font-mono text-gray-600 space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                                    <span>Shared Schema</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                                    <span>ACID Transactions</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Connection Line 5 */}
                    <motion.div
                        style={{ scaleY: line5Progress }}
                        className="w-px h-12 bg-linear-to-b from-emerald-500/50 to-zinc-600 origin-top"
                    />

                    {/* File Storage */}
                    <motion.div
                        style={{ opacity: storageOpacity, y: storageY }}
                        className="relative w-full max-w-md"
                    >
                        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 rounded flex items-center justify-center">
                                    <Server className="w-6 h-6 text-zinc-400" />
                                </div>
                                <div>
                                    <p className="text-white font-mono text-sm font-semibold">File Storage</p>
                                    <p className="text-gray-500 text-xs font-mono">Local / NFS / S3</p>
                                </div>
                            </div>
                            <div className="text-xs font-mono text-gray-600 space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
                                    <span>Static Assets</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
                                    <span>User Uploads</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
