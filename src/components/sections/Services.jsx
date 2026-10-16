import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
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

  const { ref: gridRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

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

  const serviceAnimationClasses = [
    {
      initial: 'service-card-initial-left',
      entrance: 'service-card-entrance-left',
    },
    {
      initial: 'service-card-initial-center',
      entrance: 'service-card-entrance-center',
    },
    {
      initial: 'service-card-initial-right',
      entrance: 'service-card-entrance-right',
    },
  ];

  return (
    <section id="services" className={`relative ${isHome ? 'py-24 bg-[#FFF7E1]' : 'pb-24 bg-[#000000]'} overflow-hidden`}>
      {/* Subtle warm accent decorations for light cream background */}
      {isHome && (
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(at 10% 20%, rgba(254, 240, 138, 0.4) 0px, transparent 50%), radial-gradient(at 90% 80%, rgba(251, 191, 36, 0.25) 0px, transparent 50%)',
          }}
        />
      )}

      {isHome ? (
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 relative z-10">
          <SectionTitle subtitle="OUR" title="SERVICES" light={true} />
        </div>
      ) : (
        <SectionHeader title="SERVICES" />
      )}

      <div className={`max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 ${!isHome ? 'mt-20' : ''}`}>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const anim = serviceAnimationClasses[index];
            return (
              <div
                key={index}
                className={`w-full ${inView ? anim.entrance : anim.initial}`}
              >
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  navigate(service.link);
                  window.scrollTo(0, 0);
                }}
                className="relative aspect-[4/5] border-8 border-[#f59e0b] overflow-hidden group cursor-pointer bg-[#111111] flex flex-col items-center justify-center text-center p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_35px_-10px_rgba(245,158,11,0.25)] will-change-transform"
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
                    className="w-full h-full object-cover scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
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
                <div className="inline-block bg-black/95 border border-amber-500/40 px-5 py-2.5 shadow-2xl backdrop-blur-md rounded-md">
                  <h3 className="text-lg font-black uppercase text-white tracking-wide">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        );
      })}
        </div>
      </div>
    </section>
  );
};

export default Services;
