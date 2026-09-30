import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../layout/SectionHeader';
import { Settings, Speaker, Tv, Wrench, Globe } from 'lucide-react';

import t1 from '../../assets/images/technical/technical-1.jpg';
import t2 from '../../assets/images/technical/technical-2.jpg';
import t3 from '../../assets/images/technical/technical-3.jpg';
import t4 from '../../assets/images/technical/technical-4.jpg';
import t5 from '../../assets/images/technical/technical-5.jpg';

const technicalCategories = [
  {
    title: 'Audio & Visual Production',
    icon: Speaker,
    desc: 'Crystal clear acoustics and stunning visual experiences engineered for maximum impact.',
    services: [
      { name: 'Audio Production', text: 'Crystal clear line-array sound systems and acoustic engineering.' },
      { name: 'Video Production', text: 'Live IMAG, LED screen mapping, and playback systems.' },
      { name: 'AV Setup', text: 'Complete audiovisual integration for conferences and shows.' },
      { name: 'Lighting Design', text: 'Intelligent lighting plots to enhance mood, focus, and energy.' }
    ],
    image: t1
  },
  {
    title: 'Stage & Structural Engineering',
    icon: Wrench,
    desc: 'Safe, modular, and custom-engineered structures that form the foundation of your event.',
    services: [
      { name: 'Stage Design', text: 'Safe, modular, and custom staging solutions.' },
      { name: 'Rigging Services', text: 'Safe and certified rigging solutions for all overhead equipment.' },
      { name: 'Backdrop Solutions', text: 'Custom LED and printed backdrop engineering.' },
      { name: 'Theatrical Draping', text: 'Professional pipe and drape systems for space transformation.' }
    ],
    image: t2
  },
  {
    title: 'Broadcasting & Live Streaming',
    icon: Tv,
    desc: 'Connecting your event to a global audience with TV-grade broadcast infrastructure.',
    services: [
      { name: 'Live Streaming', text: 'High-definition live broadcast solutions for global reach and engagement.' },
      { name: 'Broadcast Solutions', text: 'Multi-camera TV-grade broadcast setups for large scale events.' }
    ],
    image: t3
  },
  {
    title: 'Project & Production Management',
    icon: Settings,
    desc: 'Comprehensive oversight and fabrication to ensure flawless execution.',
    services: [
      { name: 'Event Production', text: 'End-to-end technical production management for events of all scales.' },
      { name: 'Project Management', text: 'Comprehensive oversight ensuring timelines, budgets, and quality standards are met.' },
      { name: 'Pavilion Design', text: 'Structural engineering and technical design for custom pavilions.' },
      { name: 'Fabrication', text: 'In-house technical fabrication of custom set pieces and stage elements.' }
    ],
    image: t4
  },
  {
    title: 'Digital & Web Infrastructure',
    icon: Globe,
    desc: 'Robust digital architecture to support event registration, apps, and ongoing engagement.',
    services: [
      { name: 'Website Development', text: 'Event-specific landing pages and registration portals.' },
      { name: 'Website Maintenance', text: 'Ongoing technical support and server management.' },
      { name: 'Mobile App Development', text: 'Custom event apps for scheduling, networking, and engagement.' }
    ],
    image: t5
  }
];

const TechnicalServicesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <SectionHeader title="TECHNICAL EXPERTISE" />
      
      <div className="max-w-4xl mx-auto text-center px-6 mt-20 mb-20">
        <p className="text-xl text-gray-600 leading-relaxed">
          The backbone of any spectacular event is flawless technical execution. Our dedicated technical division houses the industry's most advanced equipment and the brightest engineering minds to guarantee your event runs perfectly from the first cue to the final curtain call.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        {technicalCategories.map((category, idx) => {
          const isEven = idx % 2 === 0;
          const Icon = category.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col ${isEven ? 'xl:flex-row' : 'xl:flex-row-reverse'} relative mb-24`}
            >
              {/* Content Side */}
              <div className="w-full xl:w-1/2 p-8 md:p-14 lg:p-20 relative z-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-[#f59e0b] shadow-sm">
                    <Icon size={28} />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-gray-900 uppercase tracking-tight">{category.title}</h2>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-12 font-medium">
                  {category.desc}
                </p>

                <div className="space-y-8">
                  {category.services.map((service, sIdx) => (
                    <div key={sIdx} className="group cursor-default">
                      <h4 className="text-gray-900 font-bold text-xl mb-2 group-hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.name}
                      </h4>
                      <p className="text-gray-500 text-base leading-relaxed pl-4 border-l-2 border-transparent group-hover:border-amber-100 transition-colors">
                        {service.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full xl:w-1/2 relative min-h-[400px] xl:min-h-auto bg-gray-100 overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalServicesPage;
