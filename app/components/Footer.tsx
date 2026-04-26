'use client'
import { motion } from 'framer-motion'

// Direct imports to bypass the barrel file error
import { Camera, Bird, Link } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-surface border-t border-brand-blue/10 px-6 md:px-12 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(217,88,59,0.08),transparent_35%)] pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="grid gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.5em] text-brand-red">
              // LET'S CONNECT
            </p>
            <h2 className="mb-8 text-4xl md:text-6xl font-black uppercase tracking-tight text-text leading-[0.95]">
              Ready to create something <span className="text-brand-red italic">exceptional</span>?
            </h2>
            <p className="mb-10 text-sm md:text-base leading-8 tracking-[0.18em] text-muted/80 text-basic">
              Let's discuss your next motion project. Whether it's brand cinema, interactive experiences, or premium visual systems—we're here to bring your vision to life.
            </p>
            <a
              href="mailto:hello@rawmotion.studio"
              className="inline-flex items-center justify-center rounded-full border border-brand-red bg-brand-red/10 px-10 py-5 text-sm font-semibold uppercase tracking-[0.25em] text-brand-red transition hover:bg-brand-red/15"
            >
              Start a conversation
            </a>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] items-start text-text">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted/70">
                studio
              </p>
              <p className="text-2xl font-black uppercase tracking-tight">
                Raw Motion
              </p>
              <p className="text-sm text-basic text-muted leading-7">
                A playful premium studio crafting motion narratives with warmth, polish, and bold clarity.
              </p>
            </div>

            <div className="relative flex justify-center py-4">
              <div className="absolute inset-x-0 top-1/2 h-px bg-brand-blue/10" />
              <div className="relative inline-flex items-center justify-center rounded-full border border-brand-blue/10 bg-white/95 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-red shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                say hello
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted/70">
                contact
              </p>
              <a href="mailto:hello@rawmotion.studio" className="block text-lg font-black uppercase tracking-[0.2em] text-text">
                hello@rawmotion.studio
              </a>
              <p className="text-sm text-basic text-muted leading-7">
                Lagos, Nigeria • Available for selective partnerships
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 text-sm text-muted text-basic">
                  <span className="inline-block h-2 w-2 rounded-full bg-brand-red" />
                  Motion • Brand • Film
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted text-basic">
                  <span className="inline-block h-2 w-2 rounded-full bg-brand-blue" />
                  Crafted with care
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-basic text-muted">
            <p>© 2026 Raw Motion Studio</p>
            <div className="flex items-center gap-4">
              <span className="inline-flex h-2 w-2 rounded-full bg-brand-red" />
              <span>Premium motion without the noise</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}