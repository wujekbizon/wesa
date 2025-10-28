import { motion } from 'framer-motion'

export const HQMarker = ({
    hq,
    hqPos,
    dimensions
}: {
    hq: {
        name: string;
        x: number;
        y: number;
        color: string;
    },
    hqPos: { left: number, top: number },
    dimensions: { width: number, height: number }
}) => {
    const offset = dimensions.width < 768 ? 10 : 12

    return (
        <>
            <motion.div
                className="absolute w-5 h-5 md:w-6 md:h-6 bg-amber-400 rounded-full shadow-[0_0_20px_5px_rgba(251,191,36,0.8)] z-20 flex items-center justify-center"
                style={{
                    left: hqPos.left - offset,
                    top: hqPos.top - offset
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.8, 1],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-black rounded-full" />
            </motion.div>
            <motion.div
                className="absolute px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-amber-400 backdrop-blur-xl text-black text-[8px] sm:text-[10px] md:text-xs font-semibold shadow-lg border border-black/50 z-20 whitespace-nowrap -translate-x-1/2"
                style={{
                    left: hqPos.left + 40,
                    top: hqPos.top - 45,
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                {hq.name}
            </motion.div>
        </>
    )
}