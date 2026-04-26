// src/components/Testimonials.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const TESTIMONIALS = [
  {
    quote: "THEY DIDN'T JUST ANIMATE OUR BRAND; THEY GAVE IT A NERVOUS SYSTEM. THE MOTION FIDELITY IS UNMATCHED.",
    author: "Sarah Jenkins",
    role: "CD @ Nike",
    id: "REP_01",
    gradient: "from-purple-500 via-pink-500 to-red-500"
  },
  {
    quote: "A TECHNICAL POWERHOUSE. THE ABILITY TO BLEND RAW 3D WITH ORGANIC STORYTELLING IS THEIR SUPERPOWER.",
    author: "Marcus Chen",
    role: "Lead Producer @ Meta",
    id: "REP_02",
    gradient: "from-teal-400 via-cyan-500 to-blue-500"
  },
  {
    quote: "FAST, PRECISE, AND AGGRESSIVELY CREATIVE. THEY ARE OUR GO-TO FOR ANYTHING THAT NEEDS TO MOVE.",
    author: "Elena Rodriguez",
    role: "Founder @ Synth",
    id: "REP_03",
    gradient: "from-orange-400 via-yellow-500 to-red-500"
  },
  {
    quote: "THEIR WORK DOESN'T JUST LOOK GOOD—IT FEELS ALIVE. EVERY FRAME TELLS A STORY.",
    author: "David Park",
    role: "Creative Director @ Adobe",
    id: "REP_04",
    gradient: "from-green-400 via-emerald-500 to-teal-500"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000) // Auto-slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section id="about" className="relative bg-surface-soft py-32 px-6 md:px-12 overflow-hidden">
      {/* Abstract Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            {'// CLIENT ECHOES'}
          </p>
          <h2 className="text-5xl md:text-[7rem] font-black text-text uppercase tracking-[-0.06em] leading-[0.88]">
            Voices from the <span className="bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent">creative frontier</span>
          </h2>
        </motion.div>

        {/* Horizontal Slider Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-[3rem] bg-white/95 backdrop-blur-xl border border-brand-blue/10 shadow-[0_50px_150px_rgba(0,0,0,0.08)]">
            <div className="relative h-[500px] md:h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0 p-12 md:p-16 flex flex-col justify-center"
                >
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
                    <div className="flex-1">
                      <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${TESTIMONIALS[currentIndex].gradient} text-white text-[10px] font-bold uppercase tracking-[0.35em] mb-6`}>
                        {TESTIMONIALS[currentIndex].id}
                      </div>
                      <blockquote className="text-2xl md:text-4xl font-black text-text uppercase tracking-tight leading-[1.1] mb-8">
                        &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
                      </blockquote>
                    </div>

                    <div className="md:w-80">
                      <div className={`w-full h-1 bg-gradient-to-r ${TESTIMONIALS[currentIndex].gradient} mb-6 rounded-full`} />
                      <div className="space-y-2">
                        <h4 className="text-text font-black uppercase text-2xl leading-none">
                          {TESTIMONIALS[currentIndex].author}
                        </h4>
                        <p className="text-muted uppercase text-sm tracking-widest font-medium">
                          {TESTIMONIALS[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white scale-125 shadow-lg'
                      : 'bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-surface-soft backdrop-blur-xl border border-brand-blue/10 flex items-center justify-center text-text hover:bg-surface-soft transition-all duration-300 hover:scale-110"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-surface-soft backdrop-blur-xl border border-brand-blue/10 flex items-center justify-center text-text hover:bg-surface-soft transition-all duration-300 hover:scale-110"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${TESTIMONIALS[index].gradient} w-8`
                    : 'bg-white/20 w-4'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}