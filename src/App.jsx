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
    <Suspense fallback={<div className="flex h-screen w-full items-center justify-center bg-gray-50"><div className="w-10 h-10 border-4 border-[#f59e0b] border-t-transparent rounded-full animate-spin"></div></div>}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
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
          } />

          <Route path="/about" element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          } />

          <Route path="/approach" element={
            <PageWrapper>
              <ApproachPage />
            </PageWrapper>
          } />

          <Route path="/services" element={
            <PageWrapper>
              <Services />
            </PageWrapper>
          } />

          <Route path="/services/technical" element={
            <PageWrapper>
              <TechnicalServicesPage />
            </PageWrapper>
          } />

          <Route path="/services/creative" element={
            <PageWrapper>
              <CreativeServicesPage />
            </PageWrapper>
          } />

          <Route path="/services/support" element={
            <PageWrapper>
              <SupportServicesPage />
            </PageWrapper>
          } />

          <Route path="/gallery" element={
            <PageWrapper>
              <Portfolio />
            </PageWrapper>
          } />

          <Route path="/events" element={
            <PageWrapper>
              <EventsPage />
            </PageWrapper>
          } />

          <Route path="/contact" element={
            <PageWrapper>
              <Contact />
              <Location />
            </PageWrapper>
          } />

          <Route path="/our-group" element={
            <PageWrapper addPadding={false}>
              <OurGroupPage />
            </PageWrapper>
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
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-amber-600/30">
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
