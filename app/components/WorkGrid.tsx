'use client'
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
    <section id="work" className="bg-ink border-t border-brand-blue/10 px-6 md:px-12 py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1.2fr] gap-6 mb-10">
          <div className="bg-ink rounded-[2rem] p-10 border border-brand-blue/10 shadow-[0_40px_120px_rgba(0,0,0,0.18)]">
            <p className="text-brand-red text-[10px] font-black uppercase tracking-[0.4em] mb-4">
              SELECTED REEL
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-titanium uppercase tracking-tighter leading-none">
              SELECTED <span className="text-brand-red italic">WORK</span>
            </h2>
            {/* <p className="mt-6 max-w-2xl text-soft-blue text-sm leading-7 tracking-[0.18em] uppercase">
              Premium motion work rendered as clean, cinematic previews. The grid is intentionally minimal so the video content stays front and center.
            </p> */}
          </div>

          <div className="bg-ink rounded-[2rem] p-8 border border-brand-blue/10 shadow-[0_30px_80px_rgba(0,0,0,0.14)] flex flex-col justify-between gap-6">
            <div>
              <p className="text-brand-red text-[10px] font-black uppercase tracking-[0.4em] mb-3">
                // BROADCAST STATUS
              </p>
              <h3 className="text-3xl text-titanium font-black uppercase tracking-tighter mb-4">
                LIVE STREAMLINE
              </h3>
              {/* <p className="text-soft-blue text-sm uppercase tracking-[0.3em] leading-7">
                06 premium reels loaded. 42 archive assets ready. The presentation is polished, focused, and easy to scan.
              </p> */}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[1.5rem] bg-white/5 p-5 border border-white/10 backdrop-blur-xl">
                <p className="text-brand-red text-[10px] uppercase tracking-[0.35em] mb-2">VIDEOS</p>
                <p className="text-3xl font-black text-titanium">06</p>
              </div>
              <div className="rounded-[1.5rem] bg-white/5 p-5 border border-white/10 backdrop-blur-xl">
                <p className="text-brand-red text-[10px] uppercase tracking-[0.35em] mb-2">ARCHIVE</p>
                <p className="text-3xl font-black text-titanium">42</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}