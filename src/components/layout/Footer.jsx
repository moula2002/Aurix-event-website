import React from 'react';
import logo from '../../assets/ax-aurix-final-logo.png';

const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const YoutubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
const WhatsappIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.228 5.228 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>;

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
              <li><a className="hover:text-[#f59e0b] transition-colors" href="/services">SERVICES</a></li>
              <li><a className="hover:text-[#f59e0b] transition-colors" href="/gallery">PORTFOLIO</a></li>
              <li><a className="hover:text-[#f59e0b] transition-colors" href="/ips">OUR IP'S</a></li>
              <li><a className="hover:text-[#f59e0b] transition-colors" href="/contact">CONTACT</a></li>
            </ul>
          </div>
          
          {/* Location Map */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest mb-6">OUR LOCATION</h3>
            <div className="w-full h-40 rounded-xl overflow-hidden border border-[#333333]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.938927902996!2d54.46939527618059!3d24.41814697822557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e423bb0d9a695%3A0xc0c8fc0280ebdbd2!2sTwofour54!5e0!3m2!1sen!2sae!4v1707054359483!5m2!1sen!2sae" 
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
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 bg-white text-[#f59e0b]">
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
            <a href="https://wa.me/971545745761" target="_blank" rel="noreferrer" className="w-12 h-12 ml-2 rounded-full flex items-center justify-center transition-transform hover:scale-110 bg-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.4)]">
              <WhatsappIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
