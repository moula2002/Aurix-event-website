import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../layout/SectionTitle';
import { Building2, Lightbulb, Users, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Building2 size={24} className="text-[#f59e0b]" />,
      title: "Industry Experience",
      description: "Over two decades of crafting exceptional events across sectors."
    },
    {
      icon: <Users size={24} className="text-[#f59e0b]" />,
      title: "Corporate & Government Expertise",
      description: "Specialized experience in delivering high-profile institutional events."
    },
    {
      icon: <Lightbulb size={24} className="text-[#f59e0b]" />,
      title: "Creative & ROI-Focused",
      description: "Strategic planning combined with bold creative execution for measurable impact."
    },
    {
      icon: <Target size={24} className="text-[#f59e0b]" />,
      title: "Flawless Execution",
      description: "Precision-driven project management ensuring zero-defect delivery every time."
    }
  ];

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <SectionTitle 
            title={
              <>
                WHY CHOOSE <br /> US ?
              </>
            } 
          />
          <div className="max-w-xl text-right lg:text-left">
            <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
              Turning ideas into extraordinary experiences with innovative event
              solutions. Driven by creativity, reliability, and a commitment to
              delivering excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full h-[320px] group [perspective:1000px]"
            >
              <div className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] [backface-visibility:hidden] flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full border border-gray-100 flex items-center justify-center mb-6 bg-gray-50/50 shadow-inner group-hover:shadow-md transition-all duration-300">
                    {React.cloneElement(reason.icon, { size: 32, className: "text-amber-500" })}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {reason.title}
                  </h3>
                  <div className="absolute bottom-8 opacity-50 text-amber-500 font-semibold text-sm flex flex-col items-center gap-1 group-hover:opacity-0 transition-opacity">
                    <span className="w-1 h-1 rounded-full bg-amber-500 animate-ping" />
                    Hover
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-500 to-orange-600 rounded-[2rem] p-8 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center text-center text-white">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm shadow-inner">
                    {React.cloneElement(reason.icon, { size: 24, className: "text-white drop-shadow-md" })}
                  </div>
                  <h3 className="text-lg font-bold mb-4 opacity-90 drop-shadow-sm">
                    {reason.title}
                  </h3>
                  <p className="text-white/95 text-base font-medium leading-relaxed drop-shadow-sm">
                    {reason.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
