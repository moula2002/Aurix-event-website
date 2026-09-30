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
      desc: 'We understand the ethos of your company, its mission and the long-term strategic plans. We are a part of your team! Our model works best when we become more than the "hired help" and become event management collaborators. So the first step for us is getting to know you and your business.'
    },
    {
      title: 'We Build',
      desc: 'The time taken to learn about your business and the goals of your event, enables us to be on target and in line with your goals. Leave the planning and management to us. Let us look after the details and the heavy lifting that comes with planning a professional event. Our network of preferred vendors, industry connections and years of experience, guarantee a full-service event management experience.'
    },
    {
      title: 'We Deliver',
      desc: 'Conclusively, this is where our event management expertise comes into play. From scrupulous management of facility details to AV to on-site supervision, we ensure every detail is looked after. Managing your event using a goal-oriented overall plan and a methodical management approach allows you to rest easy. Knowing that every minute last detail is looked after will allow you to focus on your attendees and stakeholders at the event.'
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
          
          <div className="mt-16 text-gray-400 text-sm">Confidential</div>
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
