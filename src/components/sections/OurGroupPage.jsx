import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, UtensilsCrossed, Globe2, Plus, ArrowUpRight, Star, Building2, ExternalLink } from 'lucide-react';
import SectionHeader from '../layout/SectionHeader';
import { Link } from 'react-router-dom';

const divisions = [
  {
    icon: CalendarCheck,
    name: 'Events Management',
    tagline: 'Aurix Events',
    desc: 'World-class event production, creative experiences, and flawless execution for corporate and entertainment events across the UAE. From concept to celebration, we craft extraordinary events that leave a lasting impact.',
    features: ['Corporate Events', 'Gala Dinners', 'Product Launches', 'Live Concerts', 'Government Events', 'Award Ceremonies'],
    gradient: 'from-amber-400 via-orange-400 to-orange-500',
    lightBg: 'bg-amber-50',
    textAccent: 'text-amber-600',
    borderAccent: 'border-amber-200',
    badge: 'Active',
    badgeBg: 'bg-amber-500',
    link: '/',
    isCurrentSite: true,
    isExternal: false,
  },
  {
    icon: UtensilsCrossed,
    name: 'Restaurant Management',
    tagline: 'Aurix Dining',
    desc: 'Premium restaurant concept development, operations management, and hospitality solutions crafted to deliver unforgettable dining experiences. We bring fine dining, concept creation, and operational excellence together.',
    features: ['Restaurant Concept Design', 'Operations Management', 'Menu Engineering', 'Staff Training', 'Brand Identity', 'Quality Control'],
    gradient: 'from-rose-400 via-red-400 to-red-500',
    lightBg: 'bg-rose-50',
    textAccent: 'text-rose-600',
    borderAccent: 'border-rose-200',
    badge: 'Coming Soon',
    badgeBg: 'bg-rose-500',
    link: '#',
    isCurrentSite: false,
    isExternal: false,
  },
  {
    icon: Globe2,
    name: 'Website Design & Development',
    tagline: 'Aurix Digital',
    desc: 'Cutting-edge web design, custom development, and digital solutions for businesses ready to make a powerful online impact. We build stunning, high-performance websites and digital experiences.',
    features: ['UI/UX Design', 'Web Development', 'E-Commerce Solutions', 'Mobile Apps', 'SEO Optimization', 'Digital Strategy'],
    gradient: 'from-blue-400 via-indigo-400 to-indigo-600',
    lightBg: 'bg-blue-50',
    textAccent: 'text-blue-600',
    borderAccent: 'border-blue-200',
    badge: 'Coming Soon',
    badgeBg: 'bg-blue-600',
    link: '#',
    isCurrentSite: false,
    isExternal: false,
  },
  {
    icon: Plus,
    name: 'More Coming Soon',
    tagline: 'Ax Aurix Group',
    desc: 'The Ax Aurix Group is continuously growing with new verticals and business opportunities. More innovative services and divisions are in the pipeline — stay tuned for exciting announcements.',
    features: ['New Verticals', 'Strategic Expansion', 'Innovation Hub', 'Global Reach', 'New Markets', 'Future Services'],
    gradient: 'from-gray-300 via-gray-400 to-gray-500',
    lightBg: 'bg-gray-50',
    textAccent: 'text-gray-500',
    borderAccent: 'border-gray-200',
    badge: 'Future',
    badgeBg: 'bg-gray-400',
    link: '#',
    isCurrentSite: false,
    isExternal: false,
    isFuture: true,
  },
];

