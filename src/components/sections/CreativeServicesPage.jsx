import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../layout/SectionHeader';
import { Send, ArrowRight } from 'lucide-react';

import c1 from '../../assets/images/creative/creative-1.jpg';
import c2 from '../../assets/images/creative/creative-2.jpg';
import c3 from '../../assets/images/creative/creative-3.jpg';
import c4 from '../../assets/images/creative/creative-4.jpg';
import c5 from '../../assets/images/creative/creative-5.jpg';

import cre_motion from '../../assets/images/creative/cre_motion.jpg';
import cre_2d3d from '../../assets/images/creative/cre_2d3d.jpg';
import cre_info from '../../assets/images/creative/cre_info.jpg';
import cre_holo from '../../assets/images/creative/cre_holo.jpg';
import cre_projection from '../../assets/images/creative/cre_projection.png';
import cre_interactive from '../../assets/images/creative/cre_interactive.jpg';
import cre_uiux from '../../assets/images/creative/cre_uiux.jpg';
import cre_mobile from '../../assets/images/creative/cre_mobile.jpg';
import cre_game from '../../assets/images/creative/cre_game.jpg';
import cre_video from '../../assets/images/creative/cre_video.png';
import cre_films from '../../assets/images/creative/cre_films.jpg';
import cre_tvc from '../../assets/images/creative/cre_tvc.png';
import cre_eventcov from '../../assets/images/creative/cre_eventcov.jpg';
import cre_concepts from '../../assets/images/creative/cre_concepts.jpg';
import cre_techdesign from '../../assets/images/creative/cre_techdesign.jpg';
import cre_exhibition from '../../assets/images/creative/cre_exhibition.png';

const CreativeServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <SectionHeader title="CREATIVE SERVICES" />

      {/* Hero Intro */}
      <div className="max-w-4xl mx-auto text-center px-6 mt-12 mb-16">
        <p className="text-xl text-gray-600 leading-relaxed font-normal">
          Our award-winning creative studio pushes the boundaries of imagination. We combine artistic vision with cutting-edge digital technology to craft compelling narratives, stunning visuals, and interactive experiences that leave a lasting impression.
        </p>
      </div>

      {/* 1. Content & Animation */}
      <div className="max-w-[1600px] mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col xl:flex-row relative"
        >
          {/* Left Side: Text Content */}
          <div className="w-full xl:w-1/2 p-8 md:p-12 xl:pr-16 relative z-10 flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
                Content & Animation
              </h2>
              <p className="text-[#f59e0b] font-semibold text-sm tracking-wide uppercase">
                Dynamic 2D/3D motion graphics & bespoke storytelling
              </p>
            </div>

            <div className="space-y-8">
              {/* Motion Graphics */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Motion Graphics' } })}
                >
                  Motion Graphics & VFX
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Dynamic 2D and 3D motion graphics created specifically for high-resolution LED screens, stage intros, keynote loops, and broadcast packages.
                </p>
              </div>

              {/* 2D/3D Content */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: '2D/3D Content' } })}
                >
                  2D/3D Content Creation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Bespoke digital artwork, high-poly 3D modeling, photorealistic rendering, and narrative animations tailored to express your corporate brand identity.
                </p>
              </div>

              {/* Infographics */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Infographics' } })}
                >
                  Animated Infographics & Data Stories
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Transforming complex statistical data, financial milestones, and corporate visions into clear, visually engaging animated explainer videos.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Media Showcase */}
          <div className="w-full xl:w-1/2 bg-gray-100 p-6 md:p-8 flex flex-col gap-4 relative z-10 min-h-[500px] justify-between">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <img src={cre_motion} alt="Motion Graphics" className="w-full aspect-square object-cover rounded-xl shadow-md mb-2" />
                <span className="text-[0.7rem] font-bold text-gray-600 text-center">Motion FX</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={cre_2d3d} alt="2D/3D Content" className="w-full aspect-square object-cover rounded-xl shadow-md mb-2" />
                <span className="text-[0.7rem] font-bold text-gray-600 text-center">3D Modeling</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={cre_info} alt="Infographics" className="w-full aspect-square object-cover rounded-xl shadow-md mb-2" />
                <span className="text-[0.7rem] font-bold text-gray-600 text-center">Infographics</span>
              </div>
            </div>
            

          </div>
        </motion.div>
      </div>

      {/* 2. Interactive Technology */}
      <div className="max-w-[1600px] mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col xl:flex-row-reverse relative"
        >
          {/* Left Side: Text Content */}
          <div className="w-full xl:w-1/2 p-8 md:p-12 xl:pl-16 relative z-10 flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
                Interactive Technology
              </h2>
              <p className="text-[#f59e0b] font-semibold text-sm tracking-wide uppercase">
                Immersive technologies pushing the boundaries of reality
              </p>
            </div>

            <div className="space-y-8">
              {/* Holograms */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Holograms' } })}
                >
                  3D Hologram Displays
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Cutting-edge holographic projections, holo-fans, and transparent OLED displays ideal for high-impact product launches, reveal moments, and VIP exhibits.
                </p>
              </div>

              {/* Projection Mapping */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Projection Mapping' } })}
                >
                  3D Projection Mapping
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Transforming building facades, stage backdrops, cars, and complex surfaces into dynamic digital canvasses using high-lumen laser projectors.
                </p>
              </div>

              {/* Interactive Experiences */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Interactive Experiences' } })}
                >
                  AR/VR & Immersive Activations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Custom Augmented Reality (AR) filters, Virtual Reality (VR) simulations, motion-tracking touchwalls, and gamified attendee touchpoints.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Collage */}
          <div className="w-full xl:w-1/2 p-6 md:p-8 bg-gray-100 grid grid-cols-2 gap-4 items-center relative z-10">
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={cre_holo} alt="Holograms" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">3D Holograms</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={cre_projection} alt="Projection Mapping" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">Projection Mapping</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md col-span-2">
              <img src={cre_interactive} alt="Interactive Experience" className="w-full aspect-[21/9] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">Interactive AR/VR Activations</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. App & Game Development */}
      <div className="max-w-[1600px] mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col xl:flex-row relative"
        >
          {/* Left Side: Text Content */}
          <div className="w-full xl:w-1/2 p-8 md:p-12 xl:pr-16 relative z-10 flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
                App & Game Development
              </h2>
              <p className="text-[#f59e0b] font-semibold text-sm tracking-wide uppercase">
                Engaging digital products for interactive attendee journeys
              </p>
            </div>

            <div className="space-y-8">
              {/* UI/UX Design */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'UI/UX Design' } })}
                >
                  UI/UX Interface Design
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Sleek, intuitive user interface design for touch kiosks, digital registration counters, web applications, and interactive event displays.
                </p>
              </div>

              {/* Mobile Applications */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Mobile Applications' } })}
                >
                  Native Mobile Event Apps
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Custom iOS and Android event apps featuring personalized schedules, live voting, networking lounges, badge scanning, and interactive venue navigation.
                </p>
              </div>

              {/* Game Development */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Game Development' } })}
                >
                  Branded Mini-Games & Gamification
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Custom-developed touch screen games, trivia challenges, leaderboards, and digital prize wheels to boost booth engagement and dwell time.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Media Grid */}
          <div className="w-full xl:w-1/2 bg-gray-100 p-6 md:p-8 flex flex-col gap-4 relative z-10 justify-between">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <img src={cre_uiux} alt="UI UX" className="w-full aspect-square object-cover rounded-xl shadow-md mb-2" />
                <span className="text-[0.7rem] font-bold text-gray-600 text-center">UI/UX Design</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={cre_mobile} alt="Mobile App" className="w-full aspect-square object-cover rounded-xl shadow-md mb-2" />
                <span className="text-[0.7rem] font-bold text-gray-600 text-center">Mobile Apps</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={cre_game} alt="Game Dev" className="w-full aspect-square object-cover rounded-xl shadow-md mb-2" />
                <span className="text-[0.7rem] font-bold text-gray-600 text-center">Interactive Games</span>
              </div>
            </div>
            
            <div className="relative group rounded-2xl overflow-hidden shadow-lg mt-2 flex-1 min-h-[220px]">
              <img src={c3} alt="Digital App Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4. Cinematography & Production */}
      <div className="max-w-[1600px] mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col xl:flex-row-reverse relative"
        >
          {/* Left Side: Text Content */}
          <div className="w-full xl:w-1/2 p-8 md:p-12 xl:pl-16 relative z-10 flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
                Cinematography & Production
              </h2>
              <p className="text-[#f59e0b] font-semibold text-sm tracking-wide uppercase">
                End-to-end cinematic film & broadcast-quality video content
              </p>
            </div>

            <div className="space-y-8">
              {/* Video Production */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Video Production' } })}
                >
                  Full Video Production
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  End-to-end video production including concept development, storyboarding, location scouting, crew management, and post-production editing.
                </p>
              </div>

              {/* Corporate Films */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Corporate Films' } })}
                >
                  High-End Corporate Films
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Inspiring narrative brand films, CEO video messages, investor presentations, and documentary-style corporate showcases.
                </p>
              </div>

              {/* TV Commercials */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'TV Commercials' } })}
                >
                  TV Commercials & Teasers
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Broadcast-quality commercial commercials, promotional teasers, social media video campaigns, and cinematic trailer cuts.
                </p>
              </div>

              {/* Event Coverage */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Event Coverage' } })}
                >
                  Cinematic Event Aftermovies
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Multi-camera event coverage, drone aerial videography, highlight reels, and fast-turnaround same-day edits for social media publishing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Video Grid */}
          <div className="w-full xl:w-1/2 p-6 md:p-8 bg-gray-100 grid grid-cols-2 gap-4 items-center relative z-10">
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={cre_video} alt="Video Production" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-3 flex items-end">
                <span className="text-white font-bold text-xs">Video Production</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={cre_films} alt="Corporate Films" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-3 flex items-end">
                <span className="text-white font-bold text-xs">Corporate Films</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={cre_tvc} alt="TV Commercials" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-3 flex items-end">
                <span className="text-white font-bold text-xs">TV Commercials</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={cre_eventcov} alt="Event Coverage" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-3 flex items-end">
                <span className="text-white font-bold text-xs">Cinematic Coverage</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. Creative & Technical Design */}
      <div className="max-w-[1600px] mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col xl:flex-row relative"
        >
          {/* Left Side: Text Content */}
          <div className="w-full xl:w-1/2 p-8 md:p-12 xl:pr-16 relative z-10 flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
                Creative & Technical Design
              </h2>
              <p className="text-[#f59e0b] font-semibold text-sm tracking-wide uppercase">
                Foundational creative concepts and detailed architectural renders
              </p>
            </div>

            <div className="space-y-8">
              {/* Event Concepts */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Event Concepts' } })}
                >
                  Event Concepts & Creative Direction
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Original thematic development, storytelling frameworks, moodboards, and overall creative direction that aligns with your brand objectives.
                </p>
              </div>

              {/* Technical Design */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Technical Design' } })}
                >
                  3D Renders & Technical CADs
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Photorealistic 3D architectural renders, site plans, lighting plots, and spatial CAD blueprints that bridge creative vision and physical setup.
                </p>
              </div>

              {/* Exhibition Design */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Exhibition Design' } })}
                >
                  Exhibition Stand & Booth Design
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Bespoke trade show stand designs, double-decker pavilions, immersive product display pods, and high-footfall booth layouts.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Design Showcase */}
          <div className="w-full xl:w-1/2 bg-gray-100 p-6 md:p-8 flex flex-col gap-4 relative z-10 justify-between">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <img src={cre_concepts} alt="Concepts" className="w-full aspect-square object-cover rounded-xl shadow-md mb-2" />
                <span className="text-[0.7rem] font-bold text-gray-600 text-center">Event Concepts</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={cre_techdesign} alt="3D Renders" className="w-full aspect-square object-cover rounded-xl shadow-md mb-2" />
                <span className="text-[0.7rem] font-bold text-gray-600 text-center">3D CAD Renders</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={cre_exhibition} alt="Exhibitions" className="w-full aspect-square object-cover rounded-xl shadow-md mb-2" />
                <span className="text-[0.7rem] font-bold text-gray-600 text-center">Exhibition Stands</span>
              </div>
            </div>
            
            <div className="relative group rounded-2xl overflow-hidden shadow-lg mt-2 flex-1 min-h-[220px]">
              <img src={c5} alt="Creative Architectural Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-amber-500/20">
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Ready to Bring Your Creative Vision to Life?
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              Let our creative directors, animators, and immersive tech specialists craft an extraordinary experience for your brand.
            </p>
            <button
              onClick={() => navigate('/contact', { state: { service: 'Creative Services Consultation' } })}
              className="mt-4 inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-widest text-black bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:shadow-[0_8px_24px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:scale-105"
            >
              <Send size={16} className="rotate-45" />
              <span>REQUEST CREATIVE QUOTE</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeServicesPage;
