import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * AnimatedSection
 * ────────────────
 * Wraps any section with a smooth enter animation.
 *
 * Props:
 *   children   – section content
 *   className  – extra classes on the wrapper div
 *   delay      – animation start delay in seconds (default 0)
 *   direction  – 'up' | 'down' | 'left' | 'right' | 'fade' (default 'up')
 *   distance   – px offset for slide animations (default 48)
 *   duration   – animation duration in seconds (default 0.8)
 *   once       – only animate once (default true)
 *   threshold  – IntersectionObserver threshold (default 0.12)
 */
const directionMap = {
  up:    { y: (d) => d,  x: 0 },
  down:  { y: (d) => -d, x: 0 },
  left:  { y: 0,         x: (d) => d  },
  right: { y: 0,         x: (d) => -d },
  fade:  { y: 0,         x: 0 },
};

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 48,
  duration = 0.85,
  once = true,
  threshold = 0.12,
}) => {
  const { ref, inView } = useInView({ triggerOnce: once, threshold });
  const map = directionMap[direction] || directionMap.up;
  const initialY = typeof map.y === 'function' ? map.y(distance) : map.y;
  const initialX = typeof map.x === 'function' ? map.x(distance) : map.x;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: initialY, x: initialX }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // custom cubic-bezier
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * AnimatedItem
 * ─────────────
 * For staggered children inside a list or grid.
 * Wrap each list/grid item with <AnimatedItem index={i} />.
 */
export const AnimatedItem = ({
  children,
  index = 0,
  className = '',
  baseDelay = 0,
  stagger = 0.1,
  direction = 'up',
  distance = 36,
  duration = 0.7,
  once = true,
  threshold = 0.1,
}) => {
  const { ref, inView } = useInView({ triggerOnce: once, threshold });
  const map = directionMap[direction] || directionMap.up;
  const initialY = typeof map.y === 'function' ? map.y(distance) : map.y;
  const initialX = typeof map.x === 'function' ? map.x(distance) : map.x;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: initialY, x: initialX }}
      transition={{
        duration,
        delay: baseDelay + index * stagger,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
