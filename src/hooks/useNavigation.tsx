import { useState, useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { NavLink, SubMenuItem } from '@/src/data/links'

export const useNavigation = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isHoveringSubmenu, setIsHoveringSubmenu] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setActiveSection('')
  }, [pathname])

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
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (label: string | null) => {
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
    setMobileMenuOpen(false)

    const isSamePage = item.url === pathname

    if (isSamePage) {
      if (item.hash) {
        const target = document.querySelector(item.hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
        setTimeout(() => {
          window.history.replaceState(null, '', window.location.pathname)
        }, 400)
      }
    } else {
      router.push(item.url)

      const handleRouteChange = () => {
        if (item.hash) {
          const target = document.querySelector(item.hash)
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
          }
        }
        window.removeEventListener('popstate', handleRouteChange)
      }
      window.addEventListener('popstate', handleRouteChange)
      setTimeout(() => {
        handleRouteChange()
      }, 400)
    }
  }

  return {
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
  }
}