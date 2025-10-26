import { outputLinesNode } from "@/src/data/codeSnippets";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const NodejsVisual = () => {
  const [stage, setStage] = useState<"idle" | "source" | "streaming" | "complete">("idle");
  const [chunks, setChunks] = useState<Chunk[]>([]);
  const [renderedLines, setRenderedLines] = useState(0);
  const stageRef = useRef(stage);
  const chunksRef = useRef<Chunk[]>([]);
  const nextIdRef = useRef(0);

  useEffect(() => {
    stageRef.current = stage;
    chunksRef.current = chunks;
  }, [stage, chunks]);

  useEffect(() => {
    const timers: number[] = [];

    timers.push(window.setTimeout(() => setStage("source"), 500));
    timers.push(window.setTimeout(() => setStage("streaming"), 1500));
    timers.push(
      window.setTimeout(() => {
        setStage("complete");
        setRenderedLines(outputLinesNode.length);
      }, 20000)
    );

    const createChunkInterval = window.setInterval(() => {
      if (stageRef.current === "streaming") {
        setChunks((prev) => {
          if (prev.length >= 15) return prev;
          const id = nextIdRef.current++;
          return [...prev, { id, position: "source" }];
        });
      }
    }, 1000);

    const moveChunksInterval = window.setInterval(() => {
      if (stageRef.current === "streaming") {
        setChunks((prev) =>
          prev.map((chunk) => {
            if (chunk.position === "source") return { ...chunk, position: "transit" };
            if (chunk.position === "transit") return { ...chunk, position: "buffer" };
            if (chunk.position === "buffer") return { ...chunk, position: "consumed" };
            return chunk;
          })
        );
      }
    }, 1100);

    const renderInterval = window.setInterval(() => {
      if (stageRef.current === "streaming") {
        const consumedCount = chunksRef.current.filter((c) => c.position === "consumed").length;
        setRenderedLines((prev) => Math.min(consumedCount, outputLinesNode.length));
      }
    }, 1100);

    return () => {
      timers.forEach((t) => clearTimeout(t));
      clearInterval(createChunkInterval);
      clearInterval(moveChunksInterval);
      clearInterval(renderInterval);
    };
  }, []);

  const transitChunks = chunks.filter((c) => c.position === "transit");
  const bufferChunks = chunks.filter((c) => c.position === "buffer");

  return (
    <div className="w-full">
      <div className="relative min-h-[320px] md:min-h-[420px] bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg border border-gray-700 overflow-hidden p-4 md:p-8">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 h-full">
          <div className="shrink-0 w-full md:w-48">
            <AnimatePresence mode="wait">
              {stage !== "idle" && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-gray-800/80 backdrop-blur rounded-lg border border-green-500/30 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 text-lg">📄</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-mono">Source</div>
                      <div className="text-[10px] text-green-400 font-mono">fs.createReadStream</div>
                    </div>
                  </div>
                  <div className="space-y-1 text-[10px] font-mono mb-3">
                    <div className="text-gray-500">// Streaming data</div>
                    <div className="text-blue-400">
                      stream<span className="text-gray-400">.pipe(res)</span>
                    </div>
                  </div>
                  {stage === "complete" && (
                    <div className="mt-3 px-2 py-1 bg-green-500/20 border border-green-500/50 rounded">
                      <div className="text-[10px] text-green-400 text-center">✓ Complete</div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex-1 relative min-h-[140px] md:min-h-[180px] w-full">
            <div className="absolute top-8 md:top-12 left-0 right-0 h-16 md:h-20">
              <div className="w-full h-full bg-gray-700/30 border-t-2 border-b-2 border-green-500/30 rounded-sm relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-green-500/10 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                <AnimatePresence>
                  {transitChunks.slice(-4).map((chunk) => (
                    <motion.div
                      key={chunk.id}
                      initial={{ x: "0%", opacity: 0 }}
                      animate={{ x: "100%", opacity: 1 }}
                      exit={{ x: "100%", opacity: 0 }}
                      transition={{ duration: 1.2, ease: "linear" }}
                      className="absolute top-1/2 -translate-y-1/2 left-0"
                    >
                      <div className="bg-blue-500 rounded px-2 py-1 md:px-3 md:py-1.5 shadow-lg shadow-blue-500/50 whitespace-nowrap">
                        <div className="text-[10px] md:text-xs text-white font-mono font-semibold">Chunk {chunk.id + 1}</div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {stage === "streaming" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-4 py-2 min-w-[140px]">
                <div className="text-center">
                  <div className="text-[10px] text-yellow-400 font-mono mb-1">Queue</div>
                  <div className="flex items-center justify-center gap-1 flex-wrap">
                    {bufferChunks.slice(-3).map((chunk) => (
                      <motion.div key={chunk.id} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="w-2 h-2 md:w-3 md:h-3 rounded-sm bg-yellow-400" />
                    ))}
                  </div>
                  <div className="text-[10px] text-yellow-300 mt-1 font-semibold">{bufferChunks.length} queued</div>
                </div>
              </motion.div>
            )}

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-800/80 border border-gray-700 rounded px-3 py-1">
              <div className="text-[10px] text-gray-400 font-mono whitespace-nowrap">Stream Pipeline</div>
            </motion.div>
          </div>

          <div className="shrink-0 w-full md:w-56 pb-20">
            <AnimatePresence mode="wait">
              {(stage === "streaming" || stage === "complete") && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-gray-800/80 backdrop-blur rounded-lg border border-blue-500/30 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 text-lg">🌐</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-mono">Output</div>
                      <div className="text-[10px] text-blue-400 font-mono">Progressive</div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 rounded border border-gray-700 p-2 min-h-[160px] md:min-h-[180px] overflow-hidden">
                    <div className="space-y-0.5 text-[9px] md:text-[10px] font-mono">
                      <AnimatePresence>
                        {outputLinesNode.slice(0, renderedLines).map((line, idx) => (
                          <motion.div key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="text-gray-300">
                            {line}
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      {renderedLines < outputLinesNode.length && stage === "streaming" && (
                        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-1.5 h-3 bg-blue-400" />
                      )}
                    </div>
                  </div>

                  <div className="mt-3 text-[10px] text-gray-400 text-center">
                    Rendered: <span className="text-blue-400 font-semibold">{renderedLines}</span> / {outputLinesNode.length}
                  </div>

                  {stage === "complete" && (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-3 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded text-center">
                      <div className="text-[10px] text-green-400 font-semibold">✓ Fully Rendered</div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <AnimatePresence>
          {stage === "complete" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
              <div className="bg-gray-800/90 backdrop-blur border border-gray-700 rounded-lg p-3">
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-[10px] md:text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-gray-400">Non-blocking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-gray-400">Memory Efficient</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="text-gray-400">Real-time</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {stage === "complete" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-4 md:mt-6 text-center">
            <p className="text-xs md:text-sm text-gray-600">
              Efficient streaming for modern applications • <span className="text-amber-300 font-semibold">Engineered by WESA</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
