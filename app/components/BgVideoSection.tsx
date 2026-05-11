'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function BgVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true

    // Slight delay prevents main thread congestion on mount
    const playTimeout = setTimeout(() => {
      video.play().catch(() => {})
    }, 200)

    return () => clearTimeout(playTimeout)
  }, [])

  return (
    <section className="relative mx-0 mt-20 z-0 h-[74vh] w-full overflow-hidden border-y border-white/5 bg-[#080808]">

      {/* 01. VIDEO (optimized loading + faster fade) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source
          src="https://agadon.b-cdn.net/Agadon%20Preview%20Video%20Q25.5.mp4"
          type="video/mp4"
        />
      </video>

      {/* 02. SUBTLE NOISE (static = premium, no animation) */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 03. GPU-ACCELERATED LINES (transform instead of background-position) */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 3px, transparent 4px)',
          backgroundSize: '100% 8px',
        }}
        animate={{ y: ['0%', '100%'] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* 04. VIGNETTE (clean, no blend modes) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20" />

      {/* 05. UI */}
      <div className="absolute bottom-10 left-10 z-30 flex items-center gap-4">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">
          Reel // 2026
        </span>
      </div>
    </section>
  )
}