'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollTo } from '../utils/nav-logic'

const navItems = [
  { label: 'Work', target: 'work' },
  { label: 'Services', target: 'services' },
  { label: 'Contact', target: 'contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ zIndex: 100 }}
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-black/90 backdrop-blur-2xl border-b border-white/5'
            : 'py-6 bg-black'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* LOGO — stacked editorial style */}
          <motion.button
            onClick={() => scrollTo('top', () => setMenuOpen(false))}
            className="group flex flex-col leading-none"
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-brand-red font-black">
              
            </span>
            <span className="text-2xl font-black uppercase tracking-[-0.04em] text-white group-hover:text-brand-red transition-colors duration-300">
              JOHN
            </span>
          </motion.button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-0">

            {/* Vertical rule */}
            <div className="w-[1px] h-8 bg-white/10 mr-10" />

           {navItems.map((item, i) => (
  <motion.button
    key={item.target}
    onHoverStart={() => setHoveredItem(item.target)}
    onHoverEnd={() => setHoveredItem(null)}
    onClick={() => scrollTo(item.target, () => setMenuOpen(false))}
    className="relative px-6 py-2 text-[11px] uppercase tracking-[0.25em] font-black text-white/50 hover:text-white transition-colors duration-300"
  >
    {hoveredItem === item.target && (
      <motion.span
        layoutId="nav-pill"
        className="absolute inset-0 bg-white/5 rounded-sm"
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
    )}
    <span className="relative z-10">{item.label}</span>

    {/* Animated red underline */}
    <motion.span
      className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-brand-red rounded-full"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{
        scaleX: hoveredItem === item.target ? 1 : 0,
        opacity: hoveredItem === item.target ? 1 : 0,
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      style={{ originX: 0 }}
    />
  </motion.button>
))}

            {/* Vertical rule */}
            <div className="w-[1px] h-8 bg-white/10 ml-10 mr-8" />

            {/* CTA */}
            <motion.a
              href="https://wa.me/2347081330590"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red text-white text-[10px] uppercase tracking-[0.25em] font-black overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Get in touch
              </span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                ↗
              </span>
            </motion.a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ zIndex: 110 }}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              transition={{ duration: 0.3 }}
              className="block h-[1.5px] w-7 bg-white rounded-full origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="block h-[1.5px] w-5 bg-brand-red rounded-full"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              transition={{ duration: 0.3 }}
              className="block h-[1.5px] w-7 bg-white rounded-full origin-center"
            />
          </button>

        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ zIndex: 105 }}
            className="fixed inset-0 bg-black flex flex-col md:hidden"
          >
            {/* Top bar inside menu */}
            <div className="flex items-center justify-between px-6 pt-6">
              <div className="flex flex-col leading-none">
                <span className="text-[11px] uppercase tracking-[0.4em] text-brand-red font-black">Studio</span>
                <span className="text-2xl font-black uppercase tracking-[-0.04em] text-white">JOHN</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest"
              >
                Close
              </button>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-white/10 mx-6 mt-6" />

            {/* Nav items — massive editorial type */}
            <div className="flex-1 flex flex-col justify-center px-6 gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.target}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => {
                    scrollTo(item.target, () => setMenuOpen(false))
                    setMenuOpen(false)
                  }}
                  className="group flex items-center justify-between py-5 border-b border-white/5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] text-brand-red font-black">0{i + 1}</span>
                    <span className="text-5xl font-black uppercase tracking-[-0.04em] text-white/20 group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-white/20 group-hover:text-brand-red transition-colors duration-300 text-2xl">
                    ↗
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="px-6 pb-12"
            >
              <div className="h-[1px] bg-white/10 mb-8" />
              <a
                href="https://wa.me/2347081330590"
                className="flex items-center justify-between w-full px-6 py-4 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red text-[11px] uppercase tracking-[0.25em] font-black hover:bg-brand-red hover:text-white transition-all duration-300"
              >
                <span>Get in touch</span>
                <span>↗</span>
              </a>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}