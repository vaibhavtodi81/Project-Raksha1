import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CardSwap, { Card } from './CardSwap/CardSwap';
import { Shield, Zap, Scale, Heart, AlertCircle } from 'lucide-react';
import RainbowButton from './ui/RainbowButton';

import truthImg from '../assets/vision/truth.png';
import diffImg from '../assets/vision/difference.png';
import promiseImg from '../assets/vision/promise.png';
import movementImg from '../assets/vision/movement.png';

const OurVision = () => {
  const visionScript = [
    {
      image: truthImg,
      label: "The Painful Truth",
      title: "Existing tools are reactive",
      description: "Raksha was born from a simple but painful truth — that the tools built to protect women today only respond after the damage is done.",
      color: "from-sensual-burgundy/40 to-transparent"
    },
    {
      image: diffImg,
      label: "The Difference",
      title: "A system that does not wait",
      description: "We are building something different. A system that neutralizes the threat, captures the evidence, and ensures immediate accountability.",
      color: "from-sensual-taupe/40 to-transparent"
    },
    {
      image: promiseImg,
      label: "The Promise",
      title: "Justice as a Guarantee",
      description: "We believe justice should not be a process that takes months. It should be a guarantee — immediate and undeniable.",
      color: "from-sensual-peach/40 to-transparent"
    },
    {
      image: movementImg,
      label: "The Movement",
      title: "Power in your hands",
      description: "Raksha is not just a safety app. It is a movement to build a world where no woman ever has to wonder if help will arrive in time.",
      color: "from-sensual-cream/40 to-transparent"
    }
  ];

  return (
    <section id="vision" className="pt-32 pb-48 bg-sensual-offwhite relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sensual-burgundy/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-sensual-taupe/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center w-full"
          >
            <h2 className="text-6xl md:text-9xl font-bold font-display text-[#050505] mb-4 italic uppercase tracking-tighter leading-none">
              Our <span className="text-[#610C27]">Vision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
            {/* Left: Narrative Context */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div className="space-y-8">
                <p className="text-3xl md:text-4xl text-[#050505] italic font-bold leading-tight">
                  "Every woman deserves to live without fear — <span className="text-[#610C27]">without looking over her shoulder.</span>"
                </p>
                <p className="text-xl text-[#1a1a1a] font-semibold leading-relaxed max-w-xl">
                  Raksha was born from a simple but painful truth — that the tools built to protect women today only respond after the damage is done. An alert sent. A message delivered. Help on the way. But too late.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {visionScript.map((step, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="w-8 h-px bg-sensual-burgundy/30" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-sensual-burgundy">{step.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Integrated Card Stack */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-[600px] flex items-center justify-center lg:justify-end"
            >
              <CardSwap
                width={540}
                height={420}
                cardDistance={50}
                verticalDistance={30}
                delay={5000}
                pauseOnHover={true}
                skewAmount={2}
              >
                {visionScript.map((card, index) => (
                  <Card key={index} className="overflow-hidden border-sensual-burgundy/10 bg-sensual-cream shadow-2xl rounded-[2rem]">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={card.image} 
                        alt={card.label} 
                        className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]" 
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${card.color} mix-blend-multiply opacity-60`} />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sensual-burgundy/80" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                      <div className="mb-auto flex justify-between items-start">
                        <div className="px-4 py-1 bg-sensual-offwhite/90 backdrop-blur-md rounded-full border border-sensual-burgundy/10">
                          <span className="text-[9px] uppercase tracking-[0.3em] text-sensual-burgundy font-bold">
                            {card.label}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-sensual-offwhite mb-4 italic uppercase tracking-wider leading-tight drop-shadow-lg">
                        {card.title}
                      </h3>
                      <p className="text-sensual-offwhite/90 text-base leading-relaxed font-light max-w-md drop-shadow-md">
                        {card.description}
                      </p>
                      
                      <div className="mt-8 flex justify-between items-center opacity-30">
                        <div className="text-4xl font-bold italic font-display text-sensual-offwhite">0{index + 1}</div>
                        <div className="text-[7px] uppercase tracking-[0.4em] font-bold italic text-sensual-offwhite">Project Raksha Vision</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </motion.div>
          </div>

          {/* Join Community CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group flex flex-col items-center pt-24 border-t border-sensual-burgundy/10"
          >
            <div className="absolute inset-0 bg-sensual-burgundy/5 blur-[150px] group-hover:bg-sensual-burgundy/10 transition-all duration-700" />
            
            <div className="relative text-center">
              <h3 className="text-3xl md:text-5xl font-bold text-[#050505] mb-12 italic uppercase tracking-tight leading-tight">
                Join the <span className="text-[#610C27] underline decoration-sensual-taupe/30">Movement</span> <br /> to build a safer world
              </h3>
              
              <RainbowButton
                to="/register"
                className="!px-16 !py-6 !text-xl"
              >
                Join Community
                <div className="w-3 h-3 bg-red-600 rounded-full animate-ping shadow-[0_0_15px_rgba(220,38,38,0.8)] ml-4" />
              </RainbowButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="text-[10px] uppercase tracking-[0.5em] text-[#050505]/60 font-bold italic">Connect With Us</div>
        <div className="w-px h-16 bg-gradient-to-b from-[#610C27] to-transparent" />
      </motion.div>
    </section>
  );
};

export default OurVision;
