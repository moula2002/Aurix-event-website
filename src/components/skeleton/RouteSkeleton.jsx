import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeSkeleton from './HomeSkeleton';
import AboutSkeleton from './AboutSkeleton';
import ApproachSkeleton from './ApproachSkeleton';
import {
  ServicePageSkeleton,
  TechnicalServicesSkeleton,
  CreativeServicesSkeleton,
  SupportServicesSkeleton
} from './ServicesSkeleton';
import EventsSkeleton from './EventsSkeleton';
import GallerySkeleton from './GallerySkeleton';
import OurGroupSkeleton from './OurGroupSkeleton';
import ContactSkeleton from './ContactSkeleton';

/**
 * Route-aware skeleton fallback that renders the exact layout-matched
 * skeleton based on the current URL pathname.
 */
export const RouteSkeleton = ({ pathname: explicitPathname }) => {
  const location = useLocation();
  const path = explicitPathname || location?.pathname || '/';

  if (path === '/') return <HomeSkeleton />;
  if (path === '/about') return <AboutSkeleton />;
  if (path === '/approach') return <ApproachSkeleton />;
  if (path === '/services/technical') return <TechnicalServicesSkeleton />;
  if (path === '/services/creative') return <CreativeServicesSkeleton />;
  if (path === '/services/support') return <SupportServicesSkeleton />;
  if (path.startsWith('/services')) return <ServicePageSkeleton title="SERVICES" />;
  if (path === '/events') return <EventsSkeleton />;
  if (path === '/projects' || path === '/gallery') return <GallerySkeleton />;
  if (path === '/contact') return <ContactSkeleton />;
  if (path === '/our-group') return <OurGroupSkeleton />;

  return <HomeSkeleton />;
};

export default RouteSkeleton;
