import React, { useState, useEffect, useRef } from 'react';

/**
 * Animated 1–100% Futuristic Digital Progress Loader
 * - Pure black background (#000000)
 * - Horizontal progress bar with thin orange outline (#F58200)
 * - Bright orange progress fill (#FF8500)
 * - Futuristic digital LED font (Orbitron) in orange displaying percentage
 * - Small white downward-pointing triangular marker synchronized with progress
 * - Unfilled portion divided into dark gray rectangular segments with black gaps
 */
const ProgressLoader = ({
  isRoute = false,
  onComplete,
  segmentsCount = 24,
}) => {
  const [progress, setProgress] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [hasError, setHasError] = useState(false);

  const animationFrameRef = useRef(null);
  const timeoutRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion: finish immediately
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setProgress(100);
      setIsFading(true);
      timeoutRef.current = setTimeout(() => {
        setIsFinished(true);
        onComplete?.();
      }, 100);
      return;
    }

    // Target animation duration: ~1.2s - 1.6s for initial, ~400ms - 600ms for route transitions
    const baseDuration = isRoute ? 480 : 1350;
    startTimeRef.current = performance.now();

    // Check if document is already fully loaded
    const isDocumentReady = document.readyState === 'complete';

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTimeRef.current;
      const timeRatio = Math.min(elapsed / baseDuration, 1);

      // Smooth cubic-like easing for realistic progress feel
      let targetProgress;
      if (timeRatio < 0.85) {
        // Accelerate smoothly to ~88%
        targetProgress = 1 + (timeRatio / 0.85) * 87;
      } else {
        // Asymptotically approach 96% until page / chunk is confirmed
        const tailRatio = (timeRatio - 0.85) / 0.15;
        targetProgress = 88 + tailRatio * 8; // reaches ~96%
      }

      // If document is ready or route chunk loaded, accelerate to 100%
      if (isDocumentReady || elapsed >= baseDuration) {
        targetProgress = 100;
      }

      setProgress((prev) => {
        const nextVal = Math.min(100, Math.max(prev, targetProgress));
        return nextVal;
      });

      if (targetProgress < 100) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      } else {
        // Hold visually at 100% so the user clearly sees "100" and full bar
        timeoutRef.current = setTimeout(() => {
          setIsFading(true);
          // Smooth fade out duration
          timeoutRef.current = setTimeout(() => {
            setIsFinished(true);
            onComplete?.();
          }, 360);
        }, 220);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    // Global load listener for extra responsiveness if still loading
    const handleWindowLoad = () => {
      // Accelerate rapidly to 100%
      setProgress(100);
    };

    if (!isDocumentReady) {
      window.addEventListener('load', handleWindowLoad, { once: true });
    }

    // Safety fallback: never keep user stuck at 99%
    const safetyTimer = setTimeout(() => {
      setProgress(100);
      setIsFading(true);
      setTimeout(() => {
        setIsFinished(true);
        onComplete?.();
      }, 300);
    }, isRoute ? 2500 : 3800);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearTimeout(safetyTimer);
      window.removeEventListener('load', handleWindowLoad);
    };
  }, [isRoute, onComplete]);

  if (isFinished) return null;

  // Clamped progress value for UI display & widths
  const currentVal = Math.min(100, Math.max(1, progress));
  const roundedVal = Math.round(currentVal);

  return (
    <div
      role="progressbar"
      aria-valuenow={roundedVal}
      aria-valuemin={1}
      aria-valuemax={100}
      aria-label="Loading page"
      className={`fixed inset-0 z-[9999] bg-[#000000] flex flex-col items-center justify-center p-4 sm:p-6 select-none transition-opacity duration-350 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-[84vw] sm:w-[78vw] max-w-[540px] md:max-w-[620px] flex flex-col items-center">
        {/* Progress Bar Container with Moving Percentage & Marker */}
        <div className="relative w-full pt-12 sm:pt-14">
          
          {/* Moving Percentage Counter + White Triangle Marker */}
          <div
            className="absolute top-0 flex flex-col items-center pointer-events-none z-10 transition-[left] duration-75 ease-out"
            style={{
              left: `${currentVal}%`,
              transform: 'translateX(-50%)',
            }}
          >
            {/* Percentage displayed in futuristic digital font */}
            <span className="font-digital text-xl sm:text-2xl md:text-[26px] font-black text-[#FF8500] tracking-wider drop-shadow-[0_0_12px_rgba(255,133,0,0.65)] tabular-nums select-none leading-none">
              {roundedVal}
            </span>

            {/* Small white downward-pointing triangular marker */}
            <svg
              width="10"
              height="7"
              viewBox="0 0 10 7"
              className="mt-1 sm:mt-1.5 drop-shadow-[0_0_4px_rgba(255,255,255,0.9)]"
              aria-hidden="true"
            >
              <polygon points="0,0 10,0 5,7" fill="#FFFFFF" />
            </svg>
          </div>

          {/* Horizontal Progress Bar Frame with Thin Orange Outline */}
          <div className="relative w-full h-[18px] sm:h-[22px] md:h-[24px] border border-[#F58200] p-[2px] bg-[#000000] shadow-[0_0_16px_rgba(245,130,0,0.18)]">
            <div className="relative w-full h-full overflow-hidden">
              
              {/* Unfilled portion: dark gray rectangular segments with narrow black gaps */}
              <div className="w-full h-full flex gap-[2px]">
                {Array.from({ length: segmentsCount }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex-1 h-full bg-[#222222] rounded-[0.5px]"
                  />
                ))}
              </div>

              {/* Filled portion: bright orange expanding from left to right */}
              <div
                className="absolute top-0 bottom-0 left-0 bg-[#FF8500] pointer-events-none transition-[width] duration-75 ease-out"
                style={{ width: `${currentVal}%` }}
              />

            </div>
          </div>

        </div>

        {/* Optional error fallback notice */}
        {hasError && (
          <div className="mt-6 flex flex-col items-center gap-2">
            <p className="text-xs text-red-400 font-medium">Loading took longer than expected.</p>
            <button
              onClick={() => window.location.reload()}
              className="text-xs uppercase font-bold tracking-widest text-[#FF8500] border border-[#F58200] px-4 py-1.5 rounded hover:bg-[#FF8500] hover:text-black transition-colors"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressLoader;
