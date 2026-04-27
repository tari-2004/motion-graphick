'use client'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }: { project: any; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      /* Tighter card styling */
      className="group flex flex-col bg-white rounded-[1.8rem] border border-brand-blue/5 overflow-hidden transition-all duration-500"
    >
      {/* CARD HEADER: Reduced padding (p-6) */}
      <div className="p-4 pb-3 flex justify-between items-end bg-white">
        <div className="space-y-1">
          <p className="font-base text-[9px] text-brand-red font-black uppercase tracking-[0.3em] opacity-80">
            {project.id} // {project.cat}
          </p>
          <h3 className="font-display text-[20px] md:text-[25px] font-black text-text uppercase tracking-[-0.04em] leading-none">
            {project.title}
          </h3>
        </div>
        
        <span className="font-base text-[9px] font-bold text-muted uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          Case_0{project.id}
        </span>
      </div>

      {/* VIDEO CONTAINER: Tighter margins (mx-2 mb-2) */}
      <div className="mx-2 mb-2 overflow-hidden rounded-[1.2rem] aspect-[16/10] bg-black">
        <video
          ref={videoRef}
          src={project.video}
          loop
          muted
          playsInline
          className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
      </div>
    </motion.div>
  )
}