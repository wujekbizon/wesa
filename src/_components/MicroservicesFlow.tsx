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

    const stretchedProgress = useTransform(smoothProgress, v => Math.min(v * 1.3, 1));

    // Container animations
    const containerOpacity = useTransform(stretchedProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
    const containerScale = useTransform(stretchedProgress, [0, 0.1], [0.95, 1]);

    // Flow progression
    const userOpacity = useTransform(stretchedProgress, [0.1, 0.15], [0, 1]);
    const userY = useTransform(stretchedProgress, [0.1, 0.15], [20, 0]);

    const line1Progress = useTransform(stretchedProgress, [0.15, 0.2], [0, 1]);

    const gatewayOpacity = useTransform(stretchedProgress, [0.2, 0.25], [0, 1]);
    const gatewayY = useTransform(stretchedProgress, [0.2, 0.25], [20, 0]);

    const line2Progress = useTransform(stretchedProgress, [0.25, 0.32], [0, 1]);

    // Service mesh
    const meshOpacity = useTransform(stretchedProgress, [0.32, 0.37], [0, 1]);
    const meshY = useTransform(stretchedProgress, [0.32, 0.37], [20, 0]);

    const line3Progress = useTransform(stretchedProgress, [0.37, 0.44], [0, 1]);

    // Individual services
    const service1Opacity = useTransform(stretchedProgress, [0.44, 0.48], [0, 1]);
    const service1X = useTransform(stretchedProgress, [0.44, 0.48], [-30, 0]);

    const service2Opacity = useTransform(stretchedProgress, [0.48, 0.52], [0, 1]);
    const service2X = useTransform(stretchedProgress, [0.48, 0.52], [-15, 0]);

    const service3Opacity = useTransform(stretchedProgress, [0.52, 0.56], [0, 1]);

    const service4Opacity = useTransform(stretchedProgress, [0.56, 0.6], [0, 1]);
    const service4X = useTransform(stretchedProgress, [0.56, 0.6], [15, 0]);

    const service5Opacity = useTransform(stretchedProgress, [0.6, 0.64], [0, 1]);
    const service5X = useTransform(stretchedProgress, [0.6, 0.64], [30, 0]);

    const line4Progress = useTransform(stretchedProgress, [0.64, 0.7], [0, 1]);

    // Databases
    const db1Opacity = useTransform(stretchedProgress, [0.70, 0.74], [0, 1]);
    const db1X = useTransform(stretchedProgress, [0.70, 0.74], [-30, 0]);

    const db2Opacity = useTransform(stretchedProgress, [0.74, 0.78], [0, 1]);
    const db2X = useTransform(stretchedProgress, [0.74, 0.78], [-15, 0]);

    const db3Opacity = useTransform(stretchedProgress, [0.78, 0.82], [0, 1]);

    const db4Opacity = useTransform(stretchedProgress, [0.82, 0.86], [0, 1]);
    const db4X = useTransform(stretchedProgress, [0.82, 0.86], [15, 0]);

    const db5Opacity = useTransform(stretchedProgress, [0.82, 0.88], [0, 1]);
    const db5X = useTransform(stretchedProgress, [0.82, 0.88], [30, 0]);

    const line5Progress = useTransform(stretchedProgress, [0.82, 0.88], [0, 1]);

    // Infrastructure
    const infraOpacity = useTransform(stretchedProgress, [0.82, 0.88], [0, 1]);
    const infraY = useTransform(stretchedProgress, [0.83, 0.88], [20, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity: containerOpacity, scale: containerScale }}
            className="min-h-screen flex items-start justify-center py-64"
        >
            <div className="relative w-full max-w-6xl px-4">
                {/* Title */}
                <motion.div
                    style={{ opacity: containerOpacity }}
                    className="mb-16"
                >
                    <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
                        <span className="text-cyan-400 text-xs font-mono uppercase tracking-wider">Pattern 02</span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-3 font-mono">Microservices Architecture</h3>
                    <p className="text-gray-500 text-sm font-mono">Distributed services • Independent deployment • Polyglot persistence</p>
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
                                    <p className="text-gray-500 text-xs font-mono">Multi-Channel Access</p>
                                </div>
                            </div>
                            <div className="text-xs font-mono text-gray-600 space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                    <span>Web, Mobile, IoT</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                    <span>API Consumers</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connection Line 1 */}
                    <motion.div
                        style={{ scaleY: line1Progress }}
                        className="w-px h-16 bg-linear-to-b from-blue-500/50 to-purple-500/50 origin-top"
                    />

                    {/* API Gateway */}
                    <motion.div
                        style={{ opacity: gatewayOpacity, y: gatewayY }}
                        className="relative w-full max-w-md"
                    >
                        <div className="bg-zinc-900 border border-purple-500/30 rounded-lg p-6">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 rounded flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-white font-mono text-sm font-semibold">API Gateway</p>
                                    <p className="text-gray-500 text-xs font-mono">Kong / NGINX / Envoy</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-gray-600">
                                <div className="bg-zinc-800 rounded px-2 py-1.5">Routing</div>
                                <div className="bg-zinc-800 rounded px-2 py-1.5">Auth</div>
                                <div className="bg-zinc-800 rounded px-2 py-1.5">Rate Limit</div>
                                <div className="bg-zinc-800 rounded px-2 py-1.5">Transform</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connection Line 2 */}
                    <motion.div
                        style={{ scaleY: line2Progress }}
                        className="w-px h-16 bg-linear-to-b from-purple-500/50 to-cyan-500/50 origin-top"
                    />

                    {/* Service Mesh */}
                    <motion.div
                        style={{ opacity: meshOpacity, y: meshY }}
                        className="relative w-full max-w-lg"
                    >
                        <div className="bg-zinc-900 border border-cyan-500/30 rounded-lg p-6">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded flex items-center justify-center">
                                    <GitBranch className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-white font-mono text-sm font-semibold">Service Mesh</p>
                                    <p className="text-gray-500 text-xs font-mono">Istio / Linkerd</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-xs font-mono text-gray-600">
                                <div className="bg-zinc-800 rounded px-2 py-1.5">Discovery</div>
                                <div className="bg-zinc-800 rounded px-2 py-1.5">Load Balance</div>
                                <div className="bg-zinc-800 rounded px-2 py-1.5">Circuit Break</div>
                                <div className="bg-zinc-800 rounded px-2 py-1.5">mTLS</div>
                                <div className="bg-zinc-800 rounded px-2 py-1.5">Observability</div>
                                <div className="bg-zinc-800 rounded px-2 py-1.5">Retry Logic</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connection Line 3 - Split to 5 services */}
                    <motion.div
                        style={{ scaleY: line3Progress }}
                        className="relative w-full h-24"
                    >
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
                            <motion.path
                                d="M 50 0 L 10 100"
                                stroke="rgba(6, 182, 212, 0.3)"
                                strokeWidth="1"
                                fill="none"
                                style={{ pathLength: line3Progress }}
                            />
                            <motion.path
                                d="M 50 0 L 30 100"
                                stroke="rgba(6, 182, 212, 0.3)"
                                strokeWidth="1"
                                fill="none"
                                style={{ pathLength: line3Progress }}
                            />
                            <motion.path
                                d="M 50 0 L 50 100"
                                stroke="rgba(6, 182, 212, 0.3)"
                                strokeWidth="1"
                                fill="none"
                                style={{ pathLength: line3Progress }}
                            />
                            <motion.path
                                d="M 50 0 L 70 100"
                                stroke="rgba(6, 182, 212, 0.3)"
                                strokeWidth="1"
                                fill="none"
                                style={{ pathLength: line3Progress }}
                            />
                            <motion.path
                                d="M 50 0 L 90 100"
                                stroke="rgba(6, 182, 212, 0.3)"
                                strokeWidth="1"
                                fill="none"
                                style={{ pathLength: line3Progress }}
                            />
                        </svg>
                    </motion.div>

                    {/* Microservices Layer */}
                    <div className="grid grid-cols-5 gap-4 w-full">
                        {/* Auth Service */}
                        <motion.div
                            style={{ opacity: service1Opacity, x: service1X }}
                            className="bg-zinc-900 border border-red-500/30 rounded-lg p-4"
                        >
                            <div className="flex flex-col items-center mb-3">
                                <div className="w-12 h-12 bg-red-500/10 border border-red-500/30 rounded flex items-center justify-center mb-2">
                                    <Lock className="w-6 h-6 text-red-400" />
                                </div>
                                <p className="text-white font-mono text-xs font-semibold text-center">Auth Service</p>
                            </div>
                            <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                <div>• JWT Tokens</div>
                                <div>• OAuth2</div>
                                <div>• Sessions</div>
                                <div>• RBAC</div>
                            </div>
                            <div className="mt-2 pt-2 border-t border-zinc-800 text-[9px] font-mono text-red-400">
                                Node.js • Express
                            </div>
                        </motion.div>

                        {/* Product Service */}
                        <motion.div
                            style={{ opacity: service2Opacity, x: service2X }}
                            className="bg-zinc-900 border border-amber-500/30 rounded-lg p-4"
                        >
                            <div className="flex flex-col items-center mb-3">
                                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded flex items-center justify-center mb-2">
                                    <Package className="w-6 h-6 text-amber-400" />
                                </div>
                                <p className="text-white font-mono text-xs font-semibold text-center">Product Service</p>
                            </div>
                            <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                <div>• Catalog</div>
                                <div>• Search</div>
                                <div>• Categories</div>
                                <div>• Pricing</div>
                            </div>
                            <div className="mt-2 pt-2 border-t border-zinc-800 text-[9px] font-mono text-amber-400">
                                Java • Spring Boot
                            </div>
                        </motion.div>

                        {/* Order Service */}
                        <motion.div
                            style={{ opacity: service3Opacity }}
                            className="bg-zinc-900 border border-emerald-500/30 rounded-lg p-4"
                        >
                            <div className="flex flex-col items-center mb-3">
                                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded flex items-center justify-center mb-2">
                                    <ShoppingCart className="w-6 h-6 text-emerald-400" />
                                </div>
                                <p className="text-white font-mono text-xs font-semibold text-center">Order Service</p>
                            </div>
                            <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                <div>• Cart</div>
                                <div>• Checkout</div>
                                <div>• Payment</div>
                                <div>• History</div>
                            </div>
                            <div className="mt-2 pt-2 border-t border-zinc-800 text-[9px] font-mono text-emerald-400">
                                Go • Gin
                            </div>
                        </motion.div>

                        {/* Inventory Service */}
                        <motion.div
                            style={{ opacity: service4Opacity, x: service4X }}
                            className="bg-zinc-900 border border-blue-500/30 rounded-lg p-4"
                        >
                            <div className="flex flex-col items-center mb-3">
                                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded flex items-center justify-center mb-2">
                                    <Server className="w-6 h-6 text-blue-400" />
                                </div>
                                <p className="text-white font-mono text-xs font-semibold text-center">Inventory Service</p>
                            </div>
                            <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                <div>• Stock Mgmt</div>
                                <div>• Warehouse</div>
                                <div>• Tracking</div>
                                <div>• Alerts</div>
                            </div>
                            <div className="mt-2 pt-2 border-t border-zinc-800 text-[9px] font-mono text-blue-400">
                                Python • FastAPI
                            </div>
                        </motion.div>

                        {/* Notification Service */}
                        <motion.div
                            style={{ opacity: service5Opacity, x: service5X }}
                            className="bg-zinc-900 border border-pink-500/30 rounded-lg p-4"
                        >
                            <div className="flex flex-col items-center mb-3">
                                <div className="w-12 h-12 bg-pink-500/10 border border-pink-500/30 rounded flex items-center justify-center mb-2">
                                    <Bell className="w-6 h-6 text-pink-400" />
                                </div>
                                <p className="text-white font-mono text-xs font-semibold text-center">Notification Service</p>
                            </div>
                            <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                <div>• Email</div>
                                <div>• SMS</div>
                                <div>• Push</div>
                                <div>• Webhooks</div>
                            </div>
                            <div className="mt-2 pt-2 border-t border-zinc-800 text-[9px] font-mono text-pink-400">
                                Node.js • NestJS
                            </div>
                        </motion.div>
                    </div>

                    {/* Connection Line 4 - Services to Databases */}
                    <motion.div
                        style={{ scaleY: line4Progress }}
                        className="relative w-full h-20"
                    >
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
                            <motion.path
                                d="M 10 0 L 10 100"
                                stroke="rgba(239, 68, 68, 0.3)"
                                strokeWidth="1"
                                fill="none"
                                style={{ pathLength: line4Progress }}
                            />
                            <motion.path
                                d="M 30 0 L 30 100"
                                stroke="rgba(251, 191, 36, 0.3)"
                                strokeWidth="1"
                                fill="none"
                                style={{ pathLength: line4Progress }}
                            />
                            <motion.path
                                d="M 50 0 L 50 100"
                                stroke="rgba(16, 185, 129, 0.3)"
                                strokeWidth="1"
                                fill="none"
                                style={{ pathLength: line4Progress }}
                            />
                            <motion.path
                                d="M 70 0 L 70 100"
                                stroke="rgba(59, 130, 246, 0.3)"
                                strokeWidth="1"
                                fill="none"
                                style={{ pathLength: line4Progress }}
                            />
                            <motion.path
                                d="M 90 0 L 90 100"
                                stroke="rgba(236, 72, 153, 0.3)"
                                strokeWidth="1"
                                fill="none"
                                style={{ pathLength: line4Progress }}
                            />
                        </svg>
                    </motion.div>

                    {/* Database Layer - Independent DBs */}
                    <div className="grid grid-cols-5 gap-4 w-full">
                        <motion.div
                            style={{ opacity: db1Opacity, x: db1X }}
                            className="bg-zinc-900 border border-red-500/20 rounded-lg p-4"
                        >
                            <div className="flex flex-col items-center mb-2">
                                <div className="w-10 h-10 bg-red-500/10 border border-red-500/30 rounded flex items-center justify-center mb-2">
                                    <Database className="w-5 h-5 text-red-400" />
                                </div>
                                <p className="text-red-400 font-mono text-[10px] font-semibold">Auth DB</p>
                            </div>
                            <div className="text-[9px] font-mono text-gray-600 text-center">
                                PostgreSQL
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: db2Opacity, x: db2X }}
                            className="bg-zinc-900 border border-amber-500/20 rounded-lg p-4"
                        >
                            <div className="flex flex-col items-center mb-2">
                                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded flex items-center justify-center mb-2">
                                    <Database className="w-5 h-5 text-amber-400" />
                                </div>
                                <p className="text-amber-400 font-mono text-[10px] font-semibold">Product DB</p>
                            </div>
                            <div className="text-[9px] font-mono text-gray-600 text-center">
                                MongoDB
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: db3Opacity }}
                            className="bg-zinc-900 border border-emerald-500/20 rounded-lg p-4"
                        >
                            <div className="flex flex-col items-center mb-2">
                                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 rounded flex items-center justify-center mb-2">
                                    <Database className="w-5 h-5 text-emerald-400" />
                                </div>
                                <p className="text-emerald-400 font-mono text-[10px] font-semibold">Order DB</p>
                            </div>
                            <div className="text-[9px] font-mono text-gray-600 text-center">
                                PostgreSQL
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: db4Opacity, x: db4X }}
                            className="bg-zinc-900 border border-blue-500/20 rounded-lg p-4"
                        >
                            <div className="flex flex-col items-center mb-2">
                                <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 rounded flex items-center justify-center mb-2">
                                    <Database className="w-5 h-5 text-blue-400" />
                                </div>
                                <p className="text-blue-400 font-mono text-[10px] font-semibold">Inventory DB</p>
                            </div>
                            <div className="text-[9px] font-mono text-gray-600 text-center">
                                Cassandra
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: db5Opacity, x: db5X }}
                            className="bg-zinc-900 border border-pink-500/20 rounded-lg p-4"
                        >
                            <div className="flex flex-col items-center mb-2">
                                <div className="w-10 h-10 bg-pink-500/10 border border-pink-500/30 rounded flex items-center justify-center mb-2">
                                    <Database className="w-5 h-5 text-pink-400" />
                                </div>
                                <p className="text-pink-400 font-mono text-[10px] font-semibold">Notif DB</p>
                            </div>
                            <div className="text-[9px] font-mono text-gray-600 text-center">
                                Redis
                            </div>
                        </motion.div>
                    </div>

                    {/* Connection Line 5 */}
                    <motion.div
                        style={{ scaleY: line5Progress }}
                        className="w-px h-16 bg-linear-to-b from-cyan-500/50 to-zinc-600 origin-top"
                    />

                    {/* Infrastructure Layer */}
                    <motion.div
                        style={{ opacity: infraOpacity, y: infraY }}
                        className="relative w-full max-w-4xl"
                    >
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-violet-500/10 border border-violet-500/30 rounded flex items-center justify-center">
                                        <Webhook className="w-5 h-5 text-violet-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-mono text-xs font-semibold">Message Queue</p>
                                        <p className="text-gray-500 text-[10px] font-mono">RabbitMQ / Kafka</p>
                                    </div>
                                </div>
                                <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                    <div>• Event Streaming</div>
                                    <div>• Async Messaging</div>
                                </div>
                            </div>

                            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/30 rounded flex items-center justify-center">
                                        <Activity className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-mono text-xs font-semibold">Observability</p>
                                        <p className="text-gray-500 text-[10px] font-mono">Prometheus / Grafana</p>
                                    </div>
                                </div>
                                <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                    <div>• Metrics & Logging</div>
                                    <div>• Distributed Tracing</div>
                                </div>
                            </div>

                            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-sky-500/10 border border-sky-500/30 rounded flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-sky-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-mono text-xs font-semibold">Container Orchestration</p>
                                        <p className="text-gray-500 text-[10px] font-mono">Kubernetes</p>
                                    </div>
                                </div>
                                <div className="text-[10px] font-mono text-gray-600 space-y-0.5">
                                    <div>• Auto-scaling</div>
                                    <div>• Self-healing</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 bg-cyan-500/5 border border-cyan-500/20 rounded p-3 text-xs font-mono text-cyan-400 text-center">
                            Independent deployment • Polyglot architecture • Fault isolation • Horizontal scaling
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}