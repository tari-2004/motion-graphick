'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Loader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setIsLoading(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return <div className="min-h-screen bg-black" />

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Ambient Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.2 }}
            className="absolute w-[40vw] h-[40vw] rounded-full bg-brand-red blur-[120px]"
          />

          {/* Rotating Rings */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 360, scale: 1, opacity: 0.15 }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.2,
              }}
              className="absolute aspect-square rounded-full border border-white/10"
              style={{ width: `${15 + i * 15}vw` }}
            />
          ))}

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Logo / Name */}
            <motion.h1
              initial={{ y: 40, opacity: 0, letterSpacing: '0.5em' }}
              animate={{ y: 0, opacity: 1, letterSpacing: '0.3em' }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-2xl font-black uppercase text-white"
            >
              JOHN
            </motion.h1>

            {/* Animated Line */}
            <div className="relative w-[220px] h-[1px] bg-white/10 mt-6 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1.4,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 0.3,
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-brand-red to-transparent"
              />
            </div>
          </div>

          {/* Expanding Reveal */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 0.9,
              delay: 1.6,
              ease: [0.83, 0, 0.17, 1],
            }}
            className="absolute inset-0 origin-bottom bg-brand-red flex items-center justify-center"
          >
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-7xl font-black uppercase text-black"
            >
              JOHN MOTIONS
            </motion.h1>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}