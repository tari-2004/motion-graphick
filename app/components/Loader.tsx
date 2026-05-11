'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Loader({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<'intro' | 'stamp' | 'exit' | 'done'>('intro')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t1 = setTimeout(() => setPhase('stamp'), 800)
    const t2 = setTimeout(() => setPhase('exit'), 2000)
    const t3 = setTimeout(() => setPhase('done'), 2800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (!mounted) return <div className="min-h-screen bg-black" />

  return (
    <AnimatePresence mode="wait">
      {phase !== 'done' ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] overflow-hidden bg-black"
          exit={{ opacity: 1 }}
        >

          {/* TOP PANEL */}
          <motion.div
            className="absolute top-0 left-0 right-0 bg-black origin-top"
            style={{ height: '50%' }}
            animate={phase === 'exit' ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
          />

          {/* BOTTOM PANEL */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-black origin-bottom"
            style={{ height: '50%' }}
            animate={phase === 'exit' ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
          />

          {/* CENTER CONTENT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

            {/* Thin red line — draws first */}
            <motion.div
              className="bg-brand-red"
              initial={{ width: 0, height: '1px' }}
              animate={
                phase === 'intro'
                  ? { width: '120px', height: '1px' }
                  : phase === 'stamp'
                  ? { width: '100%', height: '1px', opacity: 1 }
                  : { width: '100%', height: '1px', opacity: 0 }
              }
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* NAME STAMP */}
            <div className="relative overflow-hidden">
              <motion.h1
                className="text-[clamp(3rem,12vw,10rem)] font-black uppercase tracking-[-0.04em] text-white leading-none select-none"
                initial={{ y: '100%' }}
                animate={phase === 'intro' ? { y: '100%' } : { y: '0%' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                JOHN
                <motion.span
                  className="text-brand-red"
                  initial={{ opacity: 0 }}
                  animate={phase === 'stamp' || phase === 'exit' ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  .
                </motion.span>
              </motion.h1>
            </div>

            {/* Thin red line — bottom */}
            <motion.div
              className="bg-brand-red"
              initial={{ width: 0, height: '1px' }}
              animate={
                phase === 'intro'
                  ? { width: '120px', height: '1px' }
                  : phase === 'stamp'
                  ? { width: '100%', height: '1px', opacity: 1 }
                  : { width: '100%', height: '1px', opacity: 0 }
              }
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            />

            {/* TAGLINE */}
            <motion.p
              className="text-[10px] uppercase tracking-[0.4em] text-white/30 mt-6"
              initial={{ opacity: 0 }}
              animate={phase === 'stamp' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Motion Studio
            </motion.p>

          </div>

          {/* FRAME COUNTER — film aesthetic detail */}
          <motion.div
            className="absolute bottom-8 right-8 text-[9px] font-black uppercase tracking-[0.3em] text-white/20 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 0.3 }}
            >
              ● REC
            </motion.span>
          </motion.div>

          {/* TOP LEFT — studio tag */}
          <motion.div
            className="absolute top-8 left-8 text-[9px] uppercase tracking-[0.35em] text-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Est. 2024
          </motion.div>

        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}