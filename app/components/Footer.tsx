'use client'
import { motion } from 'framer-motion'
import { Camera, Bird, Link as LinkIcon, Mail, ArrowUpRight, } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#080808] pt-32 pb-12 px-6 md:px-12 overflow-hidden text-white">
      {/* 1. CREATIVE BACKGROUND: Thick blur and subtle noise */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-[-10%] left-[10%] w-[40%] h-[40%] rounded-full bg-brand-red/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-brand-blue/10 blur-[100px]" />
      </div>
      <div className="absolute inset-0 z-1 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* 2. BIG CTA SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-red font-mono text-[10px] tracking-[0.5em] mb-6 uppercase">
              // NEXT_STEPS
            </p>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Got a <span className="italic text-brand-red">Vision</span>? <br /> 
              Let's build it.
            </h2>
            <div className="flex flex-wrap gap-4">
              {['Motion', 'Identity', 'Strategy'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest bg-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-end"
          >
            <a 
              href="mailto:hello@rawmotion.studio"
              className="group relative bg-brand-red text-white p-16 md:p-24 rounded-full flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-500 shadow-2xl"
            >
              <span className="font-display text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-2">
                Work <br /> With Us
              </span>
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              {/* Decorative mini-label */}
              <div className="absolute -top-4 -right-4 bg-white text-black text-[9px] font-black px-3 py-2 rounded-lg rotate-12 uppercase tracking-tighter">
                Open for '26
              </div>
            </a>
          </motion.div>
        </div>

        {/* 3. PLAYFUL ICON LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16 mb-24">
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <SocialPill icon={<Camera size={18} />} label="Insta" href="#" />
              <SocialPill icon={<Bird size={18} />} label="X-App" href="#" />
              <SocialPill icon={<Mail size={18} />} label="Email" href="#" />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Studio</h4>
            <div className="font-mono text-sm text-white/50 leading-relaxed uppercase tracking-tight">
              Lagos, Nigeria <br />
              Remote First <br />
              Everywhere.
            </div>
          </div>

          <div className="space-y-6 md:text-right">
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Archives</h4>
             <div className="flex flex-col md:items-end gap-2">
                <FooterLink label="Our Process" />
                <FooterLink label="Case Studies" />
                <FooterLink label="Playground" />
             </div>
          </div>
        </div>

        {/* 4. FOOTER BASE */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-12">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-brand-red rounded-full animate-pulse" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em]">Raw Motion Studio</p>
          </div>
          
          <div className="flex items-center gap-8">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.1em]">© {currentYear} Raw Motion</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red hover:text-white transition-colors"
            >
              Top <ArrowUpRight size={14} className="-rotate-45 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialPill({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <a 
      href={href}
      className="flex items-center gap-3 bg-white/5 hover:bg-white text-white hover:text-black px-5 py-3 rounded-full border border-white/10 transition-all duration-300"
    >
      {icon}
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </a>
  )
}

function FooterLink({ label }: { label: string }) {
  return (
    <a href="#" className="group flex items-center gap-2 text-xl font-black uppercase tracking-tighter text-white/40 hover:text-brand-red transition-all duration-300">
      <span className="group-hover:mr-2 transition-all">{label}</span>
      <div className="h-px w-0 group-hover:w-8 bg-brand-red transition-all" />
    </a>
  )
}