import React from 'react';
import { useInView } from 'react-intersection-observer';
import logo from '../../assets/ax-aurix-final-logo.png';
import footerLuxuryBg from '../../assets/footer-luxury-bg.jpg';
import { Phone, Mail, MapPin } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const navLinks = [
  { name: 'HOME', to: '/' },
  { name: 'ABOUT', to: '/about' },
  { name: 'APPROACH', to: '/approach' },
  { name: 'SERVICES', to: '/services' },
  { name: 'EVENTS', to: '/events' },
  { name: 'PROJECTS', to: '/projects' },
  { name: 'OUR GROUP', to: '/our-group' },
  { name: 'CONTACT', to: '/contact' },
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/axaurixevents?stkn=aTh5dTEyMDAxaDBn',
    icon: <InstagramIcon />,
    delay: '0.40s',
  },
  {
    name: 'Facebook',
    href: '#',
    icon: <FacebookIcon />,
    delay: '0.44s',
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: <LinkedinIcon />,
    delay: '0.48s',
  },
  {
    name: 'YouTube',
    href: '#',
    icon: <YoutubeIcon />,
    delay: '0.52s',
  },
];

const Footer = () => {
  const { ref: footerRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#050505] text-gray-300 pt-10 md:pt-12 pb-20 sm:pb-12 md:pb-7 overflow-hidden select-text border-t border-amber-500/20"
    >
      {/* ── CINEMATIC LUXURY BLACK & GOLD BACKGROUND LAYER (OPTIMIZED STATIC COMPOSITION) ── */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Crisp static high-performance luxury background asset */}
        <img
          src={footerLuxuryBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-bottom opacity-85 mix-blend-screen pointer-events-none"
        />

        {/* Central dark radial gradient to keep text crisp and legible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 50% 40%, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.72) 55%, rgba(5,5,5,0.18) 100%)',
          }}
        />

        {/* Top edge blend */}
        <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#000000] to-transparent pointer-events-none" />
      </div>

      {/* ── FOREGROUND CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center">
        
        {/* ── SECTION A: COMPANY LOGO ── */}
        <div className={`mb-3 flex flex-col items-center ${inView ? 'footer-logo-enter' : 'footer-fade-up-initial'}`}>
          <a href="/" className="inline-flex flex-col items-center group transition-transform duration-200 hover:scale-[1.02]">
            <img
              src={logo}
              alt="AX Aurix Events"
              className="h-16 sm:h-20 md:h-[84px] w-auto object-contain drop-shadow-[0_4px_16px_rgba(245,158,11,0.2)]"
            />
          </a>
        </div>

        {/* ── SECTION B: COMPANY DESCRIPTION ── */}
        <div className={`max-w-[780px] mx-auto mb-6 px-4 ${inView ? 'footer-desc-enter' : 'footer-fade-up-initial'}`}>
          <p className="text-xs sm:text-[13px] leading-relaxed text-gray-400 font-normal tracking-wide">
            At Aurix Events, we create innovative, world-class event experiences by blending creativity,
            strategy, technology, and flawless execution to deliver exceptional value and lasting impact.
          </p>
        </div>

        {/* ── SECTION C: NAVIGATION LINKS ── */}
        <nav
          aria-label="Footer Navigation"
          className={`w-full max-w-[1050px] mb-7 px-2 ${inView ? 'footer-nav-enter' : 'footer-fade-up-initial'}`}
        >
          <ul className="flex flex-wrap items-center justify-center gap-y-2.5 gap-x-3 sm:gap-x-4 md:gap-x-5 text-[11px] sm:text-xs md:text-[13px] font-extrabold uppercase tracking-wider text-white">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.name}>
                <li
                  className={inView ? 'footer-nav-item' : 'footer-fade-up-initial'}
                  style={{ '--nav-delay': `${0.16 + idx * 0.03}s` }}
                >
                  <a
                    href={link.to}
                    className="footer-nav-link text-white hover:text-[#f59e0b] transition-colors duration-200 py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
                {idx < navLinks.length - 1 && (
                  <li
                    aria-hidden="true"
                    className="hidden sm:inline-block w-[1.5px] h-3.5 bg-gradient-to-b from-[#f59e0b]/20 via-[#f59e0b] to-[#f59e0b]/20"
                  />
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        {/* ── SECTION D: CONTACT INFORMATION (Balanced Centered Column on Mobile, Row on Desktop) ── */}
        <div
          className="w-fit max-w-[92vw] sm:max-w-md md:max-w-[980px] mx-auto mb-7 flex flex-col md:flex-row items-start md:items-center justify-center gap-4 sm:gap-5 md:gap-0 md:w-full"
        >
          {/* Block 1: CALL OR WHATSAPP */}
          <div
            className={`flex-1 flex items-center justify-start md:justify-center gap-3.5 px-2 sm:px-3 w-full md:w-auto ${
              inView ? 'footer-contact-item-1' : 'footer-fade-up-initial'
            }`}
          >
            <a
              href="https://wa.me/971545745761"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#f59e0b] flex items-center justify-center text-[#f59e0b] bg-black/40 hover:bg-[#f59e0b] hover:text-black hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:scale-105 transition-all duration-200 shadow-[0_0_10px_rgba(245,158,11,0.2)] shrink-0 group"
              aria-label="Call or WhatsApp +971 54 574 5761"
            >
              <Phone size={16} strokeWidth={2.2} />
            </a>
            <div className="text-left">
              <span className="block text-[10px] font-bold tracking-widest uppercase text-gray-400">
                CALL OR WHATSAPP
              </span>
              <a
                href="tel:+971545745761"
                className="text-white hover:text-[#f59e0b] font-bold text-xs sm:text-sm tracking-wide transition-colors"
              >
                +971 54 574 5761
              </a>
            </div>
          </div>

          {/* Vertical Divider 1 */}
          <div className="hidden md:block w-px h-9 bg-white/15" aria-hidden="true" />

          {/* Block 2: EMAIL US */}
          <div
            className={`flex-1 flex items-center justify-start md:justify-center gap-3.5 px-2 sm:px-3 w-full md:w-auto ${
              inView ? 'footer-contact-item-2' : 'footer-fade-up-initial'
            }`}
          >
            <a
              href="mailto:info@axaurixevents.ae"
              className="w-10 h-10 rounded-full border border-[#f59e0b] flex items-center justify-center text-[#f59e0b] bg-black/40 hover:bg-[#f59e0b] hover:text-black hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:scale-105 transition-all duration-200 shadow-[0_0_10px_rgba(245,158,11,0.2)] shrink-0 group"
              aria-label="Email info@axaurixevents.ae"
            >
              <Mail size={16} strokeWidth={2.2} />
            </a>
            <div className="text-left">
              <span className="block text-[10px] font-bold tracking-widest uppercase text-gray-400">
                EMAIL US
              </span>
              <a
                href="mailto:info@axaurixevents.ae"
                className="text-white hover:text-[#f59e0b] font-bold text-xs sm:text-sm tracking-wide transition-colors lowercase"
              >
                info@axaurixevents.ae
              </a>
            </div>
          </div>

          {/* Vertical Divider 2 */}
          <div className="hidden md:block w-px h-9 bg-white/15" aria-hidden="true" />

          {/* Block 3: OUR LOCATION */}
          <div
            className={`flex-1 flex items-center justify-start md:justify-center gap-3.5 px-2 sm:px-3 w-full md:w-auto ${
              inView ? 'footer-contact-item-3' : 'footer-fade-up-initial'
            }`}
          >
            <a
              href="https://maps.google.com/?q=The+Hub+WTC+Mall+Abu+Dhabi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#f59e0b] flex items-center justify-center text-[#f59e0b] bg-black/40 hover:bg-[#f59e0b] hover:text-black hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:scale-105 transition-all duration-200 shadow-[0_0_10px_rgba(245,158,11,0.2)] shrink-0 group"
              aria-label="Our Location in Abu Dhabi, UAE"
            >
              <MapPin size={16} strokeWidth={2.2} />
            </a>
            <div className="text-left">
              <span className="block text-[10px] font-bold tracking-widest uppercase text-gray-400">
                OUR LOCATION
              </span>
              <a
                href="https://maps.google.com/?q=The+Hub+WTC+Mall+Abu+Dhabi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#f59e0b] font-bold text-xs sm:text-sm tracking-wide transition-colors"
              >
                Abu Dhabi, UAE
              </a>
            </div>
          </div>
        </div>

        {/* ── SECTION E: SOCIAL MEDIA ICONS ── */}
        <div className="mb-7 flex items-center justify-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={s.name}
              className={`w-9 h-9 rounded-full bg-[#0d0d0d] border border-white/20 flex items-center justify-center text-[#f59e0b] hover:border-[#f59e0b] hover:scale-110 hover:shadow-[0_0_14px_rgba(245,158,11,0.4)] hover:text-white transition-all duration-200 ${
                inView ? 'footer-social-icon' : 'footer-icon-initial'
              }`}
              style={{ '--social-delay': s.delay }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* ── SECTION F: COPYRIGHT & BRANDING ── */}
        <div className={`w-full flex flex-col items-center px-4 ${inView ? 'footer-copyright-enter' : 'footer-fade-up-initial'}`}>
          <div className="w-full max-w-[85%] sm:max-w-[600px] h-[1px] bg-white/10 mb-4" aria-hidden="true" />
          
          <p className="text-[11px] sm:text-xs text-gray-400 font-medium tracking-wide mb-1 text-center">
            Ax Aurix Events, 2026 © All Rights Reserved.
          </p>

          <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium tracking-wide text-center">
            Part of{' '}
            <a
              href="https://axaurix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f59e0b] font-bold hover:underline transition-colors"
            >
              Ax Aurix Group
            </a>
            {' '}— Events · Dining · Digital
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
