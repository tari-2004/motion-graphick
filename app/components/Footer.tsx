'use client'
import { motion } from 'framer-motion'

// Direct imports to bypass the barrel file error
import { Camera, Bird, Link } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-brand-blue/10 px-6 md:px-12 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,17,76,0.08),transparent_35%)] pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto max-w-2xl"
          >
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.5em] text-brand-red">
              // LET'S CONNECT
            </p>
            <h2 className="mb-8 text-4xl md:text-6xl font-black uppercase tracking-tight text-titanium leading-[0.95]">
              Ready to create something <span className="text-brand-red italic">exceptional</span>?
            </h2>
            <p className="mb-10 text-base md:text-lg leading-8 tracking-[0.18em] text-soft-blue/80">
              Let's discuss your next motion project. Whether it's brand cinema, interactive experiences, or premium visual systems—we're here to bring your vision to life.
            </p>
            <a
              href="mailto:hello@rawmotion.studio"
              className="inline-flex items-center justify-center rounded-full border border-brand-red bg-brand-red/10 px-10 py-5 text-sm font-semibold uppercase tracking-[0.25em] text-brand-red transition hover:bg-brand-red/15"
            >
              Start a conversation
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="rounded-[2rem] border border-brand-blue/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          >
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-soft-blue/70 mb-2">
                location
              </p>
              <p className="text-lg font-semibold text-titanium uppercase tracking-[0.2em]">
                Lagos, Nigeria
              </p>
            </div>
            <div className="space-y-2 text-[10px] uppercase tracking-[0.35em] text-soft-blue">
              <p>Timezone: WAT (UTC+1)</p>
              <p>Status: <span className="text-brand-red font-bold">Available</span></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="rounded-[2rem] border border-brand-blue/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          >
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-soft-blue/70 mb-2">
                connect
              </p>
              <p className="text-lg font-semibold text-titanium uppercase tracking-[0.2em]">
                hello@rawmotion<br></br>.studio
              </p>
            </div>
            <div className="flex gap-6">
              {[
                { Icon: Camera, label: 'Instagram', href: '#' },
                { Icon: Bird, label: 'Twitter', href: '#' },
                { Icon: Link, label: 'LinkedIn', href: '#' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/20 text-titanium/60 hover:text-brand-red hover:border-brand-red/30 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="rounded-[2rem] border border-brand-blue/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          >
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-soft-blue/70 mb-2">
                studio
              </p>
              <p className="text-lg font-semibold text-titanium uppercase tracking-[0.2em]">
                Raw Motion
              </p>
            </div>
            <div className="space-y-2 text-[10px] uppercase tracking-[0.35em] text-soft-blue">
              <p>Founded: 2024</p>
              <p>Specialty: Premium Motion</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-brand-blue/10 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-soft-blue/60">
            © 2026 Raw Motion Studio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}