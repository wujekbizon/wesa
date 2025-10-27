import { motion } from "framer-motion"

export default function SoftwareArchitectureChallenge() {
    return (
        <div className="relative bg-white text-black py-20 md:py-28">
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(251, 191, 36, 0.5) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block px-4 py-2 bg-amber-500/10 border-2 border-amber-500/30 rounded-full mb-6">
                        <span className="text-amber-600 text-xs font-mono uppercase tracking-widest">
                            The Challenge
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
                        Common Architecture Pitfalls
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Most businesses struggle with systems that weren't designed for growth. Technical debt accumulates, and innovation becomes impossible.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Scaling Bottlenecks",
                            description: "Monolithic systems that break under load, requiring expensive vertical scaling."
                        },
                        {
                            title: "Technical Debt",
                            description: "Legacy code and quick fixes compound over time, making changes risky and slow."
                        },
                        {
                            title: "Team Friction",
                            description: "Large codebases where changes conflict, slowing down development teams."
                        }
                    ].map((challenge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8"
                        >
                            <div className="w-12 h-12 bg-zinc-900 text-white rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-zinc-900">{challenge.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}