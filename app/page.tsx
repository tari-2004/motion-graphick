'use client'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import BgVideoSection from './components/BgVideoSection' // Your 30% Video
import HeroSection from './components/HeroSection'       // Your 70% Text
import WorkGrid from './components/WorkGrid'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { motion, AnimatePresence } from 'framer-motion'

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen bg-ink select-none overflow-x-hidden">
      {/* 01. GLOBAL INTERFACE ELEMENTS */}
      <Cursor />
      <Navbar />

      {/* 02. THE HERO COMPOSITE (100vh) */}
      {/* We stack the Video (30%) and the Text (70%) into a single viewport */}
      {/* <div className="flex flex-col h-screen w-full"> */}
        <BgVideoSection />
        <HeroSection />
      {/* </div> */}

      {/* 03. THE SCROLLABLE STACK */}
      {/* These components are modular and appear as the user scrolls */}
      <div className="relative z-10">
        <WorkGrid />
        <Services />
        <Testimonials />
        <Footer />
      </div>

      {/* Background Polish */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-50" />
    </main>
  )
}