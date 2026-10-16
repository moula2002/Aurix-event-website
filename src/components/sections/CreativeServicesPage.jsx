import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../layout/SectionHeader';
import AnimatedServiceCard from '../common/AnimatedServiceCard';
import AnimatedServiceCta from '../common/AnimatedServiceCta';
import { Send, ArrowRight } from 'lucide-react';

import c1 from '../../assets/images/creative/creative-1.jpg';
import c2 from '../../assets/images/creative/creative-2.jpg';
import c3 from '../../assets/images/creative/creative-3.jpg';
import c4 from '../../assets/images/creative/creative-4.jpg';
import c5 from '../../assets/images/creative/creative-5.jpg';

import cre_motion from '../../assets/images/creative/cre_motion.jpg';
import cre_2d3d from '../../assets/images/services/3D-Modeling.jpg';
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
import cre_techdesign from '../../assets/images/services/cad-model.png';
import cre_exhibition from '../../assets/images/creative/cre_exhibition.png';

const CreativeServicesPage = () => {
  const navigate = useNavigate();
  const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-[#000000] min-h-screen pb-24">
      <SectionHeader title="CREATIVE SERVICES" />

      {/* Hero Intro */}
      <div 
        ref={introRef}
        className={`max-w-4xl mx-auto text-center px-6 mt-12 mb-16 ${
          introInView ? 'service-hero-intro-entrance' : 'service-hero-intro-initial'
        }`}
      >
        <p className="text-xl text-gray-300 leading-relaxed font-normal">
          Our award-winning creative studio pushes the boundaries of imagination. We combine artistic vision with cutting-edge digital technology to craft compelling narratives, stunning visuals, and interactive experiences that leave a lasting impression.
        </p>
      </div>

      {/* 1. Content & Animation */}
      <AnimatedServiceCard cardBg="bg-white" borderColor="border-stone-200/90">
          {/* Left Side: Text Content */}
          <div className="w-full xl:w-1/2 p-8 md:p-12 xl:pr-16 relative z-10 flex flex-col justify-center bg-white">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-[#171717] tracking-tight mb-2">
                Content & Animation
              </h2>
              <p className="text-[#f59e0b] font-bold text-sm tracking-wide uppercase">
                Dynamic 2D/3D motion graphics & bespoke storytelling
              </p>
            </div>

            <div className="space-y-8">
              {/* Motion Graphics */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Motion Graphics' } })}
                >
                  Motion Graphics & VFX
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Dynamic 2D and 3D motion graphics created specifically for high-resolution LED screens, stage intros, keynote loops, and broadcast packages.
                </p>
              </div>

              {/* 2D/3D Content */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: '2D/3D Content' } })}
                >
                  2D/3D Content Creation
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Bespoke digital artwork, high-poly 3D modeling, photorealistic rendering, and narrative animations tailored to express your corporate brand identity.
                </p>
              </div>

              {/* Infographics */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Infographics' } })}
                >
                  Animated Infographics & Data Stories
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Transforming complex statistical data, financial milestones, and corporate visions into clear, visually engaging animated explainer videos.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Media Showcase */}
          <div className="w-full xl:w-1/2 p-6 md:p-8 bg-[#FAFAF8] border-l border-stone-200/80 grid grid-cols-2 gap-4 items-center relative z-10">
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={cre_motion} alt="Motion Graphics" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">Motion FX</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={cre_2d3d} alt="2D/3D Content" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">3D Modeling</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md col-span-2">
              <img src={cre_info} alt="Infographics" className="w-full aspect-[21/9] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">Animated Infographics</span>
              </div>
            </div>
          </div>
      </AnimatedServiceCard>

      {/* 2. Interactive Technology */}
      <AnimatedServiceCard reverse cardBg="bg-white" borderColor="border-stone-200/90">
          {/* Left Side: Text Content */}
          <div className="w-full xl:w-1/2 p-8 md:p-12 xl:pl-16 relative z-10 flex flex-col justify-center bg-white">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-[#171717] tracking-tight mb-2">
                Interactive Technology
              </h2>
              <p className="text-[#f59e0b] font-bold text-sm tracking-wide uppercase">
                Immersive technologies pushing the boundaries of reality
              </p>
            </div>

            <div className="space-y-8">
              {/* Holograms */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Holograms' } })}
                >
                  3D Hologram Displays
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Cutting-edge holographic projections, holo-fans, and transparent OLED displays ideal for high-impact product launches, reveal moments, and VIP exhibits.
                </p>
              </div>

              {/* Projection Mapping */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Projection Mapping' } })}
                >
                  3D Projection Mapping
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Transforming building facades, stage backdrops, cars, and complex surfaces into dynamic digital canvasses using high-lumen laser projectors.
                </p>
              </div>

              {/* Interactive Experiences */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Interactive Experiences' } })}
                >
                  AR/VR & Immersive Activations
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Custom Augmented Reality (AR) filters, Virtual Reality (VR) simulations, motion-tracking touchwalls, and gamified attendee touchpoints.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Collage */}
          <div className="w-full xl:w-1/2 p-6 md:p-8 bg-[#FAFAF8] border-r border-stone-200/80 grid grid-cols-2 gap-4 items-center relative z-10">
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
      </AnimatedServiceCard>

      {/* 3. App & Game Development */}
      <AnimatedServiceCard cardBg="bg-white" borderColor="border-stone-200/90">
          {/* Left Side: Text Content */}
          <div className="w-full xl:w-1/2 p-8 md:p-12 xl:pr-16 relative z-10 flex flex-col justify-center bg-white">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-[#171717] tracking-tight mb-2">
                App & Game Development
              </h2>
              <p className="text-[#f59e0b] font-bold text-sm tracking-wide uppercase">
                Engaging digital products for interactive attendee journeys
              </p>
            </div>

            <div className="space-y-8">
              {/* UI/UX Design */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'UI/UX Design' } })}
                >
                  UI/UX Interface Design
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Sleek, intuitive user interface design for touch kiosks, digital registration counters, web applications, and interactive event displays.
                </p>
              </div>

              {/* Mobile Applications */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Mobile Applications' } })}
                >
                  Native Mobile Event Apps
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Custom iOS and Android event apps featuring personalized schedules, live voting, networking lounges, badge scanning, and interactive venue navigation.
                </p>
              </div>

              {/* Game Development */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Game Development' } })}
                >
                  Branded Mini-Games & Gamification
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Custom-developed touch screen games, trivia challenges, leaderboards, and digital prize wheels to boost booth engagement and dwell time.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Media Grid */}
          <div className="w-full xl:w-1/2 p-6 md:p-8 bg-[#FAFAF8] border-l border-stone-200/80 grid grid-cols-2 gap-4 items-center relative z-10">
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={cre_uiux} alt="UI/UX Design" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">UI/UX Design</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={cre_mobile} alt="Mobile Apps" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">Mobile Apps</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md col-span-2">
              <img src={cre_game} alt="Interactive Games" className="w-full aspect-[21/9] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">Interactive Games</span>
              </div>
            </div>
          </div>
      </AnimatedServiceCard>

      {/* 4. Cinematography & Production */}
      <AnimatedServiceCard reverse cardBg="bg-white" borderColor="border-stone-200/90">
          {/* Left Side: Text Content */}
          <div className="w-full xl:w-1/2 p-8 md:p-12 xl:pl-16 relative z-10 flex flex-col justify-center bg-white">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-[#171717] tracking-tight mb-2">
                Cinematography & Production
              </h2>
              <p className="text-[#f59e0b] font-bold text-sm tracking-wide uppercase">
                End-to-end cinematic film & broadcast-quality video content
              </p>
            </div>

            <div className="space-y-8">
              {/* Video Production */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Video Production' } })}
                >
                  Full Video Production
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  End-to-end video production including concept development, storyboarding, location scouting, crew management, and post-production editing.
                </p>
              </div>

              {/* Corporate Films */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Corporate Films' } })}
                >
                  High-End Corporate Films
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Inspiring narrative brand films, CEO video messages, investor presentations, and documentary-style corporate showcases.
                </p>
              </div>

              {/* TV Commercials */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'TV Commercials' } })}
                >
                  TV Commercials & Teasers
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Broadcast-quality commercial commercials, promotional teasers, social media video campaigns, and cinematic trailer cuts.
                </p>
              </div>

              {/* Event Coverage */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Event Coverage' } })}
                >
                  Cinematic Event Aftermovies
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Multi-camera event coverage, drone aerial videography, highlight reels, and fast-turnaround same-day edits for social media publishing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Video Grid */}
          <div className="w-full xl:w-1/2 p-6 md:p-8 bg-[#FAFAF8] border-r border-stone-200/80 grid grid-cols-2 gap-4 items-center relative z-10">
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
      </AnimatedServiceCard>

      {/* 5. Creative & Technical Design */}
      <AnimatedServiceCard cardBg="bg-white" borderColor="border-stone-200/90">
          {/* Left Side: Text Content */}
          <div className="w-full xl:w-1/2 p-8 md:p-12 xl:pr-16 relative z-10 flex flex-col justify-center bg-white">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-[#171717] tracking-tight mb-2">
                Creative & Technical Design
              </h2>
              <p className="text-[#f59e0b] font-bold text-sm tracking-wide uppercase">
                Foundational creative concepts and detailed architectural renders
              </p>
            </div>

            <div className="space-y-8">
              {/* Event Concepts */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Event Concepts' } })}
                >
                  Event Concepts & Creative Direction
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Original thematic development, storytelling frameworks, moodboards, and overall creative direction that aligns with your brand objectives.
                </p>
              </div>

              {/* Technical Design */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Technical Design' } })}
                >
                  3D Renders & Technical CADs
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Photorealistic 3D architectural renders, site plans, lighting plots, and spatial CAD blueprints that bridge creative vision and physical setup.
                </p>
              </div>

              {/* Exhibition Design */}
              <div>
                <h3 
                  className="font-bold text-[#171717] text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Exhibition Design' } })}
                >
                  Exhibition Stand & Booth Design
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed text-justify font-medium">
                  Bespoke trade show stand designs, double-decker pavilions, immersive product display pods, and high-footfall booth layouts.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Design Showcase */}
          <div className="w-full xl:w-1/2 p-6 md:p-8 bg-[#FAFAF8] border-l border-stone-200/80 grid grid-cols-2 gap-4 items-center relative z-10">
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={cre_concepts} alt="Event Concepts" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">Event Concepts</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={cre_techdesign} alt="3D CAD Renders" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">3D CAD Renders</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md col-span-2">
              <img src={cre_exhibition} alt="Exhibition Stands" className="w-full aspect-[21/9] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">Exhibition Stands & Booths</span>
              </div>
            </div>
          </div>
      </AnimatedServiceCard>

      {/* Bottom CTA Banner */}
      <AnimatedServiceCta
        title="Ready to Bring Your Creative Vision to Life?"
        description="Let our creative directors, animators, and immersive tech specialists craft an extraordinary experience for your brand."
        buttonText="REQUEST CREATIVE QUOTE"
        onButtonClick={() => navigate('/contact', { state: { service: 'Creative Services Consultation' } })}
        iconLeft={<Send size={16} className="rotate-45" />}
        iconRight={<ArrowRight size={16} />}
      />
    </div>
  );
};

export default CreativeServicesPage;
