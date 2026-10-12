import React from 'react';
import { SkeletonBox, SkeletonText } from './SkeletonPrimitives';

const ApproachSkeleton = () => {
  return (
    <div className="relative min-h-screen bg-[#fefefe] overflow-hidden pt-24 pb-24" role="status" aria-label="Loading approach page">
      {/* Main Content Container matching ApproachPage */}
      <div className="max-w-[1600px] mx-auto w-full min-h-[85vh] relative z-10 flex flex-col lg:flex-row shadow-[0_20px_60px_rgba(0,0,0,0.06)] bg-white rounded-3xl overflow-hidden mb-12">
        
        {/* ── Left Column (Text & Steps) ── */}
        <div className="w-full lg:w-[48%] p-10 md:p-14 lg:p-20 xl:p-24 relative bg-white z-10 flex flex-col justify-center">
          {/* Header */}
          <div className="mb-14 relative flex items-start gap-6">
            <div className="w-1 h-16 bg-[#f59e0b] rounded-full" />
            <div className="space-y-2">
              <SkeletonBox className="w-16 h-5 rounded-md" />
              <SkeletonBox className="w-64 h-12 rounded-xl" />
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {[1, 2, 3].map((step, idx) => (
              <div key={idx} className="flex gap-6 relative">
                {/* Connecting Line */}
                {idx !== 2 && (
                  <div className="absolute left-[31px] top-[75px] bottom-[-30px] w-[1px] bg-gray-200 hidden md:block" />
                )}

                {/* Circle Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-amber-100 flex items-center justify-center bg-white shadow-sm relative z-10">
                  <SkeletonBox className="w-12 h-12 rounded-full" />
                </div>

                {/* Text Content */}
                <div className="pt-2 pb-4 space-y-3 w-full max-w-lg">
                  <SkeletonBox className="w-36 h-6 rounded-lg" />
                  <div className="space-y-2">
                    <SkeletonText className="w-full" />
                    <SkeletonText className="w-11/12" />
                    <SkeletonText className="w-4/5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Column (3-Image Collage) ── */}
        <div className="w-full lg:w-[52%] relative min-h-[500px] lg:min-h-full bg-gray-50">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 h-full gap-1 p-2 bg-white">
            {/* Top Left Image */}
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <SkeletonBox className="w-full h-full rounded-xl" />
            </div>
            {/* Top Right Image */}
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <SkeletonBox className="w-full h-full rounded-xl" />
            </div>
            {/* Bottom Full-Width Image */}
            <div className="relative w-full h-full col-span-2 overflow-hidden rounded-xl">
              <SkeletonBox className="w-full h-full rounded-xl" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApproachSkeleton;
