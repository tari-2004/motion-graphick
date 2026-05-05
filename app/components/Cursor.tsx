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



const ALL_PROJECTS = [
  { id: '01', title: 'Nike / Air Max', video: 'https://agadon.b-cdn.net/T_Appkit%20R7.mp4', cat: '3D Motion' },
  { id: '02', title: 'Amnesty Int.', video: 'https://agadon.b-cdn.net/Agadon%20All%20media.mp4', cat: '2D / Cel' },
  { id: '03', title: 'Meta / Rebrand', video: 'https://agadon.b-cdn.net/Cloud_Vizor%20R2.mp4', cat: 'Product' },
  { id: '04', title: 'Sound Design', video: 'https://agadon.b-cdn.net/Godark%20Rv4%20Cc%20Q22.mp4', cat: 'Experimental' },
  { id: '05', title: 'Nvidia / GTC', video: 'https://agadon.b-cdn.net/6anAdi0Q2KSkkKIY4UB2zABbc.mp4', cat: 'VFX' },
  { id: '06', title: 'Personal Reel', video: 'https://agadon.b-cdn.net/Skai%20Cc%20R3%20Q23.5.mp4', cat: 'Edit' },
]