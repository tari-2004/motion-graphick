'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollTo } from '../utils/nav-logic' // We'll create this logic file next

const navItems = [
  { label: 'Work', target: 'work' },
  { label: 'About', target: 'about' },
  { label: 'Services', target: 'services' }
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hydration shield: Prevents layout shift/errors before JS loads
  if (!mounted) return null

  return (
    <>
      <nav
        style={{ zIndex: 100 }}
        className={`fixed top-0 left-0 right-0 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-ink/90 backdrop-blur-xl py-3 border-brand-blue/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12">
          {/* Enhanced Logo Section */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('top', () => setMenuOpen(false))}
            className="group flex items-center gap-3 text-2xl font-black uppercase text-titanium tracking-tighter relative"
          >
            <motion.span
              className="relative"
              whileHover={{ x: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              MOTION
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-brand-red"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
            <motion.span
              className="w-3 h-3 rounded-full bg-brand-red relative"
              whileHover={{ scale: 1.3, rotate: 180 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Pulse effect on hover only */}
              <motion.div
                className="absolute inset-0 rounded-full bg-brand-red"
                whileHover={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
            </motion.span>
          </motion.button>

          {/* Premium Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.target}
                  onClick={() => scrollTo(item.target, () => setMenuOpen(false))}
                  className="group relative px-4 py-2 text-sm font-bold uppercase tracking-[0.15em] text-titanium/60 hover:text-titanium transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {item.label}
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-brand-red/10 rounded-lg -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  {/* Bottom border animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-brand-red"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.a
              href="mailto:hello@rawmotion.studio"
              className="group relative px-6 py-3 bg-brand-red/10 border border-brand-red/30 rounded-full text-sm font-semibold uppercase tracking-[0.1em] text-brand-red hover:bg-brand-red hover:text-titanium transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get in touch</span>
              {/* Animated background fill */}
              <motion.div
                className="absolute inset-0 bg-brand-red"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          {/* Mobile Toggle Button (High Z-Index) */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            style={{ zIndex: 110 }}
            className="md:hidden relative w-12 h-12 flex flex-col items-center justify-center bg-brand-blue/10 rounded-xl border border-white/5 active:scale-90 transition-all"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <motion.span 
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} 
                className="block h-[2px] w-full bg-titanium rounded-full origin-center" 
              />
              <motion.span 
                animate={{ opacity: menuOpen ? 0 : 1 }} 
                className="block h-[2px] w-full bg-titanium rounded-full" 
              />
              <motion.span 
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} 
                className="block h-[2px] w-full bg-titanium rounded-full origin-center" 
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            style={{ zIndex: 105 }}
            className="fixed inset-0 bg-ink flex flex-col md:hidden overflow-hidden"
          >
            {/* Premium Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,17,76,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(21,123,255,0.1),transparent_40%)] pointer-events-none" />
            <div className="absolute inset-0 blueprint-grid opacity-8 pointer-events-none" />

            {/* Close Button - Premium Positioned */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 z-20 w-14 h-14 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl flex items-center justify-center text-titanium hover:text-brand-red hover:border-brand-red/30 transition-all duration-300 hover:scale-110 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </motion.button>

            {/* Menu Content */}
            <div className="flex-1 flex flex-col items-center justify-center z-10 px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center mb-12"
              >
                <p className="text-[10px] uppercase tracking-[0.5em] text-brand-red mb-4">
                  // NAVIGATION
                </p>
                <h2 className="text-2xl font-black uppercase tracking-tight text-titanium">
                  Explore the studio
                </h2>
              </motion.div>

              <div className="flex flex-col items-center gap-8">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.target}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    onClick={() => scrollTo(item.target, () => setMenuOpen(false))}
                    className="group relative text-4xl md:text-6xl font-black uppercase tracking-tighter text-titanium hover:text-brand-red transition-colors duration-300"
                  >
                    {item.label}
                    <div className="absolute -bottom-2 left-0 w-0 h-[3px] bg-brand-red group-hover:w-full transition-all duration-500" />
                  </motion.button>
                ))}
              </div>

              {/* Premium Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 text-center"
              >
                <p className="text-soft-blue text-sm uppercase tracking-[0.18em] mb-6">
                  Ready to collaborate?
                </p>
                <a
                  href="mailto:hello@rawmotion.studio"
                  className="inline-flex items-center justify-center rounded-full border border-brand-red bg-brand-red/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-red hover:bg-brand-red/15 transition-all duration-300 hover:scale-105"
                >
                  Get in touch
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}