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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'HOME',      to: '/' },
    { name: 'ABOUT',     to: '/about' },
    { name: 'APPROACH',  to: '/approach' },
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
    { name: 'GALLERY',   to: '/gallery' },
    { name: 'CONTACT',   to: '/contact' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="hidden lg:flex w-full justify-between items-center px-12 py-3 bg-transparent absolute top-0 left-0 right-0 z-50 text-sm font-semibold">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#f59e0b]" />
            <span className="text-gray-800">+971 54 574 5761</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#f59e0b]" />
            <span className="text-gray-800">info@axaurixevents.com</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-gray-800">
            <a href="#" className="hover:text-[#f59e0b] transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-[#f59e0b] transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-[#f59e0b] transition-colors"><Linkedin size={16} /></a>
            <a href="#" className="hover:text-[#f59e0b] transition-colors"><Youtube size={16} /></a>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <span className="text-[#f59e0b]">Follow Us</span>
        </div>
      </div>

      {/* ── HEADER ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          isScrolled ? 'top-2 px-4' : 'top-2 lg:top-12 px-4 lg:px-6'
        }`}
      >
        <div className={`w-full max-w-[1440px] flex items-center justify-between bg-white rounded-full transition-all duration-500 ${
          isScrolled ? 'px-6 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)]' : 'px-8 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.04)]'
        }`}>

          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Aurix Events Logo"
              className={`w-auto transition-all duration-500 ${isScrolled ? 'h-10' : 'h-12'}`}
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.to} className="relative group/navitem">
                <Link
                  to={link.to}
                  className={`relative py-2 text-[0.8rem] font-bold tracking-[0.1em] transition-colors duration-200 flex items-center gap-1 group ${
                    isActive(link.to) || (link.hasDropdown && location.pathname.includes(link.to)) ? 'text-[#f59e0b]' : 'text-gray-900 hover:text-[#f59e0b]'
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
                  <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover/navitem:opacity-100 group-hover/navitem:translate-y-0 group-hover/navitem:pointer-events-auto transition-all duration-300">
                    <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 p-3 min-w-[220px] flex flex-col gap-1">
                      {link.dropdownItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.to}
                          className="px-4 py-2 text-sm font-bold tracking-wide text-gray-700 hover:text-[#f59e0b] hover:bg-amber-50 rounded-lg transition-colors whitespace-nowrap"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── DESKTOP CTA ── */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            <button className="text-gray-900 hover:text-[#f59e0b] transition-colors">
              <Search size={20} />
            </button>
            <Link
              to="/contact"
              className="relative group flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs tracking-widest text-black bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:shadow-[0_8px_24px_rgba(245,158,11,0.4)] transition-all duration-300"
            >
              <Send size={14} className="rotate-45" />
              <span>GET A QUOTE</span>
              <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img src={logo} alt="Aurix Events Logo" className="h-10 w-auto" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col px-6 py-4 flex-1">
              {navLinks.map((link) => (
                <div key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => !link.hasDropdown && setMobileMenuOpen(false)}
                    className={`flex justify-between items-center py-4 text-base font-black tracking-wider border-b border-gray-50 ${
                      isActive(link.to) || (link.hasDropdown && location.pathname.includes(link.to))
                        ? 'text-[#f59e0b]'
                        : 'text-gray-900'
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={18} />}
                  </Link>
                  {link.hasDropdown && link.dropdownItems && (
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      {link.dropdownItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`py-3 text-sm font-bold tracking-wide border-b border-gray-50 flex items-center gap-2 ${
                            location.pathname === item.to ? 'text-[#f59e0b]' : 'text-gray-600'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Contact */}
            <div className="px-6 py-6 border-t border-gray-100 bg-gray-50 space-y-4">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex justify-center items-center gap-2 w-full py-4 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] font-black text-sm tracking-widest text-black shadow-[0_8px_20px_rgba(245,158,11,0.3)]"
              >
                <Send size={14} className="rotate-45" />
                GET A QUOTE
              </Link>
              <div className="flex flex-col gap-3 pt-2">
                <a href="tel:+971545745761" className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                  <Phone size={16} className="text-[#f59e0b]" />
                  +971 54 574 5761
                </a>
                <a href="mailto:info@axaurixevents.com" className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                  <Mail size={16} className="text-[#f59e0b]" />
                  info@axaurixevents.com
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
