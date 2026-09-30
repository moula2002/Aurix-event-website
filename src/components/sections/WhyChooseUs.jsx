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
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center mb-8 group-hover:border-[#f59e0b] group-hover:bg-amber-50 transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-4 group-hover:text-[#f59e0b] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
