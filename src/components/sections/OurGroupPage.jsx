import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, UtensilsCrossed, Globe2, Plus, ArrowUpRight, Star, ExternalLink, GlassWater } from 'lucide-react';
import SectionHeader from '../layout/SectionHeader';
import { Link } from 'react-router-dom';

import imgEvents     from '../../assets/images/group/group-events.jpg';
import imgRestaurant from '../../assets/images/group/group-restaurant.jpg';
import imgDigital    from '../../assets/images/group/group-digital.jpg';

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
    image: imgEvents,
    isCurrentSite: true,
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
    image: imgRestaurant,
    isCurrentSite: false,
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
    image: imgDigital,
    isCurrentSite: false,
  },
  {
    icon: GlassWater,
    name: 'Catering & Private Events Bartending',
    tagline: 'AURIX EVENTS',
    desc: 'Exceptional catering and professional bartending services for private parties, weddings, corporate gatherings, and exclusive celebrations. From beautifully presented food to expertly crafted beverages, we deliver memorable hospitality experiences tailored to every occasion.',
    features: ['Private Parties', 'Wedding Catering', 'Corporate Gatherings', 'Mixology Services', 'Custom Menus', 'Event Staffing'],
    gradient: 'from-amber-400 via-orange-400 to-orange-500',
    lightBg: 'bg-amber-50',
    textAccent: 'text-amber-600',
    borderAccent: 'border-amber-200',
    badge: 'Available',
    badgeBg: 'bg-amber-500',
    link: '/contact',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    isCurrentSite: false,
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
    image: null,
    isCurrentSite: false,
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
                <ExternalLink size={28} className="mb-2 text-gray-300 group-hover:text-[#f59e0b] transition-colors duration-300" />
              </a>
              <div className="flex items-center gap-3">
                <div className="h-1 w-20 rounded-full bg-[#f59e0b]" />
                <div className="h-1 w-6 rounded-full bg-amber-200" />
                <div className="h-1 w-2 rounded-full bg-amber-100" />
              </div>
            </div>
            <div className="flex flex-col gap-6 max-w-lg">
              <p className="text-gray-500 text-xl leading-relaxed">
                A multi-vertical holding group delivering excellence across events, hospitality, and digital — all under one visionary brand.
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

      {/* ── OVERVIEW CARDS ── */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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
                  {/* Image top section */}
                  {div.image ? (
                    <div className="relative h-40 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${div.gradient} opacity-30 z-10`} />
                      <img
                        src={div.image}
                        alt={div.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ) : (
                    <div className={`h-40 bg-gradient-to-br ${div.gradient} opacity-20 flex items-center justify-center`}>
                      <Icon size={48} className="text-gray-400" />
                    </div>
                  )}

                  {/* Gradient top stripe */}
                  <div className={`h-1 w-full bg-gradient-to-r ${div.gradient}`} />

                  <div className="p-6 flex flex-col gap-4 flex-1">
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

                    <div className="flex flex-col gap-1 flex-1">
                      <p className={`text-[10px] font-black tracking-[0.2em] uppercase ${div.textAccent}`}>{div.tagline}</p>
                      <h3 className="text-gray-900 font-black text-xl leading-tight group-hover:text-[#f59e0b] transition-colors duration-300">{div.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mt-2 line-clamp-3">{div.desc}</p>
                    </div>

                    {!div.isFuture && (
                      <div className={`flex items-center gap-2 text-xs font-bold ${div.textAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <span>{div.isCurrentSite ? 'Visit site' : (div.badge === 'Available' || div.badge === 'Active' ? 'Visit site' : 'Coming Soon')}</span>
                        <ArrowUpRight size={14} />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── DETAIL ROWS (image + content alternating) ── */}
          <div className="flex flex-col gap-10">
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
                  className={`bg-white rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Image Panel */}
                  <div className="w-full md:w-1/2 relative min-h-[280px] md:min-h-[420px] overflow-hidden group">
                    <img
                      src={div.image}
                      alt={div.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${div.gradient} opacity-20`} />
                    {/* Icon badge */}
                    <div className="absolute bottom-6 left-6 z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${div.gradient} flex items-center justify-center text-white shadow-xl`}>
                        <Icon size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="w-full md:w-1/2 p-8 md:p-14 lg:p-16 flex flex-col justify-center gap-6">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-black text-white px-3 py-1 rounded-full ${div.badgeBg}`}>{div.badge}</span>
                      <p className={`text-xs font-black tracking-[0.2em] uppercase ${div.textAccent}`}>{div.tagline}</p>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">{div.name}</h3>

                    <p className="text-gray-500 text-base md:text-lg leading-relaxed">{div.desc}</p>

                    <div className="grid grid-cols-2 gap-3">
                      {div.features.map((f, fi) => (
                        <div key={fi} className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${div.badgeBg}`} />
                          {f}
                        </div>
                      ))}
                    </div>

                    {div.isCurrentSite ? (
                      <Link
                        to="/"
                        className={`inline-flex items-center gap-2 text-sm font-black px-6 py-3 rounded-full bg-gradient-to-r ${div.gradient} text-white w-fit shadow-md hover:shadow-lg transition-shadow`}
                      >
                        Visit Aurix Events <ArrowUpRight size={16} />
                      </Link>
                    ) : (div.badge === 'Available' || div.badge === 'Active') && div.link ? (
                      <Link
                        to={div.link}
                        className={`inline-flex items-center gap-2 text-sm font-black px-6 py-3 rounded-full bg-gradient-to-r ${div.gradient} text-white w-fit shadow-md hover:shadow-lg transition-shadow`}
                      >
                        Visit site <ArrowUpRight size={16} />
                      </Link>
                    ) : (
                      <span className={`inline-flex items-center gap-2 text-sm font-black ${div.textAccent} opacity-70`}>
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
