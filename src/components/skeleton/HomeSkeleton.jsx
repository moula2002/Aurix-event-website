import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonTitle } from './SkeletonPrimitives';

const HomeSkeleton = () => {
  return (
    <div className="w-full bg-[#000000] overflow-hidden" role="status" aria-label="Loading homepage">
      {/* ── 1. HERO SKELETON ── */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-24 md:pt-32 overflow-hidden bg-[#000000]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-14 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20 mt-8 md:mt-0">
          
          {/* Left Column: Typography */}
          <div className="flex flex-col justify-center">
            {/* Year & Badge */}
            <div className="flex items-center gap-4 mb-4">
              <SkeletonBox className="w-32 h-16 md:h-24 rounded-2xl" variant="dark" />
              <div className="flex flex-col gap-2">
                <SkeletonBox className="w-20 h-4 rounded-md" variant="dark" />
                <SkeletonBox className="w-16 h-1 rounded-full bg-[#f59e0b]/40" />
              </div>
            </div>

            {/* Main Headline lines */}
            <div className="space-y-3 mb-6">
              <SkeletonBox className="w-full max-w-xl h-10 md:h-14 rounded-2xl" variant="dark" />
              <SkeletonBox className="w-4/5 max-w-lg h-10 md:h-14 rounded-2xl" variant="dark" />
            </div>

            {/* Description */}
            <div className="space-y-2 mb-8 max-w-lg">
              <SkeletonText className="w-full" variant="dark" />
              <SkeletonText className="w-11/12" variant="dark" />
              <SkeletonText className="w-3/4" variant="dark" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <SkeletonBox className="w-44 h-12 rounded-full" variant="dark" />
              <SkeletonBox className="w-40 h-12 rounded-full" variant="dark" />
            </div>
          </div>

          {/* Right Column: Hero Image Collage */}
          <div className="hidden lg:block relative h-[500px] xl:h-[650px] w-full mt-4">
            {/* Top Right Main Card */}
            <div className="absolute top-[5%] right-0 w-[75%] h-[50%] z-10">
              <SkeletonBox className="w-full h-full rounded-[2.5rem] shadow-xl border-4 border-white/10" variant="dark" />
            </div>
            {/* Bottom Left Card */}
            <div className="absolute bottom-[18%] left-0 w-[55%] h-[40%] z-20">
              <SkeletonBox className="w-full h-full rounded-[2rem] shadow-xl border-4 border-white/10" variant="dark" />
            </div>
            {/* Bottom Right Card */}
            <div className="absolute bottom-0 right-[5%] w-[60%] h-[45%] z-30">
              <SkeletonBox className="w-full h-full rounded-[2.5rem] shadow-xl border-4 border-white/10" variant="dark" />
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. STATISTICS SKELETON ── */}
      <section className="py-16 bg-[#0a0a0a] border-y border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 bg-[#111111] rounded-2xl border border-white/10 gap-3">
              <SkeletonBox className="w-24 h-10 rounded-xl" variant="dark" />
              <SkeletonBox className="w-32 h-4 rounded-md" variant="dark" />
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. SERVICES SKELETON ── */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16">
          <SkeletonTitle subtitle="OUR" title="SERVICES" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col rounded-3xl overflow-hidden border border-white/10 shadow-sm bg-[#111111]">
              <SkeletonBox className="w-full aspect-[4/3] rounded-t-3xl" variant="dark" />
              <div className="p-8 flex flex-col gap-4">
                <SkeletonBox className="w-3/4 h-7 rounded-xl" variant="dark" />
                <div className="space-y-2">
                  <SkeletonText className="w-full" variant="dark" />
                  <SkeletonText className="w-5/6" variant="dark" />
                  <SkeletonText className="w-4/6" variant="dark" />
                </div>
                <SkeletonBox className="w-28 h-8 rounded-full mt-2" variant="dark" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. ABOUT PREVIEW SKELETON ── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#111111] rounded-3xl p-8 lg:p-14 shadow-sm border border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <SkeletonBox className="w-40 h-5 rounded-full" variant="dark" />
              <div className="space-y-3">
                <SkeletonBox className="w-full h-10 rounded-xl" variant="dark" />
                <SkeletonBox className="w-4/5 h-10 rounded-xl" variant="dark" />
              </div>
              <div className="space-y-2">
                <SkeletonText className="w-full" variant="dark" />
                <SkeletonText className="w-full" variant="dark" />
                <SkeletonText className="w-3/4" variant="dark" />
              </div>
              {/* Feature pills */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#151515] border border-white/10 flex flex-col gap-2">
                    <SkeletonBox className="w-8 h-8 rounded-lg" variant="dark" />
                    <SkeletonBox className="w-16 h-3 rounded-md" variant="dark" />
                  </div>
                ))}
              </div>
            </div>
            {/* Image on right */}
            <SkeletonBox className="w-full aspect-[4/3] rounded-2xl shadow-md" variant="dark" />
          </div>
        </div>
      </section>

      {/* ── 5. PROJECTS SKELETON PREVIEW ── */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6 mb-14">
          <SkeletonTitle subtitle="OUR" title="PROJECTS" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative">
              <SkeletonBox className="w-full h-full rounded-2xl" variant="dark" />
              <div className="absolute top-4 left-4">
                <SkeletonBox className="w-16 h-5 rounded-full bg-white/20" variant="dark" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeSkeleton;
