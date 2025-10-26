import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Token {
    id: number;
    text: string;
    type: "text" | "code" | "data";
}

interface Message {
    role: "user" | "assistant";
    content: string;
}

type Phase = "idle" | "training" | "trained" | "inference" | "complete";

export const PythonVisual = () => {
    const [phase, setPhase] = useState<Phase>("idle");
    const [trainingState, setTrainingState] = useState({
        tokens: [] as Token[],
        progress: 0,
        loss: 2.5,
    });
    const [inferenceTokens, setInferenceTokens] = useState<string[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [streamingResponse, setStreamingResponse] = useState("");
    const [responseComplete, setResponseComplete] = useState(false);

    const phaseRef = useRef(phase);
    const tokenIdRef = useRef(0);
    const inferenceTokensRef = useRef<string[]>([]);

    const trainingDataTokens = [
        { text: "Machine", type: "text" as const },
        { text: "learning", type: "text" as const },
        { text: "models", type: "text" as const },
        { text: "def", type: "code" as const },
        { text: "train", type: "code" as const },
        { text: "neural", type: "data" as const },
        { text: "network", type: "data" as const },
        { text: "AI", type: "text" as const },
        { text: "processes", type: "text" as const },
        { text: "data", type: "data" as const },
    ];

    const userQuestion = "What is machine learning?";
    const userQuestionTokens = ["What", "is", "machine", "learning", "?"];
    const aiResponse =
        "Machine learning is a method of data analysis that automates analytical model building.";
    const aiResponseTokens = aiResponse.split(" ");

    // Keep refs in sync
    useEffect(() => {
        phaseRef.current = phase;
    }, [phase]);

    useEffect(() => {
        inferenceTokensRef.current = inferenceTokens;
    }, [inferenceTokens]);

    // -----------------------------
    //  MAIN PHASE FLOW
    // -----------------------------
    useEffect(() => {
        const timers: number[] = [];

        timers.push(window.setTimeout(() => setPhase("training"), 500));
        timers.push(
            window.setTimeout(() => {
                setPhase("trained");
            }, 10000)
        );

        // Smooth transition to inference
        timers.push(
            window.setTimeout(() => {
                setPhase("inference");
                setMessages([{ role: "user", content: userQuestion }]);
            }, 11500)
        );

        timers.push(window.setTimeout(() => setPhase("complete"), 20000));

        return () => timers.forEach(clearTimeout);
    }, []);

    // -----------------------------
    //  TRAINING ANIMATION LOOP
    // -----------------------------
    useEffect(() => {
        if (phase !== "training") return;
        const interval = window.setInterval(() => {
            setTrainingState((prev) => {
                const nextProgress = Math.min(prev.progress + 10, 100);
                const nextLoss = Math.max(prev.loss - 0.25, 0.05);
                const nextTokens =
                    prev.tokens.length >= 15
                        ? prev.tokens
                        : [
                            ...prev.tokens,
                            {
                                ...trainingDataTokens[
                                tokenIdRef.current % trainingDataTokens.length
                                ],
                                id: tokenIdRef.current++,
                            },
                        ];
                return {
                    tokens: nextTokens,
                    progress: nextProgress,
                    loss: nextLoss,
                };
            });
        }, 600);
        return () => clearInterval(interval);
    }, [phase]);

    // -----------------------------
    //  INFERENCE TOKENIZATION
    // -----------------------------
    useEffect(() => {
        if (phase !== "inference") return;

        const inferenceInterval = window.setInterval(() => {
            setInferenceTokens((prev) => {
                if (prev.length < userQuestionTokens.length) {
                    return [...prev, userQuestionTokens[prev.length]];
                }
                return prev;
            });
        }, 300);

        // Streaming response
        let responseTokenIndex = 0;
        const responseInterval = window.setInterval(() => {
            if (
                phaseRef.current === "inference" &&
                inferenceTokensRef.current.length === userQuestionTokens.length
            ) {
                if (responseTokenIndex < aiResponseTokens.length) {
                    setStreamingResponse((prev) => {
                        const newToken = aiResponseTokens[responseTokenIndex];
                        responseTokenIndex++;
                        return prev + (prev ? " " : "") + newToken;
                    });
                } else {
                    setResponseComplete(true);
                }
            }
        }, 200);

        return () => {
            clearInterval(inferenceInterval);
            clearInterval(responseInterval);
        };
    }, [phase]);

    // -----------------------------
    //  FINAL RESPONSE MESSAGE
    // -----------------------------
    useEffect(() => {
        if (responseComplete) {
            setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }]);
        }
    }, [responseComplete]);

    const getTokenColor = (type: Token["type"]) => {
        switch (type) {
            case "text":
                return "bg-blue-500 border-blue-600";
            case "code":
                return "bg-purple-500 border-purple-600";
            case "data":
                return "bg-green-500 border-green-600";
        }
    };

    // Shared transition props
    const fadeSlide = {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -30 },
        transition: { duration: 0.6, ease: "easeInOut" },
    };

    return (
        <div className="w-full">
            <div className="relative min-h-[420px] md:min-h-[500px] bg-linear-to-br from-gray-50 via-white to-blue-50 rounded-xl border-2 border-gray-300 overflow-hidden p-4 md:p-8">
                {/* Background grid */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgb(99, 102, 241) 1px, transparent 1px), linear-gradient(90deg, rgb(99, 102, 241) 1px, transparent 1px)",
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
                    <div className="bg-white border-2 border-indigo-300 rounded-full px-4 py-1.5 shadow-lg">
                        <div className="flex items-center gap-3 text-xs font-semibold">
                            <div
                                className={`flex items-center gap-1.5 ${phase === "training" ? "text-orange-600" : "text-gray-400"
                                    }`}
                            >
                                <div
                                    className={`w-2 h-2 rounded-full ${phase === "training"
                                        ? "bg-orange-500 animate-pulse"
                                        : "bg-gray-300"
                                        }`}
                                />
                                Training
                            </div>
                            <div className="text-gray-300">→</div>
                            <div
                                className={`flex items-center gap-1.5 ${phase === "inference" || phase === "complete"
                                    ? "text-indigo-600"
                                    : "text-gray-400"
                                    }`}
                            >
                                <div
                                    className={`w-2 h-2 rounded-full ${phase === "inference" || phase === "complete"
                                        ? "bg-indigo-500 animate-pulse"
                                        : "bg-gray-300"
                                        }`}
                                />
                                Inference
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="relative pt-12 h-full">
                    {/* TRAINING PHASE */}
                    <AnimatePresence mode="wait">
                        {(phase === "training" || phase === "trained") && (
                            //@ts-ignore
                            <motion.div {...fadeSlide} className="flex flex-col md:flex-row gap-6 items-start justify-between">
                                {/* Training Data Input */}
                                <div className="w-full md:w-56">
                                    <div className="bg-white border-2 border-blue-300 rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                                <span className="text-blue-600 text-lg">📚</span>
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-800 font-bold">Training Data</div>
                                                <div className="text-[10px] text-blue-600 font-mono">Documents</div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="text-[9px] text-gray-600 font-semibold">Tokenization:</div>
                                            <div className="flex gap-1 flex-wrap">
                                                <AnimatePresence>
                                                    {trainingState.tokens.slice(-6).map((token) => (
                                                        <motion.div
                                                            key={token.id}
                                                            initial={{ scale: 0, opacity: 0 }}
                                                            animate={{ scale: 1, opacity: 1 }}
                                                            exit={{ scale: 0, opacity: 0 }}
                                                            className={`${getTokenColor(token.type)} border rounded px-1.5 py-0.5`}
                                                        >
                                                            <div className="text-[8px] text-white font-mono font-bold">
                                                                {token.text}
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Neural Network Visualization */}
                                <div className="flex-1">
                                    <div className="bg-white border-2 border-orange-300 rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                                                <span className="text-orange-600 text-lg">🧠</span>
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-800 font-bold">Neural Network</div>
                                                <div className="text-[10px] text-orange-600 font-mono">Learning Patterns</div>
                                            </div>
                                        </div>

                                        <div className="mb-4 flex justify-center gap-3">
                                            {[1, 2, 3, 4].map((layer) => (
                                                <div key={layer} className="flex flex-col gap-1">
                                                    {[1, 2, 3, 4].map((node) => (
                                                        <motion.div
                                                            key={node}
                                                            className="w-3 h-3 rounded-full bg-linear-to-br from-orange-400 to-amber-500"
                                                            animate={{
                                                                scale: [1, 1.2, 1],
                                                                opacity: [0.6, 1, 0.6],
                                                            }}
                                                            transition={{
                                                                duration: 1.5,
                                                                delay: layer * 0.1 + node * 0.05,
                                                                repeat: Infinity,
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Progress bars */}
                                        <div className="space-y-3">
                                            <div>
                                                <div className="flex justify-between text-[9px] text-gray-600 mb-1">
                                                    <span>Training Progress</span>
                                                    <span className="font-mono font-bold">{trainingState.progress}%</span>
                                                </div>
                                                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="absolute inset-y-0 left-0 bg-linear-to-r from-orange-400 to-amber-500"
                                                        animate={{ width: `${trainingState.progress}%` }}
                                                        transition={{ duration: 0.5 }}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between text-[9px] text-gray-600 mb-1">
                                                    <span>Loss</span>
                                                    <span className="font-mono font-bold">{trainingState.loss.toFixed(2)}</span>
                                                </div>
                                                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="absolute inset-y-0 left-0 bg-linear-to-r from-red-500 to-green-500"
                                                        animate={{
                                                            width: `${((2.5 - trainingState.loss) / 2.5) * 100}%`,
                                                        }}
                                                        transition={{ duration: 0.5 }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {phase === "trained" && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="mt-4 px-3 py-2 bg-green-100 border-2 border-green-400 rounded-lg text-center"
                                            >
                                                <div className="text-xs text-green-700 font-bold">
                                                    ✓ Model Trained & Saved
                                                </div>
                                                <div className="text-[9px] text-green-600 mt-0.5">
                                                    Ready for deployment
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* INFERENCE PHASE */}
                    <AnimatePresence mode="wait">
                        {(phase === "inference" || phase === "complete") && (
                            //@ts-ignore
                            <motion.div {...fadeSlide} className="flex flex-col md:flex-row gap-6 items-start justify-between">
                                {/* Chat interface */}
                                <div className="w-full md:w-64">
                                    <div className="bg-white border-2 border-indigo-300 rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                                                <span className="text-indigo-600 text-lg">💬</span>
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-800 font-bold">Chat Interface</div>
                                                <div className="text-[10px] text-indigo-600 font-mono">User Query</div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            {messages.map((msg, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className={`rounded-lg p-2 border text-[10px] leading-relaxed ${msg.role === "user"
                                                        ? "bg-indigo-50 border-indigo-200 text-gray-700"
                                                        : "bg-green-50 border-green-200 text-gray-800"
                                                        }`}
                                                >
                                                    <div className="text-[9px] font-semibold mb-1">
                                                        {msg.role === "user" ? "You:" : "AI:"}
                                                    </div>
                                                    <div>{msg.content}</div>
                                                </motion.div>
                                            ))}

                                            <div>
                                                <div className="text-[9px] text-gray-600 font-semibold mb-1">
                                                    Tokens:
                                                </div>
                                                <div className="flex gap-1 flex-wrap">
                                                    <AnimatePresence>
                                                        {inferenceTokens.map((token, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ scale: 0, opacity: 0 }}
                                                                animate={{ scale: 1, opacity: 1 }}
                                                                className="bg-indigo-500 border border-indigo-600 rounded px-1.5 py-0.5"
                                                            >
                                                                <div className="text-[8px] text-white font-mono font-bold">
                                                                    {token}
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Model Processing */}
                                <div className="flex-1">
                                    <div className="bg-white border-2 border-purple-300 rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                                                <span className="text-purple-600 text-lg">⚡</span>
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-800 font-bold">Model Processing</div>
                                                <div className="text-[10px] text-purple-600 font-mono">Generating Response</div>
                                            </div>
                                        </div>

                                        {/* Attention/Processing visualization */}
                                        <div className="mb-4 flex justify-center items-center gap-2 min-h-[60px]">
                                            {inferenceTokens.length === userQuestionTokens.length && (
                                                <>
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="relative"
                                                            animate={{ y: [0, -8, 0] }}
                                                            transition={{
                                                                duration: 1,
                                                                delay: i * 0.15,
                                                                repeat: Infinity,
                                                            }}
                                                        >
                                                            <div className="w-2 h-8 bg-linear-to-t from-purple-400 to-pink-400 rounded-full" />
                                                            <motion.div
                                                                className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                                                                animate={{
                                                                    scale: [1, 1.5, 1],
                                                                    opacity: [1, 0.5, 1],
                                                                }}
                                                                transition={{
                                                                    duration: 0.8,
                                                                    delay: i * 0.15,
                                                                    repeat: Infinity,
                                                                }}
                                                            />
                                                        </motion.div>
                                                    ))}
                                                </>
                                            )}
                                        </div>

                                        {/* AI Response */}
                                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 min-h-[100px]">
                                            <div className="text-[9px] text-gray-600 font-semibold mb-2">AI Response:</div>
                                            <div className="text-[10px] text-gray-700 leading-relaxed">
                                                {streamingResponse}
                                                {streamingResponse && streamingResponse !== aiResponse && (
                                                    <motion.span
                                                        animate={{ opacity: [1, 0, 1] }}
                                                        transition={{ duration: 0.6, repeat: Infinity }}
                                                        className="inline-block w-1 h-3 bg-purple-500 ml-0.5"
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        {phase === "complete" && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="mt-3 px-3 py-2 bg-green-100 border-2 border-green-400 rounded-lg text-center"
                                            >
                                                <div className="text-xs text-green-700 font-bold">✓ Response Complete</div>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Bottom Legend */}
                <AnimatePresence>
                    {phase === "complete" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4"
                        >
                            <div className="bg-white/95 backdrop-blur border-2 border-gray-300 rounded-lg p-3 shadow-lg">
                                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-[9px] md:text-[10px]">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded bg-blue-500" />
                                        <span className="text-gray-700 font-medium">Text Tokens</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded bg-purple-500" />
                                        <span className="text-gray-700 font-medium">Code Tokens</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded bg-green-500" />
                                        <span className="text-gray-700 font-medium">Data Tokens</span>
                                    </div>
                                    <div className="text-gray-400">•</div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-gray-700 font-medium">Training → Inference Pipeline</span>
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
                        <p className="text-xs md:text-sm text-gray-600">
                            LLM Training & Inference Pipeline • <span className="text-amber-400 font-semibold">Engineered by WESA</span>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}