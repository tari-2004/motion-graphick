'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const PROJECTS = [
  { id: '01', title: 'Nike / Air Max', video: '/videos/first.mp4', cat: '3D Motion' },
  { id: '02', title: 'Amnesty Int.', video: '/videos/second.mp4', cat: '2D / Cel' },
  { id: '03', title: 'Meta / Rebrand', video: '/videos/hero.mp4', cat: 'Product' },
  { id: '04', title: 'Sound Design', video: '/videos/third.mp4', cat: 'Experimental' },
  { id: '05', title: 'Nvidia / GTC', video: '/videos/hero.mp4', cat: 'VFX' },
  { id: '06', title: 'Personal Reel', video: '/videos/first.mp4', cat: 'Edit' },
]

export default function WorkGrid() {
  return (
    <section id="work" className="bg-surface border-t border-brand-blue/10 px-6 md:px-12 py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1.2fr] gap-6 mb-10">
          <div className="bg-surface-soft rounded-[2rem] p-10 border border-brand-blue/10 shadow-[0_40px_120px_rgba(0,0,0,0.08)]">
            <p className="text-brand-red text-[10px] font-black uppercase tracking-[0.4em] mb-4">
              SELECTED REEL
            </p>
            <h2 className="text-6xl md:text-[8rem] font-black text-text uppercase tracking-[-0.06em] leading-[0.88]">
              PROJECT <span className="text-brand-red italic">WORKS</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* NEW SEE ALL BUTTON SECTION */}
        <div className="mt-16 flex justify-center">
          <Link href="/work">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-4 rounded-full bg-text px-12 py-6 text-surface shadow-2xl transition-colors hover:bg-brand-red"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                Explore Full Archive
              </span>
              <span className="text-surface/30 group-hover:text-surface font-mono text-[10px]">
                (42_FILES)
              </span>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}