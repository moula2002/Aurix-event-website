import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../layout/SectionHeader';
import { Settings, Speaker, Tv, Wrench, Globe, ArrowUpRight } from 'lucide-react';

import t1 from '../../assets/images/technical/technical-1.jpg';
import t2 from '../../assets/images/technical/technical-2.jpg';
import t3 from '../../assets/images/technical/technical-3.jpg';
import t4 from '../../assets/images/technical/technical-4.jpg';
import t5 from '../../assets/images/technical/technical-5.jpg';

import tech_audio from '../../assets/images/technical/tech_audio.jpg';
import tech_video from '../../assets/images/technical/tech_video.jpg';
import tech_av from '../../assets/images/technical/tech_av.jpg';
import tech_lighting from '../../assets/images/technical/tech_lighting.jpg';
import tech_stage from '../../assets/images/technical/tech_stage.jpg';
import tech_rigging from '../../assets/images/technical/tech_rigging.jpg';
import tech_backdrop from '../../assets/images/technical/tech_backdrop.jpg';
import tech_draping from '../../assets/images/technical/tech_draping.jpg';
import tech_livestream from '../../assets/images/technical/tech_livestream.jpg';
import tech_broadcast from '../../assets/images/technical/tech_broadcast.jpg';
import tech_eventprod from '../../assets/images/technical/tech_eventprod.jpg';
import tech_projectmg from '../../assets/images/technical/tech_projectmg.jpg';
import tech_pavilion from '../../assets/images/technical/tech_pavilion.jpg';
import tech_fabrication from '../../assets/images/technical/tech_fabrication.jpg';
import tech_webdev from '../../assets/images/technical/tech_webdev.jpg';
import tech_webmain from '../../assets/images/technical/tech_webmain.jpg';
import tech_mobileapp from '../../assets/images/technical/tech_mobileapp.jpg';

const technicalCategories = [
  {
    title: 'Audio & Visual Production',
    icon: Speaker,
    desc: 'Crystal clear acoustics and stunning visual experiences engineered for maximum impact.',
    services: [
      { name: 'Audio Production', text: 'Crystal clear line-array sound systems and acoustic engineering.', image: tech_audio },
      { name: 'Video Production', text: 'Live IMAG, LED screen mapping, and playback systems.', image: tech_video },
      { name: 'AV Setup', text: 'Complete audiovisual integration for conferences and shows.', image: tech_av },
      { name: 'Lighting Design', text: 'Intelligent lighting plots to enhance mood, focus, and energy.', image: tech_lighting }
    ],
    image: t1
  },
  {
    title: 'Stage & Structural Engineering',
    icon: Wrench,
    desc: 'Safe, modular, and custom-engineered structures that form the foundation of your event.',
    services: [
      { name: 'Stage Design', text: 'Safe, modular, and custom staging solutions.', image: tech_stage },
      { name: 'Rigging Services', text: 'Safe and certified rigging solutions for all overhead equipment.', image: tech_rigging },
      { name: 'Backdrop Solutions', text: 'Custom LED and printed backdrop engineering.', image: tech_backdrop },
      { name: 'Theatrical Draping', text: 'Professional pipe and drape systems for space transformation.', image: tech_draping }
    ],
    image: t2
  },
  {
    title: 'Broadcasting & Live Streaming',
    icon: Tv,
    desc: 'Connecting your event to a global audience with TV-grade broadcast infrastructure.',
    services: [
      { name: 'Live Streaming', text: 'High-definition live broadcast solutions for global reach and engagement.', image: tech_livestream },
      { name: 'Broadcast Solutions', text: 'Multi-camera TV-grade broadcast setups for large scale events.', image: tech_broadcast }
    ],
    image: t3
  },
  {
    title: 'Project & Production Management',
    icon: Settings,
    desc: 'Comprehensive oversight and fabrication to ensure flawless execution.',
    services: [
      { name: 'Event Production', text: 'End-to-end technical production management for events of all scales.', image: tech_eventprod },
      { name: 'Project Management', text: 'Comprehensive oversight ensuring timelines, budgets, and quality standards are met.', image: tech_projectmg },
      { name: 'Pavilion Design', text: 'Structural engineering and technical design for custom pavilions.', image: tech_pavilion },
      { name: 'Fabrication', text: 'In-house technical fabrication of custom set pieces and stage elements.', image: tech_fabrication }
    ],
    image: t4
  },
  {
    title: 'Digital & Web Infrastructure',
    icon: Globe,
    desc: 'Robust digital architecture to support event registration, apps, and ongoing engagement.',
    services: [
      { name: 'Website Development', text: 'Event-specific landing pages and registration portals.', image: tech_webdev },
      { name: 'Website Maintenance', text: 'Ongoing technical support and server management.', image: tech_webmain },
      { name: 'Mobile App Development', text: 'Custom event apps for scheduling, networking, and engagement.', image: tech_mobileapp }
    ],
    image: t5
  }
];

const CategoryBlock = ({ category, idx, navigate }) => {
  const Icon = category.icon;

  return (
    <div className="relative flex flex-col md:flex-row gap-12 lg:gap-24 mb-32 group">
      {/* Sticky Left: Category Info */}
      <div className="md:w-5/12 relative">
        <div className="md:sticky md:top-32 pt-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 text-amber-600 mb-8 shadow-inner ring-1 ring-amber-200/50">
              <Icon size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 uppercase tracking-tight leading-[1.1] mb-6">
              {category.title}
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed font-light">
              {category.desc}
            </p>
            <div className="hidden md:block mt-12 w-16 h-1 bg-amber-500 rounded-full opacity-20 group-hover:opacity-100 group-hover:w-32 transition-all duration-700" />
          </motion.div>
        </div>
      </div>

      {/* Scrolling Right: Sub-services */}
      <div className="md:w-7/12 flex flex-col gap-6">
        {category.services.map((service, sIdx) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: sIdx * 0.1 }}
            key={sIdx}
            onClick={() => navigate('/contact', { state: { service: service.name } })}
            className="group/card cursor-pointer bg-white rounded-[2rem] p-4 lg:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.12)] border border-gray-100/80 transition-all duration-500 flex flex-col sm:flex-row gap-6 items-center"
          >
            {/* Image Thumbnail */}
            <div className="w-full sm:w-48 h-56 sm:h-40 rounded-2xl overflow-hidden relative flex-shrink-0">
              <div className="absolute inset-0 bg-amber-500/0 group-hover/card:bg-amber-500/10 transition-colors duration-500 z-10" />
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
              />
            </div>
            
            {/* Text Content */}
            <div className="flex-1 py-2 pr-4 relative overflow-hidden">
              <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover/card:text-amber-500 transition-colors flex items-center justify-between">
                {service.name}
                <ArrowUpRight className="opacity-0 -translate-x-4 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-all duration-500 text-amber-500 hidden sm:block" />
              </h4>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                {service.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TechnicalServicesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <SectionHeader title="TECHNICAL EXPERTISE" />
      
      <div className="max-w-4xl mx-auto text-center px-6 mt-20 mb-20">
        <p className="text-xl text-gray-600 leading-relaxed">
          The backbone of any spectacular event is flawless technical execution. Our dedicated technical division houses the industry's most advanced equipment and the brightest engineering minds to guarantee your event runs perfectly from the first cue to the final curtain call.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        {technicalCategories.map((category, idx) => (
          <CategoryBlock key={idx} category={category} idx={idx} navigate={navigate} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalServicesPage;
