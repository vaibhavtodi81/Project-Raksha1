import { Link } from 'react-router-dom'
import ExpandableGallery from '../components/ui/ExpandableGallery'
import { CinematicFooter } from '../components/ui/MotionFooter'
import { motion } from 'framer-motion'
import AboutUs from '../components/AboutUs'
import OurVision from '../components/OurVision'

import hero1 from '../assets/hero-1.jpg'
import hero2 from '../assets/hero-2.jpg'
import hero3 from '../assets/hero-3.jpg'
import hero4 from '../assets/hero-4.jpg'

import RainbowButton from '../components/ui/RainbowButton'

const LandingPage = () => {
  const galleryImages = [hero1, hero2, hero3, hero4];

  return (
    <div className="relative w-full bg-[#efece9] min-h-screen font-sans overflow-x-hidden">
      
      {/* ── Main Content Area (High z-index to sit on top of footer) ── */}
      <main className="relative z-10 w-full min-h-[130vh] flex flex-col justify-between shadow-2xl rounded-b-[3rem] overflow-hidden">
        
        {/* Full Page Background Gallery inside main so it scrolls up */}
        <div className="absolute inset-0 z-0">
          <ExpandableGallery images={galleryImages} className="w-full h-full" isBackground={true} />
        </div>

        {/* ── Top Right Action Button ──────────────────────────────── */}
        <div className="absolute top-8 right-10 z-50">
          <RainbowButton to="/login" className="!px-6 !py-2 !text-[10px]">
            Join Community
          </RainbowButton>
        </div>

        {/* ── Content Layer ────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-col items-center justify-between min-h-[100vh] py-24 bg-transparent pointer-events-none">
          
          {/* ── Hero Text ─────────────────────────────────────────── */}
          <div className="flex-1 flex flex-col items-center justify-center text-center mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-6xl lg:text-9xl font-medium font-display mb-4 tracking-tighter text-[#efece9] drop-shadow-2xl uppercase italic leading-none">
                Project <span className="text-[#610C27]">Raksha</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center justify-center gap-4 opacity-95"
            >
              <div className="h-px w-8 bg-[#e3c1b4]/50" />
              <p className="text-lg lg:text-2xl font-bold text-[#e3c1b4] tracking-[0.25em] uppercase italic drop-shadow-lg">
                "The fire which is not just to light candles"
              </p>
              <div className="h-px w-8 bg-[#e3c1b4]/50" />
            </motion.div>
          </div>

          {/* ── Counters ──────────────────────────────────────────── */}
          <div className="w-full max-w-5xl px-8 mt-auto mb-4 pointer-events-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="group relative overflow-hidden bg-[#610C27] backdrop-blur-3xl border border-white/10 rounded-[2rem] p-10 transition-all duration-500 hover:bg-[#050505] shadow-2xl"
              >
                <div className="relative z-10 text-center">
                  <div className="text-6xl font-bold font-display text-[#EFECE9] mb-2 italic">0</div>
                  <div className="text-xs uppercase tracking-[0.4em] text-[#EFECE9]/80 font-bold">Active Cases Resolved</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="group relative overflow-hidden bg-[#610C27] backdrop-blur-3xl border border-white/10 rounded-[2rem] p-10 transition-all duration-500 hover:bg-[#050505] shadow-2xl"
              >
                <div className="relative z-10 text-center">
                  <div className="text-6xl font-bold font-display text-[#EFECE9] mb-2 italic">0</div>
                  <div className="text-xs uppercase tracking-[0.4em] text-[#EFECE9]/80 font-bold">Community Members</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll instruction added per prompt */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          >
            <div className="text-[10px] uppercase tracking-[0.5em] text-[#efece9]/60 font-bold italic">Scroll Down</div>
            <div className="w-px h-12 bg-gradient-to-b from-[#e3c1b4] to-transparent" />
          </motion.div>

        </div>
      </main>

      {/* About Us Section */}
      <AboutUs />

      {/* Our Vision Section */}
      <OurVision />

      {/* ── Cinematic Footer (Contact Us) injected here ── */}
      <CinematicFooter />

    </div>
  )
}

export default LandingPage
