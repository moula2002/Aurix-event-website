import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgHeroCrowd from '../../assets/images/hero-gala.jpg';
import imgHeroConference from '../../assets/images/hero-tech.jpg';
import imgHeroStage from '../../assets/images/hero-concert.jpg';
import imgHeroBg from '../../assets/images/hero-bg-main.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

const lineReveal = {
  hidden: { y: "100%" },
  show: (delay = 0) => ({
    y: "0%",
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 30]);
  const y2 = useTransform(scrollY, [0, 800], [0, -20]);
  const y3 = useTransform(scrollY, [0, 800], [0, 10]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden"
    >
      {/* Background Image with Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/85 to-transparent"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-20 mt-12 md:mt-0">

        {/* ── LEFT: Typography ── */}
        <div className="flex flex-col justify-center mt-6 lg:mt-0">

          {/* Years counter badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="flex items-center gap-4 mb-2"
          >
            <div
              className="text-[4rem] md:text-[6rem] lg:text-[7rem] font-black leading-none tracking-tighter text-[#f59e0b]"
            >
              2020
            </div>
            <div className="flex flex-col justify-center mt-2">
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-[#111827] leading-tight">
                WE ARE
              </span>
              <div className="w-full h-[3px] bg-[#f59e0b] my-1"></div>
              <span className="text-lg md:text-xl font-black tracking-widest uppercase text-[#f59e0b] leading-tight">
                FROM
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col mb-4">
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black text-[#111827] uppercase tracking-tighter leading-[0.95] overflow-hidden pb-1">
              <motion.div variants={lineReveal} initial="hidden" animate="show" custom={0.1} style={{ willChange: "transform" }}>
                EVENTS
              </motion.div>
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black uppercase tracking-tighter leading-[0.95] flex gap-3 overflow-hidden pb-1">
              <motion.div variants={lineReveal} initial="hidden" animate="show" custom={0.2} style={{ willChange: "transform" }} className="flex gap-3">
                <span className="text-[#111827]">THAT</span> <span className="text-[#f59e0b]">CREATE</span>
              </motion.div>
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black text-[#f59e0b] uppercase tracking-tighter leading-[0.95] overflow-hidden pb-1">
              <motion.div variants={lineReveal} initial="hidden" animate="show" custom={0.3} style={{ willChange: "transform" }}>
                EXPERIENCES
              </motion.div>
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="text-slate-800 text-lg md:text-xl leading-relaxed mb-8 max-w-md font-medium"
            style={{ willChange: "transform, opacity" }}
          >
            From concept to celebration, we craft extraordinary events that leave a lasting impact.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
            className="flex flex-wrap items-center gap-4"
            style={{ willChange: "transform, opacity" }}
          >
            <Link
              to="/services"
              className="flex items-center gap-3 px-8 py-3.5 bg-[#f59e0b] text-white font-bold uppercase tracking-wider text-sm rounded-full shadow-[0_4px_15px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.6)] hover:bg-[#d97706] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              OUR SERVICES
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>

            <Link
              to="/gallery"
              className="flex items-center gap-3 px-8 py-3.5 bg-white border-2 border-[#f59e0b] text-[#111827] font-bold uppercase tracking-wider text-sm rounded-full shadow-sm hover:shadow-md hover:bg-amber-50 transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <div className="w-5 h-5 rounded-full border-2 border-[#f59e0b] flex items-center justify-center text-[#f59e0b] group-hover:bg-[#f59e0b] group-hover:text-white transition-colors duration-300">
                <Play size={10} className="ml-0.5" fill="currentColor" />
              </div>
              VIEW GALLERY
            </Link>
          </motion.div>

          {/* ── MOBILE: Single hero image ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
            className="lg:hidden w-full mt-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-video border-2 border-[#f59e0b]/30 relative"
          >
            <img
              src={imgHeroCrowd}
              alt="Event"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </div>

        {/* ── RIGHT: Image collage ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="hidden lg:block relative h-[500px] xl:h-[650px] w-full mt-4"
        >
          {/* Main big image (Top Right) */}
          <motion.div
            style={{ y: y1, willChange: "transform" }}
            className="absolute top-[5%] right-[0%] w-[75%] h-[50%] z-10 group"
          >
            <div className="w-full h-full overflow-hidden rounded-[2.5rem] border-[4px] border-slate-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transform transition-transform duration-700 hover:scale-[1.02] will-change-transform">
              <img
                src={imgHeroCrowd}
                alt="Gala Dinner"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_0_0_2px_rgba(245,158,11,0.7)] pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Bottom Left Image */}
          <motion.div
            style={{ y: y2, willChange: "transform" }}
            className="absolute bottom-[20%] left-[0%] w-[55%] h-[40%] z-20 group"
          >
            <div className="w-full h-full overflow-hidden rounded-[2rem] border-[4px] border-slate-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transform transition-transform duration-700 hover:scale-[1.02] will-change-transform">
              <img
                src={imgHeroConference}
                alt="Corporate Conference"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_0_2px_rgba(245,158,11,0.7)] pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Bottom Right Image */}
          <motion.div
            style={{ y: y3, willChange: "transform" }}
            className="absolute bottom-[0%] right-[5%] w-[60%] h-[45%] z-30 group"
          >
            <div className="w-full h-full overflow-hidden rounded-[2.5rem] border-[4px] border-slate-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transform transition-transform duration-700 hover:scale-[1.02] will-change-transform">
              <img
                src={imgHeroStage}
                alt="Concert Stage"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_0_0_2px_rgba(245,158,11,0.7)] pointer-events-none"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

