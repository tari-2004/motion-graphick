'use client'

import ProjectCard from '../components/ProjectCard'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ALL_PROJECTS = [
  { id: '01', title: 'Nike / Air Max', video: 'https://agadon.b-cdn.net/T_Appkit%20R7.mp4', cat: '3D Motion' },
  { id: '02', title: 'Amnesty Int.', video: 'https://agadon.b-cdn.net/Agadon%20All%20media.mp4', cat: '2D / Cel' },
  { id: '03', title: 'Meta / Rebrand', video: 'https://agadon.b-cdn.net/Cloud_Vizor%20R2.mp4', cat: 'Product' },
  { id: '04', title: 'Sound Design', video: 'https://agadon.b-cdn.net/Godark%20Rv4%20Cc%20Q22.mp4', cat: 'Experimental' },
  { id: '05', title: 'Nvidia / GTC', video: 'https://agadon.b-cdn.net/6anAdi0Q2KSkkKIY4UB2zABbc.mp4', cat: 'VFX' },
  { id: '06', title: 'Personal Reel', video: 'https://agadon.b-cdn.net/Skai%20Cc%20R3%20Q23.5.mp4', cat: 'Edit' },
]

// Add a constant for animation variants to avoid re-creation on re-render
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
}

export default function AllWorkPage() {
  return (
    <main className="min-h-screen bg-surface selection:bg-brand-red selection:text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20">
        
        {/* Navigation - No changes needed, logic is fine */}
        <nav className="mb-20 flex justify-between items-center">
          {/* ... */}
        </nav>

        {/* Header - Added 'will-change-transform' to the title for smoother entry */}
        <header className="mb-24 will-change-transform">
          <h1 className="text-7xl md:text-[12rem] font-black text-text uppercase tracking-[-0.06em] leading-[0.85]">
            FULL <span className="text-brand-red italic">ARCHIVE</span>
          </h1>
          <div className="h-[1px] w-full bg-brand-blue/10 mt-10" />
        </header>

        {/* FLEXIBLE GRID - Optimized for Performance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers animation slightly earlier for "soft" entry
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min"
        >
          {ALL_PROJECTS.map((project, idx) => {
            const isLandscape = idx === 0 || idx === 3 || idx === 5;
            
            return (
              <motion.div
                key={project.id}
                className={`relative ${isLandscape ? "md:col-span-2" : "col-span-1"}`}
                // Using 'layout' prop helps Framer Motion calculate smooth repositions
                layout
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} index={idx} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer */}
        {/* ... */}
      </div>
    </main>
  )
}