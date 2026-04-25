// src/components/Cursor.tsx
'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [cursorType, setCursorType] = useState('default')
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the movement
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 })

  useEffect(() => {
    let throttleTimer: NodeJS.Timeout | null = null
    
    const moveMouse = (e: MouseEvent) => {
      if (throttleTimer) return
      
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      
      throttleTimer = setTimeout(() => {
        throttleTimer = null
      }, 50) // Throttle to ~20fps instead of 60fps for better performance
    };

    window.addEventListener('mousemove', moveMouse)
    return () => {
      window.removeEventListener('mousemove', moveMouse)
      if (throttleTimer) clearTimeout(throttleTimer)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-brand-red rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{
        scale: cursorType === 'project' ? 5 : 1,
      }}
    >
      {cursorType === 'project' && (
        <span className="text-[2px] font-black text-ink uppercase tracking-tighter">View</span>
      )}
    </motion.div>
  )
}