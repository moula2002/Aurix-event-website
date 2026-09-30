import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin amber progress bar that tracks scroll progress across the full page.
 * Uses a spring so it follows the scroll position smoothly.
 */
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[999] origin-left h-[3px] pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%)',
        boxShadow: '0 0 10px rgba(245,158,11,0.7), 0 0 30px rgba(245,158,11,0.3)',
      }}
    />
  );
};

export default ScrollProgressBar;
