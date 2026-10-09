import React from 'react';
import { motion } from 'framer-motion';

const Approach = () => {

  const steps = [
    {
      id: '01',
      title: 'We Explore',
      desc: 'We begin by understanding the ethos of your company, its mission and long-term strategic plans. Our approach is built around collaboration: we aim to become an integral part of your team rather than simply an external supplier. By understanding your business, audience and objectives, we can help shape event concepts that support your communication goals and create meaningful connections with your clients.',
      color: 'from-amber-100 to-transparent',
      borderColor: 'border-[#f59e0b]'
    },
    {
      id: '02',
      title: 'We Build',
      desc: 'Once we understand your business and event objectives, we develop a clear plan aligned with your goals. We coordinate event planning, technical requirements, suppliers, resources and production details, taking care of the preparation and management involved in delivering a professional event. Our collaborative approach helps keep the project organized, focused and aligned with the agreed budget.',
      color: 'from-gray-100 to-transparent',
      borderColor: 'border-gray-900'
    },
    {
      id: '03',
      title: 'We Deliver',
      desc: 'This is where our event management and production expertise comes together. From venue and facility coordination to audiovisual systems, lighting, staging and on-site supervision, we pay attention to every detail. By following a goal-oriented plan and a methodical management approach, we help ensure that the event runs smoothly, allowing you to focus on your attendees, clients and stakeholders.',
      color: 'from-amber-100 to-transparent',
      borderColor: 'border-[#f59e0b]'
    }
  ];

  // Duplicate steps to create a seamless infinite loop
  const infiniteSteps = [...steps, ...steps];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f59e0b] opacity-[0.03] rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Static Title on the left */}
        <div className="w-full md:w-1/3 shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-[#f59e0b] font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Methodology</h3>
              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter uppercase mb-6 leading-none">
                OUR <br/> APPROACH
              </h2>
              <div className="w-20 h-2 bg-[#f59e0b] mb-8"></div>
              <p className="text-gray-500 text-lg leading-relaxed">
                A seamless integration of planning, design, and execution. Scroll to explore how we bring your vision to life.
              </p>
            </motion.div>
          </div>

          {/* Automatically Scrolling Cards */}
          <div className="w-full md:w-2/3 overflow-hidden relative" 
               style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
            <motion.div 
              animate={{ x: [0, "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex gap-8 w-max pl-4 hover:[animation-play-state:paused]"
            >
              {infiniteSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="w-[85vw] md:w-[600px] shrink-0 relative bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group overflow-hidden"
                >
                  {/* Background Gradient Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Giant Faded Number */}
                  <div className="absolute -right-8 -bottom-16 text-[150px] md:text-[200px] font-black text-gray-50 pointer-events-none group-hover:scale-110 group-hover:text-gray-100 transition-all duration-700 leading-none">
                    {step.id}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-8">
                      <div className={`shrink-0 w-16 h-16 rounded-full border-4 ${step.borderColor} flex items-center justify-center bg-white shadow-lg`}>
                        <span className="text-2xl font-black text-gray-900">{step.id}</span>
                      </div>
                      <h3 className="text-3xl font-black text-gray-900 tracking-tight uppercase group-hover:text-[#f59e0b] transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-[15px] md:text-lg font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

      </div>
    </section>
  );
};

export default Approach;
