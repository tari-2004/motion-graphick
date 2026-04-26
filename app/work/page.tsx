'use client'

import ProjectCard from '../components/ProjectCard'
import Cursor from '../components/Cursor'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ALL_PROJECTS = [
  { id: '01', title: 'Nike / Air Max', video: '/videos/first.mp4', cat: '3D Motion' }, // Spans 2 (Landscape)
  { id: '02', title: 'Amnesty Int.', video: '/videos/second.mp4', cat: '2D / Cel' }, 
  { id: '03', title: 'Meta / Rebrand', video: '/videos/hero.mp4', cat: 'Product' },
  { id: '04', title: 'Sound Design', video: '/videos/third.mp4', cat: 'Experimental' }, // Spans 2 (Landscape)
  { id: '05', title: 'Nvidia / GTC', video: '/videos/hero.mp4', cat: 'VFX' },
  { id: '06', title: 'Personal Reel', video: '/videos/first.mp4', cat: 'Edit' },
]

export default function AllWorkPage() {
  return (
    <main className="min-h-screen bg-surface selection:bg-brand-red selection:text-white">
      {/* Rendering the cursor at the root level ensures it stays visible */}
      <Cursor />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20">
        
        {/* Navigation */}
        <nav className="mb-20 flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-[1px] bg-brand-blue group-hover:bg-brand-red transition-all" />
            <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.4em] group-hover:text-brand-red transition-colors">
              Back_to_Home
            </span>
          </Link>
          <span className="text-muted text-[10px] font-mono tracking-tighter opacity-50 uppercase">
            // Archive_Access: Verified
          </span>
        </nav>

        {/* Header */}
        <header className="mb-24">
          <h1 className="text-7xl md:text-[12rem] font-black text-text uppercase tracking-[-0.06em] leading-[0.85]">
            FULL <span className="text-brand-red italic">ARCHIVE</span>
          </h1>
          <div className="h-[1px] w-full bg-brand-blue/10 mt-10" />
        </header>

        {/* FLEXIBLE GRID 
            - Items 1 and 4 (idx 0 and 3) span two columns on desktop.
            - The ProjectCard handles the height based on its contents.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_PROJECTS.map((project, idx) => {
            const isLandscape = idx === 0 || idx === 3 || idx === 5;
            
            return (
              <motion.div
                key={project.id}
                className={isLandscape ? "md:col-span-2" : "col-span-1"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <ProjectCard project={project} index={idx} />
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <footer className="mt-40 text-center py-10 border-t border-brand-blue/10">
          <p className="text-brand-blue/40 text-[9px] font-black uppercase tracking-[1em]">
            End of Archive // 2026
          </p>
        </footer>
      </div>
    </main>
  )
}