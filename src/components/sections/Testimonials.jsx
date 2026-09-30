import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'JOHN SMITH',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop',
    text: 'An extraordinary experience from start to finish. The team delivered beyond our expectations.'
  },
  {
    id: 2,
    name: 'SH SHAH',
    company: 'Global Innovators',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop',
    text: 'Their attention to detail and flawless execution made our annual gala a massive success.'
  },
  {
    id: 3,
    name: 'HIKAR ALI',
    company: 'Nexus Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop',
    text: 'Creative, professional, and reliable. We could not have asked for a better event partner.'
  },
  {
    id: 4,
    name: 'AMAN YADAV',
    company: 'Alpha Group',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
    text: 'They transformed our vision into reality with stunning visuals and immersive experiences.'
  },
  {
    id: 5,
    name: 'SARAH JANE',
    company: 'Innovate Ltd',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
    text: 'Outstanding production quality and exceptional team to work with. Highly recommended.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle item
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const setTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto scroll effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 4000); // 4 second auto-advance

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  return (
    <section className="bg-[#0a0a0a] py-16 md:py-20 w-full overflow-hidden border-y border-white/5 relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#f59e0b]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white text-center uppercase tracking-widest mb-16">
          TESTIMONIALS
        </h2>

        <div 
          className="relative flex justify-center items-end h-[350px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => {
            // Calculate relative position (-2, -1, 0, 1, 2)
            let relativeIndex = index - currentIndex;
            // Handle wrap around
            if (relativeIndex < -2) relativeIndex += testimonials.length;
            if (relativeIndex > 2) relativeIndex -= testimonials.length;

            const isActive = relativeIndex === 0;
            const isVisible = Math.abs(relativeIndex) <= 2;

            if (!isVisible) return null;

            return (
              <motion.div
                key={testimonial.id}
                onClick={() => setTestimonial(index)}
                className="absolute bottom-0 cursor-pointer origin-bottom"
                initial={false}
                animate={{
                  x: relativeIndex * (window.innerWidth < 768 ? 70 : 160),
                  scale: isActive ? 1 : 0.85,
                  zIndex: isActive ? 50 : 40 - Math.abs(relativeIndex),
                  width: isActive ? (window.innerWidth < 768 ? '260px' : '380px') : '70px',
                  height: isActive ? (window.innerWidth < 768 ? '280px' : '350px') : (240 - Math.abs(relativeIndex) * 30) + 'px',
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {isActive ? (
                  <div className="w-full h-full relative overflow-hidden bg-black shadow-[0_0_40px_rgba(245,158,11,0.15)] rounded-t-lg">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Inner brand color border frame */}
                    <div className="absolute inset-8 border-4 border-[#f59e0b] pointer-events-none z-10" />
                    
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    
                    {/* Testimonial content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-center">
                      <p className="text-white italic text-sm md:text-base font-medium mb-4 line-clamp-3 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <h4 className="text-[#f59e0b] font-black tracking-widest uppercase">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full relative overflow-hidden bg-black border border-white/10 flex items-center justify-center rounded-t-lg group cursor-pointer hover:border-white/30 transition-colors">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 transition-colors duration-500" />
                    <span 
                      className="relative z-10 text-white/80 font-bold tracking-[0.3em] uppercase text-xs transform -rotate-90 whitespace-nowrap group-hover:text-white transition-colors drop-shadow-lg"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {testimonial.name}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex justify-center gap-4 mt-12 md:hidden">
          <button 
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border-2 border-gray-900 text-gray-900 flex items-center justify-center hover:bg-[#f59e0b] hover:border-[#f59e0b] hover:text-white transition-colors"
          >
            ←
          </button>
          <button 
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border-2 border-gray-900 text-gray-900 flex items-center justify-center hover:bg-[#f59e0b] hover:border-[#f59e0b] hover:text-white transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
