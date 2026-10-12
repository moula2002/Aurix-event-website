import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedServiceCta = ({
  title,
  description,
  buttonText,
  onButtonClick,
  iconLeft,
  iconRight
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div ref={ref} className="max-w-[1600px] mx-auto px-6">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-amber-500/20">
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <div className={inView ? 'service-cta-content-entrance' : 'service-cta-content-initial'}>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              {title}
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              {description}
            </p>
          </div>
          <button
            onClick={onButtonClick}
            className={`mt-4 inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-widest text-black bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:shadow-[0_8px_24px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:scale-105 ${
              inView ? 'service-cta-button-entrance' : 'service-cta-button-initial'
            }`}
          >
            {iconLeft}
            <span>{buttonText}</span>
            {iconRight}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedServiceCta;
