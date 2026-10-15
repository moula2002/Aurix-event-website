import React from 'react';
import { useInView } from 'react-intersection-observer';

const SectionHeader = ({ title, bgColor = 'bg-[#f59e0b]' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const words = typeof title === 'string' ? title.split(' ') : [title];

  const getWordClass = (index) => {
    if (!inView) return 'section-header-word-initial';
    if (index === 0) return 'section-header-word-entrance-0';
    if (index === 1) return 'section-header-word-entrance-1';
    return 'section-header-word-entrance-2';
  };

  const renderWords = () =>
    words.map((word, i) => (
      <React.Fragment key={i}>
        <span className={`inline-block ${getWordClass(i)}`}>
          {word}
        </span>
        {i < words.length - 1 && ' '}
      </React.Fragment>
    ));

  return (
    <div ref={ref} className={`w-full ${bgColor} pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden relative flex items-center justify-center`}>
      {/* Container for the layered text */}
      <div className="relative flex items-center justify-center w-full px-4">
        <h2 className="relative w-full text-center text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-bold text-[#111827] tracking-tight uppercase z-10 leading-[0.92] break-words font-heading">
          
          <span className="relative z-10">
            {renderWords()}
            {/* Decorative Apostrophe / Comma symbol */}
            <span 
              className={`ml-2 md:ml-4 lg:ml-6 inline-block ${
                inView ? 'section-header-quote-entrance' : 'section-header-quote-initial'
              }`}
              style={{
                color: 'white',
                WebkitTextStroke: '3px #111827',
                textShadow: '8px 8px 0px rgba(17, 24, 39, 1)',
                fontFamily: 'serif'
              }}
            >
              ,
            </span>
          </span>

          {/* Outline / Shadow layer synchronized with text */}
          <span 
            className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none select-none text-transparent"
            aria-hidden="true"
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.8)',
              transform: 'translate(8px, 12px)'
            }}
          >
            {renderWords()}
            <span className="ml-2 md:ml-4 lg:ml-6 inline-block opacity-0">,</span>
          </span>

        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;

