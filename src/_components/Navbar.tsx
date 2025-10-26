'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { zoomIn } from '@/src/utils/motion'

import { links, NavLink, SubMenuItem } from '@/src/data/links'
import Image from 'next/image'
import MenuSvg from '../../public/menu.svg'
import CloseSvg from '../../public/close.svg'
import Logo from '@/src/_components/ui/Logo'

const Navbar = () => {
  const location = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const mobileLinks: NavLink[] = [{ label: 'Home', url: '/' }, ...links]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 50)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveSubmenu(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null)
    }, 150)
  }

  const handleSubmenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleNavClick = (e: React.MouseEvent, link: NavLink) => {
    if (link.submenu) {
      e.preventDefault()
      setActiveSubmenu(activeSubmenu === link.label ? null : link.label)
    }
  }

  const handleSubmenuClick = (item: SubMenuItem) => {
    setActiveSubmenu(null)
    
    // If navigating to same page, just scroll
    if (item.url === location) {
      const element = document.querySelector(item.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to new page with hash
      router.push(`${item.url}${item.hash}`)
    }
  }

  return (
    <motion.header
      //@ts-ignore
      variants={zoomIn(0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      className={`fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-black shadow-lg' 
          : 'bg-black/20 backdrop-blur-md'
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={(e) => handleNavClick(e, link)}
                className={`flex items-center gap-1 text-white font-semibold hover:text-amber-500 transition-colors ${
                  location === link.url ? 'text-amber-500' : ''
                }`}
              >
                {link.label}
                {link.submenu && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeSubmenu === link.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {/* Submenu Dropdown */}
              <AnimatePresence>
                {link.submenu && activeSubmenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 min-w-[280px]"
                    onMouseEnter={handleSubmenuMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                      <div className="py-2">
                        {link.submenu.map((item, idx) => (
                          <button
                            key={`${item.label}-${idx}`}
                            onClick={() => handleSubmenuClick(item)}
                            className="w-full text-left px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors font-medium border-l-4 border-transparent hover:border-amber-500"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Image 
            src={toggle ? CloseSvg : MenuSvg} 
            alt="menu" 
            onClick={() => setToggle(!toggle)} 
            className="cursor-pointer" 
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full right-0 bg-black border-l border-gray-800 w-64 max-h-[calc(100vh-80px)] overflow-y-auto"
              >
                <ul className="py-4">
                  {mobileLinks.map((link) => (
                    <li key={link.label} className="border-b border-gray-800 last:border-b-0">
                      {link.submenu ? (
                        <div>
                          <button
                            onClick={() => setActiveSubmenu(activeSubmenu === link.label ? null : link.label)}
                            className="w-full flex items-center justify-between px-6 py-4 text-white font-semibold hover:text-amber-500 transition-colors"
                          >
                            {link.label}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeSubmenu === link.label ? 'rotate-180' : ''
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
                                className="bg-gray-900 overflow-hidden"
                              >
                                {link.submenu.map((item, idx) => (
                                  <button
                                    key={`${item.label}-${idx}`}
                                    onClick={() => {
                                      handleSubmenuClick(item)
                                      setToggle(false)
                                    }}
                                    className="w-full text-left px-8 py-3 text-gray-300 hover:text-amber-500 hover:bg-gray-800 transition-colors text-sm"
                                  >
                                    {item.label}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.url}
                          onClick={() => setToggle(false)}
                          className={`block px-6 py-4 text-white font-semibold hover:text-amber-500 transition-colors ${
                            location === link.url ? 'text-amber-500' : ''
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar