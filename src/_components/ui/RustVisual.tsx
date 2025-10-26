import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Thread {
  id: number;
  x: number;
  y: number;
  color: string;
  active: boolean;
}

interface OwnedBox {
  id: number;
  scope: "scope1" | "scope2" | "scope3";
  transitioning: boolean;
}

interface AsyncTask {
  id: number;
  progress: number;
  status: "pending" | "running" | "complete";
  color: string;
}

type Phase = "idle" | "coding" | "borrowcheck" | "compiling" | "running" | "complete";
type DemoType = "threads" | "ownership" | "async";

export const RustVisual = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [demoType, setDemoType] = useState<DemoType>("threads");
  const [borrowCheckProgress, setBorrowCheckProgress] = useState(0);
  const [compilationProgress, setCompilationProgress] = useState(0);
  const [threads, setThreads] = useState<Thread[]>([]);
  const [ownedBoxes, setOwnedBoxes] = useState<OwnedBox[]>([]);
  const [asyncTasks, setAsyncTasks] = useState<AsyncTask[]>([]);
  const [safetyScore, setSafetyScore] = useState(100);
  const [throughput, setThroughput] = useState(0);

  const phaseRef = useRef(phase);
  const animationFrameRef = useRef<number | null>(null);
  const threadIdRef = useRef(0);
  const boxIdRef = useRef(0);
  const taskIdRef = useRef(0);

  const rustCodeLines = [
    "fn process_data(data: Vec<i32>) {",
    "  let shared = Arc::new(Mutex::new(data));",
    "  let handles: Vec<_> = (0..4)",
    "    .map(|_| thread::spawn(...))",
    "}",
  ];

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  // Reset state when demo type changes
  useEffect(() => {
    if (demoType === "threads") {
      setThreads([]);
    } else if (demoType === "ownership") {
      setOwnedBoxes([{ id: 0, scope: "scope1", transitioning: false }]);
      boxIdRef.current = 1;
    } else if (demoType === "async") {
      setAsyncTasks([]);
    }
  }, [demoType]);

  // Phase transitions
  useEffect(() => {
    const timers: number[] = [];

    timers.push(window.setTimeout(() => setPhase("coding"), 500));
    timers.push(window.setTimeout(() => setPhase("borrowcheck"), 4000));
    timers.push(window.setTimeout(() => setPhase("compiling"), 7000));
    timers.push(window.setTimeout(() => setPhase("running"), 10000));
    timers.push(window.setTimeout(() => setPhase("complete"), 20000));

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  // Borrow checker progress
  useEffect(() => {
    if (phase === "borrowcheck") {
      const interval = window.setInterval(() => {
        setBorrowCheckProgress((prev) => Math.min(prev + 12, 100));
      }, 250);
      return () => clearInterval(interval);
    }
  }, [phase]);

  // Compilation progress
  useEffect(() => {
    if (phase === "compiling") {
      const interval = window.setInterval(() => {
        setCompilationProgress((prev) => Math.min(prev + 15, 100));
      }, 300);
      return () => clearInterval(interval);
    }
  }, [phase]);

  // Demo simulation
  useEffect(() => {
    if (phase === "running" || phase === "complete") {
      let lastTime = Date.now();
      let operationCount = 0;
      let throughputTimer = 0;

      const animate = () => {
        if (phaseRef.current !== "running" && phaseRef.current !== "complete") {
          return;
        }

        const currentTime = Date.now();
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        // Throughput calculation
        operationCount += 10;
        throughputTimer += deltaTime;
        if (throughputTimer >= 1000) {
          setThroughput(operationCount);
          operationCount = 0;
          throughputTimer = 0;
        }

        // Threads demo
        if (demoType === "threads") {
          setThreads((prev) => {
            let newThreads = [...prev];
            
            // Add new threads
            if (newThreads.length < 8 && Math.random() > 0.85) {
              const colors = ["#f97316", "#ef4444", "#ec4899", "#a855f7", "#3b82f6"];
              newThreads.push({
                id: threadIdRef.current++,
                x: Math.random() * 80 + 10,
                y: Math.random() * 80 + 10,
                color: colors[Math.floor(Math.random() * colors.length)],
                active: true,
              });
            }

            // Update threads (simulate work)
            newThreads = newThreads.map((t) => ({
              ...t,
              x: (t.x + (Math.random() - 0.5) * 3 + 100) % 100,
              y: (t.y + (Math.random() - 0.5) * 3 + 100) % 100,
              active: Math.random() > 0.02,
            }));

            // Remove inactive threads
            return newThreads.filter((t) => t.active);
          });
        }

        // Ownership demo
        if (demoType === "ownership") {
          setOwnedBoxes((prev) => {
            if (prev.length === 0) {
              return [{ id: boxIdRef.current++, scope: "scope1", transitioning: false }];
            }

            const box = prev[0];
            if (!box.transitioning && Math.random() > 0.97) {
              const nextScope =
                box.scope === "scope1" ? "scope2" : box.scope === "scope2" ? "scope3" : "scope1";
              return [{ ...box, scope: nextScope, transitioning: true }];
            }

            return prev.map((b) => ({ ...b, transitioning: false }));
          });
        }

        // Async tasks demo
        if (demoType === "async") {
          setAsyncTasks((prev) => {
            let newTasks = [...prev];

            // Add new tasks
            if (newTasks.length < 6 && Math.random() > 0.92) {
              const colors = ["#f97316", "#ef4444", "#ec4899", "#a855f7", "#3b82f6", "#10b981"];
              newTasks.push({
                id: taskIdRef.current++,
                progress: 0,
                status: "pending",
                color: colors[Math.floor(Math.random() * colors.length)],
              });
            }

            // Update tasks
            newTasks = newTasks.map((t) => {
              if (t.status === "pending" && Math.random() > 0.7) {
                return { ...t, status: "running" as const };
              }
              if (t.status === "running") {
                const newProgress = t.progress + Math.random() * 8;
                if (newProgress >= 100) {
                  return { ...t, progress: 100, status: "complete" as const };
                }
                return { ...t, progress: newProgress };
              }
              return t;
            });

            // Remove completed tasks
            return newTasks.filter((t) => t.status !== "complete" || t.progress < 100);
          });
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
  }, [phase, demoType]);

  return (
    <div className="w-full">
      <div className="relative min-h-[440px] md:min-h-[520px] bg-linear-to-br from-gray-900 via-orange-950/20 to-gray-900 rounded-xl border-2 border-gray-700 overflow-hidden p-4 md:p-8">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgb(249, 115, 22) 1px, transparent 1px), linear-gradient(90deg, rgb(249, 115, 22) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Phase indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="bg-gray-800 border-2 border-orange-500/50 rounded-full px-4 py-1.5 shadow-lg">
            <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-semibold">
              <div className={`flex items-center gap-1.5 ${phase === "coding" ? "text-orange-400" : "text-gray-500"}`}>
                <div className={`w-2 h-2 rounded-full ${phase === "coding" ? "bg-orange-400 animate-pulse" : "bg-gray-600"}`} />
                <span className="hidden md:inline">Code</span>
              </div>
              <div className="text-gray-600">→</div>
              <div className={`flex items-center gap-1.5 ${phase === "borrowcheck" ? "text-red-400" : "text-gray-500"}`}>
                <div className={`w-2 h-2 rounded-full ${phase === "borrowcheck" ? "bg-red-400 animate-pulse" : "bg-gray-600"}`} />
                <span className="hidden md:inline">Borrow</span>
              </div>
              <div className="text-gray-600">→</div>
              <div className={`flex items-center gap-1.5 ${phase === "compiling" ? "text-blue-400" : "text-gray-500"}`}>
                <div className={`w-2 h-2 rounded-full ${phase === "compiling" ? "bg-blue-400 animate-pulse" : "bg-gray-600"}`} />
                <span className="hidden md:inline">Compile</span>
              </div>
              <div className="text-gray-600">→</div>
              <div className={`flex items-center gap-1.5 ${phase === "running" || phase === "complete" ? "text-orange-400" : "text-gray-500"}`}>
                <div className={`w-2 h-2 rounded-full ${phase === "running" || phase === "complete" ? "bg-orange-400 animate-pulse" : "bg-gray-600"}`} />
                <span className="hidden md:inline">Run</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative pt-12 h-full">
          {/* CODING PHASE */}
          <AnimatePresence mode="wait">
            {phase === "coding" && (
              <motion.div
                key="coding"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center min-h-[300px]"
              >
                <div className="w-full max-w-md">
                  <div className="bg-gray-800/80 border-2 border-orange-500/30 rounded-lg p-4 shadow-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <span className="text-orange-400 text-lg">🦀</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-200 font-bold">Rust Source Code</div>
                        <div className="text-[10px] text-orange-400 font-mono">concurrent_processor.rs</div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 rounded border border-gray-700 p-3">
                      <div className="space-y-1 text-[10px] md:text-xs font-mono">
                        <AnimatePresence>
                          {rustCodeLines.map((line, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.3 }}
                              className="text-orange-300"
                            >
                              {line}
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="mt-3 text-[9px] text-gray-400 text-center">
                      Ownership System • Zero-cost Abstractions
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* BORROW CHECKER PHASE */}
          <AnimatePresence mode="wait">
            {phase === "borrowcheck" && (
              <motion.div
                key="borrowcheck"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center min-h-[300px]"
              >
                <div className="w-full max-w-lg">
                  <div className="bg-gray-800/80 border-2 border-red-500/30 rounded-lg p-5 shadow-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                        <span className="text-red-400 text-lg">🔍</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-200 font-bold">Borrow Checker</div>
                        <div className="text-[10px] text-red-400 font-mono">Analyzing memory safety</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[10px] text-gray-400 mb-2">
                          <span>Safety Analysis</span>
                          <span className="font-mono font-bold">{borrowCheckProgress}%</span>
                        </div>
                        <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute inset-y-0 left-0 bg-linear-to-r from-red-500 to-orange-400"
                            animate={{ width: `${borrowCheckProgress}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>

                      <div className="bg-gray-900/50 rounded border border-gray-700 p-3">
                        <div className="space-y-1 text-[9px] font-mono text-gray-400">
                          <div className="text-green-400">✓ No data races detected</div>
                          <div className="text-green-400">✓ No dangling pointers</div>
                          <div className={borrowCheckProgress > 50 ? "text-green-400" : "text-gray-500"}>
                            {borrowCheckProgress > 50 ? "✓" : "○"} Lifetime validation
                          </div>
                          <div className={borrowCheckProgress > 80 ? "text-green-400" : "text-gray-500"}>
                            {borrowCheckProgress > 80 ? "✓" : "○"} Memory safety guaranteed
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* COMPILING PHASE */}
          <AnimatePresence mode="wait">
            {phase === "compiling" && (
              <motion.div
                key="compiling"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center min-h-[300px]"
              >
                <div className="w-full max-w-lg">
                  <div className="bg-gray-800/80 border-2 border-blue-500/30 rounded-lg p-5 shadow-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 text-lg">⚙️</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-200 font-bold">Compiling with LLVM</div>
                        <div className="text-[10px] text-blue-400 font-mono">rustc --release</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[10px] text-gray-400 mb-2">
                          <span>Optimization: Release Mode</span>
                          <span className="font-mono font-bold">{compilationProgress}%</span>
                        </div>
                        <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute inset-y-0 left-0 bg-linear-to-r from-blue-500 to-cyan-400"
                            animate={{ width: `${compilationProgress}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>

                      <div className="bg-gray-900/50 rounded border border-gray-700 p-3">
                        <div className="space-y-1 text-[9px] font-mono text-gray-400">
                          <div className="text-green-400">✓ Type checking complete</div>
                          <div className="text-green-400">✓ LLVM IR generation</div>
                          <div className={compilationProgress > 50 ? "text-green-400" : "text-gray-500"}>
                            {compilationProgress > 50 ? "✓" : "○"} Optimization passes
                          </div>
                          <div className={compilationProgress > 80 ? "text-green-400" : "text-gray-500"}>
                            {compilationProgress > 80 ? "✓" : "○"} Linking binary
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* RUNNING PHASE */}
          <AnimatePresence>
            {(phase === "running" || phase === "complete") && (
              <motion.div
                key="running-complete"
                layout={false}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col md:flex-row gap-4 items-stretch justify-between min-h-[360px]"
              >
                {/* Demo Type Selector */}
                <div className="w-full md:w-48 shrink-0">
                  <div className="bg-gray-800/80 border-2 border-orange-500/30 rounded-lg p-3 shadow-xl">
                    <div className="text-[10px] text-gray-400 font-semibold mb-2">Demo Type:</div>
                    <div className="space-y-2">
                      {[
                        { id: "threads", label: "Threads", icon: "🧵" },
                        { id: "ownership", label: "Ownership", icon: "📦" },
                        { id: "async", label: "Async", icon: "⚡" },
                      ].map((type) => (
                        <div
                          key={type.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setDemoType(type.id as DemoType);
                          }}
                          className={`w-full px-3 py-2 rounded text-[10px] font-semibold transition-all cursor-pointer select-none ${
                            demoType === type.id
                              ? "bg-orange-500 text-white"
                              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          }`}
                        >
                          {type.icon} {type.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Demo Canvas */}
                <div className="flex-1 min-w-0">
                  <div className="bg-gray-800/80 border-2 border-orange-500/30 rounded-lg p-4 shadow-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                        <span className="text-orange-400 text-lg">🦀</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-gray-200 font-bold">Rust Runtime</div>
                        <div className="text-[10px] text-orange-400 font-mono">Fearless Concurrency</div>
                      </div>
                    </div>

                    {/* Canvas */}
                    <div className="relative bg-gray-900 rounded border-2 border-gray-700 overflow-hidden w-full h-[200px]">
                      {/* Threads Demo */}
                      {demoType === "threads" && (
                        <div className="absolute inset-0">
                          <AnimatePresence>
                            {threads.map((t) => (
                              <motion.div
                                key={t.id}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                className="absolute rounded-full shadow-lg"
                                style={{
                                  left: `${t.x}%`,
                                  top: `${t.y}%`,
                                  width: "16px",
                                  height: "16px",
                                  backgroundColor: t.color,
                                  boxShadow: `0 0 12px ${t.color}`,
                                }}
                              />
                            ))}
                          </AnimatePresence>
                          {threads.length === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs">
                              Starting threads...
                            </div>
                          )}
                        </div>
                      )}

                      {/* Ownership Demo */}
                      {demoType === "ownership" && (
                        <div className="absolute inset-0 flex items-center justify-around p-4">
                          {["scope1", "scope2", "scope3"].map((scope) => (
                            <div
                              key={scope}
                              className="flex flex-col items-center gap-2"
                            >
                              <div className="text-[9px] text-gray-400 font-mono">{scope}</div>
                              <div className="w-16 h-16 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                  {ownedBoxes.map((box) =>
                                    box.scope === scope ? (
                                      <motion.div
                                        key={box.id}
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        exit={{ scale: 0, rotate: 180 }}
                                        transition={{ duration: 0.5, type: "spring" }}
                                        className="w-10 h-10 bg-linear-to-br from-orange-500 to-red-500 rounded-lg shadow-lg"
                                      />
                                    ) : null
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Async Tasks Demo */}
                      {demoType === "async" && (
                        <div className="absolute inset-0 p-3 space-y-2 overflow-hidden">
                          <AnimatePresence>
                            {asyncTasks.map((task) => (
                              <motion.div
                                key={task.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="relative"
                              >
                                <div className="flex items-center gap-2 text-[9px] text-gray-400 mb-1">
                                  <span className="font-mono">Task {task.id}</span>
                                  <span className={`
                                    ${task.status === "pending" ? "text-gray-500" : ""}
                                    ${task.status === "running" ? "text-orange-400" : ""}
                                    ${task.status === "complete" ? "text-green-400" : ""}
                                  `}>
                                    {task.status === "pending" && "⏳"}
                                    {task.status === "running" && "⚡"}
                                    {task.status === "complete" && "✓"}
                                  </span>
                                </div>
                                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                                  <motion.div
                                    className="absolute inset-y-0 left-0 rounded-full"
                                    style={{ backgroundColor: task.color }}
                                    animate={{ width: `${task.progress}%` }}
                                    transition={{ duration: 0.3 }}
                                  />
                                </div>
                              </motion.div>
                            ))}
                          </AnimatePresence>
                          {asyncTasks.length === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs">
                              Spawning async tasks...
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Performance Metrics */}
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="bg-gray-900/50 rounded border border-gray-700 p-2">
                        <div className="text-[9px] text-gray-400">Safety Score</div>
                        <div className="text-lg font-bold text-green-400 font-mono">{safetyScore}%</div>
                      </div>
                      <div className="bg-gray-900/50 rounded border border-gray-700 p-2">
                        <div className="text-[9px] text-gray-400">Operations/sec</div>
                        <div className="text-lg font-bold text-orange-400 font-mono">{throughput}</div>
                      </div>
                    </div>

                    {phase === "complete" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-3 px-3 py-2 bg-green-500/20 border-2 border-green-500/50 rounded-lg text-center"
                      >
                        <div className="text-xs text-green-400 font-bold">✓ Zero Data Races • Memory Safe</div>
                      </motion.div>
                    )}
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
              transition={{ delay: 0.3 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4"
            >
              <div className="bg-gray-800/95 backdrop-blur border-2 border-gray-700 rounded-lg p-3 shadow-lg">
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-[9px] md:text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                    <span className="text-gray-300 font-medium">Memory Safety</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="text-gray-300 font-medium">Zero Data Races</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="text-gray-300 font-medium">Fearless Concurrency</span>
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
            transition={{ delay: 0.5 }}
            className="mt-4 md:mt-6 text-center"
          >
            <p className="text-xs md:text-sm text-gray-400">
              Rust Safety Guarantee • <span className="text-amber-400 font-semibold">Engineered by WESA</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};