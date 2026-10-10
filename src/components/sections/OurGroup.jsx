import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, UtensilsCrossed, Globe2, Plus, ArrowUpRight, Star } from 'lucide-react';

const divisions = [
  {
    icon: CalendarCheck,
    name: 'Events Management',
    tagline: 'Aurix Events',
    desc: 'World-class event production, creative experiences, and flawless execution for corporate and entertainment events across the UAE.',
    gradient: 'from-amber-400 via-orange-400 to-orange-500',
    lightBg: 'bg-amber-50',
    textAccent: 'text-amber-600',
    borderAccent: 'border-amber-300',
    badge: 'Active',
    badgeBg: 'bg-amber-500',
    link: '/',
    isCurrentSite: true,
  },
  {
    icon: UtensilsCrossed,
    name: 'Restaurant Management',
    tagline: 'Aurix Dining',
    desc: 'Premium restaurant concept development, operations management, and hospitality solutions crafted to deliver unforgettable dining experiences.',
    gradient: 'from-rose-400 via-red-400 to-red-500',
    lightBg: 'bg-rose-50',
    textAccent: 'text-rose-600',
    borderAccent: 'border-rose-200',
    badge: 'Coming Soon',
    badgeBg: 'bg-rose-500',
    link: '#',
    isCurrentSite: false,
  },
  {
    icon: Globe2,
    name: 'Website Design & Dev',
    tagline: 'Aurix Digital',
    desc: 'Cutting-edge web design, custom development, and digital solutions for businesses ready to make a powerful online impact.',
    gradient: 'from-blue-400 via-indigo-400 to-indigo-600',
    lightBg: 'bg-blue-50',
    textAccent: 'text-blue-600',
    borderAccent: 'border-blue-200',
    badge: 'Coming Soon',
    badgeBg: 'bg-blue-600',
    link: '#',
    isCurrentSite: false,
  },
  {
    icon: Plus,
    name: 'More to Come',
    tagline: 'Ax Aurix Group',
    desc: 'The Ax Aurix Group is continuously growing with new verticals and business opportunities in the pipeline.',
    gradient: 'from-gray-300 via-gray-400 to-gray-500',
    lightBg: 'bg-gray-50',
    textAccent: 'text-gray-500',
    borderAccent: 'border-gray-200',
    badge: 'Future',
    badgeBg: 'bg-gray-400',
    link: '#',
    isCurrentSite: false,
    isFuture: true,
  },
];

const OurGroup = () => {
  return (
    <section className="w-full bg-[#fefefe] relative overflow-hidden">

      {/* ── Premium Background Decorations (Unique Design) ── */}
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-bl from-[#ffedd5]/80 to-transparent opacity-80 z-0 pointer-events-none rounded-full blur-[100px]" />
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[70vh] bg-gradient-to-tr from-[#fbd38d]/20 via-transparent to-transparent z-0 pointer-events-none rounded-[100%] rotate-45" />
      <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] bg-gradient-to-tl from-[#ffedd5]/70 to-transparent z-0 pointer-events-none rounded-full blur-[80px]" />
      
      {/* Delicate horizontal wavy lines */}
      <svg className="absolute top-[30%] w-full h-[200px] z-0 pointer-events-none opacity-20" preserveAspectRatio="none" viewBox="0 0 1440 320">
        <path fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="5,5" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,224C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96"></path>
      </svg>
      <svg className="absolute bottom-[20%] w-full h-[200px] z-0 pointer-events-none opacity-10" preserveAspectRatio="none" viewBox="0 0 1440 320">
        <path fill="none" stroke="#f59e0b" strokeWidth="1.5" d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,117.3C840,128,960,192,1080,208C1200,224,1320,192,1380,176L1440,160"></path>
      </svg>
      <div className="absolute top-[60%] left-12 z-0 opacity-20 pointer-events-none hidden xl:block" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 2px, transparent 2px)', backgroundSize: '32px 32px', width: '200px', height: '200px' }}></div>

      {/* ── TOP BAND ── */}
      <div className="relative z-10 w-full h-[3px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent" />

      {/* ── SECTION BODY ── */}
      <div className="py-24 relative z-10">

        {/* Faint dot pattern bg */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(#f59e0b 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mb-20"
          >
            {/* Left: title block */}
            <div className="flex flex-col gap-3">
              <span className="text-[#f59e0b] text-xs font-black tracking-[0.3em] uppercase flex items-center gap-2">
                <span className="w-8 h-px bg-[#f59e0b]" /> Our Parent Company
              </span>

              <a
                href="https://axaurix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-end gap-3"
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 uppercase tracking-tight leading-none group-hover:text-[#f59e0b] transition-colors duration-300">
                  Ax Aurix
                </h2>
                <ArrowUpRight
                  size={32}
                  className="mb-2 text-gray-300 group-hover:text-[#f59e0b] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </a>

              {/* Underline */}
              <div className="flex items-center gap-3">
                <div className="h-1 w-20 rounded-full bg-[#f59e0b]" />
                <div className="h-1 w-6 rounded-full bg-amber-200" />
                <div className="h-1 w-2 rounded-full bg-amber-100" />
              </div>
            </div>

            {/* Right: description */}
            <p className="text-gray-500 text-lg leading-relaxed max-w-md lg:text-right">
              A multi-vertical holding group delivering excellence across events, hospitality, and digital — all under one visionary brand.
            </p>
          </motion.div>

          {/* ── DIVISION CARDS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {divisions.map((div, idx) => {
              const Icon = div.icon;
              return (
                <motion.a
                  key={idx}
                  href={div.link}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative rounded-3xl border ${div.borderAccent} bg-white overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 ${div.isFuture ? 'opacity-50' : 'cursor-pointer'}`}
                >
                  {/* Colored top stripe */}
                  <div className={`h-1 w-full bg-gradient-to-r ${div.gradient}`} />

                  <div className="p-7 flex flex-col gap-5 flex-1">

                    {/* Top row: badge + YOU ARE HERE */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-black tracking-wide text-white px-3 py-1 rounded-full ${div.badgeBg}`}>
                        {div.isCurrentSite && <Star size={10} fill="white" />}
                        {div.badge}
                      </span>
                      {div.isCurrentSite && (
                        <span className="flex items-center gap-1 text-[10px] font-black text-[#f59e0b] tracking-widest">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
                          HERE
                        </span>
                      )}
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl ${div.lightBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`bg-gradient-to-br ${div.gradient} w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md`}>
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-1 flex-1">
                      <p className={`text-[10px] font-black tracking-[0.2em] uppercase ${div.textAccent}`}>
                        {div.tagline}
                      </p>
                      <h3 className="text-gray-900 font-black text-xl leading-tight group-hover:text-[#f59e0b] transition-colors duration-300">
                        {div.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mt-2">
                        {div.desc}
                      </p>
                    </div>

                    {/* Arrow */}
                    {!div.isFuture && (
                      <div className={`flex items-center gap-2 text-xs font-bold ${div.textAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <span>{div.isCurrentSite ? 'You are here' : 'Learn more'}</span>
                        <ArrowUpRight size={14} />
                      </div>
                    )}
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* ── FOOTER NOTE ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-gray-100"
          >
            <p className="text-gray-400 text-sm">
              All divisions are part of the{' '}
              <a
                href="https://axaurix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f59e0b] font-bold hover:underline"
              >
                Ax Aurix Group
              </a>
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-300 font-semibold uppercase tracking-widest">
              <span className="w-6 h-px bg-gray-200" />
              Events · Dining · Digital
              <span className="w-6 h-px bg-gray-200" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurGroup;
