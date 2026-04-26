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
  }, [project.video, project.title])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
      className="group flex flex-col overflow-hidden rounded-[2rem] border border-brand-blue/10 bg-white/95 shadow-[0_40px_120px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="flex flex-col gap-5 p-6">
        <div className="flex items-center justify-between gap-4 rounded-full border border-brand-blue/10 bg-surface-soft px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-muted">
          {/* <span className="font-semibold text-brand-red">{project.cat}</span> */}
          {/* <span className="inline-flex items-center gap-2 text-brand-blue">
            <span className="block h-2 w-2 rounded-full bg-brand-red animate-pulse" />
            LIVE
          </span> */}
        </div>

        <div className="space-y-3">
          <h3 className="text-4xl md:text-5xl font-black text-text uppercase tracking-[-0.05em] leading-[0.95]">
            {project.title}
          </h3>
          <p className="text-support text-muted">
            {project.id}{' // '}{project.cat}
          </p>
        </div>
      </div>

      <div className="overflow-hidden border-t border-brand-blue/10 bg-surface-soft">
        <video
          ref={videoRef}
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="h-[260px] w-full object-cover transition-transform duration-[1200ms] ease-[0.23,1,0.32,1] group-hover:scale-105"
        />
      </div>
    </motion.div>
  )
}