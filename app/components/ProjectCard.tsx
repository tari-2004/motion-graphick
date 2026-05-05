'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }: { project: any, index: number }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.a
      href={project.video}
      target="_blank"
      rel="noopener noreferrer"
      // Added a softer spring transition for the card entrance
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1], // The "soft" easing curve
        delay: index * 0.05 
      }}
      className="block relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#080808] cursor-pointer group will-change-transform"
    >
      {/* Video element - Added hardware acceleration */}
      <video
        src={project.video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-[1000ms] ease-in-out will-change-transform ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ backfaceVisibility: 'hidden' }}
      />
      
      {/* Overlay - Smoothed transition */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 ease-out flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500">
          Open_Video
        </span>
      </div>
      
      {/* UI Details */}
      <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
        <h3 className="text-white text-xl font-bold uppercase">{project.title}</h3>
        <p className="text-brand-red text-[10px] font-black uppercase tracking-[0.2em]">{project.cat}</p>
      </div>
    </motion.a>
  )
}