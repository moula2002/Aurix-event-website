import React from 'react';
import { motion } from 'framer-motion';

const Approach = () => {

  const steps = [
    {
      id: '01',
      title: 'We Explore',
      desc: 'We understand the ethos of your company, its mission and the long-term strategic plans. We are a part of your team! Our model works best when we become more than the "hired help" and become event management collaborators. So the first step for us is getting to know you and your business.',
      color: 'from-amber-100 to-transparent',
      borderColor: 'border-[#f59e0b]'
    },
    {
      id: '02',
      title: 'We Build',
      desc: 'The time taken to learn about your business and the goals of your event, enables us to be on target and in line with your goals. Leave the planning and management to us. Let us look after the details and the heavy lifting that comes with planning a professional event. Our network of preferred vendors, industry connections and years of experience, guarantee a full-service event management experience.',
      color: 'from-gray-100 to-transparent',
      borderColor: 'border-gray-900'
    },
    {
      id: '03',
      title: 'We Deliver',
      desc: 'Conclusively, this is where our event management expertise comes into play. From scrupulous management of facility details to AV to on-site supervision, we ensure every detail is looked after. Managing your event using a goal-oriented overall plan and a methodical management approach allows you to rest easy. Knowing that every minute last detail is looked after will allow you to focus on your attendees and stakeholders at the event.',
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
