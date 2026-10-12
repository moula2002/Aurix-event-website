import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonHeader } from './SkeletonPrimitives';

/**
 * Common service page skeleton supporting all service routes
 */
export const ServicePageSkeleton = ({ title = 'SERVICES' }) => {
  return (
    <div className="bg-gray-50 min-h-screen pb-24" role="status" aria-label={`Loading ${title}`}>
      {/* 1. Large Orange Section Header */}
      <SkeletonHeader title={title} />

      {/* 2. Intro Paragraph */}
      <div className="max-w-4xl mx-auto text-center px-6 mt-12 mb-16 flex flex-col items-center">
        <div className="space-y-2.5 w-full max-w-2xl">
          <SkeletonText className="w-full h-5" />
          <SkeletonText className="w-11/12 h-5 mx-auto" />
          <SkeletonText className="w-4/5 h-5 mx-auto" />
        </div>
      </div>

      {/* 3. Service Cards */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {[0, 1].map((idx) => {
          const isReverse = idx % 2 !== 0;
          return (
            <div
              key={idx}
              className={`bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 flex flex-col ${
                isReverse ? 'xl:flex-row-reverse' : 'xl:flex-row'
              } gap-12 items-center`}
            >
              {/* Text Side */}
              <div className="w-full xl:w-1/2 flex flex-col justify-center space-y-6">
                <div>
                  <SkeletonBox className="w-64 h-9 rounded-xl mb-3" />
                  <SkeletonBox className="w-48 h-4 rounded-md" />
                </div>

                <div className="space-y-6 pt-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="space-y-2">
                      <SkeletonBox className="w-44 h-6 rounded-lg" />
                      <div className="space-y-1.5">
                        <SkeletonText className="w-full" />
                        <SkeletonText className="w-5/6" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full xl:w-1/2">
                <SkeletonBox className="w-full aspect-[4/3] rounded-2xl shadow-md border-4 border-gray-100" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const TechnicalServicesSkeleton = () => <ServicePageSkeleton title="TECHNICAL EXPERTISE" />;
export const CreativeServicesSkeleton = () => <ServicePageSkeleton title="CREATIVE SERVICES" />;
export const SupportServicesSkeleton = () => <ServicePageSkeleton title="SUPPORT SERVICES" />;

export default ServicePageSkeleton;
