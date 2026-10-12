import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Award, Shield, Zap } from 'lucide-react';
import About from './About';

const MilestoneItem = ({ milestone, idx }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '-20px',
  });

  const isEven = idx % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-between relative ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Timeline Dot */}
      <div
        className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#f59e0b] border-4 border-white shadow -translate-x-1/2 z-10 ${
          inView ? 'timeline-dot-entrance' : 'timeline-dot-initial'
        }`}
      />

      <div className="w-full md:w-5/12 pl-12 md:pl-0">
        <div
          className={`p-6 bg-white rounded-2xl shadow-sm border border-gray-100 ${
            isEven ? 'md:text-left' : 'md:text-right'
          } ${
            isEven
              ? (inView ? 'timeline-card-right-entrance' : 'timeline-card-right-initial')
              : (inView ? 'timeline-card-left-entrance' : 'timeline-card-left-initial')
          }`}
        >
          <span className="text-[#f59e0b] font-black text-2xl tracking-tighter block mb-2">{milestone.year}</span>
          <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase">{milestone.title}</h3>
          <p className="text-gray-600 text-sm">{milestone.desc}</p>
        </div>
      </div>

      <div className="hidden md:block w-5/12" />
    </div>
  );
};

const AboutPage = () => {
  const { ref: strengthsRef, inView: strengthsInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const { ref: timelineSectionRef, inView: timelineSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    { year: '2020', title: 'FOUNDATION', desc: 'Started our journey with a strong vision for creating memorable and professionally managed events.' },
    { year: '2021', title: 'BUILDING MOMENTUM', desc: 'Expanded our event capabilities and strengthened our approach to delivering exceptional experiences.' },
    { year: '2022', title: 'SERVICE EXPANSION', desc: 'Expanded our range of event services and developed stronger client relationships.' },
    { year: '2023', title: 'NEW EXPERIENCES', desc: 'Introduced fresh event concepts and continued improving the overall event experience.' },
    { year: '2024', title: 'GROWING REACH', desc: 'Continued growing our presence and delivering successful events across different requirements.' },
    { year: '2025', title: 'STRONGER PARTNERSHIPS', desc: 'Built stronger partnerships and continued delivering high-quality event experiences.' },
    { year: '2026', title: 'CONTINUING THE JOURNEY', desc: 'Continuing to create memorable experiences with innovation, creativity and professional event management.' }
  ];

  const strengths = [
    { icon: Target, title: 'Strategic Planning', desc: 'Meticulous attention to detail and rigorous project management.' },
    { icon: Zap, title: 'Innovative Technology', desc: 'Integrating the latest AV, VR, and digital solutions into every event.' },
    { icon: Shield, title: 'Uncompromising Quality', desc: 'A commitment to excellence that ensures flawless execution.' },
    { icon: Award, title: 'Award-Winning Creative', desc: 'In-house design teams pushing the boundaries of event aesthetics.' }
  ];

  return (
    <div className="bg-white min-h-screen pb-24 pt-20">
      <About />

      {/* Core Strengths */}
      <div ref={strengthsRef} className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-black text-gray-900 uppercase tracking-tighter mb-4 ${strengthsInView ? 'strengths-heading-entrance' : 'strengths-heading-initial'}`}>
            Core Strengths
          </h2>
          <p className={`text-gray-600 ${strengthsInView ? 'strengths-subtitle-entrance' : 'strengths-subtitle-initial'}`}>
            The pillars that uphold our standard of excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, idx) => (
            <div
              key={idx}
              className={`text-center group ${
                idx === 0
                  ? (strengthsInView ? 'strength-item-1-entrance' : 'strength-item-1-initial')
                  : idx === 1
                  ? (strengthsInView ? 'strength-item-2-entrance' : 'strength-item-2-initial')
                  : idx === 2
                  ? (strengthsInView ? 'strength-item-3-entrance' : 'strength-item-3-initial')
                  : (strengthsInView ? 'strength-item-4-entrance' : 'strength-item-4-initial')
              }`}
            >
              <div
                className={`w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#f59e0b] group-hover:text-white transition-colors duration-300 ${
                  idx === 0
                    ? (strengthsInView ? 'strength-icon-1-entrance' : 'strength-icon-initial')
                    : idx === 1
                    ? (strengthsInView ? 'strength-icon-2-entrance' : 'strength-icon-initial')
                    : idx === 2
                    ? (strengthsInView ? 'strength-icon-3-entrance' : 'strength-icon-initial')
                    : (strengthsInView ? 'strength-icon-4-entrance' : 'strength-icon-initial')
                }`}
              >
                <strength.icon size={32} className="text-[#f59e0b] group-hover:text-white transition-colors" />
              </div>
              <div
                className={
                  idx === 0
                    ? (strengthsInView ? 'strength-text-1-entrance' : 'strength-text-initial')
                    : idx === 1
                    ? (strengthsInView ? 'strength-text-2-entrance' : 'strength-text-initial')
                    : idx === 2
                    ? (strengthsInView ? 'strength-text-3-entrance' : 'strength-text-3-initial')
                    : (strengthsInView ? 'strength-text-4-entrance' : 'strength-text-4-initial')
                }
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{strength.title}</h3>
                <p className="text-gray-600 text-sm">{strength.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones / Timeline */}
      <div ref={timelineSectionRef} className="bg-gray-50 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className={`text-4xl font-black text-gray-900 uppercase tracking-tighter mb-4 ${
              timelineSectionInView ? 'timeline-heading-entrance' : 'timeline-heading-initial'
            }`}>
              6 Years of Excellence
            </h2>
            <p className={`text-gray-600 ${
              timelineSectionInView ? 'timeline-subtitle-entrance' : 'timeline-subtitle-initial'
            }`}>
              A timeline of our journey and milestones.
            </p>
          </div>
          
          <div className="relative">
            {/* Center Line */}
            <div 
              className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 z-0 origin-top -translate-x-1/2 ${
                timelineSectionInView ? 'timeline-line-entrance' : 'timeline-line-initial'
              }`}
            />
            
            <div className="space-y-12 relative z-10">
              {milestones.map((milestone, idx) => (
                <MilestoneItem key={idx} milestone={milestone} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
