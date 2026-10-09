import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, BarChart3 } from 'lucide-react';
import SectionTitle from '../layout/SectionTitle';
import aboutImg from '../../assets/images/about_us_corporate.jpg';

const AboutPreview = () => {
  return (
    <section id="about" className="bg-[#fcfcfc] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Content Side */}
          <div className="w-full lg:w-[55%] p-4 lg:p-8 flex flex-col justify-center">
            
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="mb-8">
                <SectionTitle subtitle="BRINGING IDEAS TO LIFE" title="THROUGH EXCEPTIONAL EVENTS" />
              </div>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Ax Aurix Events delivers event production, technical expertise, creative services, and digital solutions designed to help organizations connect with audiences and communicate their brand messages effectively.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                <strong>Our Goal:</strong> Build collaborative partnerships with clients, understand their business objectives, and deliver event experiences that support their communication goals. Emphasize coordinated planning, effective production, and delivery within agreed budgets.
              </p>
            </motion.div>


            
            {/* 3 Mini Cards Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto"
            >
              {/* Card 1 */}
              <div className="bg-amber-50 rounded-2xl p-5 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="text-[#f59e0b] mt-1"><Users size={24} /></div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1">Collaboration</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Working together for greater impact</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#fdf4f6] rounded-2xl p-5 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="text-rose-500 mt-1"><Lightbulb size={24} /></div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1">Innovation</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Thinking beyond the ordinary</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#f0fbf4] rounded-2xl p-5 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="text-emerald-500 mt-1"><BarChart3 size={24} /></div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1">Growth</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Creating better opportunities</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-full rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={aboutImg} 
              alt="Immersive Experience" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
