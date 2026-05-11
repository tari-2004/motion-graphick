'use client'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ 
  project, 
  index, 
  mode = 'navigate',
  fillHeight = false,
  onClick
}: { 
  project: any
  index: number
  mode?: 'navigate' | 'external'
  fillHeight?: boolean
  onClick?: () => void
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {})
    }
  }, [])

  const Visuals = (
    <div className={`relative overflow-hidden rounded-2xl bg-[#080808] group ${
      fillHeight ? 'h-full w-full' : 'aspect-[4/3]'
    }`}>

      {/* VIDEO */}
      <video
        ref={videoRef}
        src={project.video}
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } pointer-events-none`}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center pointer-events-none">
        {mode === 'external' && (
          <span className="opacity-0 group-hover:opacity-100 text-white text-[10px] font-black uppercase tracking-[0.25em] transition-opacity duration-300">
            WATCH
          </span>
        )}
      </div>

      {/* TEXT */}
      <div className="absolute bottom-6 left-6 pointer-events-none">
        <h3 className="text-white text-xl font-bold uppercase">
          {project.title}
        </h3>
        <p className="text-brand-red text-[10px] font-black uppercase tracking-[0.2em]">
          {project.cat}
        </p>
      </div>
    </div>
  )

  return (
    <motion.div
      className={fillHeight ? 'h-full w-full' : ''}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.05
      }}
    >
      {mode === 'navigate' ? (
        <div className={`block cursor-default ${fillHeight ? 'h-full w-full' : ''}`}>
          {Visuals}
        </div>
      ) : (
        <button
          onClick={onClick}
          className={`block w-full text-left cursor-pointer ${fillHeight ? 'h-full' : ''}`}
        >
          {Visuals}
        </button>
      )}
    </motion.div>
  )
}