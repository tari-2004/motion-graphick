'use client'

import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const ALL_PROJECTS = [
  { id: '01', title: 'Ton AppKit - Product Launch Video', video: 'https://agadon.b-cdn.net/T_Appkit%20R7.mp4', cat: '2d Story-Driven Animation' },
  { id: '02', title: 'All Midea DOOH - Billboard Looping Ad', video: 'https://agadon.b-cdn.net/Agadon%20All%20media.mp4', cat: 'Pseudo 3d (2.5) Motion Graphics Video' },
  { id: '03', title: 'Karl - Personal Brand', video: 'https://agadon.b-cdn.net/Karl_1_R2.mp4', cat: 'Talking Head Motion Graphics' },
  { id: '04', title: 'GoDark - Launch Video', video: 'https://agadon.b-cdn.net/Godark%20Rv4%20Cc%20Q22.mp4', cat: '3d Cinematic Motion Piece' },
  { id: '05', title: 'Nvidia / GTC', video: 'https://agadon.b-cdn.net/6anAdi0Q2KSkkKIY4UB2zABbc.mp4', cat: 'VFX' },
  { id: '06', title: 'Skai Trade - Product Teaser', video: 'https://agadon.b-cdn.net/Skai%20Cc%20R3%20Q23.5.mp4', cat: 'Contemporary SaaS Motion Graphics' },
  { id: '07', title: 'Vizor DAO - Product Teaser', video: 'https://agadon.b-cdn.net/Cloud_Vizor%20R2.mp4', cat: 'Motion graphics Ad' },
]

export default function AllWorkPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-surface selection:bg-brand-red selection:text-white overflow-hidden">

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-14">
          <Link
  href="/"
  className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/40 hover:border-brand-red/70 bg-white/60 hover:bg-white/10 transition-all duration-300"
>
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="text-brand-red/60 group-hover:text-brand-red -translate-x-0 group-hover:-translate-x-1 transition-transform duration-300"
  >
    <path d="M15 18L9 12L15 6" />
  </svg>
  <span className="text-[10px] uppercase tracking-[0.3em] text-brand-red/60 group-hover:text-brand-red/90/ transition-colors duration-300">
    Back Home
  </span>
</Link>
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-red font-black">
            Click to watch
          </p>
        </div>

        {/* HEADER */}
        <header className="mb-24">
          <h1 className="text-7xl md:text-[12rem] font-black text-text uppercase tracking-[-0.06em] leading-[0.85]">
            MORE <span className="text-brand-red italic">PROJECTS</span>
          </h1>
          <div className="h-[1px] w-full bg-white/10 mt-10" />
        </header>

        {/* ─── MOBILE GRID (single column) ─── */}
        <div className="flex flex-col gap-6 md:hidden">
          {ALL_PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <ProjectCard
                project={project}
                index={i}
                mode="external"
                onClick={() => setActiveVideo(project.video)}
              />
            </motion.div>
          ))}
        </div>

        {/* ─── DESKTOP GRID ─── */}
        <div
          className="hidden md:grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(9, 1fr)',
            gridTemplateRows: '520px 520px 260px 260px',
          }}
        >

          {/* Video 1 — Row1, Col 1-6 */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0 }}
            style={{ gridColumn: '1 / 7', gridRow: '1 / 2' }}
          >
            <ProjectCard project={ALL_PROJECTS[0]} index={0} mode="external" fillHeight onClick={() => setActiveVideo(ALL_PROJECTS[0].video)} />
          </motion.div>

          {/* Video 2 — Row1, Col 7-9 */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
            style={{ gridColumn: '7 / 10', gridRow: '1 / 2' }}
          >
            <ProjectCard project={ALL_PROJECTS[1]} index={1} mode="external" fillHeight onClick={() => setActiveVideo(ALL_PROJECTS[1].video)} />
          </motion.div>

          {/* Video 3 — Row2, Col 1-3 */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ gridColumn: '1 / 4', gridRow: '2 / 3' }}
          >
            <ProjectCard project={ALL_PROJECTS[2]} index={2} mode="external" fillHeight onClick={() => setActiveVideo(ALL_PROJECTS[2].video)} />
          </motion.div>

          {/* Video 4 — Row2, Col 4-9 */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            style={{ gridColumn: '4 / 10', gridRow: '2 / 3' }}
          >
            <ProjectCard project={ALL_PROJECTS[3]} index={3} mode="external" fillHeight onClick={() => setActiveVideo(ALL_PROJECTS[3].video)} />
          </motion.div>

          {/* Video 5 — Row3, Col 1-3 (top half of left stack) */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ gridColumn: '1 / 4', gridRow: '3 / 4' }}
          >
            <ProjectCard project={ALL_PROJECTS[4]} index={4} mode="external" fillHeight onClick={() => setActiveVideo(ALL_PROJECTS[4].video)} />
          </motion.div>

          {/* Video 6 — Row4, Col 1-3 (bottom half of left stack) */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ gridColumn: '1 / 4', gridRow: '4 / 5' }}
          >
            <ProjectCard project={ALL_PROJECTS[5]} index={5} mode="external" fillHeight onClick={() => setActiveVideo(ALL_PROJECTS[5].video)} />
          </motion.div>

          {/* Video 7 — Row3+4, Col 4-9 (full height hero) */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ gridColumn: '4 / 10', gridRow: '3 / 5' }}
          >
            <ProjectCard project={ALL_PROJECTS[6]} index={6} mode="external" fillHeight onClick={() => setActiveVideo(ALL_PROJECTS[6].video)} />
          </motion.div>

        </div>

      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setActiveVideo(null)}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/10 text-white"
            >
              ✕
            </button>
            <motion.video
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              src={activeVideo}
              autoPlay
              muted
              controls
              playsInline
              className="w-full max-w-6xl rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}