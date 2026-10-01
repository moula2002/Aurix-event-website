import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../layout/SectionHeader';
import { MonitorPlay, Smartphone, Video, Lightbulb, Hexagon, ArrowUpRight } from 'lucide-react';

import c1 from '../../assets/images/creative/creative-1.jpg';
import c2 from '../../assets/images/creative/creative-2.jpg';
import c3 from '../../assets/images/creative/creative-3.jpg';
import c4 from '../../assets/images/creative/creative-4.jpg';
import c5 from '../../assets/images/creative/creative-5.jpg';

import cre_motion from '../../assets/images/creative/cre_motion.jpg';
import cre_2d3d from '../../assets/images/creative/cre_2d3d.jpg';
import cre_info from '../../assets/images/creative/cre_info.jpg';
import cre_holo from '../../assets/images/creative/cre_holo.jpg';
import cre_projection from '../../assets/images/creative/cre_projection.jpg';
import cre_interactive from '../../assets/images/creative/cre_interactive.jpg';
import cre_uiux from '../../assets/images/creative/cre_uiux.jpg';
import cre_mobile from '../../assets/images/creative/cre_mobile.jpg';
import cre_game from '../../assets/images/creative/cre_game.jpg';
import cre_video from '../../assets/images/creative/cre_video.jpg';
import cre_films from '../../assets/images/creative/cre_films.jpg';
import cre_tvc from '../../assets/images/creative/cre_tvc.jpg';
import cre_eventcov from '../../assets/images/creative/cre_eventcov.jpg';
import cre_concepts from '../../assets/images/creative/cre_concepts.jpg';
import cre_techdesign from '../../assets/images/creative/cre_techdesign.jpg';
import cre_exhibition from '../../assets/images/creative/cre_exhibition.jpg';

const creativeCategories = [
  {
    title: 'Content & Animation',
    icon: MonitorPlay,
    desc: 'Bringing ideas to life through dynamic visuals and bespoke storytelling.',
    services: [
      { name: 'Motion Graphics', text: 'Dynamic 2D/3D motion graphics for stage screens and broadcasts.', image: cre_motion },
      { name: '2D/3D Content', text: 'Bespoke content creation, modeling, and animation.', image: cre_2d3d },
      { name: 'Infographics', text: 'Visual data storytelling and animated explainer videos.', image: cre_info }
    ],
    image: c1
  },
  {
    title: 'Interactive Technology',
    icon: Hexagon,
    desc: 'Cutting-edge immersive technologies that push the boundaries of reality.',
    services: [
      { name: 'Holograms', text: 'Cutting-edge holographic projections for product reveals.', image: cre_holo },
      { name: 'Projection Mapping', text: 'Transforming architecture into dynamic video displays.', image: cre_projection },
      { name: 'Interactive Experiences', text: 'Custom AR/VR activations and gamified event elements.', image: cre_interactive }
    ],
    image: c2
  },
  {
    title: 'App & Game Development',
    icon: Smartphone,
    desc: 'User-centric digital solutions for seamless and engaging attendee journeys.',
    services: [
      { name: 'UI/UX Design', text: 'Interface design for event apps and interactive kiosks.', image: cre_uiux },
      { name: 'Mobile Applications', text: 'Native iOS and Android event apps.', image: cre_mobile },
      { name: 'Game Development', text: 'Branded mini-games and entertainment for activations.', image: cre_game }
    ],
    image: c3
  },
  {
    title: 'Cinematography & Production',
    icon: Video,
    desc: 'Capturing and producing broadcast-quality video content from end to end.',
    services: [
      { name: 'Video Production', text: 'End-to-end video production and scripting.', image: cre_video },
      { name: 'Corporate Films', text: 'High-end documentary and narrative films.', image: cre_films },
      { name: 'TV Commercials', text: 'Broadcast-quality commercial production and editing.', image: cre_tvc },
      { name: 'Event Coverage', text: 'Multi-camera cinematic event aftermovies.', image: cre_eventcov }
    ],
    image: c4
  },
  {
    title: 'Creative & Technical Design',
    icon: Lightbulb,
    desc: 'The foundational vision and technical blueprints for extraordinary events.',
    services: [
      { name: 'Event Concepts', text: 'Original thematic development and creative direction.', image: cre_concepts },
      { name: 'Technical Design', text: 'Detailed CADs and renders to bridge vision and reality.', image: cre_techdesign },
      { name: 'Exhibition Design', text: 'Creative structural design for impactful exhibition stands.', image: cre_exhibition }
    ],
    image: c5
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

const CreativeServicesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <SectionHeader title="CREATIVE SERVICES" />
      
      <div className="max-w-4xl mx-auto text-center px-6 mt-20 mb-20">
        <p className="text-xl text-gray-600 leading-relaxed">
          Our award-winning creative studio pushes the boundaries of imagination. We combine artistic vision with cutting-edge digital technology to craft compelling narratives, stunning visuals, and interactive experiences that leave a lasting impression.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        {creativeCategories.map((category, idx) => (
          <CategoryBlock key={idx} category={category} idx={idx} navigate={navigate} />
        ))}
      </div>
    </div>
  );
};

export default CreativeServicesPage;
