import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full relative bg-white">
      <div className="flex flex-col lg:flex-row w-full min-h-[600px]">
        
        {/* Left Side (Amber/Brand Color) */}
        <div className="w-full lg:w-1/2 bg-[#f59e0b] relative py-20 px-10 md:px-20 flex flex-col justify-center">
          
          {/* Giant Apostrophe Graphic */}
          <div className="absolute right-0 top-20 translate-x-1/2 z-20 hidden lg:block">
            <svg width="140" height="450" viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M75 10H25C16.7157 10 10 16.7157 10 25V75C10 83.2843 16.7157 90 25 90H60C60 110 40 130 15 130V150C50 150 80 120 80 80V25C80 16.7157 73.2843 10 65 10Z" fill="white" stroke="#111827" strokeWidth="4"/>
              <path d="M25 15H75C80.5228 15 85 19.4772 85 25V80C85 125 50 160 15 160V140C45 140 65 115 65 85V85H25C19.4772 85 15 80.5228 15 75V25C15 19.4772 19.4772 15 25 15Z" fill="transparent" stroke="white" strokeWidth="2" transform="translate(-10, -5)"/>
              <rect x="70" y="160" width="10" height="200" fill="white" />
              <rect x="50" y="160" width="10" height="200" fill="white" />
              <rect x="30" y="160" width="10" height="200" fill="white" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative z-10"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Layered Text 1 */}
            <div className="relative mb-6 inline-block mt-8">
              <div 
                className="absolute text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px white',
                  transform: 'translate(3px, 5px)'
                }}
              >
                INNOVATIVE IDEAS &<br/>IMMERSIVE EXPERIENCES
              </div>
              <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#111827] tracking-tighter m-0 leading-[1.05]">
                INNOVATIVE IDEAS &<br/>IMMERSIVE EXPERIENCES
              </h2>
            </div>

            <p className="text-[#111827] font-semibold text-sm md:text-[15px] leading-relaxed max-w-lg text-justify mb-10">
              Ax Aurix Events delivers event production, technical expertise, creative services, and digital solutions designed to help organizations connect with audiences and communicate their brand messages effectively.
            </p>

            {/* Layered Text 2 */}
            <div className="relative mb-6 inline-block">
              <div 
                className="absolute text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px white',
                  transform: 'translate(3px, 4px)'
                }}
              >
                OUR UNIFIED<br/>LONG TERM GOAL
              </div>
              <h3 className="relative text-2xl md:text-3xl lg:text-4xl font-black uppercase text-[#111827] tracking-tighter m-0 leading-[1.05]">
                OUR UNIFIED<br/>LONG TERM GOAL
              </h3>
            </div>

            <div className="text-[#111827] font-semibold text-sm md:text-[15px] leading-relaxed max-w-lg text-justify space-y-4">
              <p>
                Build collaborative partnerships with clients, understand their business objectives, and deliver event experiences that support their communication goals.
              </p>
              <p>
                Emphasize coordinated planning, effective production, and delivery within agreed budgets.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side (White) */}
        <div className="w-full lg:w-1/2 bg-white py-20 px-10 md:px-24 flex flex-col justify-center gap-12 relative">
          
          {/* Mission Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="border-2 border-[#f59e0b] p-8 md:p-10 relative bg-white"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#111827]">
                OUR MISSION
              </h3>
            </div>
            <p className="text-gray-700 font-semibold text-sm md:text-base leading-relaxed text-center mt-2">
              To create exceptional event experiences through innovation,
              creativity, and flawless execution. We are committed to delivering
              world-class solutions that exceed client expectations, build lasting
              relationships, and transform every vision into an unforgettable reality.
            </p>
          </motion.div>

          {/* Vision Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="border-2 border-[#f59e0b] p-8 md:p-10 relative bg-white"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#111827]">
                OUR VISION
              </h3>
            </div>
            <p className="text-gray-700 font-semibold text-sm md:text-base leading-relaxed text-center mt-2">
              To be the UAE's most trusted and innovative event management
              company, recognized for delivering extraordinary experiences,
              setting new industry benchmarks, and inspiring memorable moments
              through creativity, excellence, and passion.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
