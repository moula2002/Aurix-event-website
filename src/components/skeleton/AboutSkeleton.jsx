import React from 'react';
import { SkeletonBox, SkeletonText } from './SkeletonPrimitives';

const AboutSkeleton = () => {
  return (
    <div className="bg-white min-h-screen pb-24" role="status" aria-label="Loading about page">
      {/* ── 1. ABOUT HERO (SPLIT AMBER & WHITE) ── */}
      <section className="w-full relative bg-white">
        <div className="flex flex-col lg:flex-row w-full min-h-[600px]">
          
          {/* Left Amber Column */}
          <div className="w-full lg:w-1/2 bg-[#f59e0b] relative py-20 px-10 md:px-20 flex flex-col justify-center">
            <div className="relative z-10 max-w-lg">
              {/* Heading */}
              <div className="space-y-3 mb-6">
                <SkeletonBox className="w-full h-10 md:h-12 rounded-xl" variant="amber" />
                <SkeletonBox className="w-3/4 h-10 md:h-12 rounded-xl" variant="amber" />
              </div>

              {/* Description */}
              <div className="space-y-2 mb-10">
                <SkeletonBox className="w-full h-4 rounded-md" variant="amber" />
                <SkeletonBox className="w-11/12 h-4 rounded-md" variant="amber" />
                <SkeletonBox className="w-4/5 h-4 rounded-md" variant="amber" />
              </div>

              {/* Goal Heading */}
              <div className="space-y-2 mb-6">
                <SkeletonBox className="w-3/4 h-8 md:h-10 rounded-xl" variant="amber" />
                <SkeletonBox className="w-1/2 h-8 md:h-10 rounded-xl" variant="amber" />
              </div>

              {/* Goal Paragraphs */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <SkeletonBox className="w-full h-4 rounded-md" variant="amber" />
                  <SkeletonBox className="w-5/6 h-4 rounded-md" variant="amber" />
                </div>
                <div className="space-y-2">
                  <SkeletonBox className="w-11/12 h-4 rounded-md" variant="amber" />
                  <SkeletonBox className="w-3/4 h-4 rounded-md" variant="amber" />
                </div>
              </div>
            </div>
          </div>

          {/* Right White Column (Mission & Vision) */}
          <div className="w-full lg:w-1/2 bg-white py-20 px-10 md:px-24 flex flex-col justify-center gap-12 relative">
            {/* Mission Box */}
            <div className="border-2 border-amber-200/80 p-8 md:p-10 relative bg-white rounded-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                <SkeletonBox className="w-36 h-6 rounded-full" />
              </div>
              <div className="space-y-2 mt-2">
                <SkeletonText className="w-full" />
                <SkeletonText className="w-11/12 mx-auto" />
                <SkeletonText className="w-4/5 mx-auto" />
              </div>
            </div>

            {/* Vision Box */}
            <div className="border-2 border-amber-200/80 p-8 md:p-10 relative bg-white rounded-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                <SkeletonBox className="w-36 h-6 rounded-full" />
              </div>
              <div className="space-y-2 mt-2">
                <SkeletonText className="w-full" />
                <SkeletonText className="w-11/12 mx-auto" />
                <SkeletonText className="w-4/5 mx-auto" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. CORE STRENGTHS ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 flex flex-col items-center">
          <SkeletonBox className="w-64 h-10 rounded-xl mb-4" />
          <SkeletonBox className="w-96 max-w-full h-5 rounded-md" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50/60 border border-gray-100 gap-4">
              <SkeletonBox className="w-16 h-16 rounded-2xl" />
              <SkeletonBox className="w-36 h-6 rounded-lg" />
              <div className="space-y-2 w-full">
                <SkeletonText className="w-full" />
                <SkeletonText className="w-4/5 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. TIMELINE (6 YEARS OF EXCELLENCE) ── */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 flex flex-col items-center">
            <SkeletonBox className="w-80 h-10 rounded-xl mb-4" />
            <SkeletonBox className="w-96 max-w-full h-5 rounded-md" />
          </div>

          {/* Central Timeline with Milestone Cards */}
          <div className="relative">
            {/* Central Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-amber-200 -translate-x-1/2" />

            <div className="space-y-12">
              {[0, 1, 2, 3].map((idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col md:flex-row items-center justify-between relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#f59e0b] border-4 border-white shadow -translate-x-1/2 z-10" />

                    {/* Card */}
                    <div className="w-full md:w-5/12 pl-12 md:pl-0">
                      <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-3">
                        <SkeletonBox className="w-20 h-6 rounded-lg" />
                        <SkeletonBox className="w-40 h-5 rounded-md" />
                        <div className="space-y-2">
                          <SkeletonText className="w-full" />
                          <SkeletonText className="w-4/5" />
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutSkeleton;
