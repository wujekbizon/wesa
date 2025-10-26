'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, BookOpen } from 'lucide-react'
import { iconMap, NavLink, SubMenuItem } from '@/src/data/links'



interface MobileMenuProps {
    toggle: boolean
    setToggle: (toggle: boolean) => void
    mobileLinks: NavLink[]
    location: string
    activeSubmenu: string | null
    setActiveSubmenu: (label: string | null) => void
    handleSubmenuClick: (item: SubMenuItem) => void
}

const MobileMenu = ({
    toggle,
    setToggle,
    mobileLinks,
    location,
    activeSubmenu,
    setActiveSubmenu,
    handleSubmenuClick
}: MobileMenuProps) => {
    return (
        <AnimatePresence>
            {toggle && (
                <motion.div
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 300 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full right-0 bg-gray-900 border-l border-gray-700 w-64 max-h-[calc(100vh-80px)] overflow-y-auto shadow-2xl"
                >
                    <ul className="py-4">
                        {mobileLinks.map((link) => (
                            <li key={link.label} className="border-b border-zinc-600/50 last:border-b-0">
                                {link.submenu ? (
                                    <div>
                                        <button
                                            onClick={() => setActiveSubmenu(activeSubmenu === link.label ? null : link.label)}
                                            className="w-full flex items-center justify-between px-6 py-4 text-white font-semibold hover:text-amber-500 transition-colors"
                                        >
                                            {link.label}
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === link.label ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {activeSubmenu === link.label && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="bg-amber-100/20 overflow-hidden"
                                                >
                                                    {link.submenu.map((item, idx) => {
                                                        const Icon = iconMap[item.label] || BookOpen
                                                        return (
                                                            <button
                                                                key={`${item.label}-${idx}`}
                                                                onClick={() => {
                                                                    handleSubmenuClick(item)
                                                                    setToggle(false)
                                                                }}
                                                                className="w-full flex items-center gap-3 px-6 py-3 text-gray-300 hover:text-amber-500 hover:bg-zinc-900 transition-colors"
                                                            >
                                                                <Icon className="w-5 h-5 shrink-0 mt-0.5" />
                                                                <div className="text-left">
                                                                    <div className="text-sm font-medium">{item.label}</div>
                                                                </div>
                                                            </button>
                                                        )
                                                    })}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.url}
                                        onClick={() => setToggle(false)}
                                        className={`block px-6 py-4 text-white font-semibold hover:text-amber-500 transition-colors ${location === link.url ? 'text-amber-500' : ''
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li className="px-6 py-4">
                            <Link
                                href="/docs"
                                onClick={() => setToggle(false)}
                                className="block w-full text-center px-4 py-2 text-sm bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all"
                            >
                                Documentation
                            </Link>
                        </li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileMenu