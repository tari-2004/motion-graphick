'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const PROJECTS = [
  { id: '01', title: 'Nike / Air Max', video: '/videos/first.mp4', cat: '3D Motion' },
  { id: '02', title: 'Amnesty Int.', video: '/videos/second.mp4', cat: '2D / Cel' },
  { id: '03', title: 'Meta / Rebrand', video: '/videos/hero.mp4', cat: 'Product' },
  { id: '04', title: 'Sound Design', video: '/videos/third.mp4', cat: 'Experimental' },
  { id: '05', title: 'Sound Design', video: '/videos/second.mp4', cat: 'Presence' },
  { id: '06', title: 'Sound Design', video: '/videos/hero.mp4', cat: 'Emotional' },
]

export default function WorkGrid() {
  return (
    <section id="work" className="bg-surface px-4 md:px-10 py-24">
      <div className="max-w-[1500px] mx-auto">
        <div className="mb-16">
          <p className="font-base text-brand-red text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            // SELECTED_REEL
          </p>
          <h2 className="font-display text-7xl md:text-[9rem] font-black text-text uppercase tracking-[-0.07em] leading-[0.8]">
            PROJECT <span className="text-brand-red italic">WORKS</span>
          </h2>
        </div>

        {/* Reduced Gap (gap-4) for tighter video proximity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* RESTORED: See All Button */}
        <div className="mt-20 flex justify-center">
          <Link href="/work">
            <motion.div
              whileHover={{ scale: 1.05, backgroundColor: '#1D4ED8' }} // Brand Blue hover
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-6 bg-text text-surface px-14 py-7 rounded-full transition-all duration-300 shadow-2xl"
            >
              <span className="font-display text-xl md:text-2xl font-black uppercase tracking-tight">
                See All Projects
              </span>
              <div className="w-10 h-10 rounded-full border border-surface/30 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}