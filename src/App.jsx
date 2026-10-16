import React, { Suspense, lazy, useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/layout/SmoothScroll';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import CustomCursor from './components/layout/CustomCursor';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import ProgressLoader from './components/common/ProgressLoader';

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

/* ── Page transition variants ── */
const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] } },
};

const PageWrapper = ({ children, addPadding = true, onMounted }) => {
  useEffect(() => {
    onMounted?.();
  }, [onMounted]);

  return (
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
};

/* ── Animated routes (needs to be inside Router to use useLocation) ── */
const AnimatedRoutes = ({ onRouteReady }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);

  return (
    <Suspense fallback={<ProgressLoader isRoute />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageWrapper addPadding={false} onMounted={onRouteReady}>
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
          } />

          <Route path="/about" element={
            <PageWrapper onMounted={onRouteReady}>
              <AboutPage />
            </PageWrapper>
          } />

          <Route path="/approach" element={
            <PageWrapper onMounted={onRouteReady}>
              <ApproachPage />
            </PageWrapper>
          } />

          <Route path="/services" element={
            <PageWrapper onMounted={onRouteReady}>
              <Services />
            </PageWrapper>
          } />

          <Route path="/services/technical" element={
            <PageWrapper onMounted={onRouteReady}>
              <TechnicalServicesPage />
            </PageWrapper>
          } />

          <Route path="/services/creative" element={
            <PageWrapper onMounted={onRouteReady}>
              <CreativeServicesPage />
            </PageWrapper>
          } />

          <Route path="/services/support" element={
            <PageWrapper onMounted={onRouteReady}>
              <SupportServicesPage />
            </PageWrapper>
          } />

          <Route path="/projects" element={
            <PageWrapper onMounted={onRouteReady}>
              <Portfolio />
            </PageWrapper>
          } />

          <Route path="/gallery" element={
            <Navigate to="/projects" replace />
          } />

          <Route path="/events" element={
            <PageWrapper onMounted={onRouteReady}>
              <EventsPage />
            </PageWrapper>
          } />

          <Route path="/contact" element={
            <PageWrapper onMounted={onRouteReady}>
              <Contact />
              <Location />
            </PageWrapper>
          } />

          <Route path="/our-group" element={
            <PageWrapper addPadding={false} onMounted={onRouteReady}>
              <OurGroupPage />
            </PageWrapper>
          } />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);
  const [isAppVisible, setIsAppVisible] = useState(false);

  // Manual scroll restoration on refresh to prevent jumping to footer
  useEffect(() => {
    try {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    } catch (e) {}
  }, []);

  // Safety fallback: if onMounted didn't fire in 3s, force ready so user is never stuck
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageReady(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleRouteReady = useCallback(() => {
    setIsPageReady(true);
  }, []);

  const handleStartFade = useCallback(() => {
    setIsAppVisible(true);
  }, []);

  const handleComplete = useCallback(() => {
    setIsInitialLoading(false);
  }, []);

  return (
    <>
      {/* Full-screen black loading screen (z-[99999]) covers the entire viewport */}
      {initialLoading && (
        <ProgressLoader
          isReady={isPageReady}
          onStartFade={handleStartFade}
          onComplete={handleComplete}
        />
      )}

      {/* Main website content: hidden until initial load reaches 100% and begins fading */}
      <Router>
        <SmoothScroll>
          <div
            className="min-h-screen bg-[#000000] text-gray-100 font-sans selection:bg-amber-600/30 transition-opacity duration-300"
            style={{
              opacity: isAppVisible ? 1 : 0,
              visibility: isAppVisible ? 'visible' : 'hidden',
            }}
          >
            {/* Global custom mouse cursor */}
            <CustomCursor />
            {/* Glowing amber scroll progress bar */}
            <ScrollProgressBar />
            <Navbar />
            <main>
              <AnimatedRoutes onRouteReady={handleRouteReady} />
            </main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </SmoothScroll>
      </Router>
    </>
  );
}

export default App;
