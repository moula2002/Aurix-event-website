import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Shield, Zap } from 'lucide-react';
import About from './About';

const AboutPage = () => {
  const milestones = [
    { year: '2004', title: 'The Beginning', desc: 'Ax Aurix Events was founded with a vision to revolutionize the event industry in the UAE.' },
    { year: '2010', title: 'Global Reach', desc: 'Expanded operations to handle international corporate events and exhibitions.' },
    { year: '2015', title: 'Award Winning', desc: 'Recognized as the Best Event Management Company in the Middle East.' },
    { year: '2020', title: 'Digital Evolution', desc: 'Pioneered hybrid and virtual event solutions during global shifts.' },
    { year: '2026', title: '22 Years of Excellence', desc: 'Continuing to set the benchmark for luxury and corporate events globally.' }
  ];

  const strengths = [
    { icon: Target, title: 'Strategic Planning', desc: 'Meticulous attention to detail and rigorous project management.' },
    { icon: Zap, title: 'Innovative Technology', desc: 'Integrating the latest AV, VR, and digital solutions into every event.' },
    { icon: Shield, title: 'Uncompromising Quality', desc: 'A commitment to excellence that ensures flawless execution.' },
    { icon: Award, title: 'Award-Winning Creative', desc: 'In-house design teams pushing the boundaries of event aesthetics.' }
  ];

  return (
    <div className="bg-white min-h-screen pb-24 pt-20">
      <About />

      {/* Core Strengths */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-4">Core Strengths</h2>
          <p className="text-gray-600">The pillars that uphold our standard of excellence.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#f59e0b] group-hover:text-white transition-colors duration-300">
                <strength.icon size={32} className="text-[#f59e0b] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{strength.title}</h3>
              <p className="text-gray-600 text-sm">{strength.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Milestones / Timeline */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-4">22 Years of Excellence</h2>
            <p className="text-gray-600">A timeline of our journey and milestones.</p>
          </div>
          
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`flex flex-col md:flex-row items-center justify-between relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#f59e0b] border-4 border-white shadow -translate-x-1/2 z-10"></div>
                  
                  <div className="w-full md:w-5/12 pl-12 md:pl-0">
                    <div className={`p-6 bg-white rounded-2xl shadow-sm border border-gray-100 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-[#f59e0b] font-black text-2xl tracking-tighter block mb-2">{milestone.year}</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
