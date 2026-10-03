import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../layout/SectionTitle';

import t1 from '../../assets/images/team/team-1.jpg';
import t2 from '../../assets/images/team/team-2.jpg';
import t3 from '../../assets/images/team/team-3.jpg';
import t4 from '../../assets/images/team/team-4.jpg';
import t5 from '../../assets/images/team/team-5.jpg';

const team = [
  { name: 'John Doe', role: 'CEO & Founder', image: t1 },
  { name: 'Jane Smith', role: 'Creative Director', image: t2 },
  { name: 'Michael Chen', role: 'Head of Production', image: t3 },
  { name: 'Sarah Jones', role: 'Lead Event Manager', image: t4 },
  { name: 'David Singh', role: 'Technical Director', image: t5 }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <SectionTitle subtitle="MEET OUR" title="EXPERTS" />
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base">
              6+ years of experience, driven by a passionate team
              committed to delivering exceptional event experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative overflow-hidden bg-black aspect-[3/4] flex items-end justify-center rounded-sm"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Red glow behind image using a radial gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.6)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
              />

              {/* Gradient Overlay for Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white font-bold text-lg">{member.name}</h4>
                <p className="text-[#f59e0b] text-sm font-semibold">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
