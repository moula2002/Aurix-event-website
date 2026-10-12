import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonHeader } from './SkeletonPrimitives';

const OurGroupSkeleton = () => {
  return (
    <div className="bg-white min-h-screen pb-24" role="status" aria-label="Loading our group page">
      {/* 1. Large Orange Section Header */}
      <SkeletonHeader title="OUR GROUP" />

      {/* 2. Parent Company Header Area */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-14 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <SkeletonBox className="w-44 h-6 rounded-full" variant="dark" />
              <SkeletonBox className="w-80 max-w-full h-12 rounded-xl" variant="dark" />
              <div className="space-y-2">
                <SkeletonBox className="w-full h-4 rounded-md" variant="dark" />
                <SkeletonBox className="w-5/6 h-4 rounded-md" variant="dark" />
              </div>
            </div>
            {/* Division Pills */}
            <div className="flex flex-wrap gap-3">
              {[1, 2, 3, 4].map((i) => (
                <SkeletonBox key={i} className="w-28 h-9 rounded-full" variant="dark" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Alternating Service Cards (4 cards) */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {[0, 1, 2, 3].map((idx) => {
          const isReverse = idx % 2 !== 0;
          return (
            <div
              key={idx}
              className={`bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12 flex flex-col ${
                isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-12 items-center`}
            >
              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4">
                  <SkeletonBox className="w-14 h-14 rounded-2xl" />
                  <div className="space-y-1.5">
                    <SkeletonBox className="w-24 h-4 rounded-md" />
                    <SkeletonBox className="w-48 h-7 rounded-lg" />
                  </div>
                </div>

                <div className="space-y-2">
                  <SkeletonText className="w-full" />
                  <SkeletonText className="w-11/12" />
                  <SkeletonText className="w-4/5" />
                </div>

                {/* Feature tags grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {[1, 2, 3, 4].map((f) => (
                    <SkeletonBox key={f} className="w-full h-8 rounded-lg" />
                  ))}
                </div>

                <SkeletonBox className="w-40 h-11 rounded-full mt-2" />
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <SkeletonBox className="w-full aspect-[4/3] rounded-[2rem] shadow-lg border-4 border-gray-50" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurGroupSkeleton;
