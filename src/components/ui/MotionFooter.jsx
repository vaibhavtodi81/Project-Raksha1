import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RainbowButton from "./RainbowButton";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES
// -------------------------------------------------------------------------
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  
  --foreground: #050505;
  --background: #efece9;
  --primary: #610c27;
  --secondary: #ac9c8d;
  --destructive: #ef4444;
  --muted-foreground: #666666;
  --border: rgba(97, 12, 39, 0.1);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 40s linear infinite;
}

.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(97, 12, 39, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(97, 12, 39, 0.03) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(97, 12, 39, 0.08) 0%, 
    rgba(172, 156, 141, 0.08) 40%, 
    transparent 70%
  );
}

.footer-giant-bg-text {
  font-size: 26vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(97, 12, 39, 0.15);
  background: linear-gradient(180deg, rgba(97, 12, 39, 0.2) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

.footer-text-glow {
  background: linear-gradient(180deg, #050505 0%, #610c27 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px rgba(97, 12, 39, 0.1));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE
// -------------------------------------------------------------------------
const MagneticButton = React.forwardRef(
  ({ className = '', children, as: Component = "button", ...props }, forwardedRef) => {
    const magnetRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const magnet = magnetRef.current;
      const content = contentRef.current;
      if (!magnet || !content) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e) => {
          const rect = magnet.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          // Move the content within the magnet zone
          gsap.to(content, {
            x: x * 0.45,
            y: y * 0.45,
            rotationX: -y * 0.1,
            rotationY: x * 0.1,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(content, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        magnet.addEventListener("mousemove", handleMouseMove);
        magnet.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          magnet.removeEventListener("mousemove", handleMouseMove);
          magnet.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, magnet);

      return () => ctx.revert();
    },[]);

    return (
      <div 
        ref={magnetRef} 
        className="flex items-center justify-center p-8 -m-8 group/magnet"
      >
        <div ref={contentRef} className="w-full flex justify-center">
          <Component
            ref={forwardedRef}
            className={`cursor-pointer ${className}`}
            {...props}
          >
            {children}
          </Component>
        </div>
      </div>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>Safety Redefined</span> <span className="text-[#610c27]/60">✦</span>
    <span>Immediate Action</span> <span className="text-[#ac9c8d]/60">✦</span>
    <span>24/7 Monitoring</span> <span className="text-[#610c27]/60">✦</span>
    <span>Legal Aid Connection</span> <span className="text-[#ac9c8d]/60">✦</span>
    <span>Absolute Privacy</span> <span className="text-[#610c27]/60">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef(null);
  const giantTextRef = useRef(null);
  const headingRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  },[]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-[#efece9] text-[#050505] cinematic-footer-wrapper border-t border-[#610c27]/10">
          
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[120px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none opacity-40" />

          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none font-display"
          >
            RAKSHA
          </div>

          {/* Marquee */}
          <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-[#610c27]/10 bg-[#efece9]/60 backdrop-blur-md py-4 z-10 -rotate-1 scale-110 shadow-sm">
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.3em] text-[#610c27]/40 uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-5xl md:text-8xl font-black footer-text-glow tracking-tighter mb-12 text-center font-display"
            >
              Contact Us
            </h2>

            <div ref={linksRef} className="flex flex-col items-center gap-6 w-full">
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <MagneticButton as={RainbowButton} href="mailto:support@projectraksha.in" className="!px-10 !py-5 !rounded-full">
                  <svg className="w-6 h-6 text-[#efece9]/60 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Support
                </MagneticButton>
                
                <MagneticButton as={RainbowButton} href="tel:1930" className="!px-10 !py-5 !rounded-full">
                  <svg className="w-6 h-6 text-[#efece9]/60 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Emergency: 1930
                </MagneticButton>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:gap-6 w-full mt-2">
                <MagneticButton as={RainbowButton} href="#" className="!px-6 !py-3 !text-xs !rounded-full opacity-90">
                  Report Incident
                </MagneticButton>
                <MagneticButton as={RainbowButton} href="#" className="!px-6 !py-3 !text-xs !rounded-full opacity-90">
                  Legal Aid
                </MagneticButton>
                <MagneticButton as={RainbowButton} href="#" className="!px-6 !py-3 !text-xs !rounded-full opacity-90">
                  Join NGO
                </MagneticButton>
              </div>
            </div>
          </div>

          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[#050505]/40 text-[10px] md:text-xs font-bold tracking-widest uppercase order-2 md:order-1">
              © 2026 Project Raksha. All rights reserved.
            </div>

            <MagneticButton
              as={RainbowButton}
              onClick={scrollToTop}
              className="!w-12 !h-12 !p-0 !rounded-full flex items-center justify-center order-3"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
