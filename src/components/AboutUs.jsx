import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard/ProfileCard';
import vaibhavImg from '../assets/team/vaibhav.png';
import riyaImg from '../assets/team/riya.png';
import vinayakImg from '../assets/team/vinayak.png';

const AboutUs = () => {
  const team = [
    {
      name: "Vaibhav Todi",
      title: "Lead & Team Member",
      handle: "vaibhavtodi",
      status: "CS & AI @ NST",
      avatarUrl: vaibhavImg,
      bio: "I'm Vaibhav Todi, a first year B.Tech CS & AI student passionate about building tech that solves real problems. Currently leading development of Raksha.",
      contactUrl: "https://www.linkedin.com/in/vaibhavtodi/",
      innerGradient: "linear-gradient(145deg, #050505 0%, #610c27 100%)",
      behindGlowColor: "rgba(97, 12, 39, 0.4)"
    },
    {
      name: "Riya Todi",
      title: "Team Member",
      handle: "riyatodi",
      status: "Developer",
      avatarUrl: riyaImg,
      bio: "A passionate developer building impactful, real-world solutions. Riya recognized a critical gap in women safety systems and chose to develop SafeHer.",
      contactUrl: "https://www.linkedin.com/in/riya-todi-a8b934372/",
      innerGradient: "linear-gradient(145deg, #050505 0%, #ac9c8d 100%)",
      behindGlowColor: "rgba(172, 156, 141, 0.4)"
    },
    {
      name: "Vinayak Pachauri",
      title: "Team Member",
      handle: "vinayak",
      status: "CS & AI Student",
      avatarUrl: vinayakImg,
      bio: "First year student of Newton School of Technology, specialising in CS & AI. Taking a small step to safeguard women by contributing to Project Raksha.",
      contactUrl: "https://www.linkedin.com/in/vinayak-pachauri/",
      innerGradient: "linear-gradient(145deg, #050505 0%, #e3c1b4 100%)",
      behindGlowColor: "rgba(227, 193, 180, 0.4)"
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#efece9] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#610C27]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#AC9C8D]/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#050505] mb-6 tracking-tight uppercase italic">
            Meet the <span className="text-[#610C27]">Visionaries</span>
          </h2>
          <p className="text-[#1a1a1a] text-lg md:text-xl max-w-2xl mx-auto font-semibold">
            The dedicated team behind Project Raksha, working to create a safer world through technology.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            >
              <ProfileCard
                name={member.name}
                title={member.title}
                handle={member.handle}
                status={member.status}
                avatarUrl={member.avatarUrl}
                bio={member.bio}
                innerGradient={member.innerGradient}
                behindGlowColor={member.behindGlowColor}
                behindGlowEnabled={true}
                enableTilt={true}
                showUserInfo={true}
                contactText="Connect"
                onContactClick={() => window.open(member.contactUrl, '_blank')}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle indicator for next section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <div className="text-[10px] uppercase tracking-[0.4em] text-[#050505] font-bold italic">Keep Exploring</div>
        <div className="w-px h-12 bg-gradient-to-b from-[#610C27] to-transparent" />
      </div>
    </section>
  );
};

export default AboutUs;
