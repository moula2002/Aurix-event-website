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
            // ── MOBILE: fast, native-feeling, minimal lag ──
            duration: 0.6,
            easing: (t) => 1 - Math.pow(1 - t, 3),   // cubic ease-out — quick deceleration
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: false,       // wheel not used on touch devices
            touchMultiplier: 1.8,     // how fast finger drag scrolls
            infinite: false,
            syncTouch: true,          // sync directly to touch events for zero lag
            syncTouchLerp: 0.1,       // very low lerp = almost instant sync
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
