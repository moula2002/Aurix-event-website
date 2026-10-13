import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../layout/SectionTitle';

import inbev from '../../assets/images/clients/inbev.png';
import addinol from '../../assets/images/clients/addinol.png';
import airtel from '../../assets/images/clients/airtel.png';
import bmw from '../../assets/images/clients/bmw.png';
import beacon from '../../assets/images/clients/beacon.png';
import kingfisher from '../../assets/images/clients/kingfisher.svg';
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
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.05,
  });

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
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-[#000000] border-t border-white/10">
      
      {/* ── VERY VISIBLE Animated Background Elements ── */}
      
      {/* Distinct Animated Diagonal Stripes Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(245, 158, 11, 0.08) 0px, rgba(245, 158, 11, 0.08) 2px, transparent 2px, transparent 16px)',
          backgroundSize: '200% 200%',
          animation: inView ? 'clients-slide-bg 20s linear infinite' : 'none',
        }}
      />

      {/* Large Visible Animated Yellow Wave/Glow */}
      <div 
        className="absolute z-0 pointer-events-none rounded-[100%]"
        style={{
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0.05) 60%, transparent 100%)',
          top: '-150px',
          left: '-10%',
          filter: 'blur(30px)',
          animation: inView ? 'clients-float-slow 8s ease-in-out infinite' : 'none',
        }}
      />
      
      <div 
        className="absolute z-0 pointer-events-none rounded-[100%]"
        style={{
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.03) 70%, transparent 100%)',
          bottom: '-250px',
          right: '-5%',
          filter: 'blur(40px)',
          animation: inView ? 'clients-float-reverse 10s ease-in-out infinite' : 'none',
        }}
      />

      {/* Decorative SVG Animated Curve */}
      <div className="absolute top-1/2 left-0 w-[200%] h-64 -translate-y-1/2 z-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full" style={{ animation: inView ? 'clients-wave 15s ease-in-out infinite' : 'none' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f59e0b"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#fcd34d" opacity="0.3"></path>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 relative z-10">
        <SectionTitle subtitle="OUR" title="CLIENTS" />
      </div>

      <div className="w-full relative flex items-center overflow-hidden h-48 before:absolute before:left-0 before:top-0 before:w-40 before:h-full before:bg-gradient-to-r before:from-black before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-40 after:h-full after:bg-gradient-to-l after:from-black after:to-transparent after:z-10 z-10">
        <div 
          className={`clients-marquee-track ${!inView ? 'clients-marquee-paused' : ''}`}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center justify-center opacity-100 hover:-translate-y-2 transition-transform duration-300 cursor-pointer w-48 gap-5"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-[#FFFFFF] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/20 p-4 relative group hover:border-[#f59e0b] hover:shadow-[0_12px_40px_rgba(245,158,11,0.25)] transition-all duration-300">
                <img 
                  src={client.src} 
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <span className="text-base font-bold tracking-widest text-gray-300 uppercase">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
