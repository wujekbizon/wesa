'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { zoomIn } from '@/src/utils/motion'

import { links, NavLink } from '@/src/data/links'
import Image from 'next/image'
import MenuSvg from '../../public/menu.svg'
import CloseSvg from '../../public/close.svg'
import Logo from '@/src/_components/ui/Logo'

// components

const Navbar = () => {
  const location = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [toggle, setToggle] = useState(false)

  const mobileLinks: NavLink[] = [{ label: 'Home', url: '/' }, ...links]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (
        ((location == '/solutions' ||
          location == '/developers' ||
          location == '/customers') &&
          scrollTop > 10) ||
        (location == '/' && scrollTop > 3850)
      ) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  return (
    <motion.header
      //@ts-ignore
      variants={zoomIn(0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      className={`fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-black shadow-lg' : ''} `}
    >
      {/* <div className="gradient_01" /> */}
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <Logo />

        <ul className="hidden md:flex gap-6">
          {links.map(({ label, url }) => (
            <Link
              href={url}
              className={`text-white font-semibold ${location === url ? 'text-blue-500' : ''}`}
              key={label}
            >
              {label}
            </Link>
          ))}
        </ul>

        <div className="md:hidden">
          <Image src={toggle ? CloseSvg : MenuSvg} alt="menu" onClick={() => setToggle(!toggle)} className="cursor-pointer" />

          <div className={`${!toggle ? 'hidden' : 'block'} absolute top-full right-0 bg-black p-4 flex flex-col gap-4`}>
            <ul className="menu_list">
              {mobileLinks.map(({ label, url }) => (
                <Link
                  href={url}
                  onClick={() => {
                    setToggle(!toggle)
                  }}
                  className={`text-white font-semibold ${location === url ? 'text-blue-500' : ''}`}
                  key={label}
                >
                  {label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
export default Navbar
