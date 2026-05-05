'use client'
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  { id: '01', quote: "The motion fidelity is unmatched.", author: "Sarah Jenkins", role: "CD @ Nike" },
  { id: '02', quote: "A technical powerhouse. Their 3D work is incredible.", author: "Marcus Chen", role: "Lead @ Meta" },
  { id: '03', quote: "Fast, precise, and aggressively creative.", author: "Elena Rodriguez", role: "Founder @ Synth" },
  { id: '04', quote: "Their work doesn't just look good—it feels alive.", author: "David Park", role: "CD @ Adobe" }
]

export default function Testimonials() {
  // Increased density ensures the loop is physically longer, which helps smoothness
  const repeatedData = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section className="relative bg-[#fafafa] py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-10">
        <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-brand-red mb-3">
          // TESTIMONIES
        </p>
        <h2 className="text-3xl font-light text-text uppercase tracking-tight">
          Smooth <span className="italic font-serif">Client Echoes</span>
        </h2>
      </div>

      {/* OPTIMIZATION: We use a static container that stays off the main thread.
         'will-change-transform' ensures the GPU pre-allocates memory for the animation.
      */}
      <div className="flex items-center overflow-hidden">
        <motion.div 
          className="flex gap-6 will-change-transform"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            duration: 40, // Increased for a slower, more "weighted" feel
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          style={{ 
            display: 'flex',
            backfaceVisibility: 'hidden'
          }}
        >
          {repeatedData.map((item, idx) => (
            <div 
              key={idx}
              className="w-[320px] flex-shrink-0 p-8 rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div className="min-h-[100px]">
                <span className="text-[8px] font-mono text-black/20 block mb-4 tracking-widest">
                  REF_{item.id}
                </span>
                <p className="text-base font-light text-text/80 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-black/[0.03]">
                <h4 className="text-xs font-bold text-text uppercase mb-0.5">{item.author}</h4>
                <p className="text-[9px] font-medium text-muted uppercase tracking-widest">{item.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />
    </section>
  )
}