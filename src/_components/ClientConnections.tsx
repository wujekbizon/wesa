import { motion } from 'framer-motion'

export const SVGFilters = () => (
    <defs>
        <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <filter id="satellite-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    </defs>
)

export const ClientConnections = ({
    clients,
    hqPos,
    getPosition,
    dimensions
}: {
    clients: typeof import('../data/clients').clients,
    hqPos: { left: number, top: number },
    getPosition: (x: number, y: number) => { left: number, top: number },
    dimensions: { width: number, height: number }
}) => {
    const dotOffsetX = dimensions.width < 768 ? 32 : 46
    const dotOffsetY = dimensions.width < 768 ? -18 : -24

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-8">
            {clients.map((client, i) => {
                const clientPos = getPosition(client.x, client.y)
                const indicatorX = clientPos.left + dotOffsetX
                const indicatorY = clientPos.top + dotOffsetY

                return (
                    <g key={i}>
                        <motion.path
                            d={`M${hqPos.left},${hqPos.top} Q${(hqPos.left + indicatorX) / 2},${(hqPos.top + indicatorY) / 2 + 10} ${indicatorX},${indicatorY}`}
                            stroke={client.color}
                            strokeWidth="1.5"
                            fill="transparent"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0, opacity: 0.6 }}
                            animate={{ pathLength: [0, 1, 1] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: i * 0.8,
                                ease: 'easeInOut',
                                repeatDelay: 1,
                            }}
                        />
                        <motion.path
                            d={`M${indicatorX},${indicatorY} Q${(indicatorX + hqPos.left) / 2},${(indicatorY + hqPos.top) / 2 - 20} ${hqPos.left},${hqPos.top}`}
                            stroke={client.color}
                            strokeWidth="3"
                            fill="transparent"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 1 }}
                            animate={{ pathLength: [0, 1, 1] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: i * 0.8 + 1.3,
                                ease: 'easeInOut',
                                repeatDelay: 1,
                            }}
                        />
                    </g>
                )
            })}
            <SVGFilters />
        </svg>
    )
}