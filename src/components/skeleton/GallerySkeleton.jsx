import React from 'react';
import { SkeletonBox, SkeletonHeader } from './SkeletonPrimitives';

/**
 * Grid of gallery cards skeleton (can be reused in Portfolio component while data is loading)
 */
export const GalleryGridSkeleton = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-sm relative bg-[#111111]"
        >
          <SkeletonBox className="w-full h-full rounded-2xl" variant="dark" />
          
          {/* Category Pill Placeholder */}
          <div className="absolute top-4 left-4 z-10">
            <div className="w-20 h-6 rounded-full bg-white/20 skeleton-shimmer-dark" />
          </div>

          {/* Bottom Title Placeholder */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="w-3/4 h-5 rounded-md bg-white/30 skeleton-shimmer-dark" />
          </div>
        </div>
      ))}
    </div>
  );
};

const GallerySkeleton = () => {
  return (
    <div className="w-full bg-[#000000] min-h-screen pb-24" role="status" aria-label="Loading projects page">
      {/* 1. Large Orange Section Header */}
      <SkeletonHeader title="PROJECTS" />

      {/* 2. Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-14">
        <GalleryGridSkeleton count={8} />
      </div>
    </div>
  );
};

export default GallerySkeleton;
