import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedServiceCard = ({
  children,
  reverse = false,
  mediaFirst = false,
  className = '',
  containerClassName = 'max-w-[1600px] mx-auto px-6 mb-24',
  cardBg = 'bg-[#111111]',
  borderColor = 'border-white/10'
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  const childrenArray = React.Children.toArray(children);
  const mainChildren = childrenArray.filter(child => !child.props?.className?.includes('pointer-events-none'));
  const decorChildren = childrenArray.filter(child => child.props?.className?.includes('pointer-events-none'));

  const firstCol = mainChildren[0];
  const secondCol = mainChildren[1];

  let firstClass = '';
  let secondClass = '';

  if (mediaFirst) {
    firstClass = inView ? 'service-card-media-left-entrance' : 'service-card-media-left-initial';
    secondClass = inView ? 'service-card-text-right-entrance' : 'service-card-text-right-initial';
  } else if (reverse) {
    firstClass = inView ? 'service-card-text-right-entrance' : 'service-card-text-right-initial';
    secondClass = inView ? 'service-card-media-left-entrance' : 'service-card-media-left-initial';
  } else {
    firstClass = inView ? 'service-card-text-left-entrance' : 'service-card-text-left-initial';
    secondClass = inView ? 'service-card-media-right-entrance' : 'service-card-media-right-initial';
  }

  return (
    <div ref={ref} className={containerClassName}>
      <div
        className={`${cardBg} border ${borderColor} rounded-[2rem] shadow-2xl overflow-hidden flex flex-col ${
          reverse ? 'xl:flex-row-reverse' : (mediaFirst ? 'lg:flex-row' : 'xl:flex-row')
        } relative ${className}`}
      >
        {decorChildren}
        {firstCol && React.cloneElement(firstCol, {
          className: `${firstCol.props.className || ''} ${firstClass}`
        })}
        {secondCol && React.cloneElement(secondCol, {
          className: `${secondCol.props.className || ''} ${secondClass}`
        })}
      </div>
    </div>
  );
};

export default AnimatedServiceCard;
