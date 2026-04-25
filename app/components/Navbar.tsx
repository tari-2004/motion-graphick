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
            ? 'bg-ink/80 backdrop-blur-xl py-4 border-brand-blue/10' 
            : 'bg-transparent py-8 border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12">
          {/* Logo Section */}
          <button 
            onClick={() => scrollTo('top', setMenuOpen)} 
            className="group flex items-center gap-2 text-xl font-black uppercase text-titanium tracking-tighter"
          >
            MOTION
            <span className="w-2 h-2 rounded-full bg-brand-red group-hover:scale-150 transition-transform duration-300" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button 
                key={item.target} 
                onClick={() => scrollTo(item.target, setMenuOpen)} 
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-titanium/40 hover:text-brand-red transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
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
                    onClick={() => scrollTo(item.target, setMenuOpen)}
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