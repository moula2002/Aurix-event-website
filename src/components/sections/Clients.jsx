import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../layout/SectionTitle';

const Clients = () => {
  // Simulating logos with typography for the demo
  const baseClients = [
    { name: "InBev", style: "font-serif tracking-tight" },
    { name: "ADDINOL", style: "font-black italic tracking-tighter uppercase" },
    { name: "airtel", style: "font-bold tracking-tight lowercase" },
    { name: "BMW", style: "font-black tracking-widest" },
    { name: "BEACON", style: "font-light tracking-[0.3em] uppercase" },
    { name: "KINGFISHER", style: "font-serif font-bold uppercase tracking-wider" },
    { name: "Levi's", style: "font-black tracking-tighter" },
    { name: "Mahindra", style: "font-bold tracking-tight" },
    { name: "MALABAR", style: "font-light uppercase tracking-widest" },
    { name: "OVION", style: "font-black uppercase tracking-tighter" }
  ];

  // Duplicate for infinite scroll effect
  const clients = [...baseClients, ...baseClients, ...baseClients];

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16">
        <SectionTitle subtitle="OUR" title="CLIENTS" />
      </div>

      <div className="w-full relative flex items-center overflow-hidden h-24 before:absolute before:left-0 before:top-0 before:w-24 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-24 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
        <motion.div 
          className="flex gap-20 whitespace-nowrap pl-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed here
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ willChange: "transform" }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <span className={`text-3xl md:text-4xl text-gray-900 transition-colors duration-300 hover:text-[#f59e0b] ${client.style}`}>
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
