import React from 'react';
import logo from '../../assets/ax-aurix-final-logo.png';

const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const YoutubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;

const Footer = () => {
  return (
    <footer className="w-full bg-[#151313] text-gray-500 pt-16 pb-8 border-t-[6px] border-[#f59e0b]">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a href="#" className="inline-block mb-1">
              <img src={logo} alt="Aurix Events Logo" className="h-14 w-auto filter brightness-0 invert opacity-90" />
            </a>
            <div className="flex flex-col gap-4">
              <p className="text-[#a3a3a3] text-sm leading-relaxed max-w-sm font-medium">
                At Aurix Events, we create innovative, world-class event experiences by blending creativity, strategy, technology, and flawless execution to deliver exceptional value and lasting impact.
              </p>
              <p className="text-[#a3a3a3] text-sm font-medium">
                You may call or whatsapp on <br/> <strong className="text-[#f59e0b] font-bold text-base tracking-widest mt-1 inline-block">+971 54 574 5761</strong>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest mb-6">QUICK LINKS</h3>
            <ul className="grid grid-cols-2 gap-y-5 gap-x-4 text-white text-sm font-bold tracking-wide uppercase">
              <li><a className="hover:text-[#f59e0b] transition-colors" href="/">HOME</a></li>
              <li><a className="hover:text-[#f59e0b] transition-colors" href="/about">ABOUT</a></li>
              <li><a className="hover:text-[#f59e0b] transition-colors" href="/approach">APPROACH</a></li>
              <li><a className="hover:text-[#f59e0b] transition-colors" href="/services">SERVICES</a></li>
              <li><a className="hover:text-[#f59e0b] transition-colors" href="/events">EVENTS</a></li>
              <li><a className="hover:text-[#f59e0b] transition-colors" href="/gallery">GALLERY</a></li>
              <li><a className="hover:text-[#f59e0b] transition-colors" href="/our-group">OUR GROUP</a></li>
              <li><a className="hover:text-[#f59e0b] transition-colors" href="/contact">CONTACT</a></li>
            </ul>
          </div>
          
          {/* Location Map */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest mb-6">OUR LOCATION</h3>
            <div className="w-full h-40 rounded-xl overflow-hidden border border-[#333333]">
              <iframe 
                src="https://maps.google.com/maps?q=The+Hub+WTC+Mall+Abu+Dhabi&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Aurix Events Location"
              />
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <div className="text-[13px] font-semibold text-[#a3a3a3]">
              Ax Aurix Events, 2026 © All Rights Reserved.
            </div>
            <div className="text-[12px] text-gray-600">
              Part of{' '}
              <a
                href="https://axaurix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f59e0b] font-bold hover:underline"
              >
                Ax Aurix Group
              </a>
              {' '}— Events · Dining · Digital
            </div>
          </div>
          
          {/* Social Icons & WhatsApp */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 bg-white text-[#f59e0b]">
              <MailIcon />
            </a>
            <a href="https://www.instagram.com/axaurixevents?stkn=aTh5dTEyMDAxaDBn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 bg-white text-[#f59e0b]">
              <InstagramIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 bg-white text-[#f59e0b]">
              <FacebookIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 bg-white text-[#f59e0b]">
              <LinkedinIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 bg-white text-[#f59e0b]">
              <YoutubeIcon />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
