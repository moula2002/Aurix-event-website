import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgHeroCrowd from '../../assets/images/hero-crowd.jpg';
import imgHeroConference from '../../assets/images/hero-conference.jpg';
import imgHeroStage from '../../assets/images/hero-stage.jpg';

const Counter = React.memo(({ from, to, duration }) => {
  const [count, setCount] = useState(from);
  useEffect(() => {
    let startTime;
    let frame;
    const update = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [from, to, duration]);
  return <>{count}</>;
});

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
  const y1 = useTransform(scrollY, [0, 800], [0, 40]);
  const y2 = useTransform(scrollY, [0, 800], [0, -30]);
  const y3 = useTransform(scrollY, [0, 800], [0, 20]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#fafafa] flex items-center overflow-hidden pt-24 md:pt-32"
    >
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top left wave */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#fef3c7] to-[#fde68a] opacity-50 rounded-full blur-[100px]"></div>
        {/* Bottom right wave */}
        <div className="absolute -bottom-32 -right-32 w-[800px] h-[800px] bg-gradient-to-tl from-[#f59e0b] via-[#fbbf24] to-transparent opacity-30 rounded-full blur-[120px]"></div>
        {/* Subtle dot pattern bottom left */}
        <div
          className="absolute bottom-16 left-32 w-32 h-32 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#f59e0b 2px, transparent 2px)',
            backgroundSize: '20px 20px',
          }}
        ></div>
        {/* Subtle dot pattern top right */}
        <div
          className="absolute top-48 right-16 w-32 h-32 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#f59e0b 2px, transparent 2px)',
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-20">

        {/* ── LEFT: Typography ── */}
        <div className="flex flex-col justify-center mt-6 lg:mt-0">

          {/* Years counter badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="flex items-center gap-4 mb-4"
          >
            <div
              className="text-[4rem] md:text-[7rem] lg:text-[8.5rem] font-black leading-none tracking-tighter"
              style={{
                background: 'linear-gradient(180deg, #fbbf24 0%, #d97706 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <Counter from={0} to={22} duration={1800} />
            </div>
            <div className="flex flex-col border-b-2 border-[#f59e0b] pb-2 pt-3">
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-500 leading-tight">
                YEARS OF
              </span>
              <span className="text-lg md:text-xl font-black tracking-widest uppercase text-[#f59e0b] leading-tight mt-1">
                EXCELLENCE
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col gap-2 mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-[4.5rem] font-black text-[#111827] uppercase tracking-tight leading-none overflow-hidden pb-2">
              <motion.div variants={lineReveal} initial="hidden" animate="show" custom={0.1} style={{ willChange: "transform" }}>
                EVENTS
              </motion.div>
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-[4.5rem] font-black uppercase tracking-tight leading-none flex gap-4 overflow-hidden pb-2">
              <motion.div variants={lineReveal} initial="hidden" animate="show" custom={0.2} style={{ willChange: "transform" }} className="flex gap-4">
                <span className="text-[#111827]">THAT</span> <span className="text-[#f59e0b]">CREATE</span>
              </motion.div>
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-[4.5rem] font-black text-[#f59e0b] uppercase tracking-tight leading-none overflow-hidden pb-2">
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
            className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-medium"
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
              className="flex items-center gap-3 px-8 py-4 bg-[#f59e0b] text-white font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_8px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_12px_25px_rgba(245,158,11,0.5)] hover:bg-[#d97706] transition-all duration-300"
            >
              OUR SERVICES
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/gallery"
              className="flex items-center gap-3 px-8 py-4 bg-white border border-[#f59e0b] text-[#111827] font-bold uppercase tracking-widest text-sm rounded-full shadow-sm hover:shadow-md hover:bg-amber-50 transition-all duration-300"
            >
              <div className="w-5 h-5 rounded-full border border-[#f59e0b] flex items-center justify-center text-[#f59e0b]">
                <Play size={10} className="ml-0.5" />
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
            className="lg:hidden w-full mt-8 rounded-2xl overflow-hidden shadow-xl aspect-video"
          >
            <img
              src={imgHeroCrowd}
              alt="Event"
              className="w-full h-full object-cover"
              fetchpriority="high"
            />
          </motion.div>
        </div>

        {/* ── RIGHT: Image collage ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="hidden lg:block relative h-[520px] w-[90%] ml-auto mt-8"
        >
          {/* Main big image (Top Right) */}
          <motion.div
            style={{ y: y1, willChange: "transform" }}
            className="absolute top-[5%] right-0 w-[75%] h-[60%] z-20 group"
          >
            <div className="w-full h-full overflow-hidden rounded-[2rem] border-4 border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform rotate-2 hover:rotate-0 transition-transform duration-500 will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
              <img
                src={imgHeroCrowd}
                alt="Event Crowd"
                fetchpriority="high"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
              />
              <div className="absolute inset-0 border-2 border-[#f59e0b]/20 rounded-[2rem]"></div>
            </div>
          </motion.div>

          {/* Bottom Left Image */}
          <motion.div
            style={{ y: y2, willChange: "transform" }}
            className="absolute bottom-[10%] left-[0%] w-[55%] h-[45%] z-30 group"
          >
            <div className="w-full h-full overflow-hidden rounded-[1.5rem] border-4 border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transform -rotate-3 hover:rotate-0 transition-transform duration-500 will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
              <img
                src={imgHeroConference}
                alt="Corporate Conference"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
              />
              <div className="absolute inset-0 border-2 border-[#f59e0b]/20 rounded-[1.5rem]"></div>
            </div>
          </motion.div>

          {/* Bottom Right Image */}
          <motion.div
            style={{ y: y3, willChange: "transform" }}
            className="absolute bottom-[-5%] right-[5%] w-[45%] h-[50%] z-10 group"
          >
            <div className="w-full h-full overflow-hidden rounded-[1.5rem] border-4 border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transform rotate-6 hover:rotate-0 transition-transform duration-500 will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
              <img
                src={imgHeroStage}
                alt="Concert Stage"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
              />
              <div className="absolute inset-0 border-2 border-[#f59e0b]/20 rounded-[1.5rem]"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
