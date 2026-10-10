import React, { useEffect } from 'react';
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

const injectStyles = () => {
  if (typeof document === 'undefined') return;
  const id = 'clients-anim-styles';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.innerHTML = `
    @keyframes clients-float-slow {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-40px) scale(1.1); }
    }
    @keyframes clients-float-reverse {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(40px) scale(0.9); }
    }
    @keyframes clients-slide-bg {
      0% { background-position: 0% 0%; }
      100% { background-position: 100% 100%; }
    }
    @keyframes clients-wave {
      0% { transform: translateX(0) scaleY(1); }
      50% { transform: translateX(-25%) scaleY(1.2); }
      100% { transform: translateX(-50%) scaleY(1); }
    }
  `;
  document.head.appendChild(style);
};

const Clients = () => {
  useEffect(() => {
    injectStyles();
  }, []);

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
    <section className="relative py-24 overflow-hidden bg-white border-t border-gray-100">
      
      {/* ── VERY VISIBLE Animated Background Elements ── */}
      
      {/* Distinct Animated Diagonal Stripes Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(245, 158, 11, 0.08) 0px, rgba(245, 158, 11, 0.08) 2px, transparent 2px, transparent 16px)',
          backgroundSize: '200% 200%',
          animation: 'clients-slide-bg 20s linear infinite',
        }}
      />

      {/* Large Visible Animated Yellow Wave/Glow */}
      <div 
        className="absolute z-0 pointer-events-none rounded-[100%]"
        style={{
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(253, 224, 71, 0.4) 0%, rgba(245, 158, 11, 0.1) 60%, transparent 100%)',
          top: '-150px',
          left: '-10%',
          filter: 'blur(30px)',
          animation: 'clients-float-slow 8s ease-in-out infinite',
        }}
      />
      
      <div 
        className="absolute z-0 pointer-events-none rounded-[100%]"
        style={{
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(251, 191, 36, 0.3) 0%, rgba(245, 158, 11, 0.05) 70%, transparent 100%)',
          bottom: '-250px',
          right: '-5%',
          filter: 'blur(40px)',
          animation: 'clients-float-reverse 10s ease-in-out infinite',
        }}
      />

      {/* Decorative SVG Animated Curve */}
      <div className="absolute top-1/2 left-0 w-[200%] h-64 -translate-y-1/2 z-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full" style={{ animation: 'clients-wave 15s ease-in-out infinite' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f59e0b"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#fcd34d" opacity="0.5"></path>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 relative z-10">
        <SectionTitle subtitle="OUR" title="CLIENTS" />
      </div>

      <div className="w-full relative flex items-center overflow-hidden h-48 before:absolute before:left-0 before:top-0 before:w-40 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-40 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10 z-10">
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
              className="inline-flex flex-col items-center justify-center opacity-100 hover:-translate-y-2 transition-transform duration-300 cursor-pointer w-48 gap-5"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-[0_8px_30px_rgba(245,158,11,0.15)] border border-amber-100 p-4 relative group hover:shadow-[0_12px_40px_rgba(245,158,11,0.3)] transition-all duration-300">
                <img 
                  src={client.src} 
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain drop-shadow-sm relative z-10 group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <span className="text-base font-bold tracking-widest text-slate-800 uppercase">
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
