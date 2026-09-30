import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap } from 'lucide-react';

const Counter = ({ from, to, duration, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let startTime;
    let animationFrame;
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      if (progress < duration) {
        setCount(Math.min(Math.floor((progress / duration) * to) + from, to));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };
    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Statistics = () => {
  const stats = [
    { number: 1500, suffix: '+', label: 'Events Delivered', icon: '🎪' },
    { number: 500, suffix: '+', label: 'Happy Clients', icon: '🤝' },
    { number: 150, suffix: '+', label: 'Trusted Partners', icon: '🌟' },
  ];

  return (
    <section className="w-full relative z-20 px-4 md:px-6 max-w-[1440px] mx-auto -mt-8 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative rounded-2xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100"
      >
        {/* Gold top stripe */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent" />

        {/* Soft amber glow behind center */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[200%] bg-[#f59e0b]/5 blur-[80px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 relative">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ willChange: "transform, opacity" }}
              className={`flex flex-col items-center justify-center py-5 px-6 relative group cursor-pointer
                ${idx < stats.length - 1 ? 'md:border-r border-b md:border-b-0 border-gray-100' : ''}`}
            >
              {/* Hover amber tint */}
              <div className="absolute inset-0 bg-[#f59e0b]/0 group-hover:bg-[#f59e0b]/[0.03] transition-colors duration-500" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-5xl lg:text-[3.5rem] font-black tracking-tighter mb-2 text-[#111827]">
                  <Counter from={0} to={stat.number} duration={2000} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] group-hover:text-gray-700 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom marquee strip */}
        <div className="border-t border-gray-100 py-3 overflow-hidden bg-gray-50/60">
          <div className="marquee-track gap-12 text-gray-400 text-[0.65rem] font-bold uppercase tracking-[0.2em]">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="flex items-center gap-3 whitespace-nowrap px-6">
                <Zap size={10} className="text-[#f59e0b]" />
                AX AURIX EVENTS
                <span className="text-[#f59e0b]">✦</span>
                22 YEARS OF EXCELLENCE
                <span className="text-[#f59e0b]">✦</span>
                ABU DHABI UAE
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Statistics;
