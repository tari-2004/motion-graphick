'use client'
import { motion } from 'framer-motion'
import { scrollTo } from '../utils/nav-logic'

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-surface px-6 md:px-12 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,88,59,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(176,138,95,0.14),transparent_28%)] pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-7" />
      <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-12 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.5em] text-brand-red">
            {'// STUDIO PORTFOLIO'}
          </p>
          <h1 className="text-7xl md:text-[7.75rem] font-black uppercase tracking-[-0.08em] text-text leading-[0.88] max-w-[10ch]">
            Raw Motion. Refined Motion.
          </h1>
          <p className="mt-8 max-w-xl text-sm md:text-base leading-7 tracking-[0.25em] text-muted/70">
            We design immersive motion systems and cinematic visuals for premium brands—built to feel sleek, bold, and instantly modern.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              onClick={() => scrollTo('work')}
              className="inline-flex items-center justify-center rounded-full border border-brand-red bg-brand-red/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-red transition hover:bg-brand-red/15"
            >
              View work
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="inline-flex items-center justify-center rounded-full border border-brand-blue/10 bg-surface-soft px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-text transition hover:border-brand-red/20"
            >
              Services
            </button>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex w-full max-w-xl flex-col gap-6 rounded-[2rem] border border-brand-blue/10 bg-white/95 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.35em] text-soft-blue">
            <span className="font-black text-brand-red">RAW STUDIO</span>
            <span className="text-brand-blue">Lagos • NG</span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-soft-blue/70 mb-2">
                focus
              </p>
              <p className="text-lg font-semibold text-text uppercase tracking-[0.2em]">
                Motion systems, VFX, brand cinema
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-soft-blue/70 mb-2">
                specialty
              </p>
              <p className="text-lg font-semibold text-text uppercase tracking-[0.2em]">
                Interactive visuals and narrative design
              </p>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-surface-soft/95 p-4 text-[11px] uppercase tracking-[0.35em] text-muted/90 border border-brand-blue/10">
            <span className="font-bold text-text">Studio pulse:</span> premium, clean, and cinematic.
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}