'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { SubMenuItem, iconMap, descriptions } from '@/src/data/links'

interface DesktopSubmenuProps {
    isOpen: boolean
    items: SubMenuItem[] | undefined
    onMouseEnter: () => void
    onMouseLeave: () => void
    onItemClick: (item: SubMenuItem) => void
    activeSection: string
    currentPath: string
}

const DesktopSubmenu = ({
    isOpen,
    items,
    onMouseEnter,
    onMouseLeave,
    onItemClick,
    activeSection,
    currentPath
}: DesktopSubmenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[420px] z-50"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 to-black/20 backdrop-blur-xl rounded-2xl" />

                        <div className="relative m-2 bg-white rounded-xl shadow-2xl overflow-hidden">
                            <div className="p-2">
                                {items?.map((item, idx) => {
                                    const Icon = iconMap[item.label] || BookOpen
                                    return (
                                        <button
                                            key={`${item.label}-${idx}`}
                                            onClick={() => onItemClick(item)}
                                            className={`w-full flex items-start gap-4 px-4 py-3 rounded-lg hover:bg-amber-50 transition-all group ${item.url === currentPath && item.hash === activeSection
                                                    ? 'bg-amber-50 border-l-4 border-amber-500'
                                                    : ''
                                                }`}
                                        >
                                            <div className="shrink-0 w-10 h-10 rounded-lg bg-linear-to-br from-amber-500 to-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <div className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                                                    {item.label}
                                                </div>
                                                <div className="text-sm text-gray-500 mt-0.5">
                                                    {descriptions[item.label]}
                                                </div>
                                            </div>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default DesktopSubmenu