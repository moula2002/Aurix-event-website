import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/layout/SmoothScroll';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';

// Lazy loading page sections for code splitting and performance optimization
const Hero = lazy(() => import('./components/sections/Hero'));
const Statistics = lazy(() => import('./components/sections/Statistics'));
const Services = lazy(() => import('./components/sections/Services'));
const TechnicalServicesPage = lazy(() => import('./components/sections/TechnicalServicesPage'));
const CreativeServicesPage = lazy(() => import('./components/sections/CreativeServicesPage'));
const SupportServicesPage = lazy(() => import('./components/sections/SupportServicesPage'));
const About = lazy(() => import('./components/sections/About'));
const AboutPreview = lazy(() => import('./components/sections/AboutPreview'));
const AboutPage = lazy(() => import('./components/sections/AboutPage'));
const Approach = lazy(() => import('./components/sections/Approach'));
const ApproachPage = lazy(() => import('./components/sections/ApproachPage'));

const Portfolio = lazy(() => import('./components/sections/Portfolio'));
const SubServicesCarousel = lazy(() => import('./components/sections/SubServicesCarousel'));
const Location = lazy(() => import('./components/sections/Location'));
const Contact = lazy(() => import('./components/sections/Contact'));
const EventsPage = lazy(() => import('./components/sections/EventsPage'));

const WhyChooseUs = lazy(() => import('./components/sections/WhyChooseUs'));
const Clients = lazy(() => import('./components/sections/Clients'));

const OurGroup = lazy(() => import('./components/sections/OurGroup'));
const OurGroupPage = lazy(() => import('./components/sections/OurGroupPage'));

import RouteSkeleton from './components/skeleton/RouteSkeleton';
import HomeSkeleton from './components/skeleton/HomeSkeleton';
import AboutSkeleton from './components/skeleton/AboutSkeleton';
import ApproachSkeleton from './components/skeleton/ApproachSkeleton';
import {
  ServicePageSkeleton,
  TechnicalServicesSkeleton,
  CreativeServicesSkeleton,
  SupportServicesSkeleton
} from './components/skeleton/ServicesSkeleton';
import EventsSkeleton from './components/skeleton/EventsSkeleton';
import GallerySkeleton from './components/skeleton/GallerySkeleton';
import OurGroupSkeleton from './components/skeleton/OurGroupSkeleton';
import ContactSkeleton from './components/skeleton/ContactSkeleton';

/* ── Page transition variants ── */
const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] } },
};

const PageWrapper = ({ children, addPadding = true }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className={`min-h-screen ${addPadding ? 'pt-24' : ''}`}
  >
    {children}
  </motion.div>
);

/* ── Animated routes (needs to be inside Router to use useLocation) ── */
const AnimatedRoutes = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);

  return (
    <Suspense fallback={<RouteSkeleton pathname={location.pathname} />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <Suspense fallback={<HomeSkeleton />}>
              <PageWrapper addPadding={false}>
                <Hero />
                <Statistics />
                <Services />
                <AboutPreview />
                <WhyChooseUs />
                <Approach />
                <Portfolio />
                <SubServicesCarousel />

                <Clients />
                <Contact />
              </PageWrapper>
            </Suspense>
          } />

          <Route path="/about" element={
            <Suspense fallback={<PageWrapper><AboutSkeleton /></PageWrapper>}>
              <PageWrapper>
                <AboutPage />
              </PageWrapper>
            </Suspense>
          } />

          <Route path="/approach" element={
            <Suspense fallback={<PageWrapper><ApproachSkeleton /></PageWrapper>}>
              <PageWrapper>
                <ApproachPage />
              </PageWrapper>
            </Suspense>
          } />

          <Route path="/services" element={
            <Suspense fallback={<PageWrapper><ServicePageSkeleton title="SERVICES" /></PageWrapper>}>
              <PageWrapper>
                <Services />
              </PageWrapper>
            </Suspense>
          } />

          <Route path="/services/technical" element={
            <Suspense fallback={<PageWrapper><TechnicalServicesSkeleton /></PageWrapper>}>
              <PageWrapper>
                <TechnicalServicesPage />
              </PageWrapper>
            </Suspense>
          } />

          <Route path="/services/creative" element={
            <Suspense fallback={<PageWrapper><CreativeServicesSkeleton /></PageWrapper>}>
              <PageWrapper>
                <CreativeServicesPage />
              </PageWrapper>
            </Suspense>
          } />

          <Route path="/services/support" element={
            <Suspense fallback={<PageWrapper><SupportServicesSkeleton /></PageWrapper>}>
              <PageWrapper>
                <SupportServicesPage />
              </PageWrapper>
            </Suspense>
          } />

          <Route path="/gallery" element={
            <Suspense fallback={<PageWrapper><GallerySkeleton /></PageWrapper>}>
              <PageWrapper>
                <Portfolio />
              </PageWrapper>
            </Suspense>
          } />

          <Route path="/events" element={
            <Suspense fallback={<PageWrapper><EventsSkeleton /></PageWrapper>}>
              <PageWrapper>
                <EventsPage />
              </PageWrapper>
            </Suspense>
          } />

          <Route path="/contact" element={
            <Suspense fallback={<PageWrapper><ContactSkeleton /></PageWrapper>}>
              <PageWrapper>
                <Contact />
                <Location />
              </PageWrapper>
            </Suspense>
          } />

          <Route path="/our-group" element={
            <Suspense fallback={<PageWrapper addPadding={false}><OurGroupSkeleton /></PageWrapper>}>
              <PageWrapper addPadding={false}>
                <OurGroupPage />
              </PageWrapper>
            </Suspense>
          } />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

function App() {
  return (
    <Router>
      {/* SmoothScroll must be inside Router (uses useLocation) */}
      <SmoothScroll>
        <div className="min-h-screen bg-[#000000] text-gray-100 font-sans selection:bg-amber-600/30">
          {/* Glowing amber scroll progress bar */}
          <ScrollProgressBar />
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
