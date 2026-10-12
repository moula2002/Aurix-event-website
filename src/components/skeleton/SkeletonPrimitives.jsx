import React, { memo } from 'react';

/**
 * Basic versatile skeleton element with shimmer effect
 */
export const SkeletonBox = memo(({
  className = '',
  variant = 'light', // 'light' | 'amber' | 'dark'
  rounded = 'rounded-xl',
  style = {},
  ...props
}) => {
  const shimmerClass =
    variant === 'amber'
      ? 'skeleton-shimmer-amber'
      : variant === 'dark'
      ? 'skeleton-shimmer-dark'
      : 'skeleton-shimmer';

  return (
    <div
      className={`${shimmerClass} ${rounded} ${className}`}
      style={style}
      aria-hidden="true"
      {...props}
    />
  );
});

/**
 * Text line skeleton
 */
export const SkeletonText = memo(({
  width = 'w-full',
  height = 'h-4',
  className = '',
  variant = 'light',
  rounded = 'rounded-md',
}) => {
  return (
    <SkeletonBox
      className={`${width} ${height} ${className}`}
      variant={variant}
      rounded={rounded}
    />
  );
});

/**
 * Skeleton for SectionHeader (used on About, Approach, Services pages, Gallery, Events, Contact, etc.)
 */
export const SkeletonHeader = memo(({ title = 'SECTION' }) => {
  return (
    <div
      className="w-full bg-[#f59e0b] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden relative flex items-center justify-center"
      role="status"
      aria-label={`Loading ${title}`}
    >
      <div className="relative flex flex-col items-center justify-center w-full px-6 max-w-4xl">
        <div className="flex items-center justify-center gap-4 w-full">
          <SkeletonBox
            className="w-3/4 max-w-lg h-14 sm:h-20 md:h-24 lg:h-32 rounded-2xl"
            variant="amber"
          />
          <div className="w-6 sm:w-10 h-14 sm:h-20 md:h-24 lg:h-32 rounded-lg bg-white/40 skeleton-shimmer-amber" />
        </div>
      </div>
    </div>
  );
});

/**
 * Skeleton for SectionTitle (used on Homepage sections like Services, Gallery, Contact, etc.)
 */
export const SkeletonTitle = memo(({ subtitle = 'OUR', title = 'SERVICES' }) => {
  return (
    <div className="flex flex-col gap-2">
      <SkeletonBox className="w-16 h-4 rounded-full" />
      <SkeletonBox className="w-56 h-10 md:h-12 rounded-xl" />
    </div>
  );
});

