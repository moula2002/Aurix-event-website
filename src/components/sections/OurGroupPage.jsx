import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
    lightBg: 'bg-white/5',
    textAccent: 'text-gray-500',
    borderAccent: 'border-white/10',
    badge: 'Future',
    badgeBg: 'bg-gray-400',
    link: '#',
    image: null,
    isCurrentSite: false,
    isFuture: true,
  },
];

const AnimatedServiceDetailRow = ({ div, idx }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '-50px',
  });

  const Icon = div.icon;
  const isEven = idx % 2 === 0;
  // idx 0 & 2: left tilt (-7deg); idx 1 & 3: right tilt (+7deg)
  const isTiltLeft = idx % 2 === 0;

  return (
    <div
      ref={ref}
      className={`w-full ${
        isTiltLeft
          ? (inView ? `ourgroup-3d-left-entrance ourgroup-3d-card-${idx}` : 'ourgroup-3d-left-initial')
          : (inView ? `ourgroup-3d-right-entrance ourgroup-3d-card-${idx}` : 'ourgroup-3d-right-initial')
      }`}
    >
      <div
        className={`bg-white border border-stone-200/90 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col ${
          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
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
        <div className="w-full md:w-1/2 p-8 md:p-14 lg:p-16 flex flex-col justify-center gap-6 bg-white">
          <div className="flex items-center gap-3">
            <span className={`text-xs font-black text-white px-3 py-1 rounded-full ${div.badgeBg}`}>{div.badge}</span>
            <p className={`text-xs font-black tracking-[0.2em] uppercase ${div.textAccent}`}>{div.tagline}</p>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-[#171717] leading-tight font-heading">{div.name}</h3>

          <p className="text-[#444444] text-base md:text-lg leading-relaxed font-medium">{div.desc}</p>

          <div className="grid grid-cols-2 gap-3">
            {div.features.map((f, fi) => (
              <div key={fi} className="flex items-center gap-2 text-sm text-[#222222] font-semibold">
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
            <span className={`inline-flex items-center gap-2 text-sm font-black ${div.textAccent} opacity-80`}>
              Coming Soon — Stay tuned!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const OurGroupPage = () => {
  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full bg-[#FBF7EE] min-h-screen relative overflow-hidden">
      
      {/* ── Premium Background Decorations (Warm Beige & Soft Amber Harmony) ── */}
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-bl from-amber-400/15 to-transparent opacity-80 z-0 pointer-events-none rounded-full blur-[100px]" />
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[70vh] bg-gradient-to-tr from-amber-300/15 via-transparent to-transparent z-0 pointer-events-none rounded-[100%] rotate-45" />
      <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] bg-gradient-to-tl from-amber-400/15 to-transparent z-0 pointer-events-none rounded-full blur-[80px]" />
      
      {/* Delicate horizontal wavy lines */}
      <svg className="absolute top-[30%] w-full h-[200px] z-0 pointer-events-none opacity-25" preserveAspectRatio="none" viewBox="0 0 1440 320">
        <path fill="none" stroke="#d97706" strokeWidth="1" strokeDasharray="5,5" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,224C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96"></path>
      </svg>
      <svg className="absolute bottom-[20%] w-full h-[200px] z-0 pointer-events-none opacity-20" preserveAspectRatio="none" viewBox="0 0 1440 320">
        <path fill="none" stroke="#d97706" strokeWidth="1.5" d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,117.3C840,128,960,192,1080,208C1200,224,1320,192,1380,176L1440,160"></path>
      </svg>
      <div className="absolute top-[60%] left-12 z-0 opacity-15 pointer-events-none hidden xl:block" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 2px, transparent 2px)', backgroundSize: '32px 32px', width: '200px', height: '200px' }}></div>

      <div className="relative z-10">
        {/* ── PAGE HEADER BANNER ── */}
        <SectionHeader title="OUR GROUP" />
      </div>

      {/* ── PARENT COMPANY INTRO ── */}
      <div ref={introRef} className="w-full py-20 relative overflow-hidden z-10">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(#d97706 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="flex flex-col gap-4 max-w-xl">
              <span className="text-[#d97706] text-xs font-black tracking-[0.3em] uppercase flex items-center gap-2">
                <span className={`h-px bg-[#d97706] ${introInView ? 'ourgroup-line-entrance' : 'ourgroup-line-initial'}`} /> Our Parent Company
              </span>
              <a
                href="https://axaurix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 py-1"
              >
                <div className="overflow-visible">
                  <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black text-[#171717] uppercase tracking-tight leading-none group-hover:text-[#d97706] transition-colors duration-300 font-sans ${
                    introInView ? 'ourgroup-title-entrance' : 'ourgroup-title-initial'
                  }`}>
                    Ax Aurix
                  </h2>
                </div>
                <ExternalLink 
                  size={32} 
                  className={`text-[#777777] group-hover:text-[#d97706] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ${
                    introInView ? 'ourgroup-icon-entrance' : 'ourgroup-icon-initial'
                  }`} 
                />
              </a>
              <div className="flex items-center gap-3">
                <div className="h-1 w-20 rounded-full bg-[#f59e0b]" />
                <div className="h-1 w-6 rounded-full bg-amber-500/40" />
                <div className="h-1 w-2 rounded-full bg-amber-500/20" />
              </div>
            </div>
            <div className="flex flex-col gap-6 max-w-lg">
              <p className={`text-[#555555] text-xl leading-relaxed font-medium ${
                introInView ? 'ourgroup-desc-entrance' : 'ourgroup-desc-initial'
              }`}>
                A multi-vertical holding group delivering excellence across events, hospitality, and digital — all under one visionary brand.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Events', 'Dining', 'Digital', 'And More...'].map((tag, i) => (
                  <span 
                    key={i} 
                    className={`px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-xs font-black tracking-widest uppercase border border-amber-400/30 ${
                      introInView ? `ourgroup-tag-${i}` : 'ourgroup-badge-initial'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── OVERVIEW CARDS ── */}
      <div ref={cardsRef} className="w-full py-16 relative z-10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {divisions.map((div, idx) => {
              const Icon = div.icon;
              const isCard5 = idx === 4;
              const cardNum = idx + 1;

              return (
                <div
                  key={idx}
                  className={`${
                    isCard5
                      ? (cardsInView ? 'ourgroup-card-5-entrance' : 'ourgroup-card5-initial')
                      : (cardsInView ? `ourgroup-card-${cardNum}-entrance` : 'ourgroup-card-initial')
                  }`}
                >
                  <div
                    className={`group relative rounded-3xl border border-stone-200/90 bg-white overflow-hidden flex flex-col shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-500`}
                  >
                    {/* Image top section */}
                    {div.image ? (
                      <div className="relative h-40 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${div.gradient} opacity-20 z-10`} />
                        <div className={`w-full h-full ${
                          cardsInView ? `ourgroup-img-${cardNum}-entrance` : 'ourgroup-img-initial'
                        }`}>
                          <img
                            src={div.image}
                            alt={div.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-40 bg-[#FAFAF8] flex items-center justify-center overflow-hidden border-b border-stone-200">
                        <div className={`absolute inset-0 bg-gradient-to-br ${div.gradient} opacity-15`} />
                        <Icon size={48} className="text-gray-400 relative z-10" />
                      </div>
                    )}

                    {/* Gradient top stripe */}
                    <div className={`h-1 w-full bg-gradient-to-r ${div.gradient}`} />

                    <div className="p-6 flex flex-col gap-4 flex-1 bg-white">
                      <div className={`flex items-center justify-between ${
                        cardsInView ? `ourgroup-badge-${cardNum}-entrance` : 'ourgroup-badge-initial'
                      }`}>
                        <span className={`inline-flex items-center gap-1.5 text-xs font-black tracking-wide text-white px-3 py-1 rounded-full ${div.badgeBg}`}>
                          {div.isCurrentSite && <Star size={10} fill="white" />}
                          {div.badge}
                        </span>
                      </div>

                      <div className={`flex flex-col gap-1 flex-1 ${
                        cardsInView ? `ourgroup-content-${cardNum}-entrance` : 'ourgroup-content-initial'
                      }`}>
                        <p className={`text-[10px] font-black tracking-[0.2em] uppercase ${div.textAccent}`}>{div.tagline}</p>
                        <h3 className="text-[#171717] font-black text-xl leading-tight group-hover:text-[#f59e0b] transition-colors duration-300 font-heading">{div.name}</h3>
                        <p className="text-[#555555] text-sm leading-relaxed mt-2 line-clamp-3 font-medium">{div.desc}</p>
                      </div>

                      {!div.isFuture && (
                        <div className={`flex items-center gap-2 text-xs font-bold ${div.textAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                          <span>{div.isCurrentSite ? 'Visit site' : (div.badge === 'Available' || div.badge === 'Active' ? 'Visit site' : 'Coming Soon')}</span>
                          <ArrowUpRight size={14} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── DETAIL ROWS (image + content alternating) ── */}
          <div className="flex flex-col gap-10">
            {divisions.filter(d => !d.isFuture).map((div, idx) => (
              <AnimatedServiceDetailRow key={idx} div={div} idx={idx} />
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-stone-300"
          >
            <p className="text-[#666666] text-sm font-medium">
              All divisions are part of the{' '}
              <a href="https://axaurix.com" target="_blank" rel="noopener noreferrer" className="text-[#d97706] font-bold hover:underline">
                Ax Aurix Group
              </a>
            </p>
            <div className="flex items-center gap-2 text-xs text-[#888888] font-bold uppercase tracking-widest">
              <span className="w-6 h-px bg-stone-300" />
              Events · Dining · Digital
              <span className="w-6 h-px bg-stone-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurGroupPage;
