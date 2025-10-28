import { motion } from 'framer-motion'

export const Satellite = ({ satelliteX, satelliteY }: { satelliteX: any, satelliteY: any }) => (
    <motion.div
        className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
        style={{ left: satelliteX, top: satelliteY }}
    >
        <div className="relative">
            <div className="relative w-4 h-4 md:w-5 md:h-5 bg-linear-to-br from-gray-400 via-gray-500 to-gray-600 rounded-sm shadow-2xl border border-gray-600/50">
                <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent rounded-sm" />
                <div className="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 w-3 md:w-4 h-5 md:h-6 bg-linear-to-r from-slate-700 via-blue-900 to-slate-800 border border-slate-600/50 shadow-lg"
                    style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)' }}
                />
                <div className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 w-3 md:w-4 h-5 md:h-6 bg-linear-to-l from-slate-700 via-blue-900 to-slate-800 border border-slate-600/50 shadow-lg"
                    style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)' }}
                />
                <div className="absolute -top-2 md:-top-2.5 left-1/2 -translate-x-1/2 w-2 md:w-2.5 h-2 md:h-2.5 bg-linear-to-b from-gray-300 to-gray-500 rounded-full border border-gray-600/50 shadow-md" />
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-0.5 h-2 md:h-3 bg-linear-to-t from-gray-400 to-gray-200" />
                <div className="absolute top-1 left-0.5 w-0.5 h-2 bg-gray-700/50" />
                <div className="absolute top-1 right-0.5 w-0.5 h-2 bg-gray-700/50" />
            </div>
            <div className="absolute inset-0 w-4 h-4 md:w-5 md:h-5 bg-cyan-400 rounded-full blur-lg opacity-30" />
            <motion.div
                className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_6px_2px_rgba(34,211,238,0.8)]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </div>
    </motion.div>
)