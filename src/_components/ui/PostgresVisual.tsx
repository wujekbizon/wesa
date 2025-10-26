import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";

interface TableRow {
    id: number;
    table: "users" | "orders";
    matched: boolean;
}

interface BTreeNode {
    id: number;
    level: number;
    value: number;
    active: boolean;
}

type Phase = "idle" | "input" | "parsing" | "executing" | "storage" | "complete";
type DemoType = "querytree" | "joins" | "btree";

export const PostgresVisual = () => {
    const [phase, setPhase] = useState<Phase>("idle");
    const [demoType, setDemoType] = useState<DemoType>("querytree");
    const [currentLayer, setCurrentLayer] = useState(0);
    const [queryTreeExpanded, setQueryTreeExpanded] = useState(false);
    const [joinProgress, setJoinProgress] = useState(0);
    const [tableRows, setTableRows] = useState<TableRow[]>([]);
    const [btreeNodes, setBtreeNodes] = useState<BTreeNode[]>([]);
    const [searchValue, setSearchValue] = useState(42);
    const [queryTime, setQueryTime] = useState(0);
    const [rowsAffected, setRowsAffected] = useState(0);
    const [cacheHit, setCacheHit] = useState(0);

    const phaseRef = useRef(phase);
    const animationFrameRef = useRef<number | null>(null);

    const sqlQuery = "SELECT u.name, COUNT(o.id) FROM users u JOIN orders o ON u.id = o.user_id WHERE u.age > 25 GROUP BY u.name";

    const demoOptions = useMemo(() => [
        { id: "querytree" as DemoType, label: "Query Tree", icon: "🌲" },
        { id: "joins" as DemoType, label: "Joins", icon: "🔗" },
        { id: "btree" as DemoType, label: "B-Tree", icon: "🌳" },
    ], []);

    const handleDemoChange = useCallback((newType: DemoType) => {
        setDemoType(newType);
    }, []);

    useEffect(() => {
        phaseRef.current = phase;
    }, [phase]);

    // Initialize B-tree structure
    useEffect(() => {
        const nodes: BTreeNode[] = [
            { id: 0, level: 0, value: 50, active: false },
            { id: 1, level: 1, value: 25, active: false },
            { id: 2, level: 1, value: 75, active: false },
            { id: 3, level: 2, value: 12, active: false },
            { id: 4, level: 2, value: 38, active: false },
            { id: 5, level: 2, value: 62, active: false },
            { id: 6, level: 2, value: 88, active: false },
        ];
        setBtreeNodes(nodes);
    }, []);

    useEffect(() => {
        if (demoType === "querytree") {
            setQueryTreeExpanded(false);
        } else if (demoType === "joins") {
            setJoinProgress(0);
            setTableRows([]);
        } else if (demoType === "btree") {
            setBtreeNodes((prev) => prev.map((n) => ({ ...n, active: false })));
            setSearchValue(42);
        }
    }, [demoType]);

    // Phase transitions
    useEffect(() => {
        const timers: number[] = [];

        timers.push(window.setTimeout(() => setPhase("input"), 500));
        timers.push(window.setTimeout(() => {
            setPhase("parsing");
            setCurrentLayer(1);
        }, 2500));
        timers.push(window.setTimeout(() => {
            setPhase("executing");
            setCurrentLayer(2);
        }, 5000));
        timers.push(window.setTimeout(() => {
            setPhase("storage");
            setCurrentLayer(3);
        }, 7500));
        timers.push(window.setTimeout(() => {
            setPhase("complete");
            setCurrentLayer(4);
        }, 18000));

        return () => timers.forEach((t) => clearTimeout(t));
    }, []);

    // Demo simulations - optimized with useCallback
    const updateQueryTree = useCallback(() => {
        setQueryTreeExpanded((prev) => {
            if (Math.random() > 0.97) return !prev;
            return prev;
        });
    }, []);

    const updateJoins = useCallback(() => {
        setJoinProgress((prev) => (prev + 0.5) % 100);

        if (Math.random() > 0.94) {
            setTableRows((prev) => {
                if (prev.length < 6) {
                    const table = Math.random() > 0.5 ? "users" : "orders";
                    return [...prev, { id: Math.random(), table, matched: false }];
                }
                return prev.map((r) => ({
                    ...r,
                    matched: Math.random() > 0.5,
                }));
            });
        }
    }, []);

    const updateBTree = useCallback(() => {
        setBtreeNodes((prev) => {
            if (Math.random() > 0.97) {
                return prev.map((n) => ({ ...n, active: false }));
            }

            if (Math.random() > 0.94) {
                const target = searchValue;
                return prev.map((n) => {
                    if (n.level === 0) return { ...n, active: true };
                    if (n.level === 1) {
                        return { ...n, active: target < 50 ? n.value === 25 : n.value === 75 };
                    }
                    if (n.level === 2) {
                        if (target < 50) {
                            return { ...n, active: target < 25 ? n.value === 12 : n.value === 38 };
                        } else {
                            return { ...n, active: target < 75 ? n.value === 62 : n.value === 88 };
                        }
                    }
                    return n;
                });
            }
            return prev;
        });
    }, [searchValue]);

    useEffect(() => {
        if (phase === "storage" || phase === "complete") {
            const animate = () => {
                if (phaseRef.current !== "storage" && phaseRef.current !== "complete") {
                    return;
                }

                if (demoType === "querytree") {
                    updateQueryTree();
                } else if (demoType === "joins") {
                    updateJoins();
                } else if (demoType === "btree") {
                    updateBTree();
                }

                animationFrameRef.current = requestAnimationFrame(animate);
            };

            animationFrameRef.current = requestAnimationFrame(animate);

            return () => {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
            };
        }
    }, [phase, demoType, updateQueryTree, updateJoins, updateBTree]);

    // Metrics updates
    useEffect(() => {
        if (phase === "storage" || phase === "complete") {
            const interval = window.setInterval(() => {
                setQueryTime((prev) => Math.min(prev + 1, 12));
                setRowsAffected((prev) => Math.min(prev + 87, 1247));
                setCacheHit((prev) => Math.min(prev + 6, 94));
            }, 100);

            return () => clearInterval(interval);
        }
    }, [phase]);

    return (
        <div className="w-full">
            <div className="relative min-h-[500px] md:min-h-[750px] bg-gradient-to-br from-gray-900 via-blue-950/20 to-gray-900 rounded-xl border-2 border-gray-700 overflow-hidden p-4 md:p-6 pb-40">
                {/* Background grid */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgb(59, 130, 246) 1px, transparent 1px), linear-gradient(90deg, rgb(59, 130, 246) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                </div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-6"
                >
                    <h3 className="text-lg md:text-xl font-bold text-gray-200 flex items-center justify-center gap-2">
                        <span className="text-2xl">🐘</span>
                        PostgreSQL Query Journey
                    </h3>
                    <p className="text-[10px] text-gray-400 mt-1">Data flows through architectural layers</p>
                </motion.div>

                {/* Vertical Layer Architecture */}
                <div className="relative flex flex-col gap-5 max-w-3xl mx-auto">
                    {/* Layer 1: SQL Input */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0,
                            scale: currentLayer >= 0 ? 1 : 0.98
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={`relative bg-gray-800/80 border-2 rounded-lg p-3 transition-colors duration-500 ${currentLayer >= 0 ? "border-blue-500/50" : "border-gray-700"
                            }`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
                                <span className="text-blue-400 text-sm">📝</span>
                            </div>
                            <div className="text-xs text-gray-300 font-semibold">SQL Query Input</div>
                        </div>
                        <AnimatePresence>
                            {phase !== "idle" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-gray-900/50 rounded border border-gray-700 p-2"
                                >
                                    <div className="text-[9px] md:text-[10px] font-mono text-cyan-300 break-all">
                                        {sqlQuery}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Layer 2: Parser & Planner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0,
                            scale: currentLayer >= 1 ? 1 : 0.98
                        }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                        className={`relative bg-gray-800/80 border-2 rounded-lg p-3 transition-colors duration-500 ${currentLayer >= 1 ? "border-cyan-500/50" : "border-gray-700"
                            }`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center">
                                <span className="text-cyan-400 text-sm">🧠</span>
                            </div>
                            <div className="text-xs text-gray-300 font-semibold">Query Parser & Planner</div>
                        </div>
                        <AnimatePresence>
                            {phase === "parsing" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-gray-900/50 rounded border border-gray-700 p-3"
                                >
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="text-center">
                                            <div className="text-[9px] text-gray-400 mb-1">Seq Scan</div>
                                            <div className="w-12 h-12 rounded border-2 border-orange-500/50 flex items-center justify-center">
                                                <span className="text-orange-400 text-xs">📊</span>
                                            </div>
                                            <div className="text-[8px] text-orange-400 mt-1">Cost: 1250</div>
                                        </div>
                                        <div className="text-cyan-400 text-lg">→</div>
                                        <div className="text-center">
                                            <div className="text-[9px] text-gray-400 mb-1">Index Scan</div>
                                            <div className="w-12 h-12 rounded border-2 border-green-500/50 flex items-center justify-center">
                                                <span className="text-green-400 text-xs">⚡</span>
                                            </div>
                                            <div className="text-[8px] text-green-400 mt-1">Cost: 12.5</div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Layer 3: Executor */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0,
                            scale: currentLayer >= 2 ? 1 : 0.98
                        }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                        className={`relative bg-gray-800/80 border-2 rounded-lg p-3 transition-colors duration-500 ${currentLayer >= 2 ? "border-purple-500/50" : "border-gray-700"
                            }`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center">
                                <span className="text-purple-400 text-sm">⚙️</span>
                            </div>
                            <div className="text-xs text-gray-300 font-semibold">Execution Engine</div>
                        </div>
                        <AnimatePresence>
                            {phase === "executing" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.4 }}
                                    className="flex gap-2 justify-center py-2"
                                >
                                    {[1, 2, 3, 4].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                                            className="w-10 h-10 bg-purple-500/20 rounded border border-purple-500/50 flex items-center justify-center"
                                        >
                                            <span className="text-[8px] text-purple-400">W{i}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Layer 4: Storage & Interactive Demo */}
                    <AnimatePresence>
                        {currentLayer >= 3 && (
                            <motion.div
                                key="storage-demo"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                                className="relative bg-gray-800/80 border-2 border-blue-500/50 rounded-lg p-3"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
                                        <span className="text-blue-400 text-sm">🗂️</span>
                                    </div>
                                    <div className="text-xs text-gray-300 font-semibold">Storage Manager</div>
                                </div>

                                {/* Demo Selector */}
                                <div className="flex gap-2 mb-3">
                                    {demoOptions.map((demo) => (
                                        <div
                                            key={demo.id}
                                            onClick={() => handleDemoChange(demo.id)}
                                            className={`flex-1 px-2 py-1.5 rounded text-[9px] font-semibold transition-all cursor-pointer ${demoType === demo.id
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                                }`}
                                        >
                                            {demo.icon} {demo.label}
                                        </div>
                                    ))}
                                </div>

                                {/* Demo Canvas */}
                                <div className="bg-gray-900 rounded border-2 border-gray-700 p-4 min-h-[200px] flex items-center justify-center">
                                    {/* Query Tree Demo */}
                                    {demoType === "querytree" && (
                                        <div key="querytree-demo" className="flex flex-col items-center justify-center w-full">
                                            <div className="relative">
                                                {/* Root */}
                                                <div className="flex justify-center mb-4">
                                                    <div className="w-16 h-8 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center">
                                                        <span className="text-[8px] text-blue-400">JOIN</span>
                                                    </div>
                                                </div>

                                                {/* Branches */}
                                                <AnimatePresence mode="wait">
                                                    {queryTreeExpanded && (
                                                        <motion.div
                                                            initial={{ opacity: 0, scaleY: 0.8 }}
                                                            animate={{ opacity: 1, scaleY: 1 }}
                                                            exit={{ opacity: 0, scaleY: 0.8 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="flex justify-center gap-8"
                                                        >
                                                            <div className="flex flex-col items-center">
                                                                <div className="w-0.5 h-4 bg-cyan-500/50 mb-1" />
                                                                <div className="w-14 h-7 bg-cyan-500/20 border border-cyan-500/50 rounded flex items-center justify-center">
                                                                    <span className="text-[7px] text-cyan-400">SCAN users</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col items-center">
                                                                <div className="w-0.5 h-4 bg-green-500/50 mb-1" />
                                                                <div className="w-14 h-7 bg-green-500/20 border border-green-500/50 rounded flex items-center justify-center">
                                                                    <span className="text-[7px] text-green-400">SCAN orders</span>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <div className="text-[8px] text-gray-400 mt-4">Execution Plan Tree</div>
                                        </div>
                                    )}

                                    {/* Joins Demo */}
                                    {demoType === "joins" && (
                                        <div key="joins-demo" className="flex items-center justify-around w-full h-full">
                                            {/* Users Table */}
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="text-[8px] text-cyan-400 font-mono mb-1">users</div>
                                                <div className="space-y-1">
                                                    {tableRows
                                                        .filter((r) => r.table === "users")
                                                        .slice(0, 3)
                                                        .map((row) => (
                                                            <motion.div
                                                                key={row.id}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                className={`w-12 h-4 rounded ${row.matched ? "bg-green-500/30 border border-green-500" : "bg-cyan-500/20 border border-cyan-500/50"
                                                                    }`}
                                                            />
                                                        ))}
                                                </div>
                                            </div>

                                            {/* Join Symbol */}
                                            <div className="flex flex-col items-center">
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                    className="text-2xl text-blue-400"
                                                >
                                                    ⋈
                                                </motion.div>
                                                <div className="text-[7px] text-gray-400 mt-1">INNER JOIN</div>
                                            </div>

                                            {/* Orders Table */}
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="text-[8px] text-purple-400 font-mono mb-1">orders</div>
                                                <div className="space-y-1">
                                                    {tableRows
                                                        .filter((r) => r.table === "orders")
                                                        .slice(0, 3)
                                                        .map((row) => (
                                                            <motion.div
                                                                key={row.id}
                                                                initial={{ opacity: 0, x: 10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                className={`w-12 h-4 rounded ${row.matched ? "bg-green-500/30 border border-green-500" : "bg-purple-500/20 border border-purple-500/50"
                                                                    }`}
                                                            />
                                                        ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* B-Tree Demo */}
                                    {demoType === "btree" && (
                                        <div key="btree-demo" className="flex flex-col items-center justify-center w-full">
                                            <div className="text-[8px] text-gray-400 mb-4">Searching for: {searchValue}</div>

                                            {/* Tree Structure */}
                                            <div className="flex flex-col items-center gap-4">
                                                {/* Level 0 - Root */}
                                                <div className="flex justify-center">
                                                    {btreeNodes
                                                        .filter((n) => n.level === 0)
                                                        .map((node) => (
                                                            <motion.div
                                                                key={node.id}
                                                                animate={{
                                                                    borderColor: node.active ? "rgb(34, 211, 238)" : "rgba(59, 130, 246, 0.3)",
                                                                    backgroundColor: node.active ? "rgba(34, 211, 238, 0.2)" : "rgba(59, 130, 246, 0.1)",
                                                                }}
                                                                transition={{ duration: 0.3 }}
                                                                className="w-12 h-10 border-2 rounded flex items-center justify-center"
                                                            >
                                                                <span className="text-[10px] text-blue-400 font-mono">{node.value}</span>
                                                            </motion.div>
                                                        ))}
                                                </div>

                                                {/* Level 1 */}
                                                <div className="flex gap-8">
                                                    {btreeNodes
                                                        .filter((n) => n.level === 1)
                                                        .map((node) => (
                                                            <motion.div
                                                                key={node.id}
                                                                animate={{
                                                                    borderColor: node.active ? "rgb(34, 211, 238)" : "rgba(59, 130, 246, 0.3)",
                                                                    backgroundColor: node.active ? "rgba(34, 211, 238, 0.2)" : "rgba(59, 130, 246, 0.1)",
                                                                }}
                                                                transition={{ duration: 0.3 }}
                                                                className="w-12 h-10 border-2 rounded flex items-center justify-center"
                                                            >
                                                                <span className="text-[10px] text-blue-400 font-mono">{node.value}</span>
                                                            </motion.div>
                                                        ))}
                                                </div>

                                                {/* Level 2 - Leaves */}
                                                <div className="flex gap-3">
                                                    {btreeNodes
                                                        .filter((n) => n.level === 2)
                                                        .map((node) => (
                                                            <motion.div
                                                                key={node.id}
                                                                animate={{
                                                                    borderColor: node.active ? "rgb(34, 211, 238)" : "rgba(59, 130, 246, 0.3)",
                                                                    backgroundColor: node.active ? "rgba(34, 211, 238, 0.2)" : "rgba(59, 130, 246, 0.1)",
                                                                }}
                                                                transition={{ duration: 0.3 }}
                                                                className="w-10 h-8 border-2 rounded flex items-center justify-center"
                                                            >
                                                                <span className="text-[9px] text-blue-400 font-mono">{node.value}</span>
                                                            </motion.div>
                                                        ))}
                                                </div>
                                            </div>

                                            <div className="text-[7px] text-gray-400 mt-3">Index Lookup Path</div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Layer 5: Results */}
                    <AnimatePresence>
                        {phase === "complete" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                                className="relative bg-gray-800/80 border-2 border-green-500/50 rounded-lg p-3"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center">
                                        <span className="text-green-400 text-sm">✓</span>
                                    </div>
                                    <div className="text-xs text-gray-300 font-semibold">Query Results</div>
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    <div className="bg-gray-900/50 rounded border border-gray-700 p-2">
                                        <div className="text-[8px] text-gray-400">Execution Time</div>
                                        <div className="text-base font-bold text-cyan-400 font-mono">{queryTime}ms</div>
                                    </div>
                                    <div className="bg-gray-900/50 rounded border border-gray-700 p-2">
                                        <div className="text-[8px] text-gray-400">Rows Returned</div>
                                        <div className="text-base font-bold text-blue-400 font-mono">{rowsAffected}</div>
                                    </div>
                                    <div className="bg-gray-900/50 rounded border border-gray-700 p-2">
                                        <div className="text-[8px] text-gray-400">Cache Hit</div>
                                        <div className="text-base font-bold text-green-400 font-mono">{cacheHit}%</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Bottom Info */}
                <AnimatePresence>
                    {phase === "complete" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4"
                        >
                            <div className="bg-gray-800/95 backdrop-blur border-2 border-gray-700 rounded-lg p-3 shadow-lg">
                                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-[9px] md:text-[10px]">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                                        <span className="text-gray-300 font-medium">ACID Compliant</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                                        <span className="text-gray-300 font-medium">Relational Integrity</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                        <span className="text-gray-300 font-medium">Production Ready</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer */}
            <AnimatePresence>
                {phase === "complete" && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mt-4 md:mt-6 text-center"
                    >
                        <p className="text-xs md:text-sm text-gray-400">
                            PostgreSQL Architecture • <span className="text-amber-400 font-semibold">Engineered by WESA</span>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
