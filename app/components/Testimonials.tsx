'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const TESTIMONIALS = [
  { id: '01', quote: "The motion fidelity is unmatched.", author: "Sarah Jenkins", role: "CD @ Nike" },
  { id: '02', quote: "A technical powerhouse. Their 3D work is incredible.", author: "Marcus Chen", role: "Lead @ Meta" },
  { id: '03', quote: "Fast, precise, and aggressively creative.", author: "Elena Rodriguez", role: "Founder @ Synth" },
  { id: '04', quote: "Their work doesn't just look good—it feels alive.", author: "David Park", role: "CD @ Adobe" }
]

const CARD_STYLES = [
  { bg: 'bg-text', quote: 'text-surface/70', author: 'text-surface', role: 'text-surface/40', ref: 'text-surface/20', border: 'border-surface/10', arrow: 'text-surface/50', quotemark: 'text-surface/10' },
  { bg: 'bg-brand-red', quote: 'text-white/80', author: 'text-white', role: 'text-white/50', ref: 'text-white/20', border: 'border-white/20', arrow: 'text-white/60', quotemark: 'text-white/10' },
  { bg: 'bg-surface-soft', quote: 'text-text/70', author: 'text-text', role: 'text-muted', ref: 'text-text/20', border: 'border-text/5', arrow: 'text-brand-red', quotemark: 'text-brand-red/10' },
  { bg: 'bg-[#1a1410]', quote: 'text-surface/60', author: 'text-surface', role: 'text-surface/30', ref: 'text-surface/15', border: 'border-surface/5', arrow: 'text-brand-red', quotemark: 'text-brand-red/20' },
]

export default function Testimonials() {
  const repeatedData = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section className="relative bg-surface py-32 overflow-hidden">

      {/* BIG BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black uppercase tracking-[-0.06em] text-text/[0.03] whitespace-nowrap">
          VOICES
        </span>
      </div>

      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-red mb-4">
              // CLIENT TESTIMONIES
            </p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-[-0.04em] text-text leading-none">
              WHAT THEY
              <br />
              <span className="italic font-serif text-brand-red">SAY.</span>
            </h2>
          </div>

          <div className="flex items-end gap-4">
            <div className="h-[1px] w-16 bg-text/10 mb-2" />
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-muted">Happy clients</p>
              <p className="text-4xl font-black text-text">
                {TESTIMONIALS.length}
                <span className="text-brand-red">+</span>
              </p>
            </div>
          </div>

        </div>
        <div className="h-[1px] bg-text/10 mt-12" />
      </div>

      {/* TICKER */}
      <div className="flex items-center overflow-hidden">
        <motion.div
          className="flex gap-5 will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {repeatedData.map((item, idx) => {
            const style = CARD_STYLES[idx % CARD_STYLES.length]
            const isHovered = hoveredIdx === idx

            return (
              <motion.div
                key={idx}
                onHoverStart={() => setHoveredIdx(idx)}
                onHoverEnd={() => setHoveredIdx(null)}
                animate={{
                  scale: isHovered ? 1.03 : 1,
                  y: isHovered ? -6 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`w-[360px] flex-shrink-0 p-8 rounded-2xl cursor-default ${style.bg}`}
              >

                {/* Top row */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[8px] font-black uppercase tracking-[0.3em] font-mono ${style.ref}`}>
                    REF_{item.id}
                  </span>
                  <span className={`text-5xl font-black leading-none ${style.quotemark}`}>
                    "
                  </span>
                </div>

                {/* Quote */}
                <p className={`text-base font-light leading-relaxed mb-8 ${style.quote}`}>
                  {item.quote}
                </p>

                {/* Author */}
                <div className={`pt-5 border-t ${style.border}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`text-xs font-black uppercase tracking-wide ${style.author}`}>
                        {item.author}
                      </h4>
                      <p className={`text-[9px] uppercase tracking-widest mt-0.5 ${style.role}`}>
                        {item.role}
                      </p>
                    </div>

                    <motion.div
                      animate={{ x: isHovered ? 0 : -6, opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`text-xl ${style.arrow}`}
                    >
                      ↗
                    </motion.div>
                  </div>
                </div>

              </motion.div>
            )
          })}
        </motion.div>
      </div>

    </section>
  )
}