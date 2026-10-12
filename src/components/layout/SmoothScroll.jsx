import React, { useEffect, createContext, useContext, useRef } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

// Context so child components can access the Lenis instance if needed
const LenisContext = createContext(null);
export const useLenis = () => useContext(LenisContext);

// Detect real touch devices (mobile/tablet)
const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const touch = isTouchDevice();

    const lenis = new Lenis(
      touch
        ? {
            // ── MOBILE: native, zero lag touch scrolling ──
            duration: 0.6,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: false,
            infinite: false,
            syncTouch: false,          // preserve 120Hz native touch momentum without rAF hijacking
          }
        : {
            // ── DESKTOP: luxurious smooth scroll ──
            duration: 1.3,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
          }
    );

    lenisRef.current = lenis;

    // RAF loop
    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
    };
  }, []);

  // Scroll to top instantly on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
};

export default SmoothScroll;
