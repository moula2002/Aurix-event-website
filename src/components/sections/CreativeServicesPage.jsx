import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../layout/SectionHeader';
import { MonitorPlay, Smartphone, Video, Lightbulb, Hexagon } from 'lucide-react';

import c1 from '../../assets/images/creative/creative-1.jpg';
import c2 from '../../assets/images/creative/creative-2.jpg';
import c3 from '../../assets/images/creative/creative-3.jpg';
import c4 from '../../assets/images/creative/creative-4.jpg';
import c5 from '../../assets/images/creative/creative-5.jpg';

const creativeCategories = [
  {
    title: 'Content & Animation',
    icon: MonitorPlay,
    desc: 'Bringing ideas to life through dynamic visuals and bespoke storytelling.',
    services: [
      { name: 'Motion Graphics', text: 'Dynamic 2D/3D motion graphics for stage screens and broadcasts.' },
      { name: '2D/3D Content', text: 'Bespoke content creation, modeling, and animation.' },
      { name: 'Infographics', text: 'Visual data storytelling and animated explainer videos.' }
    ],
    image: c1
  },
  {
    title: 'Interactive Technology',
    icon: Hexagon,
    desc: 'Cutting-edge immersive technologies that push the boundaries of reality.',
    services: [
      { name: 'Holograms', text: 'Cutting-edge holographic projections for product reveals.' },
      { name: 'Projection Mapping', text: 'Transforming architecture into dynamic video displays.' },
      { name: 'Interactive Experiences', text: 'Custom AR/VR activations and gamified event elements.' }
    ],
    image: c2
  },
  {
    title: 'App & Game Development',
    icon: Smartphone,
    desc: 'User-centric digital solutions for seamless and engaging attendee journeys.',
    services: [
      { name: 'UI/UX Design', text: 'Interface design for event apps and interactive kiosks.' },
      { name: 'Mobile Applications', text: 'Native iOS and Android event apps.' },
      { name: 'Game Development', text: 'Branded mini-games and entertainment for activations.' }
    ],
    image: c3
  },
  {
    title: 'Cinematography & Production',
    icon: Video,
    desc: 'Capturing and producing broadcast-quality video content from end to end.',
    services: [
      { name: 'Video Production', text: 'End-to-end video production and scripting.' },
      { name: 'Corporate Films', text: 'High-end documentary and narrative films.' },
      { name: 'TV Commercials', text: 'Broadcast-quality commercial production and editing.' },
      { name: 'Event Coverage', text: 'Multi-camera cinematic event aftermovies.' }
    ],
    image: c4
  },
  {
    title: 'Creative & Technical Design',
    icon: Lightbulb,
    desc: 'The foundational vision and technical blueprints for extraordinary events.',
    services: [
      { name: 'Event Concepts', text: 'Original thematic development and creative direction.' },
      { name: 'Technical Design', text: 'Detailed CADs and renders to bridge vision and reality.' },
      { name: 'Exhibition Design', text: 'Creative structural design for impactful exhibition stands.' }
    ],
    image: c5
  }
];

const CreativeServicesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <SectionHeader title="CREATIVE SERVICES" />
      
      <div className="max-w-4xl mx-auto text-center px-6 mt-20 mb-20">
        <p className="text-xl text-gray-600 leading-relaxed">
          Our award-winning creative studio pushes the boundaries of imagination. We combine artistic vision with cutting-edge digital technology to craft compelling narratives, stunning visuals, and interactive experiences that leave a lasting impression.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        {creativeCategories.map((category, idx) => {
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

export default CreativeServicesPage;
