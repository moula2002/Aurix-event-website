import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import AnimatedSection from '../layout/AnimatedSection';

const Location = () => {
  return (
    <section className="py-28 bg-white overflow-hidden relative">

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#f59e0b 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Soft amber glow */}
      <div className="absolute left-[-10%] bottom-[-10%] w-[50%] h-[50%] rounded-full bg-[#f59e0b]/8 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label mb-5 block">Our Location</span>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight mb-6">
            Find Us <br />
            <span className="text-[#f59e0b]">On The Map</span>
          </h2>

          <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-md">
            Visit our headquarters to discuss your next big event. Our team of experts is ready to transform your vision into reality.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="rounded-2xl p-6 flex flex-col gap-4 bg-gray-50 border border-amber-100 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#f59e0b] shrink-0 mt-0.5">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#f59e0b] uppercase tracking-widest mb-2">Headquarters</p>
                <p className="text-gray-600 leading-relaxed text-sm font-medium">
                  Ax Aurix FZ L.L.C<br />
                  P.O. Box 769937, Twofour54 Abu Dhabi,<br />
                  Sheikh Zayed Street, Opposite Khalifa Park,<br />
                  Abu Dhabi, U.A.E
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-gray-200 my-1" />

            <a
              href="https://maps.google.com/?q=Twofour54+Abu+Dhabi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#f59e0b] text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all duration-300 group"
            >
              <Navigation size={14} />
              Get Directions
            </a>
          </motion.div>
        </motion.div>

        {/* Right map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[420px] lg:h-[500px] relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-amber-100 group"
        >
          {/* Gold top stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent z-20" />

          <iframe
            src="https://maps.google.com/maps?q=Twofour54+Abu+Dhabi&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
