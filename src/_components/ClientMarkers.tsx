import { motion } from 'framer-motion'

export const ClientMarkers = ({
    clients,
    getPosition,
}: {
    clients: typeof import('../data/clients').clients,
    getPosition: (x: number, y: number) => { left: number, top: number },
}) => {
    return (
        <>
            {clients.map((client, i) => {
                const pos = getPosition(client.x, client.y)
                return (
                    <motion.div
                        key={i}
                        className="absolute w-20 sm:w-24 md:w-28 lg:w-32 p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg z-10 -translate-x-1/2 -translate-y-1/2"
                        style={{ left: pos.left, top: pos.top }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.4 + 0.5, duration: 0.3 }}
                        whileHover={{ scale: 1.04, transition: { duration: 0.05 } }}
                    >
                        <div className="text-center">
                            <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold mb-0.5 md:mb-1" style={{ color: client.color }}>
                                {client.name}
                            </div>
                            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-300 leading-tight">
                                {client.project}
                            </div>
                        </div>
                    </motion.div>
                )
            })}
        </>
    )
}