import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Lightbulb, BarChart3 } from 'lucide-react';
import SectionTitle from '../layout/SectionTitle';
import aboutImg from '../../assets/images/about_us_corporate.jpg';

const AboutPreview = () => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '40px 0px 0px 0px',
  });

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-[#FAFAF8]">
      
      {/* ── Background Subtle Warm Elements ── */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(at 15% 20%, rgba(254, 243, 199, 0.6) 0px, transparent 50%), radial-gradient(at 85% 80%, rgba(254, 215, 170, 0.4) 0px, transparent 50%)',
        }}
      />

      {/* Floating Geometric Shapes */}
      <div 
        className="absolute z-0 pointer-events-none border border-amber-500/15 rounded-3xl"
        style={{
          width: '300px',
          height: '300px',
          top: '-50px',
          left: '-100px',
          animation: 'about-float-1 20s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute z-0 pointer-events-none border border-amber-500/15 rounded-full"
        style={{
          width: '400px',
          height: '400px',
          bottom: '-100px',
          right: '-150px',
          animation: 'about-float-2 25s ease-in-out infinite',
        }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'linear-gradient(45deg, #000000 1px, transparent 1px), linear-gradient(-45deg, #000000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Main Card Container */}
        <div ref={inViewRef} className="bg-white rounded-[2rem] border border-stone-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 relative overflow-hidden">
          
          {/* Subtle inner glow in the card */}
          <div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-20 -mt-20 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
            }}
          />

          {/* Left Content Side */}
          <div className="w-full lg:w-[55%] p-4 lg:p-8 flex flex-col justify-center relative z-10">
            
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="mb-8">
                <SectionTitle subtitle="BRINGING IDEAS TO LIFE" title="THROUGH EXCEPTIONAL EVENTS" light={true} />
              </div>
              <p className="text-[#171717] leading-relaxed font-medium mb-4">
                Ax Aurix Events delivers event production, technical expertise, creative services, and digital solutions designed to help organizations connect with audiences and communicate their brand messages effectively.
              </p>
              <p className="text-[#171717]/85 leading-relaxed font-medium">
                <strong className="text-[#171717]">Our Goal:</strong> Build collaborative partnerships with clients, understand their business objectives, and deliver event experiences that support their communication goals. Emphasize coordinated planning, effective production, and delivery within agreed budgets.
              </p>
            </motion.div>

            {/* 3 Mini Cards Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto"
            >
              {/* Card 1 */}
              <div className="bg-[#FAFAF8] rounded-2xl p-5 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300 border border-amber-500/25 hover:border-amber-500/60 shadow-sm hover:shadow-md">
                <div className="text-[#f59e0b] mt-1"><Users size={24} /></div>
                <div>
                  <h4 className="text-[#171717] font-bold text-sm mb-1">Collaboration</h4>
                  <p className="text-[#555555] text-xs leading-relaxed">Working together for greater impact</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FAFAF8] rounded-2xl p-5 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300 border border-rose-500/25 hover:border-rose-500/60 shadow-sm hover:shadow-md">
                <div className="text-rose-500 mt-1"><Lightbulb size={24} /></div>
                <div>
                  <h4 className="text-[#171717] font-bold text-sm mb-1">Innovation</h4>
                  <p className="text-[#555555] text-xs leading-relaxed">Thinking beyond the ordinary</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FAFAF8] rounded-2xl p-5 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300 border border-emerald-500/25 hover:border-emerald-500/60 shadow-sm hover:shadow-md">
                <div className="text-emerald-600 mt-1"><BarChart3 size={24} /></div>
                <div>
                  <h4 className="text-[#171717] font-bold text-sm mb-1">Growth</h4>
                  <p className="text-[#555555] text-xs leading-relaxed">Creating better opportunities</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-full rounded-2xl overflow-hidden shadow-xl group z-10 border border-stone-200/80 [transform:translateZ(0)] [isolation:isolate]">
            <div 
              className={`absolute inset-0 w-full h-full ${
                inView ? 'about-image-reveal' : 'about-image-initial'
              }`}
            >
              {/* Single High-Performance Image Layer */}
              <img 
                src={aboutImg} 
                alt="Immersive Experience" 
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* GPU-composited Desaturation-to-Color Reveal Layer */}
              <div 
                className={`about-color-overlay ${inView ? 'about-color-fade' : ''}`}
                aria-hidden="true"
              />

              {/* Elegant vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
