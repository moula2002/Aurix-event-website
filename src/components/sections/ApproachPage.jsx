import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Search, Settings, Truck } from 'lucide-react';

import process1 from '../../assets/images/portfolio/work-1.jpg';
import process2 from '../../assets/images/portfolio/work-2.jpg';
import process3 from '../../assets/images/portfolio/work-3.jpg';

const ApproachPage = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      title: 'We Explore',
      icon: <Search className="w-7 h-7 text-[#f59e0b]" strokeWidth={1.5} />,
      desc: 'We begin by understanding the ethos of your company, its mission and long-term strategic plans. Our approach is built around collaboration: we aim to become an integral part of your team rather than simply an external supplier. By understanding your business, audience and objectives, we can help shape event concepts that support your communication goals and create meaningful connections with your clients.'
    },
    {
      title: 'We Build',
      icon: <Settings className="w-7 h-7 text-[#f59e0b]" strokeWidth={1.5} />,
      desc: 'Once we understand your business and event objectives, we develop a clear plan aligned with your goals. We coordinate event planning, technical requirements, suppliers, resources and production details, taking care of the preparation and management involved in delivering a professional event. Our collaborative approach helps keep the project organized, focused and aligned with the agreed budget.'
    },
    {
      title: 'We Deliver',
      icon: <Truck className="w-7 h-7 text-[#f59e0b]" strokeWidth={1.5} />,
      desc: 'This is where our event management and production expertise comes together. From venue and facility coordination to audiovisual systems, lighting, staging and on-site supervision, we pay attention to every detail. By following a goal-oriented plan and a methodical management approach, we help ensure that the event runs smoothly, allowing you to focus on your attendees, clients and stakeholders.'
    }
  ];

  const getStepClass = (idx) => {
    if (idx === 0) return inView ? 'approach-step1-entrance' : 'approach-step1-initial';
    if (idx === 1) return inView ? 'approach-step2-entrance' : 'approach-step2-initial';
    return inView ? 'approach-step3-entrance' : 'approach-step3-initial';
  };

  return (
    <div className="relative min-h-screen bg-[#000000] overflow-hidden pt-24 pb-24">
      
      {/* ── Decorative Curves (Left and Right edges) ── */}
      {/* Top left wave */}
      <div 
        className="absolute top-0 left-0 w-[45vw] h-[45vw] opacity-40 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top left, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
          borderBottomRightRadius: '100%',
        }}
      />
      
      {/* Bottom left sweeping curve */}
      <div 
        className="absolute bottom-0 left-[-5%] w-[40vw] h-[60vh] bg-gradient-to-tr from-amber-500/10 via-amber-500/5 to-transparent z-0 pointer-events-none"
        style={{
          borderTopRightRadius: '100%',
          borderTopLeftRadius: '20%',
        }}
      />

      {/* Bottom right sweeping curve */}
      <div 
        className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[55vh] bg-gradient-to-tl from-amber-500/10 via-amber-500/5 to-transparent z-0 pointer-events-none"
        style={{
          borderTopLeftRadius: '100%',
          borderTopRightRadius: '20%',
        }}
      />
      
      {/* Orange dotted pattern (bottom left) */}
      <div className="absolute bottom-12 left-12 z-0 opacity-20 pointer-events-none hidden md:block" style={{
        backgroundImage: 'radial-gradient(circle, #f59e0b 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
        width: '150px',
        height: '150px'
      }}></div>

      {/* ── Main Content Container ── */}
      <div 
        ref={sectionRef} 
        className="max-w-[1600px] mx-auto w-full min-h-[85vh] relative z-10 flex flex-col lg:flex-row shadow-[0_20px_60px_rgba(0,0,0,0.35)] bg-white border border-stone-200/90 rounded-3xl overflow-hidden mb-12"
      >
        
        {/* ── Left Column (Text Content) ── */}
        <div className="w-full lg:w-[48%] p-10 md:p-14 lg:p-20 xl:p-24 relative bg-white z-10 flex flex-col justify-center">
          
          <div className={`mb-14 relative ${inView ? 'approach-heading-entrance' : 'approach-heading-initial'}`}>
            <div className="absolute left-0 top-1 bottom-1 w-[4px] bg-[#f59e0b] rounded-full"></div>
            <div className="pl-6">
              <span className="text-[#f59e0b] font-black text-xl md:text-2xl uppercase tracking-wider mb-2 block">OUR</span>
              <h2 
                className="text-4xl md:text-6xl font-black text-[#171717] uppercase tracking-tight leading-none m-0 font-heading"
                style={{
                  fontFamily: "'Bodoni Moda', 'Playfair Display', Didot, 'Bodoni MT', serif",
                  fontWeight: 900,
                  WebkitTextStroke: '0.4px #171717',
                  letterSpacing: '0.01em',
                }}
              >
                APPROACH
              </h2>
            </div>
          </div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`flex gap-6 relative ${getStepClass(idx)}`}
              >
                {/* Connecting subtle line */}
                {idx !== steps.length - 1 && (
                  <div className="absolute left-[31px] top-[75px] bottom-[-30px] w-[1px] bg-stone-300 hidden md:block"></div>
                )}
                
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-amber-500/25 flex items-center justify-center bg-[#FFFBEB] shadow-sm relative z-10">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="pt-2 pb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[#171717] mb-3">{step.title}</h3>
                  <p className="text-[#444444] leading-relaxed text-[14px] md:text-[15px] font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── Right Column (Image Collage) ── */}
        <div className="w-full lg:w-[52%] relative min-h-[60vh] lg:min-h-full bg-white">
          
          {/* Elegant curved, wave-like boundary with thin orange accent */}
          <div className="absolute top-0 left-[-1px] w-[100px] h-full z-20 pointer-events-none hidden lg:block text-white"
               style={{ fill: 'currentColor' }}>
            <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="w-full h-full text-white">
              {/* White mask for the wave */}
              <path d="M-10,0 C80,250 -40,500 60,750 C110,900 -10,1000 -10,1000 L-20,1000 L-20,0 Z" fill="currentColor"></path>
              {/* Thin orange stroke accent */}
              <path 
                d="M-10,0 C80,250 -40,500 60,750 C110,900 -10,1000 -10,1000" 
                fill="none" 
                stroke="#f59e0b" 
                strokeWidth="4"
                className={inView ? 'approach-curve-entrance' : 'approach-curve-initial'}
              ></path>
            </svg>
          </div>

          {/* Collage Layout */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 h-full bg-white border-l-4 lg:border-l-0 border-white">
            {/* Top Left Image (Conference/Audience) */}
            <div className="relative w-full h-full border-r-[3px] border-b-[3px] border-white overflow-hidden">
              <img 
                src={process1} 
                alt="Explore Audience" 
                className={`absolute inset-0 w-full h-full object-cover ${inView ? 'approach-img-tl-entrance' : 'approach-img-tl-initial'}`} 
              />
            </div>
            
            {/* Top Right Image (Tech/Production) */}
            <div className="relative w-full h-full border-l-[3px] border-b-[3px] border-white overflow-hidden">
              <img 
                src={process2} 
                alt="Build Tech" 
                className={`absolute inset-0 w-full h-full object-cover ${inView ? 'approach-img-tr-entrance' : 'approach-img-tr-initial'}`} 
              />
            </div>
            
            {/* Bottom Full Width Image (Event Setup/Delivery) */}
            <div className="relative w-full h-full col-span-2 border-t-[3px] border-white overflow-hidden">
              <img 
                src={process3} 
                alt="Deliver Event" 
                className={`absolute inset-0 w-full h-full object-cover object-center ${inView ? 'approach-img-b-entrance' : 'approach-img-b-initial'}`} 
              />
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default ApproachPage;
