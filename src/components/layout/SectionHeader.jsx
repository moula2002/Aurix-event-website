import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, bgColor = 'bg-[#f59e0b]' }) => {
  return (
    <div className={`w-full ${bgColor} py-16 md:py-24 overflow-hidden relative flex items-center justify-center`}>
      {/* Container for the layered text */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center justify-center w-full px-4"
      >
        <h2 className="relative w-full text-center text-5xl md:text-7xl lg:text-[9rem] font-black text-[#111827] tracking-tighter uppercase z-10 leading-[0.9] break-words">
          
          <span className="relative z-10">
            {title}
            {/* Decorative Apostrophe / Comma symbol */}
            <span 
              className="ml-2 md:ml-4 lg:ml-6 inline-block"
              style={{
                color: 'white',
                WebkitTextStroke: '3px #111827',
                textShadow: '8px 8px 0px rgba(17, 24, 39, 1)',
                fontFamily: 'serif'
              }}
            >
              ,
            </span>
          </span>

          {/* Outline / Shadow layer synchronized with text */}
          <span 
            className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none select-none text-transparent"
            aria-hidden="true"
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.8)',
              transform: 'translate(8px, 12px)'
            }}
          >
            {title}
            <span className="ml-2 md:ml-4 lg:ml-6 inline-block opacity-0">,</span>
          </span>

        </h2>
      </motion.div>
    </div>
  );
};

export default SectionHeader;
