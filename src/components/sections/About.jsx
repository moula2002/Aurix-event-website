import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={sectionRef} className="w-full relative bg-[#000000]">
      <div className="flex flex-col lg:flex-row w-full min-h-[600px]">
        
        {/* Left Side (Amber/Brand Color) */}
        <div className="w-full lg:w-1/2 bg-[#f59e0b] relative py-20 px-10 md:px-20 flex flex-col justify-center">
          
          {/* Giant Apostrophe Graphic */}
          <div className="absolute right-0 top-20 translate-x-1/2 z-20 hidden lg:block pointer-events-none">
            <div className={inView ? 'about-hero-quote-entrance' : 'about-hero-quote-initial'}>
              <svg width="140" height="450" viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M75 10H25C16.7157 10 10 16.7157 10 25V75C10 83.2843 16.7157 90 25 90H60C60 110 40 130 15 130V150C50 150 80 120 80 80V25C80 16.7157 73.2843 10 65 10Z" fill="white" stroke="#111827" strokeWidth="4"/>
                <path d="M25 15H75C80.5228 15 85 19.4772 85 25V80C85 125 50 160 15 160V140C45 140 65 115 65 85V85H25C19.4772 85 15 80.5228 15 75V25C15 19.4772 19.4772 15 25 15Z" fill="transparent" stroke="white" strokeWidth="2" transform="translate(-10, -5)"/>
                <rect x="70" y="160" width="10" height="200" fill="white" />
                <rect x="50" y="160" width="10" height="200" fill="white" />
                <rect x="30" y="160" width="10" height="200" fill="white" />
              </svg>
            </div>
          </div>

          <div className="relative z-10">
            {/* Main Heading styled exactly like the Event page SectionHeader */}
            <div className={`mb-6 mt-8 ${inView ? 'about-hero-heading-entrance' : 'about-hero-heading-initial'}`}>
              <h2 className="relative inline-block text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#111827] tracking-tight leading-[1.1] font-heading m-0">
                <span className="relative z-10">
                  INNOVATIVE IDEAS &<br />IMMERSIVE EXPERIENCES
                </span>
                <span
                  className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none select-none text-transparent"
                  aria-hidden="true"
                  style={{
                    WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.85)',
                    transform: 'translate(4px, 4px)'
                  }}
                >
                  INNOVATIVE IDEAS &<br />IMMERSIVE EXPERIENCES
                </span>
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className={`text-[#111827] font-semibold text-sm md:text-[15px] leading-relaxed max-w-lg text-justify mb-10 ${inView ? 'about-hero-desc-entrance' : 'about-hero-desc-initial'}`}>
              Ax Aurix Events delivers event production, technical expertise, creative services, and digital solutions designed to help organizations connect with audiences and communicate their brand messages effectively.
            </p>

            {/* Unified Long-Term Goal Heading styled exactly like the Event page SectionHeader */}
            <div className={`mb-6 ${inView ? 'about-hero-goal-heading-entrance' : 'about-hero-goal-heading-initial'}`}>
              <h3 className="relative inline-block text-2xl md:text-3xl lg:text-4xl font-black uppercase text-[#111827] tracking-tight leading-[1.1] font-heading m-0">
                <span className="relative z-10">
                  OUR UNIFIED<br />LONG TERM GOAL
                </span>
                <span
                  className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none select-none text-transparent"
                  aria-hidden="true"
                  style={{
                    WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.85)',
                    transform: 'translate(3px, 3px)'
                  }}
                >
                  OUR UNIFIED<br />LONG TERM GOAL
                </span>
              </h3>
            </div>

            {/* Unified Goal Paragraphs */}
            <div className="text-[#111827] font-semibold text-sm md:text-[15px] leading-relaxed max-w-lg text-justify space-y-4">
              <p className={inView ? 'about-hero-goal-para1-entrance' : 'about-hero-goal-para1-initial'}>
                Build collaborative partnerships with clients, understand their business objectives, and deliver event experiences that support their communication goals.
              </p>
              <p className={inView ? 'about-hero-goal-para2-entrance' : 'about-hero-goal-para2-initial'}>
                Emphasize coordinated planning, effective production, and delivery within agreed budgets.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side (Dark) */}
        <div className="w-full lg:w-1/2 bg-[#0f0f0f] py-20 px-10 md:px-24 flex flex-col justify-center gap-12 relative border-l border-white/5">
          
          {/* Mission Box */}
          <div
            className={`border-2 border-[#f59e0b] p-8 md:p-10 relative bg-[#151515] rounded-xl ${inView ? 'about-hero-mission-entrance' : 'about-hero-mission-initial'}`}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0f0f0f] px-4 rounded-full border border-[#f59e0b]/30">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#f59e0b]">
                OUR MISSION
              </h3>
            </div>
            <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed text-center mt-2">
              To create exceptional event experiences through innovation,
              creativity, and flawless execution. We are committed to delivering
              world-class solutions that exceed client expectations, build lasting
              relationships, and transform every vision into an unforgettable reality.
            </p>
          </div>

          {/* Vision Box */}
          <div
            className={`border-2 border-[#f59e0b] p-8 md:p-10 relative bg-[#151515] rounded-xl ${inView ? 'about-hero-vision-entrance' : 'about-hero-vision-initial'}`}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0f0f0f] px-4 rounded-full border border-[#f59e0b]/30">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#f59e0b]">
                OUR VISION
              </h3>
            </div>
            <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed text-center mt-2">
              To be the UAE's most trusted and innovative event management
              company, recognized for delivering extraordinary experiences,
              setting new industry benchmarks, and inspiring memorable moments
              through creativity, excellence, and passion.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
