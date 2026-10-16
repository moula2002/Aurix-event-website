import React, { useState, useEffect, useRef } from 'react';

/**
 * Animated 1–100% Futuristic Digital Progress Loader
 * - Pure black background (#000000) at z-[99999]
 * - Horizontal progress bar with thin orange outline (#F58200)
 * - Bright orange progress fill (#FF8500)
 * - Futuristic digital LED font (Orbitron) in orange displaying percentage
 * - Small white downward-pointing triangular marker synchronized with progress
 * - Unfilled portion divided into dark gray rectangular segments with black gaps
 * - Lifecycle-aware: smoothly climbs to ~90-94%, then surges to 100% only when the page is ready
 */
const ProgressLoader = ({
  isRoute = false,
  isReady = false,
  onStartFade,
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
  const readyTimeRef = useRef(null);
  const progressAtReadyRef = useRef(1);
  const isReadyRef = useRef(isReady);
  const hasCompletedRef = useRef(false);

  // Keep isReadyRef in sync
  useEffect(() => {
    isReadyRef.current = isReady;
  }, [isReady]);

  useEffect(() => {
    // Respect prefers-reduced-motion: complete immediately
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setProgress(100);
      onStartFade?.();
      setIsFading(true);
      timeoutRef.current = setTimeout(() => {
        setIsFinished(true);
        onComplete?.();
      }, 100);
      return;
    }

    // Target animation duration: ~1.1s for initial load, ~400ms for route transitions
    const baseDuration = isRoute ? 400 : 1100;
    startTimeRef.current = performance.now();

    const updateProgress = (currentTime) => {
      if (hasCompletedRef.current) return;

      const elapsed = currentTime - startTimeRef.current;
      const timeRatio = Math.min(elapsed / baseDuration, 1);

      let currentVal = 1;

      // Phase 1: Natural climb toward ~90-94% while waiting for page ready signal
      if (!isReadyRef.current && !isRoute) {
        if (timeRatio < 0.85) {
          // Smooth acceleration to 88%
          currentVal = 1 + (timeRatio / 0.85) * 87;
        } else {
          // Asymptotic creep toward 94% until page is mounted
          const tailRatio = Math.min(1, (timeRatio - 0.85) / 0.15);
          currentVal = 88 + tailRatio * 5;
        }
      } else {
        // Phase 2: Page is ready (or route transition) -> surge smoothly to 100%
        if (readyTimeRef.current === null) {
          readyTimeRef.current = currentTime;
          progressAtReadyRef.current = progress;
        }

        const surgeElapsed = currentTime - readyTimeRef.current;
        const surgeDuration = isRoute ? 240 : 200;
        const surgeRatio = Math.min(surgeElapsed / surgeDuration, 1);

        const startVal = Math.max(progressAtReadyRef.current, isRoute ? 1 : 88);
        currentVal = startVal + (100 - startVal) * surgeRatio;
      }

      const clampedVal = Math.min(100, Math.max(1, currentVal));
      setProgress(clampedVal);

      if (clampedVal < 100) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      } else {
        // Reached 100%!
        hasCompletedRef.current = true;
        // Signal parent to make underlying app visible before black overlay fades
        onStartFade?.();

        // Hold visually at 100% for 200ms so user clearly registers the 100% state
        timeoutRef.current = setTimeout(() => {
          setIsFading(true);
          // Fade-out duration: 350ms
          timeoutRef.current = setTimeout(() => {
            setIsFinished(true);
            onComplete?.();
          }, 350);
        }, 200);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    // Safety fallback: never keep user stuck if page initialization stalls
    const safetyTimer = setTimeout(() => {
      if (!hasCompletedRef.current) {
        isReadyRef.current = true;
      }
    }, isRoute ? 2000 : 3200);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearTimeout(safetyTimer);
    };
  }, [isRoute, onStartFade, onComplete]);

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
      className={`fixed inset-0 z-[99999] bg-[#000000] flex flex-col items-center justify-center p-4 sm:p-6 select-none transition-opacity duration-350 ease-out ${
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
