'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const PROJECTS = [
  { id: '01', title: 'Ton AppKit - Product Launch Video', video: 'https://agadon.b-cdn.net/T_Appkit%20R7.mp4', cat: '2d Story-Driven Animation' },
  { id: '02', title: 'GoDark - Launch Video', video: 'https://agadon.b-cdn.net/Godark%20Rv4%20Cc%20Q22.mp4', cat: '3d Cinematic Motion Piece' },
  { id: '03', title: 'Skai Trade - Product Teaser', video: 'https://agadon.b-cdn.net/Skai%20Cc%20R3%20Q23.5.mp4', cat: 'Contemporary SaaS Motion Graphics' },
  { id: '04', title: 'E-Motion - Launch Video', video: 'https://agadon.b-cdn.net/Agadon%20E-motion.mp4', cat: '2D Animated Motion Graphics' },
  { id: '05', title: 'Vizor DAO - Product Teaser', video: 'https://agadon.b-cdn.net/Cloud_Vizor%20R2.mp4', cat: 'Motion graphics Ad' },
  { id: '06', title: 'All Midea DOOH - Billboard Looping Ad', video: 'https://agadon.b-cdn.net/Agadon%20All%20media.mp4', cat: 'Pseudo 3d (2.5) Motion Graphics Video' },
]

export default function WorkGrid() {
  return (
    <section id="work" className="bg-surface px-4 md:px-10 py-24">
      <div className="max-w-[1500px] mx-auto">
        <div className="mb-16">
          <p className="font-base text-brand-red text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            // SELECTED_REEL
          </p>
          <h2 className="font-display text-7xl md:text-[9rem] font-black text-text tracking-[-0.07em] leading-[0.8]">
            Project <span className="text-brand-red italic">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 will-change-transform">
          {PROJECTS.map((project, idx) => (
            // Mode defaults to 'navigate' automatically here
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link href="/work">
            <motion.div
              whileHover={{ scale: 1.02, backgroundColor: '#DA5436' }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-6 bg-text text-surface px-14 py-7 rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] shadow-2xl"
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