import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonHeader } from './SkeletonPrimitives';

const ContactSkeleton = () => {
  return (
    <div className="bg-[#fefefe] min-h-screen pb-28" role="status" aria-label="Loading contact page">
      {/* 1. Large Orange Section Header */}
      <SkeletonHeader title="CONTACT" />

      {/* 2. Contact Form & Info Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-20">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-2 max-w-lg">
            <SkeletonText className="w-full h-5" />
            <SkeletonText className="w-4/5 h-5" />
          </div>

          <div className="flex flex-col gap-6 pt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-5">
                <SkeletonBox className="w-14 h-14 shrink-0 rounded-xl" />
                <div className="space-y-2 pt-1 w-full max-w-sm">
                  <SkeletonBox className="w-24 h-3 rounded-md" />
                  <SkeletonBox className="w-48 h-5 rounded-md" />
                  <SkeletonBox className="w-36 h-4 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="h-1.5 w-full bg-[#f59e0b]" />
          <div className="p-8 md:p-12 space-y-6">
            <SkeletonBox className="w-56 h-8 rounded-xl mb-4" />

            <div className="space-y-4">
              <SkeletonBox className="w-full h-14 rounded-xl" />
              <SkeletonBox className="w-full h-14 rounded-xl" />
              <SkeletonBox className="w-full h-14 rounded-xl" />
              <SkeletonBox className="w-full h-14 rounded-xl" />
              <SkeletonBox className="w-full h-28 rounded-xl" />
            </div>

            <SkeletonBox className="w-full h-14 rounded-xl mt-4" />
          </div>
        </div>

      </div>

      {/* 3. Location & Map Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-28">
        
        {/* Left: Location Text & Card */}
        <div className="space-y-6">
          <SkeletonBox className="w-28 h-6 rounded-full" />
          <div className="space-y-2">
            <SkeletonBox className="w-64 h-10 rounded-xl" />
            <SkeletonBox className="w-48 h-10 rounded-xl" />
          </div>
          <div className="space-y-2 max-w-md">
            <SkeletonText className="w-full" />
            <SkeletonText className="w-5/6" />
          </div>

          {/* Headquarters Card */}
          <div className="rounded-2xl p-6 bg-gray-50 border border-amber-100/80 space-y-4">
            <div className="flex items-start gap-4">
              <SkeletonBox className="w-10 h-10 rounded-xl" />
              <div className="space-y-2 w-full">
                <SkeletonBox className="w-28 h-4 rounded-md" />
                <SkeletonBox className="w-44 h-4 rounded-md" />
                <SkeletonBox className="w-36 h-4 rounded-md" />
              </div>
            </div>
            <div className="h-[1px] bg-gray-200" />
            <SkeletonBox className="w-32 h-4 rounded-md" />
          </div>
        </div>

        {/* Right: Map Container */}
        <div className="w-full h-[420px] lg:h-[500px] rounded-2xl overflow-hidden border border-amber-100 shadow-sm relative">
          <SkeletonBox className="w-full h-full rounded-2xl" />
          {/* Subtle Map Pin placeholder in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/80 shadow-md flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[#f59e0b]/60" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactSkeleton;
