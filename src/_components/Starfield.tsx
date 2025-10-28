import { motion } from 'framer-motion'

export const StarField = ({ stars }: { stars: Array<{ x: number, y: number, size: number, opacity: number }> }) => {
    if (stars.length === 0) return null

    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={{
                        opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                        scale: [1, 0.8, 1],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    )
}