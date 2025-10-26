'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { zoomIn } from '@/src/utils/motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, } from 'lucide-react'
import { links, NavLink, SubMenuItem } from '@/src/data/links'
import MenuSvg from '../../public/menu.svg'
import CloseSvg from '../../public/close.svg'
import Logo from '@/src/_components/ui/Logo'
import MobileMenu from './ui/MobileMenu'
import DesktopSubmenu from './ui/DesktopSubmenu'


const Navbar = () => {
  const location = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isHoveringSubmenu, setIsHoveringSubmenu] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const mobileLinks: NavLink[] = [{ label: 'Home', url: '/' }, ...links]

  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -66%',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = document.querySelectorAll('[data-nav-section][id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveSubmenu(label)
  }

  const handleMouseLeave = () => {
    if (!isHoveringSubmenu) {
      timeoutRef.current = setTimeout(() => {
        setActiveSubmenu(null)
      }, 100)
    }
  }

  const handleSubmenuMouseEnter = () => {
    setIsHoveringSubmenu(true)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleSubmenuMouseLeave = () => {
    setIsHoveringSubmenu(false)
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null)
    }, 100)
  }

  const handleNavClick = (e: React.MouseEvent, link: NavLink) => {
    if (link.submenu) {
      e.preventDefault()
      setActiveSubmenu(activeSubmenu === link.label ? null : link.label)
    }
  }

  const handleSubmenuClick = (item: SubMenuItem) => {
    setActiveSubmenu(null)

    if (item.url === location) {
      const element = document.querySelector(item.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`${item.url}${item.hash}`)
    }
  }

  const architectureLink = links.find(l => l.label === 'Architecture')
  if (architectureLink && activeSection) {
    console.log('Architecture Debug:', {
      hasSubmenu: !!architectureLink.submenu,
      submenuLength: architectureLink.submenu?.length,
      location,
      activeSection,
      submenuItems: architectureLink.submenu,
      someResult: architectureLink.submenu?.some(item => {
        const matches = item.url === location && item.hash === activeSection
        console.log(`  ${item.label}: url=${item.url} hash=${item.hash} matches=${matches}`)
        return matches
      })
    })
  }

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
            {links.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >

                <button
                  onClick={(e) => handleNavClick(e, link)}
                  className={`flex items-center gap-1 text-white font-semibold hover:text-amber-500 transition-colors py-2 ${
                    link.submenu?.some(item => item.url === location && item.hash === activeSection) ||
                    (location === link.url && activeSection && link.submenu?.some(item => item.hash === activeSection)) ||
                    (location === link.url && !activeSection)
                      ? 'text-amber-500'
                      : ''
                  }`}
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
                  currentPath={location}
                />
              </li>
            ))}
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
            src={toggle ? CloseSvg : MenuSvg}
            alt="menu"
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer invert"
          />

          <MobileMenu
            toggle={toggle}
            setToggle={setToggle}
            mobileLinks={mobileLinks}
            location={location}
            activeSubmenu={activeSubmenu}
            setActiveSubmenu={setActiveSubmenu}
            handleSubmenuClick={handleSubmenuClick}
          />
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar