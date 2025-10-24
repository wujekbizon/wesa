export default function CaseStudy() {
    return (

        <section className="relative py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black border-t border-zinc-800">
            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
                    <div>
                        <p className="text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
                            Featured Case Study
                        </p>
                        <h3 className="text-3xl md:text-4xl font-bold font-mono text-white">
                            From Simple Monolith to Secure Exam Platform
                        </h3>
                        <p className="text-gray-400 text-sm font-mono">
                            How we evolved Wolfmed Edukacja’s medical exam system from a 2-tier MVP to a secure, scalable architecture.
                        </p>
                    </div>
                    <a
                        href="https://www.linkedin.com/pulse/from-simple-monolith-secure-exam-platform-wolfmed-grzegorz-wolfinger-tglsf/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 font-mono text-sm hover:bg-cyan-500/10 transition-colors"
                    >
                        Read Full Article
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text summary */}
                    <div className="space-y-4 font-mono text-sm text-gray-400">
                        <p><span className="text-yellow-400">Challenge:</span> Evolve a simple MVP into a secure, compliant exam platform capable of handling timed assessments.</p>
                        <p><span className="text-cyan-400">Solution:</span> Introduced lifecycle-based domain design with <code className="text-gray-300">test_sessions</code> and <code className="text-gray-300">completed_tests</code> tables — enabling fairness, auditability, and scalability.</p>
                        <p><span className="text-emerald-400">Outcome:</span> Clear domain boundaries and DDD principles prepared the system for 3-tier and eventual microservice evolution.</p>
                        <blockquote className="border-l-2 border-zinc-700 pl-3 italic text-gray-500">
                            “You don’t need microservices from day one — just design with tomorrow in mind.”
                        </blockquote>
                    </div>

                    {/* Visual representation */}
                    <div className="relative p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                        <div className="text-xs font-mono text-gray-500 mb-2">Architecture Evolution</div>
                        <div className="space-y-2 text-gray-400 text-sm font-mono">
                            <div>🏗 <span className="text-amber-400">MVP:</span> Next.js (UI + Logic) → PostgreSQL</div>
                            <div>🧠 <span className="text-cyan-400">Refactor:</span> Added <code>test_sessions</code> + <code>completed_tests</code></div>
                            <div>⚙️ <span className="text-emerald-400">Future:</span> Express API + React UI + DB service (3-tier)</div>
                            <div>☁️ <span className="text-purple-400">Scalable Path:</span> Modular → Microservices-ready</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-transparent to-transparent" />
        </section>
    )
}