import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

type Phase = "idle" | "coding" | "compiling" | "docker" | "running" | "complete";
type GameType = "particles" | "physics" | "cube";

export const CppVisual = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [gameType, setGameType] = useState<GameType>("particles");
  const [compilationProgress, setCompilationProgress] = useState(0);
  const [dockerProgress, setDockerProgress] = useState(0);
  const [fps, setFps] = useState(0);
  const [frameTime, setFrameTime] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [physicsY, setPhysicsY] = useState(20);
  const [cubeRotation, setCubeRotation] = useState(0);

  const phaseRef = useRef(phase);
  const particleIdRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const cppCodeLines = [
    "class GameEngine {",
    "  std::unique_ptr<Renderer>",
    "  void update(float dt)",
    "  void render() const",
    "};",
  ];

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  // Reset animation state when game type changes
  useEffect(() => {
    if (gameType === "particles") {
      setParticles([]);
    } else if (gameType === "physics") {
      setPhysicsY(20);
    } else if (gameType === "cube") {
      setCubeRotation(0);
    }
  }, [gameType]);

  // Phase transitions
  useEffect(() => {
    const timers: number[] = [];

    timers.push(window.setTimeout(() => setPhase("coding"), 500));
    timers.push(window.setTimeout(() => setPhase("compiling"), 4000));
    timers.push(window.setTimeout(() => setPhase("docker"), 7000));
    timers.push(window.setTimeout(() => setPhase("running"), 10000));
    timers.push(window.setTimeout(() => setPhase("complete"), 20000));

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  // Compilation progress
  useEffect(() => {
    if (phase === "compiling") {
      const interval = window.setInterval(() => {
        setCompilationProgress((prev) => Math.min(prev + 15, 100));
      }, 300);
      return () => clearInterval(interval);
    }
  }, [phase]);

  // Docker progress
  useEffect(() => {
    if (phase === "docker") {
      const interval = window.setInterval(() => {
        setDockerProgress((prev) => Math.min(prev + 12, 100));
      }, 250);
      return () => clearInterval(interval);
    }
  }, [phase]);

  // Game simulation
  useEffect(() => {
    if (phase === "running" || phase === "complete") {
      let lastTime = Date.now();
      let frameCount = 0;
      let fpsTimer = 0;

      const animate = () => {
        if (phaseRef.current !== "running" && phaseRef.current !== "complete") {
          return;
        }

        const currentTime = Date.now();
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        // FPS calculation
        frameCount++;
        fpsTimer += deltaTime;
        if (fpsTimer >= 1000) {
          setFps(frameCount);
          setFrameTime(1000 / frameCount);
          frameCount = 0;
          fpsTimer = 0;
        }

        // Particle system
        if (gameType === "particles") {
          setParticles((prev) => {
            // Add new particles
            const newParticles = [...prev];
            if (newParticles.length < 25 && Math.random() > 0.7) {
              newParticles.push({
                id: particleIdRef.current++,
                x: Math.random() * 100,
                y: -5,
                vx: (Math.random() - 0.5) * 2,
                vy: Math.random() * 3 + 2,
                size: Math.random() * 4 + 2,
              });
            }

            // Update particles
            return newParticles
              .map((p) => ({
                ...p,
                x: p.x + p.vx * 0.5,
                y: p.y + p.vy * 0.5,
                vy: p.vy + 0.15, // gravity
              }))
              .filter((p) => p.y < 110);
          });
        }

        // Physics ball
        if (gameType === "physics") {
          setPhysicsY((prev) => {
            const next = prev + 3;
            if (next > 85) return 20; // Reset
            return next;
          });
        }

        // Cube rotation
        if (gameType === "cube") {
          setCubeRotation((prev) => (prev + 2) % 360);
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
  }, [phase, gameType]);

  return (
    <div className="w-full">
      <div className="relative min-h-[440px] md:min-h-[520px] bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl border-2 border-gray-700 overflow-hidden p-4 md:p-8">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgb(236, 72, 153) 1px, transparent 1px), linear-gradient(90deg, rgb(236, 72, 153) 1px, transparent 1px)",
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
          <div className="bg-gray-800 border-2 border-pink-500/50 rounded-full px-4 py-1.5 shadow-lg">
            <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-semibold">
              <div className={`flex items-center gap-1.5 ${phase === "coding" ? "text-cyan-400" : "text-gray-500"}`}>
                <div className={`w-2 h-2 rounded-full ${phase === "coding" ? "bg-cyan-400 animate-pulse" : "bg-gray-600"}`} />
                <span className="hidden md:inline">Code</span>
              </div>
              <div className="text-gray-600">→</div>
              <div className={`flex items-center gap-1.5 ${phase === "compiling" ? "text-blue-400" : "text-gray-500"}`}>
                <div className={`w-2 h-2 rounded-full ${phase === "compiling" ? "bg-blue-400 animate-pulse" : "bg-gray-600"}`} />
                <span className="hidden md:inline">Compile</span>
              </div>
              <div className="text-gray-600">→</div>
              <div className={`flex items-center gap-1.5 ${phase === "docker" ? "text-blue-500" : "text-gray-500"}`}>
                <div className={`w-2 h-2 rounded-full ${phase === "docker" ? "bg-blue-500 animate-pulse" : "bg-gray-600"}`} />
                <span className="hidden md:inline">Docker</span>
              </div>
              <div className="text-gray-600">→</div>
              <div className={`flex items-center gap-1.5 ${phase === "running" || phase === "complete" ? "text-pink-400" : "text-gray-500"}`}>
                <div className={`w-2 h-2 rounded-full ${phase === "running" || phase === "complete" ? "bg-pink-400 animate-pulse" : "bg-gray-600"}`} />
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
                  <div className="bg-gray-800/80 border-2 border-cyan-500/30 rounded-lg p-4 shadow-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                        <span className="text-cyan-400 text-lg">💻</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-200 font-bold">C++ Source Code</div>
                        <div className="text-[10px] text-cyan-400 font-mono">game_engine.cpp</div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 rounded border border-gray-700 p-3">
                      <div className="space-y-1 text-[10px] md:text-xs font-mono">
                        <AnimatePresence>
                          {cppCodeLines.map((line, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.3 }}
                              className="text-cyan-300"
                            >
                              {line}
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="mt-3 text-[9px] text-gray-400 text-center">
                      Modern C++ • Zero-cost abstractions
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
                        <div className="text-sm text-gray-200 font-bold">Compiling</div>
                        <div className="text-[10px] text-blue-400 font-mono">g++ -O3 -std=c++20</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[10px] text-gray-400 mb-2">
                          <span>Optimization Level: O3</span>
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
                          <div className="text-green-400">✓ Parsing source files</div>
                          <div className="text-green-400">✓ Template instantiation</div>
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

          {/* DOCKER PHASE */}
          <AnimatePresence mode="wait">
            {phase === "docker" && (
              <motion.div
                key="docker"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center min-h-[300px]"
              >
                <div className="w-full max-w-lg">
                  <div className="bg-gray-800/80 border-2 border-blue-400/30 rounded-lg p-5 shadow-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-400/20 flex items-center justify-center">
                        <span className="text-blue-400 text-lg">🐋</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-200 font-bold">Docker Container</div>
                        <div className="text-[10px] text-blue-400 font-mono">Spinning up runtime</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[10px] text-gray-400 mb-2">
                          <span>Container Status</span>
                          <span className="font-mono font-bold">{dockerProgress}%</span>
                        </div>
                        <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute inset-y-0 left-0 bg-linear-to-r from-blue-600 to-blue-400"
                            animate={{ width: `${dockerProgress}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>

                      <div className="bg-gray-900/50 rounded border border-gray-700 p-3">
                        <div className="space-y-1 text-[9px] font-mono text-gray-400">
                          <div className="text-blue-400">$ docker run cpp-game-engine</div>
                          <div className="text-green-400">✓ Image pulled</div>
                          <div className={dockerProgress > 50 ? "text-green-400" : "text-gray-500"}>
                            {dockerProgress > 50 ? "✓" : "○"} Container started
                          </div>
                          <div className={dockerProgress > 80 ? "text-green-400" : "text-gray-500"}>
                            {dockerProgress > 80 ? "✓" : "○"} Binary loaded
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
              {/* Game Type Selector */}
              <div className="w-full md:w-48 shrink-0">
                <div className="bg-gray-800/80 border-2 border-pink-500/30 rounded-lg p-3 shadow-xl">
                  <div className="text-[10px] text-gray-400 font-semibold mb-2">Demo Type:</div>
                  <div className="space-y-2">
                    {[
                      { id: "particles", label: "Particles", icon: "✨" },
                      { id: "physics", label: "Physics", icon: "🎱" },
                      { id: "cube", label: "3D Cube", icon: "🎲" },
                    ].map((type) => (
                      <div
                        key={type.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setGameType(type.id as GameType);
                        }}
                        className={`w-full px-3 py-2 rounded text-[10px] font-semibold transition-all cursor-pointer select-none ${
                          gameType === type.id
                            ? "bg-pink-500 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        {type.icon} {type.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Game Canvas */}
              <div className="flex-1 min-w-0">
                <div className="bg-gray-800/80 border-2 border-pink-500/30 rounded-lg p-4 shadow-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center shrink-0">
                      <span className="text-pink-400 text-lg">🎮</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-200 font-bold">Game Engine Runtime</div>
                      <div className="text-[10px] text-pink-400 font-mono">60 FPS Target</div>
                    </div>
                  </div>

                  {/* Canvas */}
                  <div className="relative bg-gray-900 rounded border-2 border-gray-700 overflow-hidden w-full h-[200px]">
                    {/* Particles */}
                    {gameType === "particles" && (
                      <div className="absolute inset-0">
                        <AnimatePresence>
                          {particles.map((p) => (
                            <motion.div
                              key={p.id}
                              initial={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute rounded-full bg-linear-to-br from-pink-400 to-purple-500"
                              style={{
                                left: `${p.x}%`,
                                top: `${p.y}%`,
                                width: `${p.size}px`,
                                height: `${p.size}px`,
                              }}
                            />
                          ))}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Physics Ball */}
                    {gameType === "physics" && (
                      <div className="absolute inset-0">
                        <motion.div
                          className="absolute w-12 h-12 rounded-full bg-linear-to-br from-pink-400 to-purple-500 shadow-lg"
                          style={{
                            left: "calc(50% - 24px)",
                            top: `${physicsY}%`,
                          }}
                          animate={{
                            scale: physicsY > 80 ? [1, 0.9, 1] : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    )}

                    {/* 3D Cube */}
                    {gameType === "cube" && (
                      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "800px" }}>
                        <div
                          className="relative"
                          style={{
                            width: "80px",
                            height: "80px",
                            transformStyle: "preserve-3d",
                            transform: `rotateX(${cubeRotation}deg) rotateY(${cubeRotation}deg)`,
                          }}
                        >
                          {/* Cube faces */}
                          {[
                            { transform: "translateZ(40px)", bg: "from-pink-500 to-pink-600" },
                            { transform: "translateZ(-40px) rotateY(180deg)", bg: "from-purple-500 to-purple-600" },
                            { transform: "rotateY(90deg) translateZ(40px)", bg: "from-blue-500 to-blue-600" },
                            { transform: "rotateY(-90deg) translateZ(40px)", bg: "from-cyan-500 to-cyan-600" },
                            { transform: "rotateX(90deg) translateZ(40px)", bg: "from-pink-400 to-pink-500" },
                            { transform: "rotateX(-90deg) translateZ(40px)", bg: "from-purple-400 to-purple-500" },
                          ].map((face, i) => (
                            <div
                              key={i}
                              className={`absolute w-20 h-20 bg-linear-to-br ${face.bg} border-2 border-white/20`}
                              style={{
                                transform: face.transform,
                                backfaceVisibility: "visible",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Performance Metrics */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="bg-gray-900/50 rounded border border-gray-700 p-2">
                      <div className="text-[9px] text-gray-400">FPS</div>
                      <div className="text-lg font-bold text-green-400 font-mono">{fps}</div>
                    </div>
                    <div className="bg-gray-900/50 rounded border border-gray-700 p-2">
                      <div className="text-[9px] text-gray-400">Frame Time</div>
                      <div className="text-lg font-bold text-cyan-400 font-mono">{frameTime.toFixed(1)}ms</div>
                    </div>
                  </div>

                  {phase === "complete" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-3 px-3 py-2 bg-green-500/20 border-2 border-green-500/50 rounded-lg text-center"
                    >
                      <div className="text-xs text-green-400 font-bold">✓ Running at Native Speed</div>
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
                    <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                    <span className="text-gray-300 font-medium">Native Performance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span className="text-gray-300 font-medium">Zero Overhead</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                    <span className="text-gray-300 font-medium">Containerized</span>
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
            <p className="text-xs md:text-sm text-zinc-600">
              C++ Performance Pipeline • <span className="text-amber-400 font-semibold">Engineered by WESA</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};