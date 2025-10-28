import { motion } from "framer-motion";

export const WhyChooseUsSectionHeader = () => (
    <div className="text-center mb-16 z-10 max-w-4xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-rose-500/10 border-2 border-rose-500/20 rounded-full mb-6"
        >
            <span className="text-white text-xs font-mono uppercase tracking-widest">
                Global Reach
            </span>
        </motion.div>

        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
            <span className="bg-linear-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Why Choose Us
            </span>
        </motion.h2>

        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-400 leading-relaxed"
        >
            Headquartered in Poland with clients across three continents. From educational platforms to EV interfaces and AI tools.
        </motion.p>
    </div>
)