const OurGroupPage = () => {
  return (
    <div className="w-full bg-white min-h-screen">

      {/* ── PAGE HEADER BANNER ── */}
      <SectionHeader title="OUR GROUP" />

      {/* ── PARENT COMPANY INTRO ── */}
      <div className="w-full py-20 bg-white relative overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#f59e0b 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12"
          >
            {/* Left */}
            <div className="flex flex-col gap-4 max-w-xl">
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
                <ExternalLink
                  size={28}
                  className="mb-2 text-gray-300 group-hover:text-[#f59e0b] transition-colors duration-300"
                />
              </a>
              <div className="flex items-center gap-3">
                <div className="h-1 w-20 rounded-full bg-[#f59e0b]" />
                <div className="h-1 w-6 rounded-full bg-amber-200" />
                <div className="h-1 w-2 rounded-full bg-amber-100" />
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6 max-w-lg">
              <p className="text-gray-500 text-xl leading-relaxed">
                Ax Aurix is a multi-vertical holding group delivering excellence across events, hospitality, and digital — all under one visionary brand.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Events', 'Dining', 'Digital', 'And More...'].map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-black tracking-widest uppercase border border-amber-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── DIVISION CARDS (full width stacked) ── */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {divisions.map((div, idx) => {
              const Icon = div.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative rounded-3xl border ${div.borderAccent} bg-white overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 ${div.isFuture ? 'opacity-50' : ''}`}
                >
                  <div className={`h-1.5 w-full bg-gradient-to-r ${div.gradient}`} />
                  <div className="p-7 flex flex-col gap-5 flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-black tracking-wide text-white px-3 py-1 rounded-full ${div.badgeBg}`}>
                        {div.isCurrentSite && <Star size={10} fill="white" />}
                        {div.badge}
                      </span>
                      {div.isCurrentSite && (
                        <span className="flex items-center gap-1 text-[10px] font-black text-[#f59e0b] tracking-widest">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
                          YOU ARE HERE
                        </span>
                      )}
                    </div>
                    <div className={`w-14 h-14 rounded-2xl ${div.lightBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`bg-gradient-to-br ${div.gradient} w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md`}>
                        <Icon size={20} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <p className={`text-[10px] font-black tracking-[0.2em] uppercase ${div.textAccent}`}>{div.tagline}</p>
                      <h3 className="text-gray-900 font-black text-xl leading-tight group-hover:text-[#f59e0b] transition-colors duration-300">{div.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mt-2">{div.desc}</p>
                    </div>
                    {!div.isFuture && (
                      <div className={`mt-2 flex items-center gap-2 text-xs font-bold ${div.textAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <span>{div.isCurrentSite ? 'Visit site' : 'Coming Soon'}</span>
                        <ArrowUpRight size={14} />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── DETAIL ROWS (alternating layout per division) ── */}
          <div className="flex flex-col gap-8">
            {divisions.filter(d => !d.isFuture).map((div, idx) => {
              const Icon = div.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`bg-white rounded-3xl border ${div.borderAccent} shadow-sm overflow-hidden flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Color accent panel */}
                  <div className={`w-full md:w-56 bg-gradient-to-br ${div.gradient} flex flex-col items-center justify-center p-10 gap-4 min-h-[180px] md:min-h-0`}>
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                      <Icon size={32} />
                    </div>
                    <span className="text-white/90 text-xs font-black tracking-widest uppercase text-center">{div.tagline}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col gap-6 justify-center">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-black text-white px-3 py-1 rounded-full ${div.badgeBg}`}>{div.badge}</span>
                      <h3 className={`text-2xl md:text-3xl font-black text-gray-900 ${div.isCurrentSite ? '' : ''}`}>{div.name}</h3>
                    </div>
                    <p className="text-gray-500 text-base leading-relaxed max-w-2xl">{div.desc}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {div.features.map((f, fi) => (
                        <div key={fi} className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${div.gradient}`} />
                          {f}
                        </div>
                      ))}
                    </div>
                    {div.isCurrentSite ? (
                      <Link
                        to="/"
                        className={`inline-flex items-center gap-2 text-sm font-black ${div.textAccent} hover:underline`}
                      >
                        Visit Aurix Events <ArrowUpRight size={16} />
                      </Link>
                    ) : (
                      <span className={`inline-flex items-center gap-2 text-sm font-black ${div.textAccent} opacity-60`}>
                        Coming Soon — Stay tuned!
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-gray-200"
          >
            <p className="text-gray-400 text-sm">
              All divisions are part of the{' '}
              <a href="https://axaurix.com" target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] font-bold hover:underline">
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
    </div>
  );
};

export default OurGroupPage;
