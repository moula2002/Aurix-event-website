import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../layout/SectionTitle';

import inbev from '../../assets/images/clients/inbev.png';
import addinol from '../../assets/images/clients/addinol.png';
import airtel from '../../assets/images/clients/airtel.png';
import bmw from '../../assets/images/clients/bmw.png';
import beacon from '../../assets/images/clients/beacon.png';
import kingfisher from '../../assets/images/clients/kingfisher.png';
import levis from '../../assets/images/clients/levis.png';
import mahindra from '../../assets/images/clients/mahindra.png';
import malabar from '../../assets/images/clients/malabar.png';
import ovion from '../../assets/images/clients/ovion.png';
import emirates from '../../assets/images/clients/emirates.png';
import emaar from '../../assets/images/clients/emaar.png';
import jumeirah from '../../assets/images/clients/jumeirah.png';
import dpworld from '../../assets/images/clients/dpworld.png';
import nakheel from '../../assets/images/clients/nakheel.png';

const Clients = () => {
  const baseClients = [
    { name: "InBev", src: inbev },
    { name: "ADDINOL", src: addinol },
    { name: "airtel", src: airtel },
    { name: "BMW", src: bmw },
    { name: "BEACON", src: beacon },
    { name: "Emirates", src: emirates },
    { name: "KINGFISHER", src: kingfisher },
    { name: "Levi's", src: levis },
    { name: "Emaar", src: emaar },
    { name: "Mahindra", src: mahindra },
    { name: "MALABAR", src: malabar },
    { name: "Jumeirah", src: jumeirah },
    { name: "DP World", src: dpworld },
    { name: "OVION", src: ovion },
    { name: "Nakheel", src: nakheel }
  ];

  // Duplicate for infinite scroll effect
  const clients = [...baseClients, ...baseClients, ...baseClients];

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16">
        <SectionTitle subtitle="OUR" title="CLIENTS" />
      </div>

      <div className="w-full relative flex items-center overflow-hidden h-48 before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
        <motion.div 
          className="flex gap-24 whitespace-nowrap pl-10 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ willChange: "transform" }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center justify-center opacity-100 hover:scale-110 transition-transform duration-300 cursor-pointer w-48 gap-5"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50 p-4">
                <img 
                  src={client.src} 
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain drop-shadow-sm" 
                />
              </div>
              <span className="text-base font-bold tracking-widest text-gray-900 uppercase">
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
