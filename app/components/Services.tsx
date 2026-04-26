// src/components/Services.tsx
'use client'
import { motion } from 'framer-motion'

const SERVICES = [
  { id: '01', title: 'Creative Direction', desc: 'Concept to execution for film, motion, and brand storytelling.' },
  { id: '02', title: '2D / 3D Animation', desc: 'Premium motion design crafted for product launches and campaigns.', video: '/videos/second.mp4' },
  { id: '03', title: 'Visual Effects', desc: 'Cinematic post-production with detail-driven compositing and finish.' },
  { id: '04', title: 'Brand Identity', desc: 'Motion-first systems that elevate digital experiences and narratives.', video: '/videos/third.mp4' }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-surface border-t border-brand-blue/10 px-6 md:px-12 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,88,59,0.1),transparent_38%)] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-14 max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.45em] text-brand-red mb-4">
            // OUR SERVICES
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-text uppercase tracking-tight leading-[0.95] mb-5">
            Clean, premium service offerings for modern visual brands.
          </h2>
          <p className="text-muted text-sm md:text-base leading-8 tracking-[0.18em] max-w-2xl">
            We combine cinematic motion, refined storytelling, and motion-first identity systems to create elegant experiences that feel high-end and effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => {
            const isAccent = service.id === '02'
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-[2rem] border overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-transform duration-500 ${isAccent ? 'border-brand-red/20 bg-brand-red/10 shadow-[0_40px_100px_rgba(217,88,59,0.16)]' : 'border-white/10 bg-white/95'}`}
              >
                {/* Background Video for specific cards */}
                {service.video && (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>
                )}

                {/* Overlay for text readability */}
                <div className={`relative z-10 p-8 ${service.video ? (isAccent ? 'bg-gradient-to-br from-brand-red/10 via-white/90 to-white/95' : 'bg-gradient-to-br from-white/90 via-surface-soft to-white/95') : 'bg-white/95'}`}>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className={`text-[10px] font-semibold uppercase tracking-[0.35em] ${isAccent ? 'text-brand-red' : 'text-brand-blue'}`}>
                      {service.id}
                    </span>
                    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] uppercase tracking-[0.35em] ${isAccent ? 'border-brand-red/20 bg-white/90 text-brand-red' : 'border-brand-blue/10 bg-surface-soft text-muted'}`}>
                      <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
                      premium
                    </div>
                  </div>
                  <h3 className={`text-3xl md:text-4xl font-black uppercase tracking-tight leading-[0.95] mb-4 ${isAccent ? 'text-brand-red' : 'text-text'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-7 tracking-[0.18em] ${isAccent ? 'text-text text-basic' : 'text-muted text-basic'}`}>
                    {service.desc}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}