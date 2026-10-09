import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import SectionHeader from '../layout/SectionHeader';
import SectionTitle from '../layout/SectionTitle';

import techImage from '../../assets/images/services/service-tech-gen.jpg';
import creativeImage from '../../assets/images/services/service-creative-gen.jpg';
import supportImage from '../../assets/images/services/service-support-gen.jpg';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const services = [
    {
      title: "TECHNICAL SERVICES",
      description: "Audio Production • Video Production & LED Displays • Stage Design & Structural Engineering • Rigging & Theatrical Draping • Technical Event Production & Management • Custom Event App Development • Complete Registration & Ticketing Systems • Virtual & Hybrid Event Solutions",
      image: techImage,
      link: '/services/technical'
    },
    {
      title: "CREATIVE SERVICES",
      description: "UI/UX App & Web Design • Brand Identity & Graphic Design • Motion Graphics, 2D & 3D Animation • Digital Content Production • Immersive 3D Projections & Holograms • Presentation & Keynote Design",
      image: creativeImage,
      link: '/services/creative'
    },
    {
      title: "EVENT SUPPORT SERVICES",
      description: "Comprehensive support including premium furniture rentals, floral design, hostesses, corporate gifting, and luxury sanitation.",
      image: supportImage,
      link: '/services/support'
    }
  ];

  return (
    <section id="services" className={`relative ${isHome ? 'py-24' : 'pb-24'} bg-white overflow-hidden`}>
      {isHome ? (
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20">
          <SectionTitle subtitle="OUR" title="SERVICES" />
        </div>
      ) : (
        <SectionHeader title="SERVICES" />
      )}

      <div className={`max-w-[1440px] mx-auto px-6 lg:px-12 ${!isHome ? 'mt-20' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                navigate(service.link);
                window.scrollTo(0, 0);
              }}
              className="relative aspect-[4/5] border-8 border-[#f59e0b] overflow-hidden group cursor-pointer bg-white flex flex-col items-center justify-center text-center p-6"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Background Image Layer */}
              <div 
                className={`absolute inset-0 transition-opacity duration-500 z-0 ${
                  hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Hover Solid Color Layer */}
              <div 
                className={`absolute inset-0 bg-[#f59e0b] transition-opacity duration-500 z-10 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Text Content */}
              <div className={`relative z-20 flex flex-col items-center justify-center transition-all duration-500 ${
                hoveredIndex === index ? 'translate-y-0 opacity-100 text-white' : 'translate-y-4 opacity-0 text-white'
              }`}>
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 leading-tight">
                  {service.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word} <br />
                    </React.Fragment>
                  ))}
                </h3>
                <div className="w-8 h-1 bg-white mb-6"></div>
                <p className="font-medium text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Default Title (when not hovered) */}
              <div className={`absolute bottom-6 left-0 right-0 z-10 text-center transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-0' : 'opacity-100'
              }`}>
                <div className="inline-block bg-white px-4 py-2 shadow-lg">
                  <h3 className="text-lg font-black uppercase text-[#111827]">
                    {service.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
