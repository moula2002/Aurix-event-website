import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, UtensilsCrossed, Globe2, Plus } from 'lucide-react';

const divisions = [
  {
    icon: CalendarCheck,
    name: 'Events Management',
    tagline: 'Aurix Events',
    desc: 'World-class event production, creative experiences, and flawless execution for corporate and entertainment events across the UAE.',
    color: 'from-amber-400 to-orange-500',
    badge: 'Active',
    link: 'https://axaurixevents.com',
    isCurrentSite: true,
  },
  {
    icon: UtensilsCrossed,
    name: 'Restaurant Management',
    tagline: 'Aurix Dining',
    desc: 'Premium restaurant concept development, operations management, and hospitality solutions crafted to deliver unforgettable dining experiences.',
    color: 'from-rose-400 to-red-600',
    badge: 'Coming Soon',
    link: '#',
    isCurrentSite: false,
  },
  {
    icon: Globe2,
    name: 'Website Design & Development',
    tagline: 'Aurix Digital',
    desc: 'Cutting-edge web design, custom development, and digital solutions for businesses ready to make a powerful online impact.',
    color: 'from-blue-400 to-indigo-600',
    badge: 'Coming Soon',
    link: '#',
    isCurrentSite: false,
  },
  {
    icon: Plus,
    name: 'More Coming Soon',
    tagline: 'Ax Aurix Group',
    desc: 'The Ax Aurix Group is continuously growing. More services and business verticals are in development to serve you better.',
    color: 'from-gray-300 to-gray-400',
    badge: 'Future',
    link: '#',
    isCurrentSite: false,
    isFuture: true,
  },
];

const OurGroup = () => {
  return (
    <section className="w-full py-24 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background amber glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f59e0b]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#f59e0b] text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Parent Company</p>

          <div className="flex flex-col items-center gap-2 mb-6">
            <a
              href="https://axaurix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight hover:text-[#f59e0b] transition-colors duration-300"
            >
              Ax Aurix.com
            </a>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent mt-2" />
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Ax Aurix is a multi-vertical holding group delivering excellence across events, hospitality, and digital services — all under one visionary brand.
          </p>
        </motion.div>

        {/* Connector line — desktop only */}
        <div className="hidden lg:flex items-center justify-center mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#f59e0b]/40" />
          <div className="mx-6 px-6 py-2 rounded-full border border-[#f59e0b]/40 text-[#f59e0b] text-xs font-bold tracking-widest uppercase bg-[#f59e0b]/5">
            Our Divisions
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#f59e0b]/40" />
        </div>

        {/* Division Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((div, idx) => {
            const Icon = div.icon;
            return (
              <motion.a
                key={idx}
                href={div.link}
                target={div.isCurrentSite || div.isFuture ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-white/25 hover:bg-white/8 transition-all duration-400 overflow-hidden ${div.isFuture ? 'opacity-60' : 'cursor-pointer'}`}
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${div.color}`} />

                {/* Badge */}
                <div className="flex items-center justify-between">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${div.color} text-white`}>
                    {div.badge}
                  </div>
                  {div.isCurrentSite && (
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#f59e0b] tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
                      YOU ARE HERE
                    </div>
                  )}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${div.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} />
                </div>

                {/* Text */}
                <div>
                  <p className="text-[#f59e0b] text-xs font-bold tracking-widest uppercase mb-1">{div.tagline}</p>
                  <h3 className="text-white font-black text-lg leading-tight mb-2 group-hover:text-[#f59e0b] transition-colors">
                    {div.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {div.desc}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-gray-600 text-sm">
            Visit our parent company at{' '}
            <a
              href="https://axaurix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f59e0b] font-bold hover:underline"
            >
              axaurix.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurGroup;
