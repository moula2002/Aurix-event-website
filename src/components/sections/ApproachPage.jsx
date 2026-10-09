import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SectionHeader from '../layout/SectionHeader';
import SectionTitle from '../layout/SectionTitle';
import { Compass, Hammer, Rocket } from 'lucide-react';
import process1 from '../../assets/images/portfolio/work-1.jpg'; // Placeholder images
import process2 from '../../assets/images/portfolio/work-2.jpg';
import process3 from '../../assets/images/portfolio/work-3.jpg';

const ApproachPage = () => {
  const steps = [
    {
      title: 'We Explore',
      desc: 'We begin by understanding the ethos of your company, its mission and long-term strategic plans. Our approach is built around collaboration: we aim to become an integral part of your team rather than simply an external supplier. By understanding your business, audience and objectives, we can help shape event concepts that support your communication goals and create meaningful connections with your clients.'
    },
    {
      title: 'We Build',
      desc: 'Once we understand your business and event objectives, we develop a clear plan aligned with your goals. We coordinate event planning, technical requirements, suppliers, resources and production details, taking care of the preparation and management involved in delivering a professional event. Our collaborative approach helps keep the project organized, focused and aligned with the agreed budget.'
    },
    {
      title: 'We Deliver',
      desc: 'This is where our event management and production expertise comes together. From venue and facility coordination to audiovisual systems, lighting, staging and on-site supervision, we pay attention to every detail. By following a goal-oriented plan and a methodical management approach, we help ensure that the event runs smoothly, allowing you to focus on your attendees, clients and stakeholders.'
    }
  ];

  return (
    <>
      <SectionHeader title="OUR APPROACH" />
      <div className="bg-[#f8f9fa] min-h-screen pt-24 pb-12">
        <div className="max-w-[1600px] mx-auto bg-white min-h-[85vh] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Content Side */}
        <div className="w-full lg:w-[45%] p-10 md:p-16 lg:p-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight inline-block border-b-2 border-gray-900 pb-1">
              OUR APPROACH
            </h2>
          </motion.div>

          <div className="space-y-12 pr-4">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <h3 className="text-lg font-black text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[14px] text-justify">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
          

        </div>

        {/* Right Image Collage Side with Brush Mask Effect */}
        <div className="w-full lg:w-[55%] relative h-[60vh] lg:h-auto">
          
          {/* White Brush Edge Overlay to create the torn paper effect */}
          <div className="absolute top-0 left-0 w-[150px] h-full z-20 pointer-events-none hidden lg:block"
               style={{
                 background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 100 1000\' preserveAspectRatio=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,0 L100,0 C80,50 90,100 50,150 C70,200 40,250 80,300 C60,350 90,400 50,450 C80,500 40,550 70,600 C50,650 90,700 60,750 C80,800 40,850 70,900 C50,950 100,1000 100,1000 L0,1000 Z\' fill=\'%23ffffff\'/%3E%3C/svg%3E")',
                 backgroundSize: '100% 100%'
               }}
          ></div>

          {/* Collage Layout */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0 h-full">
            {/* Top Left Image (Drawing/Planning) */}
            <div className="relative w-full h-full col-span-1 row-span-1 border-b-[4px] border-r-[4px] border-white">
              <img src={process1} alt="Planning" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            
            {/* Top Right Image (Stage/Tech) */}
            <div className="relative w-full h-full col-span-1 row-span-1 border-b-[4px] border-white">
              <img src={process2} alt="Building" className="absolute inset-0 w-full h-full object-cover object-top" />
            </div>
            
            {/* Bottom Full Width Image (Delivery/Event) */}
            <div className="relative w-full h-full col-span-2 row-span-1">
              <img src={process3} alt="Delivery" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
    </>
  );
};

export default ApproachPage;
