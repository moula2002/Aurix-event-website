import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, className = "", light = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex items-stretch gap-4 ${className}`}
    >
      <div className="w-2 bg-[#f59e0b] shrink-0 rounded-sm"></div>
      <div className="flex flex-col justify-center">
        {subtitle && (
          <span className="text-[#f59e0b] font-black text-lg md:text-xl uppercase tracking-[0.2em] leading-none mb-2">
            {subtitle}
          </span>
        )}
        <h2 className={`text-3xl md:text-5xl lg:text-[3.25rem] font-bold uppercase tracking-tight leading-none m-0 font-heading ${
          light ? 'text-[#171717]' : 'text-white'
        }`}>
          {title}
        </h2>
      </div>
    </motion.div>
  );
};

export default SectionTitle;
