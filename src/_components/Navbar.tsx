'use client'

import { motion } from 'framer-motion'
import { zoomIn } from '@/src/utils/motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { links, NavLink } from '@/src/data/links'
import MenuSvg from '../../public/menu.svg'
import CloseSvg from '../../public/close.svg'
import Logo from '@/src/_components/ui/Logo'
import MobileMenu from './ui/MobileMenu'
import DesktopSubmenu from './ui/DesktopSubmenu'
import { useNavigation } from '@/src/hooks/useNavigation'
import { isLinkActive } from '@/src/utils/navigationUtils'

const Navbar = () => {
  const {
    pathname,
    scrolled,
    mobileMenuOpen,
    setMobileMenuOpen,
    activeSection,
    activeSubmenu,
    handleMouseEnter,
    handleMouseLeave,
    handleSubmenuMouseEnter,
    handleSubmenuMouseLeave,
    handleNavClick,
    handleSubmenuClick,
  } = useNavigation()

  const mobileLinks: NavLink[] = [{ label: 'Home', url: '/' }, ...links]

  return (
    <motion.header
      //@ts-ignore
      variants={zoomIn(0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      className={`fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300 ease-in-out ${scrolled
          ? 'bg-black shadow-lg'
          : 'bg-black/20 backdrop-blur-md'
        }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-8">
          <Logo />
          <ul className="hidden lg:flex gap-6 items-center">
            {links.map((link) => {
              const isActive = isLinkActive(link, pathname, activeSection)

              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={(e) => handleNavClick(e, link)}
                    className={`flex items-center gap-1 font-semibold transition-colors py-2 
            ${isActive ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}
                  >
                    {link.label}
                    {link.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === link.label ? 'rotate-180' : ''
                          }`}
                      />
                    )}
                  </button>

                  <DesktopSubmenu
                    isOpen={activeSubmenu === link.label}
                    items={link.submenu}
                    onMouseEnter={handleSubmenuMouseEnter}
                    onMouseLeave={handleSubmenuMouseLeave}
                    onItemClick={handleSubmenuClick}
                    activeSection={activeSection}
                    currentPath={pathname}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <div className="hidden lg:block">
          <Link
            href="/docs"
            className="px-4 py-2 text-sm bg-white text-black font-semibold rounded-lg hover:bg-amber-500 hover:text-white transition-all shadow-md hover:shadow-lg"
          >
            Documentation
          </Link>
        </div>
        <div className="lg:hidden">
          <Image
            src={mobileMenuOpen ? CloseSvg : MenuSvg}
            alt="menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer invert"
          />
          <MobileMenu
            toggle={mobileMenuOpen}
            setToggle={setMobileMenuOpen}
            mobileLinks={mobileLinks}
            location={pathname}
            activeSubmenu={activeSubmenu}
            setActiveSubmenu={handleMouseEnter}
            handleSubmenuClick={handleSubmenuClick}
          />
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar