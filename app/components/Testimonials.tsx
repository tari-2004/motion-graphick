'use client'
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  { id: '01', quote: "The motion fidelity is unmatched.", author: "Sarah Jenkins", role: "CD @ Nike" },
  { id: '02', quote: "A technical powerhouse. Their 3D work is incredible.", author: "Marcus Chen", role: "Lead @ Meta" },
  { id: '03', quote: "Fast, precise, and aggressively creative.", author: "Elena Rodriguez", role: "Founder @ Synth" },
  { id: '04', quote: "Their work doesn't just look good—it feels alive.", author: "David Park", role: "CD @ Adobe" }
]

export default function Testimonials() {
  // Use 4 sets of the data to ensure the screen is always full, preventing "jump" glitches
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

      <div className="flex items-center">
        <motion.div 
          className="flex gap-6 will-change-transform"
          animate={{ x: [0, -1000] }} 
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            // This is critical for preventing "jank" on high-refresh monitors
            repeatType: "loop"
          }}
          style={{ 
            display: 'flex',
            // Force hardware acceleration
            transformStyle: 'preserve-3d' 
          }}
        >
          {repeatedData.map((item, idx) => (
            <div 
              key={idx}
              className="w-[320px] flex-shrink-0 p-8 rounded-3xl bg-white border border-black/5 shadow-sm"
              style={{
                // Prevent the browser from re-calculating the layout of the card content while moving
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
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

      {/* Side Masks: Essential for the "fade" effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />
    </section>
  )
}