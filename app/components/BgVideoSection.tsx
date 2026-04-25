'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function BgVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Standard safety check for modern browsers
    const attemptPlay = async () => {
      try {
        // Force muted (browsers block unmuted autoplay)
        video.muted = true
        await video.play()
      } catch (err) {
        console.warn("Video autoplay was prevented or interrupted:", err)
      }
    }

    attemptPlay()
  }, [])

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-ink">
      {/* 01. THE VIDEO LAYER */}
      <video 
        ref={videoRef}
        autoPlay
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out cursor-none"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* 02. THE TEXTURE OVERLAYS */}
      <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-20" />
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.04]" />

      {/* 03. INTERACTIVE UI ELEMENTS */}
      <div className="absolute bottom-10 left-10 z-10 flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red mb-1">
            Reel // 2026
          </span>
          <div className="h-[1px] w-full bg-brand-blue/30" />
        </div>
        <p className="text-[8px] uppercase tracking-widest text-titanium/30">
          Source: Local_Drive_01
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-blue/20" />
    </section>
  )
}