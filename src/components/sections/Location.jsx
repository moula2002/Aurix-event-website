import React from 'react';
import { useInView } from 'react-intersection-observer';
import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section ref={sectionRef} className="py-28 bg-[#000000] overflow-hidden relative">

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#f59e0b 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Soft amber glow */}
      <div className="absolute left-[-10%] bottom-[-10%] w-[50%] h-[50%] rounded-full bg-[#f59e0b]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left text */}
        <div>
          <span className={`section-label mb-5 block ${inView ? 'location-badge-entrance' : 'location-badge-initial'}`}>
            Our Location
          </span>

          <h2 className={`text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-6 ${inView ? 'location-heading-entrance' : 'location-heading-initial'}`}>
            Find Us <br />
            <span className="text-[#f59e0b]">On The Map</span>
          </h2>

          <p className={`text-gray-400 text-lg mb-10 leading-relaxed max-w-md ${inView ? 'location-desc-entrance' : 'location-desc-initial'}`}>
            Visit our headquarters to discuss your next big event. Our team of experts is ready to transform your vision into reality.
          </p>

          <div className={`rounded-2xl p-6 flex flex-col gap-4 bg-[#151515] border border-white/10 shadow-lg ${inView ? 'location-card-entrance' : 'location-card-initial'}`}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-black border border-amber-500/20 flex items-center justify-center text-[#f59e0b] shrink-0 mt-0.5">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#f59e0b] uppercase tracking-widest mb-2">Headquarters</p>
                <p className="text-gray-300 leading-relaxed text-sm font-medium">
                  Ax Aurix Events LLC SPC<br />
                  Level 5 The Hub WTC Mall,<br />
                  Abu Dhabi
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-white/10 my-1" />

            <a
              href="https://maps.google.com/?q=The+Hub+WTC+Mall+Abu+Dhabi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#f59e0b] text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all duration-300 group"
            >
              <Navigation size={14} />
              Get Directions
            </a>
          </div>
        </div>

        {/* Right map */}
        <div className={`w-full h-[420px] lg:h-[500px] relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 group ${inView ? 'location-map-entrance' : 'location-map-initial'}`}>
          {/* Gold top stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent z-20" />

          <iframe
            src="https://maps.google.com/maps?q=The+Hub+WTC+Mall+Abu+Dhabi&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;

