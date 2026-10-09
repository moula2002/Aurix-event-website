import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../layout/SectionTitle';

// Technical Images
import techAudio from '../../assets/images/technical/tech_audio.jpg';
import techStage from '../../assets/images/technical/tech_stage.jpg';
import techBroadcast from '../../assets/images/technical/tech_broadcast.jpg';
import techProjectMgmt from '../../assets/images/technical/tech_projectmg.jpg';
import techWebDev from '../../assets/images/technical/tech_webdev.jpg';

// Creative Images
import creMotion from '../../assets/images/creative/cre_motion.jpg';
import creInteractive from '../../assets/images/creative/cre_interactive.jpg';
import creGame from '../../assets/images/creative/cre_game.jpg';
import creFilms from '../../assets/images/creative/cre_films.jpg';
import creTechDesign from '../../assets/images/creative/cre_techdesign.jpg';

// Support Images
import supportGen from '../../assets/images/services/service-support-gen.jpg';
import supportGifting from '../../assets/images/services/gift_luggagetag.png';
import supportToilets from '../../assets/images/services/toilet_standard.png';

const SubServicesCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const baseServices = [
    // Technical
    { title: "Audio & Visual Production", image: techAudio, link: '/services/technical' },
    { title: "Stage & Structural Engineering", image: techStage, link: '/services/technical' },
    { title: "Broadcasting & Live Streaming", image: techBroadcast, link: '/services/technical' },
    { title: "Project & Production Management", image: techProjectMgmt, link: '/services/technical' },
    { title: "Digital & Web Infrastructure", image: techWebDev, link: '/services/technical' },
    
    // Creative
    { title: "Content & Animation", image: creMotion, link: '/services/creative' },
    { title: "Interactive Technology", image: creInteractive, link: '/services/creative' },
    { title: "App & Game Development", image: creGame, link: '/services/creative' },
    { title: "Cinematography & Production", image: creFilms, link: '/services/creative' },
    { title: "Creative & Technical Design", image: creTechDesign, link: '/services/creative' },
    
    // Support
    { title: "Event Support Services", image: supportGen, link: '/services/support' },
    { title: "Corporate Gifting", image: supportGifting, link: '/services/support' },
    { title: "Portable Toilets & Hand Wash Stations", image: supportToilets, link: '/services/support' }
  ];

  // Duplicate for seamless infinite scrolling
  const carouselServices = [...baseServices, ...baseServices];

  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 relative z-20">
        <SectionTitle subtitle="EXPLORE" title="OUR CAPABILITIES" />
      </div>

      {/* Carousel Container */}
      <div className="w-full relative overflow-hidden">
        <motion.div 
          className="flex gap-6 w-max px-4 hover:[animation-play-state:paused]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 80 }}
          style={{ willChange: "transform" }}
        >
          {carouselServices.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                navigate(service.link);
                window.scrollTo(0, 0);
              }}
              // aspect-square to make it a square card type
              // aspect-square to make it a square card type
              className="relative w-[75vw] sm:w-[300px] md:w-[350px] shrink-0 aspect-square overflow-hidden group cursor-pointer bg-white flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.2)] transition-shadow duration-300 border border-gray-100"
            >
              {/* Background Image Layer */}
              <div 
                className="w-full h-[80%] relative overflow-hidden bg-white"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Hover Solid Color Layer over image */}
                <div 
                  className={`absolute inset-0 bg-[#f59e0b] transition-opacity duration-500 z-10 ${
                    hoveredIndex === index ? 'opacity-90' : 'opacity-0'
                  }`}
                />

                {/* Text Content (shown on hover over image) */}
                <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center transition-all duration-500 px-4 ${
                  hoveredIndex === index ? 'translate-y-0 opacity-100 text-white' : 'translate-y-4 opacity-0 text-white'
                }`}>
                  <h3 className="text-xl md:text-2xl font-black uppercase leading-tight drop-shadow-md">
                    {service.title.split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {word} <br />
                      </React.Fragment>
                    ))}
                  </h3>
                </div>
              </div>

              {/* Default Title (always at the bottom) */}
              <div className="w-full h-[20%] bg-[#f8f9fa] border-t border-gray-100 px-4 flex items-center justify-center text-center relative z-10">
                <h3 className="text-[11px] md:text-sm font-black uppercase text-gray-800 tracking-wider">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SubServicesCarousel;
