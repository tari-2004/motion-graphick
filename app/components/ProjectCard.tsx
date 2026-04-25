'use client'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Project {
  id: string;
  title: string;
  video: string;
  cat: string;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const startVideo = async () => {
      try {
        video.muted = true
        await video.play()
      } catch (err) {
        console.warn(`Autoplay blocked for ${project.title}:`, err)
      }
    }

    startVideo()
  }, [project.video])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
      className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-brand-blue/10 bg-ink shadow-[0_40px_120px_rgba(0,0,0,0.2)]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[0.23,1,0.32,1] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-black/10 to-transparent opacity-55" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-xl text-[10px] uppercase tracking-[0.35em] text-soft-blue">
          <span className="font-semibold text-brand-red">{project.cat}</span>
          <span className="inline-flex items-center gap-2 text-brand-blue">
            <span className="block h-2 w-2 rounded-full bg-brand-red animate-pulse" />
            LIVE
          </span>
        </div>

        <div className="rounded-[1.75rem] bg-black/30 p-5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:-translate-y-1">
          <h3 className="text-3xl md:text-4xl font-black text-titanium uppercase tracking-tighter leading-[1.05]">
            {project.title}
          </h3>
          <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-soft-blue">
            {project.id} // {project.cat}
          </p>
        </div>
      </div>
    </motion.div>
  )
}