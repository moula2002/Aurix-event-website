import React, { useEffect, useState, useRef } from 'react';

/**
 * Premium Custom Mouse Cursor for AX Auric Events
 * - Golden-orange center dot (#FFA500)
 * - Trailing thin outer ring with amber glow
 * - Dynamic interactive hover enlargement for buttons, links, cards, tabs, and inputs
 * - Strictly disabled on mobile/touch devices (pointer: coarse)
 * - Fully accessible and non-intrusive (pointer-events: none, respects text inputs)
 */
const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTextInput, setIsTextInput] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(true);

  // Direct mouse positions (immediate tracking for center dot)
  const mousePos = useRef({ x: -100, y: -100 });
  // Interpolated smooth positions (lagging trailing effect for outer ring)
  const ringPos = useRef({ x: -100, y: -100 });
  
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const animFrameId = useRef(null);

  useEffect(() => {
    // Only enable on desktop/fine-pointer devices
    const finePointerQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(finePointerQuery.matches);

    const handlePointerChange = (e) => {
      setIsFinePointer(e.matches);
    };

    if (finePointerQuery.addEventListener) {
      finePointerQuery.addEventListener('change', handlePointerChange);
    } else {
      finePointerQuery.addListener(handlePointerChange);
    }

    if (!finePointerQuery.matches) {
      return () => {
        if (finePointerQuery.removeEventListener) {
          finePointerQuery.removeEventListener('change', handlePointerChange);
        }
      };
    }

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
      }

      // Check if hovering over clickable or text input elements
      const target = e.target;
      if (!target) return;

      const isText = 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.isContentEditable ||
        window.getComputedStyle(target).cursor === 'text';

      setIsTextInput(isText);

      if (isText) {
        setIsHovered(false);
        return;
      }

      const isInteractive = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('select') ||
        target.closest('label') ||
        target.closest('.group') ||
        target.closest('.cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      );

      setIsHovered(isInteractive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Render loop using lerp for ultra-smooth spring/trailing physics
    const render = () => {
      // Lerp factor for trailing ring
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (finePointerQuery.removeEventListener) {
        finePointerQuery.removeEventListener('change', handlePointerChange);
      }
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isVisible]);

  if (!isFinePointer) return null;

  return (
    <>
      {/* ── Center Golden Dot (Zero latency, sharp position) ── */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[99999] rounded-full transition-opacity duration-200 ${
          isVisible && !isTextInput ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovered ? '6px' : '5px',
          height: isHovered ? '6px' : '5px',
          backgroundColor: '#FFA500',
          boxShadow: '0 0 8px #FFA500, 0 0 14px rgba(255, 165, 0, 0.8)',
          willChange: 'transform',
        }}
      />

      {/* ── Trailing Amber Ring (Smooth easing, interactive expansion) ── */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border border-[#FFA500]/70 transition-[width,height,background-color,border-color,box-shadow,opacity] duration-300 ease-out ${
          isVisible && !isTextInput ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isClicking ? '26px' : isHovered ? '48px' : '32px',
          height: isClicking ? '26px' : isHovered ? '48px' : '32px',
          borderColor: isHovered ? '#FFB300' : 'rgba(255, 165, 0, 0.75)',
          backgroundColor: isHovered ? 'rgba(255, 165, 0, 0.08)' : 'rgba(255, 165, 0, 0.02)',
          boxShadow: isHovered 
            ? '0 0 20px rgba(255, 165, 0, 0.4), inset 0 0 10px rgba(255, 165, 0, 0.15)' 
            : '0 0 10px rgba(255, 165, 0, 0.25)',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;
