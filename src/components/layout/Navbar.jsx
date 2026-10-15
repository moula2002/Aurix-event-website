import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, Send, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/ax-aurix-final-logo.png';

const Facebook = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Instagram = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Linkedin = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const Youtube = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesExpanded(false);
  }, [location.pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setServicesExpanded(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'HOME', to: '/' },
    { name: 'ABOUT', to: '/about' },
    { name: 'APPROACH', to: '/approach' },
    {
      name: 'SERVICES',
      to: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Technical Services', to: '/services/technical' },
        { name: 'Creative Services', to: '/services/creative' },
        { name: 'Support Services', to: '/services/support' }
      ]
    },
    { name: 'EVENTS', to: '/events' },
    { name: 'PROJECTS', to: '/projects' },
    { name: 'OUR GROUP', to: '/our-group' },
    { name: 'CONTACT', to: '/contact' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="hidden lg:flex w-full justify-between items-center px-12 py-3 bg-transparent absolute top-0 left-0 right-0 z-50 text-sm font-semibold">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#f59e0b]" />
            <span className="text-gray-200">+971 54 574 5761</span>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#f59e0b]" />
            <span className="text-gray-200">info@axaurixevents.com</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-[#F8B11B]">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={16} /></a>
            <a href="https://www.instagram.com/axaurixevents?stkn=aTh5dTEyMDAxaDBn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={16} /></a>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <span className="text-[#f59e0b]">Follow Us</span>
        </div>
      </div>

      {/* ── HEADER ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${isScrolled ? 'top-2 px-4' : 'top-2 lg:top-12 px-4 lg:px-6'
          }`}
      >
        <div className={`w-full max-w-[1440px] flex items-center justify-between bg-[#111111]/90 backdrop-blur-md rounded-full transition-all duration-500 border border-white/10 ${isScrolled ? 'px-6 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)]' : 'px-8 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          }`}>

          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Ax Aurix Events Logo"
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.to} className="relative group/navitem">
                <Link
                  to={link.to}
                  className={`relative py-2 text-[0.8rem] font-bold tracking-[0.1em] transition-colors duration-200 flex items-center gap-1 group ${isActive(link.to) || (link.hasDropdown && location.pathname.includes(link.to)) ? 'text-[#f59e0b]' : 'text-gray-200 hover:text-[#f59e0b]'
                    }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="mt-0.5 group-hover/navitem:rotate-180 transition-transform duration-300" />}

                  {/* Active underline */}
                  {(isActive(link.to) || (link.hasDropdown && location.pathname.includes(link.to) && location.pathname !== '/')) && (
                    <motion.span
                      layoutId="nav-active-line"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f59e0b]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover underline */}
                  {!(isActive(link.to) || (link.hasDropdown && location.pathname.includes(link.to) && location.pathname !== '/')) && (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f59e0b] transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover/navitem:opacity-100 group-hover/navitem:translate-y-0 group-hover/navitem:pointer-events-auto transition-all duration-300 z-50">
                    {link.isGroup ? (
                      // ── OUR GROUP rich dropdown ──
                      <div className="bg-[#151515] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 p-3 min-w-[280px] flex flex-col gap-1 backdrop-blur-md">
                        <p className="text-[10px] font-black tracking-[0.2em] text-[#f59e0b] uppercase px-3 py-1">Ax Aurix Group</p>
                        {link.dropdownItems.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.to}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group/di"
                          >
                            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.color}`} />
                            <div className="flex flex-col flex-1 min-w-0">
                              <span className="text-sm font-black text-gray-100 group-hover/di:text-[#f59e0b] transition-colors leading-tight">{item.name}</span>
                              <span className="text-[10px] text-gray-400 font-semibold tracking-wide">{item.sub}</span>
                            </div>
                            <span className={`text-[9px] font-black text-white px-2 py-0.5 rounded-full ${item.color} whitespace-nowrap`}>{item.badge}</span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      // ── standard dropdown ──
                      <div className="bg-[#151515] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] border border-white/10 p-3 min-w-[220px] flex flex-col gap-1 backdrop-blur-md">
                        {link.dropdownItems.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.to}
                            className="px-4 py-2 text-sm font-bold tracking-wide text-gray-300 hover:text-[#f59e0b] hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── DESKTOP CTA ── */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            <Link
              to="/contact"
              className="relative group flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs tracking-widest text-black bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:shadow-[0_8px_24px_rgba(245,158,11,0.4)] transition-all duration-300"
            >
              <Send size={14} className="rotate-45" />
              <span>Plan Your Event</span>
              <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* ── FULL-SCREEN ACCESSIBLE MOBILE MENU (Z-index 70 ensures it sits cleanly above WhatsApp floating button which is z-50) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[70] bg-[#0A0A0A] lg:hidden flex flex-col justify-between overflow-hidden"
          >
            {/* 1. Mobile Menu Header (Compact, cleanly aligned logo + X close button) */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080808] shrink-0">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                <img src={logo} alt="Ax Aurix Events Logo" className="h-10 w-auto object-contain" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:text-[#FFA500] hover:bg-white/15 transition-all"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* 2. Scrollable Navigation Links Area */}
            <div className="flex-1 overflow-y-auto px-6 py-2 divide-y divide-white/5">
              {navLinks.map((link) => {
                const isServices = link.hasDropdown;
                const linkActive = isActive(link.to) || (isServices && location.pathname.includes('/services'));

                if (isServices) {
                  return (
                    <div key={link.name} className="py-1">
                      {/* Accordion Trigger for Services */}
                      <button
                        type="button"
                        onClick={() => setServicesExpanded(!servicesExpanded)}
                        className={`w-full flex justify-between items-center py-3.5 text-base font-bold tracking-wider text-left transition-colors ${
                          linkActive ? 'text-[#FFA500]' : 'text-white hover:text-[#FFA500]'
                        }`}
                        aria-expanded={servicesExpanded}
                      >
                        <span className="flex items-center gap-2">
                          {link.name}
                        </span>
                        <ChevronDown 
                          size={18} 
                          className={`text-gray-400 transition-transform duration-300 ${
                            servicesExpanded ? 'rotate-180 text-[#FFA500]' : ''
                          }`} 
                        />
                      </button>

                      {/* Collapsible Submenu (Animated Accordion - Collapsed by default) */}
                      <AnimatePresence initial={false}>
                        {servicesExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden pl-4 pb-2 space-y-1"
                          >
                            {/* Detailed Sub-service items */}
                            {link.dropdownItems.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.to}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center gap-2.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
                                  location.pathname === item.to ? 'text-[#FFA500]' : 'text-gray-300 hover:text-[#FFA500]'
                                }`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFA500] shrink-0" />
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <div key={link.to} className="py-1">
                    <Link
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3.5 text-base font-bold tracking-wider transition-colors ${
                        isActive(link.to) ? 'text-[#FFA500]' : 'text-white hover:text-[#FFA500]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* 3. Bottom Action Area (Full width Get a Quote + Phone info) */}
            <div className="px-6 py-5 border-t border-white/10 bg-[#0d0d0d] shrink-0 space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex justify-center items-center gap-2.5 w-full min-h-[48px] py-3.5 rounded-full bg-gradient-to-r from-[#FFA500] to-[#FFC107] font-black text-sm tracking-widest text-[#080808] shadow-[0_4px_16px_rgba(255,165,0,0.35)] hover:shadow-[0_6px_22px_rgba(255,165,0,0.5)] active:scale-[0.99] transition-all"
              >
                <Send size={15} className="rotate-45" />
                <span>GET A QUOTE</span>
                <ArrowRight size={15} />
              </Link>
              
              <div className="pt-1 flex items-center justify-center">
                <a
                  href="tel:+971545745761"
                  className="inline-flex items-center gap-2.5 text-xs font-semibold text-gray-300 hover:text-[#FFA500] transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Phone size={13} className="text-[#FFA500]" />
                  </div>
                  <span>+971 54 574 5761</span>
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
