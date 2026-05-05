'use client'
import { useEffect, useRef, useState } from 'react'

export default function BgVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().catch(() => {})
  }, [])

  return (
    <section className="relative mx-0 mt-23 z-0 h-[74vh] w-full overflow-hidden border-y border-white/5 bg-[#080808]">
      
      {/* 01. THE VIDEO LAYER */}
      <video 
        ref={videoRef}
        autoPlay
        loop 
        muted 
        playsInline 
        onLoadedData={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src="https://agadon.b-cdn.net/Agadon%20Preview%20Video%20Q25.5.mp4" type="video/mp4" />
      </video>

      {/* 02. THE WAVY "LINE-ISH" FREQUENCY LAYER */}
      {/* This creates the organic, wavy distortion effect */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-overlay animate-pulse" />
        
        {/* Wavy Horizontal Lines (Analog interference look) */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 3px, transparent 4px)',
               backgroundSize: '100% 8px',
               animation: 'waveMove 4s linear infinite' 
             }} 
        />
      </div>

      {/* 03. THE VIGNETTE & FOCUS */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />

      <style jsx>{`
        @keyframes waveMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
      `}</style>

      {/* UI Elements remain the same */}
      <div className="absolute bottom-10 left-10 z-30 flex items-center gap-4">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">Reel // 2026</span>
      </div>
    </section>
  )
}