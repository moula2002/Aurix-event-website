import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, BarChart3 } from 'lucide-react';
import SectionTitle from '../layout/SectionTitle';
import aboutImg from '../../assets/images/about_us_corporate.jpg';

/* ─── Inject unique animations for About Section ─── */
const injectStyles = () => {
  if (typeof document === 'undefined') return;
  const id = 'about-anim-styles';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.innerHTML = `
    @keyframes about-mesh {
      0% { background-position: 0% 0%; }
      50% { background-position: 100% 100%; }
      100% { background-position: 0% 0%; }
    }
    @keyframes about-float-1 {
      0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
      50% { transform: translate(40px, -20px) rotate(45deg) scale(1.1); }
    }
    @keyframes about-float-2 {
      0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
      50% { transform: translate(-30px, 40px) rotate(-30deg) scale(0.9); }
    }
    @keyframes about-pulse-soft {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.8; }
    }
  `;
  document.head.appendChild(style);
};

const AboutPreview = () => {
  useEffect(() => {
    injectStyles();
  }, []);

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-slate-50">
      
      {/* ── Unique Animated Background Elements ── */}
      {/* Animated Mesh Gradient */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(at 20% 30%, #e0e7ff 0px, transparent 50%), radial-gradient(at 80% 80%, #fef3c7 0px, transparent 50%), radial-gradient(at 80% 20%, #e0f2fe 0px, transparent 50%), radial-gradient(at 20% 80%, #ffedd5 0px, transparent 50%)',
          backgroundSize: '200% 200%',
          animation: 'about-mesh 15s ease infinite',
        }}
      />

      {/* Floating Geometric Shapes */}
      <div 
        className="absolute z-0 pointer-events-none border border-indigo-200/50 rounded-3xl"
        style={{
          width: '300px',
          height: '300px',
          top: '-50px',
          left: '-100px',
          animation: 'about-float-1 20s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute z-0 pointer-events-none border border-amber-200/50 rounded-full"
        style={{
          width: '400px',
          height: '400px',
          bottom: '-100px',
          right: '-150px',
          animation: 'about-float-2 25s ease-in-out infinite',
        }}
      />

      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(45deg, #cbd5e1 1px, transparent 1px), linear-gradient(-45deg, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'about-pulse-soft 8s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Main Card Container */}
        <div className="bg-white/95 backdrop-blur-md rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 relative overflow-hidden">
          
          {/* Subtle inner glow in the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50/50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

          {/* Left Content Side */}
          <div className="w-full lg:w-[55%] p-4 lg:p-8 flex flex-col justify-center relative z-10">
            
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="mb-8">
                <SectionTitle subtitle="BRINGING IDEAS TO LIFE" title="THROUGH EXCEPTIONAL EVENTS" />
              </div>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Ax Aurix Events delivers event production, technical expertise, creative services, and digital solutions designed to help organizations connect with audiences and communicate their brand messages effectively.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                <strong>Our Goal:</strong> Build collaborative partnerships with clients, understand their business objectives, and deliver event experiences that support their communication goals. Emphasize coordinated planning, effective production, and delivery within agreed budgets.
              </p>
            </motion.div>

            {/* 3 Mini Cards Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto"
            >
              {/* Card 1 */}
              <div className="bg-amber-50/80 backdrop-blur-sm rounded-2xl p-5 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300 border border-amber-100/50 hover:shadow-md">
                <div className="text-[#f59e0b] mt-1"><Users size={24} /></div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1">Collaboration</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Working together for greater impact</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-rose-50/80 backdrop-blur-sm rounded-2xl p-5 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300 border border-rose-100/50 hover:shadow-md">
                <div className="text-rose-500 mt-1"><Lightbulb size={24} /></div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1">Innovation</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Thinking beyond the ordinary</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-emerald-50/80 backdrop-blur-sm rounded-2xl p-5 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300 border border-emerald-100/50 hover:shadow-md">
                <div className="text-emerald-500 mt-1"><BarChart3 size={24} /></div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1">Growth</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Creating better opportunities</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-full rounded-2xl overflow-hidden shadow-2xl group z-10 border border-slate-200/50">
            <img 
              src={aboutImg} 
              alt="Immersive Experience" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
            />
            {/* Elegant vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-slate-900/10 pointer-events-none mix-blend-overlay"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
