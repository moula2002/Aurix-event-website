import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonHeader } from './SkeletonPrimitives';

const EventsSkeleton = () => {
  return (
    <div className="w-full bg-[#000000] min-h-screen" role="status" aria-label="Loading events page">
      {/* 1. Large Orange Section Header */}
      <SkeletonHeader title="EVENTS" />

      {/* 2. Intro Section */}
      <div className="w-full py-20 bg-[#000000]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-xl">
            <SkeletonBox className="w-80 h-12 rounded-xl" variant="dark" />
            <SkeletonBox className="h-1 w-20 rounded-full bg-[#f59e0b]/40" />
          </div>
          <div className="space-y-2 max-w-lg w-full">
            <SkeletonText className="w-full h-5" variant="dark" />
            <SkeletonText className="w-4/5 h-5" variant="dark" />
          </div>
        </div>
      </div>

      {/* 3. Event Cards */}
      <div className="w-full bg-[#0a0a0a] border-t border-white/10 py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-10">
          
          {/* Card 1 */}
          <div className="bg-[#151515] rounded-[2rem] shadow-sm overflow-hidden flex flex-col md:flex-row border border-white/10">
            <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center space-y-6">
              <SkeletonBox className="w-14 h-14 rounded-2xl" variant="dark" />
              <SkeletonBox className="w-4/5 h-8 rounded-xl" variant="dark" />
              <div className="space-y-2">
                <SkeletonText className="w-full" variant="dark" />
                <SkeletonText className="w-11/12" variant="dark" />
                <SkeletonText className="w-4/5" variant="dark" />
              </div>
              <SkeletonBox className="w-36 h-10 rounded-full mt-4" variant="dark" />
            </div>
            <div className="w-full md:w-1/2 min-h-[350px] p-4">
              <SkeletonBox className="w-full h-full rounded-2xl" variant="dark" />
            </div>
          </div>

          {/* Card 2 (Reversed) */}
          <div className="bg-[#151515] rounded-[2rem] shadow-sm overflow-hidden flex flex-col md:flex-row-reverse border border-white/10">
            <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center space-y-6">
              <SkeletonBox className="w-14 h-14 rounded-2xl" variant="dark" />
              <SkeletonBox className="w-4/5 h-8 rounded-xl" variant="dark" />
              <div className="space-y-2">
                <SkeletonText className="w-full" variant="dark" />
                <SkeletonText className="w-11/12" variant="dark" />
                <SkeletonText className="w-4/5" variant="dark" />
              </div>
              <SkeletonBox className="w-36 h-10 rounded-full mt-4" variant="dark" />
            </div>
            <div className="w-full md:w-1/2 min-h-[350px] p-4">
              <SkeletonBox className="w-full h-full rounded-2xl" variant="dark" />
            </div>
          </div>

          {/* Card 3 (Collage) */}
          <div className="bg-[#151515] rounded-[2rem] shadow-sm overflow-hidden flex flex-col md:flex-row border border-white/10">
            <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center space-y-6">
              <SkeletonBox className="w-14 h-14 rounded-2xl" variant="dark" />
              <SkeletonBox className="w-4/5 h-8 rounded-xl" variant="dark" />
              <div className="space-y-2">
                <SkeletonText className="w-full" variant="dark" />
                <SkeletonText className="w-11/12" variant="dark" />
                <SkeletonText className="w-4/5" variant="dark" />
              </div>
              <SkeletonBox className="w-36 h-10 rounded-full mt-4" variant="dark" />
            </div>
            <div className="w-full md:w-1/2 min-h-[400px] p-4 bg-[#111111]">
              <div className="grid grid-cols-2 grid-rows-3 gap-3 w-full h-full">
                <SkeletonBox className="col-span-2 row-span-1 rounded-xl" variant="dark" />
                <SkeletonBox className="rounded-xl" variant="dark" />
                <SkeletonBox className="rounded-xl" variant="dark" />
                <SkeletonBox className="col-span-2 row-span-1 rounded-xl" variant="dark" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventsSkeleton;
