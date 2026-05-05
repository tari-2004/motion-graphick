'use client'
import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import BgVideoSection from './components/BgVideoSection'
import Loader from './components/Loader' // Ensure this path matches your file structure
import { motion } from 'framer-motion'

// Lazy load heavy components
const WorkGrid = dynamic(() => import('./components/WorkGrid'), { ssr: false })
const Services = dynamic(() => import('./components/Services'), { ssr: false })
const Testimonials = dynamic(() => import('./components/Testimonials'), { ssr: false })
const Footer = dynamic(() => import('./components/Footer'), { ssr: false })

export default function HomePage() {
  return (
    <Loader>
      <main className="relative w-full min-h-screen bg-surface select-none overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <BgVideoSection />
        
        {/* Scrollable Content */}
        <div className="relative z-10 contain-layout">
          <div id="work">
            <WorkGrid />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="about">
            <Testimonials />
          </div>
          <div id="contact">
            <Footer />
          </div>
        </div>

        {/* Optimized Background Polish */}
        <div 
          className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-50 will-change-transform" 
          style={{ contain: 'strict' }}
        />
      </main>
    </Loader>
  )
}