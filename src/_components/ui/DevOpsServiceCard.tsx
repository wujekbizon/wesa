import { motion } from "framer-motion";
import { Layers } from 'lucide-react'
import DevOpsCodePreview from "../DevOpsCodePreview";

export default function DevOpsServiceCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group h-full w-full relative isolate flex flex-col rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-lg overflow-visible xl:col-start-3 xl:row-start-2 xl:row-span-2 aspect-3/4 min-h-[300px]"
        >
            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-white/5 via-gray-900/20 to-transparent opacity-70" />
            <DevOpsCodePreview />
            <div className="relative z-0 flex-none px-6 pt-8 pb-6 mt-auto">
                <div className="flex items-start gap-4 mb-4">
                    <div className="w-9 h-9 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-500 shrink-0">
                        <Layers className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">DevOps & Infrastructure</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Docker containerization strategy, Kubernetes orchestration setup, CI/CD pipeline configuration, and cloud deployment optimization.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
