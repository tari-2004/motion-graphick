'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const SERVICES = [
  { id: '01', title: 'Creative Direction', desc: 'Concept to execution for film, motion, and brand storytelling.' },
  { id: '02', title: '2D / 3D Animation', desc: 'Premium motion design for products and campaigns.' },
  { id: '03', title: 'Visual Effects', desc: 'Cinematic post-production and detail-driven compositing.' },
  { id: '04', title: 'Brand Identity', desc: 'Motion-first systems that elevate digital narratives.' }
]

export default function Services() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="relative bg-[#080808] py-12 px-6 overflow-hidden">
      {/* Optimized Background: Single opacity layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,#D9583B_0%,transparent_50%)] opacity-10 pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-6">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            CORE <span className="text-brand-red italic">SERVICES</span>
          </h2>
          <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em] hidden sm:block">
            Ver. 2.0 // High_Speed
          </span>
        </div>

        <div className="flex flex-col">
          {SERVICES.map((service) => {
            const isOpen = active === service.id
            return (
              <div 
                key={service.id} 
                className="border-b border-white/5 overflow-hidden"
              >
                <button 
                  onClick={() => setActive(isOpen ? null : service.id)}
                  className="w-full flex items-center justify-between py-5 group text-left transition-colors hover:bg-white/[0.01]"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className={`font-mono text-xs transition-colors duration-200 ${isOpen ? 'text-brand-red' : 'text-white/20'}`}>
                      {service.id}
                    </span>
                    <h3 className={`text-xl md:text-3xl font-black uppercase tracking-tight transition-all duration-200 ${isOpen ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                      {service.title}
                    </h3>
                  </div>

                  <div className={`transition-transform duration-300 ease-[0.23,1,0.32,1] ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#D9583B" : "currentColor"} strokeWidth="2.5" className={isOpen ? "" : "text-white/20"}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }} // "Snappy" easing
                    >
                      <div className="pb-6 pl-10 md:pl-20">
                        <p className="text-white/50 text-sm md:text-base leading-snug max-w-lg">
                          {service.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Compact, high-speed button */}
        <div className="mt-10 flex justify-end">
          <Link href="/contact" className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full hover:bg-brand-red hover:text-white transition-all duration-200">
            <span className="text-[11px] font-black uppercase tracking-widest">Inquiry</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}