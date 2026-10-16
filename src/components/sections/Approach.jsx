import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FileText, Settings, CheckCircle2 } from 'lucide-react';

const Approach = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stages = [
    {
      id: '01',
      title: 'WE EXPLORE',
      desc: 'We begin by understanding the ethos of your company, its mission and long-term strategic plans. Our approach is built around collaboration: we aim to become an integral part of your team rather than simply an external supplier. By understanding your business, audience and objectives, we can help shape event concepts that support your communication goals and create meaningful connections with your clients.',
      icon: <FileText className="w-7 h-7 text-[#080808]" strokeWidth={2.4} />,
      animClass: 'approach-chevron-1',
    },
    {
      id: '02',
      title: 'WE BUILD',
      desc: 'Once we understand your business and event objectives, we develop a clear plan aligned with your goals. We coordinate event planning, technical requirements, suppliers, resources and production details, taking care of the preparation and management involved in delivering a professional event. Our collaborative approach helps keep the project organized, focused and aligned with the agreed budget.',
      icon: <Settings className="w-7 h-7 text-[#080808]" strokeWidth={2.4} />,
      animClass: 'approach-chevron-2',
    },
    {
      id: '03',
      title: 'WE DELIVER',
      desc: 'This is where our event management and production expertise comes together. From venue and facility coordination to audiovisual systems, lighting, staging and on-site supervision, we pay attention to every detail. By following a goal-oriented plan and a methodical management approach, we help ensure that the event runs smoothly, allowing you to focus on your attendees, clients and stakeholders.',
      icon: <CheckCircle2 className="w-7 h-7 text-[#080808]" strokeWidth={2.4} />,
      animClass: 'approach-chevron-3',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#0A0A0A] to-[#1A1200] py-20 lg:py-28 overflow-hidden select-text border-t border-b border-amber-500/10"
    >
      {/* ── Background Subtle Dark Brown/Amber Radial Gradient matching reference ── */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, rgba(180, 83, 9, 0.04) 50%, transparent 75%)',
        }}
      />
      <div
        className="absolute top-1/4 right-1/10 w-[550px] h-[550px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, rgba(5,5,5,0) 70%)',
        }}
      />

      {/* Decorative Dot Matrix on Left Top (Low-opacity dotted pattern matching reference) */}
      <div
        className="absolute left-6 top-10 w-36 h-36 opacity-25 pointer-events-none hidden md:block"
        style={{
          backgroundImage: 'radial-gradient(circle, #555555 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Decorative Dot Matrix on Right Bottom */}
      <div
        className="absolute right-6 bottom-12 w-36 h-36 opacity-25 pointer-events-none hidden md:block"
        style={{
          backgroundImage: 'radial-gradient(circle, #555555 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Decorative Faint Circular Outlines matching reference */}
      <div className="absolute -bottom-36 -left-16 w-[540px] h-[540px] rounded-full border border-white/[0.04] pointer-events-none hidden lg:block" />
      <div className="absolute -bottom-20 -left-6 w-[440px] h-[440px] rounded-full border border-white/[0.03] pointer-events-none hidden lg:block" />

      {/* ── MAIN TWO-COLUMN CONTAINER (Left ~32%, Right ~68%) ── */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-14 items-start lg:items-center">
        
        {/* ── LEFT COLUMN (~32% Width): Heading & Methodology Intro ── */}
        <div className="w-full lg:w-[32%] shrink-0 text-left">
          <div className={inView ? 'footer-enter-1' : 'footer-fade-up-initial'}>
            
            {/* Small uppercase orange label */}
            <span className="text-[#FFA500] font-black tracking-[0.2em] sm:tracking-[0.22em] uppercase text-xs sm:text-sm mb-2 sm:mb-3 block">
              OUR METHODOLOGY
            </span>

            {/* Responsive Pure White Heading */}
            <h2 className="text-[38px] xs:text-[44px] sm:text-5xl lg:text-[54px] xl:text-[62px] font-black text-white tracking-tight uppercase mb-4 sm:mb-5 leading-[0.94] lg:leading-[0.92]">
              OUR <br className="hidden xs:inline" />
              APPROACH
            </h2>

            {/* Short thick golden-orange underline below the heading */}
            <div className="w-14 sm:w-16 h-1.5 bg-[#FFA500] rounded-full mb-4 sm:mb-6" />

            {/* Introduction Text in Light Gray */}
            <p className="text-[#E0E0E0] text-sm sm:text-base lg:text-[16px] xl:text-[17px] leading-relaxed max-w-xl lg:max-w-md font-normal">
              A seamless integration of planning, design, and execution. Scroll to explore how we bring your vision to life.
            </p>
          </div>
        </div>

        {/* ── RIGHT COLUMN (~68% Width): Approach Cards ── */}
        <div className="w-full lg:w-[68%] relative">
          
          <div className="relative pl-0 lg:pl-10">
            
            {/* Thin Golden-Orange Vertical Timeline linking all 3 panels (Desktop only) */}
            <div 
              className={`hidden lg:block absolute w-[3px] bg-[#FFA500] pointer-events-none z-10 shadow-[0_0_8px_rgba(255,165,0,0.6)] ${
                inView ? 'approach-timeline-line' : 'opacity-0'
              }`}
              style={{
                left: '12px',
                top: '56px',
                bottom: '56px',
              }}
            />

            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-7 relative z-20 w-full max-w-2xl mx-auto lg:max-w-none">
              {stages.map((stage, idx) => {
                const nodeAnimClass = `approach-node-${idx + 1}`;

                return (
                  <div
                    key={stage.id}
                    className={`relative w-full transition-all duration-300 ${
                      inView ? stage.animClass : 'opacity-0'
                    }`}
                  >
                    {/* Small Square Node aligned on the vertical timeline (Desktop only) */}
                    <div
                      className={`hidden lg:block absolute z-30 w-4 h-4 bg-[#080808] border-2 border-[#FFA500] shadow-[0_0_10px_rgba(255,165,0,0.8)] pointer-events-none ${
                        inView ? nodeAnimClass : 'opacity-0'
                      }`}
                      style={{
                        left: '-28px',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />

                    {/* ══════════════════════════════════════════════════
                        MOBILE & TABLET CARD (< lg screens)
                        Clean, proportional golden-amber card with subtle angular chamfer
                       ══════════════════════════════════════════════════ */}
                    <div className="block lg:hidden relative w-full">
                      <div
                        className="relative w-full overflow-hidden transition-transform duration-200 active:scale-[0.99] rounded-lg"
                        style={{
                          filter: 'drop-shadow(0 6px 16px rgba(0, 0, 0, 0.55)) drop-shadow(0 0 12px rgba(255, 165, 0, 0.16))',
                          clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)',
                        }}
                      >
                        {/* Golden-yellow Background Gradient matching desktop */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFA500] via-[#FFB300] to-[#FFC107] pointer-events-none" />

                        {/* Top Dark Amber Bevel Edge */}
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#B45309] to-[#D97706] opacity-80 pointer-events-none" />

                        {/* Bottom Dark Amber Edge */}
                        <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#92400E] opacity-70 pointer-events-none" />

                        {/* Top-Right Chamfer Corner Accent */}
                        <div
                          className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#92400E] pointer-events-none opacity-85"
                          style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                        />

                        {/* Inner Content */}
                        <div className="relative z-10 p-4 sm:p-5">
                          {/* Top Row: Number Badge + Divider + Icon + Title */}
                          <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
                            {/* Number Badge */}
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#FFA500] bg-[#080808] flex items-center justify-center font-black text-sm sm:text-base text-white shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                              {stage.id}
                            </div>

                            {/* Thin Vertical Dark Divider */}
                            <div className="w-[1.5px] h-7 bg-[#080808]/20 shrink-0" />

                            {/* Icon & Title */}
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="shrink-0">
                                {React.cloneElement(stage.icon, { className: 'w-5 h-5 text-[#080808]', strokeWidth: 2.4 })}
                              </div>
                              <h3 className="text-[#080808] font-black text-base sm:text-lg tracking-wider uppercase truncate">
                                {stage.title}
                              </h3>
                            </div>
                          </div>

                          {/* Description Text */}
                          <p className="text-[#080808] text-[13px] sm:text-[14px] leading-relaxed font-semibold">
                            {stage.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ══════════════════════════════════════════════════
                        DESKTOP CARD (lg: and up)
                        Preserved exact existing hex-chevron SVG arrows & 3D bevels
                       ══════════════════════════════════════════════════ */}
                    <div
                      className="hidden lg:block relative w-full transition-all duration-300 group hover:translate-x-1"
                      style={{
                        filter: 'drop-shadow(0 10px 24px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 20px rgba(255, 165, 0, 0.22))',
                      }}
                    >
                      <div className="relative w-full">
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            {/* Rich golden-orange central body gradient */}
                            <linearGradient id={`grad-gold-body-${stage.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#FFA500" />
                              <stop offset="65%" stopColor="#FFB300" />
                              <stop offset="100%" stopColor="#FFC107" />
                            </linearGradient>

                            {/* Top dark amber bevel */}
                            <linearGradient id={`grad-top-bevel-${stage.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#B45309" />
                              <stop offset="100%" stopColor="#D97706" />
                            </linearGradient>

                            {/* Bottom dark amber bevel */}
                            <linearGradient id={`grad-bottom-bevel-${stage.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#92400E" />
                              <stop offset="100%" stopColor="#B45309" />
                            </linearGradient>

                            {/* Right 3D arrowhead bevel */}
                            <linearGradient id={`grad-head-bevel-${stage.id}`} x1="0%" y1="0%" x2="100%" y2="50%">
                              <stop offset="0%" stopColor="#F59E0B" />
                              <stop offset="100%" stopColor="#FFFBEB" stopOpacity="0.8" />
                            </linearGradient>
                          </defs>

                          {/* Main Body Path: Pointed Left Edge (6,50) to (0,50), Right Arrowhead (100,50) */}
                          <path
                            d="M 6 50 L 0 50 L 6 0 L 92 0 L 100 50 L 92 100 L 6 100 Z"
                            fill={`url(#grad-gold-body-${stage.id})`}
                            stroke="#FFA500"
                            strokeWidth="1.2"
                            vectorEffect="non-scaling-stroke"
                          />

                          {/* Top Amber Edge Chamfer/Bevel */}
                          <polygon
                            points="6,0 92,0 90,6 8,6"
                            fill={`url(#grad-top-bevel-${stage.id})`}
                            opacity="0.85"
                          />

                          {/* Bottom Dark Amber Edge Chamfer/Bevel */}
                          <polygon
                            points="6,100 92,100 90,94 8,94"
                            fill={`url(#grad-bottom-bevel-${stage.id})`}
                            opacity="0.9"
                          />

                          {/* Left Point Layered Amber Accent */}
                          <polygon
                            points="6,0 0,50 6,100 10,94 5,50 10,6"
                            fill="#92400E"
                            opacity="0.75"
                          />

                          {/* Right Arrowhead 3D Layered Triangular Highlight */}
                          <polygon
                            points="92,0 100,50 92,100 86,94 93,50 86,6"
                            fill={`url(#grad-head-bevel-${stage.id})`}
                            opacity="0.95"
                          />
                        </svg>

                        {/* Foreground Desktop Content */}
                        <div className="relative z-10 py-6 px-8 flex items-center gap-6 pl-12 pr-20">
                          
                          {/* Left Group: Circular Black Number Badge + Divider + Icon */}
                          <div className="flex items-center gap-4 shrink-0">
                            
                            {/* Circular Number Badge */}
                            <div
                              className="w-14 h-14 rounded-full border-2 border-[#FFA500] bg-[#080808] flex items-center justify-center font-black text-xl text-white shrink-0 shadow-[0_0_12px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform"
                            >
                              {stage.id}
                            </div>

                            {/* Thin Vertical Dark Divider */}
                            <div className="w-[1.5px] h-12 bg-[#080808]/30 shrink-0" />

                            {/* Icon */}
                            <div className="shrink-0 p-1.5 flex items-center justify-center">
                              {stage.icon}
                            </div>
                          </div>

                          {/* Right Group: Bold Black Heading & Complete Description */}
                          <div className="text-left flex-1 min-w-0 pr-2">
                            <div className="flex items-center gap-2.5 mb-1.5">
                              <h3 className="text-[#080808] font-black text-lg tracking-wider uppercase">
                                {stage.title}
                              </h3>
                            </div>

                            <p className="text-[#080808] text-[13.5px] leading-relaxed font-semibold">
                              {stage.desc}
                            </p>
                          </div>

                        </div>

                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Approach;
