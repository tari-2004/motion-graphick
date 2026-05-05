'use client'
import { motion } from 'framer-motion'
import { Camera, Bird, Mail, ArrowUpRight } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#080808] pt-32 pb-12 px-6 md:px-12 overflow-hidden text-white will-change-transform">
      {/* 1. CREATIVE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-[-10%] left-[10%] w-[40%] h-[40%] rounded-full bg-brand-red/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-brand-blue/10 blur-[100px]" />
      </div>
      <div className="absolute inset-0 z-1 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* 2. BIG CTA SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-brand-red font-mono text-[10px] tracking-[0.5em] mb-6 uppercase">
              // NEXT_STEPS
            </p>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Got a <span className="italic text-brand-red">Vision</span>? <br /> 
              Let me build it.
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="flex flex-col items-start lg:items-end"
          >
            <motion.a 
              href="https://wa.me/2347081330590"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-brand-red text-white p-16 md:p-24 rounded-full flex flex-col items-center justify-center text-center transition-all duration-500 shadow-[0_0_50px_rgba(217,88,59,0.3)]"
            >
              <span className="font-display text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-2">
                Work <br /> With me
              </span>
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              
              <div className="absolute -top-4 -right-4 bg-white text-black text-[9px] font-black px-3 py-2 rounded-lg rotate-12 uppercase tracking-tighter">
                Open 24/7
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* 3. PLAYFUL ICON LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16 mb-24">
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <SocialPill 
                icon={<FaLinkedin size={18} />} 
                label="LinkedIn" 
                href="https://www.linkedin.com/in/john-odunayo?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              />
              <SocialPill icon={<Bird size={18} />} label="X-App" href="https://x.com/johncodunayo"/>
              <SocialPill 
                icon={<Mail size={18} />} 
                label="Email" 
                href="mailto:oluwatobi1411@gmail.com?subject=Hello%20from%20your%20Portfolio" 
              />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Location</h4>
            <div className="font-mono text-sm text-white/50 leading-relaxed uppercase tracking-tight">
              Remote First <br />
              <b className="text-white/70">Everywhere.</b>
            </div>
          </div>
        </div>

        {/* 4. FOOTER BASE */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-12">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-brand-red rounded-full animate-pulse" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em]">John's Motion</p>
          </div>
          
          <div className="flex items-center gap-8">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.1em]">© {currentYear} John's Motion</p>
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
      className="flex items-center gap-3 bg-white/5 hover:bg-white text-white hover:text-black px-5 py-3 rounded-full border border-white/10 transition-all duration-500 ease-[0.22,1,0.36,1]"
    >
      {icon}
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </a>
  )
}