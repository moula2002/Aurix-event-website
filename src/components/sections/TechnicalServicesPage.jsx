import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../layout/SectionHeader';
import { Send, ArrowRight } from 'lucide-react';

import t1 from '../../assets/images/technical/technical-1.jpg';
import t2 from '../../assets/images/technical/technical-2.jpg';
import t3 from '../../assets/images/technical/technical-3.jpg';
import t4 from '../../assets/images/technical/technical-4.jpg';
import t5 from '../../assets/images/technical/technical-5.jpg';

import tech_audio from '../../assets/images/technical/tech_audio.jpg';
import tech_video from '../../assets/images/technical/tech_video.jpg';
import tech_av from '../../assets/images/technical/tech_av.jpg';
import tech_lighting from '../../assets/images/technical/tech_lighting.jpg';
import tech_stage from '../../assets/images/technical/tech_stage.jpg';
import tech_rigging from '../../assets/images/technical/tech_rigging.jpg';
import tech_backdrop from '../../assets/images/technical/tech_backdrop.jpg';
import tech_draping from '../../assets/images/technical/tech_draping.jpg';
import tech_livestream from '../../assets/images/technical/tech_livestream.jpg';
import tech_broadcast from '../../assets/images/technical/tech_broadcast.jpg';
import tech_eventprod from '../../assets/images/technical/tech_eventprod.jpg';
import tech_projectmg from '../../assets/images/technical/tech_projectmg.jpg';
import tech_pavilion from '../../assets/images/technical/tech_pavilion.jpg';
import tech_fabrication from '../../assets/images/technical/tech_fabrication.jpg';
import tech_webdev from '../../assets/images/technical/tech_webdev.jpg';
import tech_webmain from '../../assets/images/technical/tech_webmain.jpg';
import tech_mobileapp from '../../assets/images/technical/tech_mobileapp.jpg';

const TechnicalServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <SectionHeader title="TECHNICAL EXPERTISE" />

      {/* Hero Intro */}
      <div className="max-w-4xl mx-auto text-center px-6 mt-12 mb-16">
        <p className="text-xl text-gray-600 leading-relaxed font-normal">
          The backbone of any spectacular event is flawless technical execution. Our dedicated technical division houses the industry's most advanced equipment and the brightest engineering minds to guarantee your event runs perfectly from the first cue to the final curtain call.
        </p>
      </div>

      {/* 1. Audio & Visual Production */}
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
                Audio & Visual Production
              </h2>
              <p className="text-[#f59e0b] font-semibold text-sm tracking-wide uppercase">
                Crystal clear acoustics and stunning visual experiences
              </p>
            </div>

            <div className="space-y-8">
              {/* Audio Production */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Audio Production' } })}
                >
                  Audio Production
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Crystal clear line-array sound systems and acoustic engineering designed for venues of any scale. We deliver immersive audio clarity that ensures every speaker, performance, and announcement reaches every attendee perfectly.
                </p>
              </div>

              {/* Video Production */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Video Production' } })}
                >
                  Video Production
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Live IMAG camera systems, high-resolution LED screen mapping, media servers, and master video switching. Our ultra-high-definition displays turn complex content into captivating visual spectacles.
                </p>
              </div>

              {/* AV Setup */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'AV Setup' } })}
                >
                  AV Setup & Integration
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Complete audiovisual integration for corporate conferences, trade shows, and galas. Seamless connectivity, synchronized playback, and multi-zone distribution managed by expert technicians.
                </p>
              </div>

              {/* Lighting Design */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Lighting Design' } })}
                >
                  Lighting Design
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Intelligent lighting plots, architectural uplighting, laser shows, and dynamic stage fixtures designed to dictate mood, highlight key moments, and create unforgettable atmosphere.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Media Collage */}
          <div className="w-full xl:w-1/2 bg-gray-100 p-6 md:p-8 flex flex-col gap-4 relative z-10 min-h-[500px] justify-between">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-xl shadow-md">
                <img src={tech_audio} alt="Audio Production" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 flex items-end p-4">
                  <span className="text-white font-bold text-sm">Audio Production</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-md">
                <img src={tech_video} alt="Video Production" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 flex items-end p-4">
                  <span className="text-white font-bold text-sm">Video Production</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-md">
                <img src={tech_av} alt="AV Setup" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 flex items-end p-4">
                  <span className="text-white font-bold text-sm">AV Integration</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-md">
                <img src={tech_lighting} alt="Lighting Design" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 flex items-end p-4">
                  <span className="text-white font-bold text-sm">Lighting Design</span>
                </div>
              </div>
            </div>
            
            {/* Main Stage Banner */}
            <div className="relative group rounded-2xl overflow-hidden shadow-lg mt-2 flex-1 min-h-[200px]">
              <img src={t1} alt="AV Stage Setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. Stage & Structural Engineering */}
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
                Stage & Structural Engineering
              </h2>
              <p className="text-[#f59e0b] font-semibold text-sm tracking-wide uppercase">
                Safe, modular, and custom-engineered structures
              </p>
            </div>

            <div className="space-y-8">
              {/* Stage Design */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Stage Design' } })}
                >
                  Stage Design & Construction
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Custom-engineered stages, platforms, and multi-tier set structures. Built with high load capacity, safety compliance, and bespoke architectural aesthetics tailored to your theme.
                </p>
              </div>

              {/* Rigging Services */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Rigging Services' } })}
                >
                  Rigging & Truss Systems
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Certified overhead rigging, trussing, and motor hoists. Safety-first structural engineering for heavy lighting rigs, line arrays, and massive LED displays.
                </p>
              </div>

              {/* Backdrop Solutions */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Backdrop Solutions' } })}
                >
                  Backdrop & Set Solutions
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Precision-fabricated backdrops including seamless printed panels, LED video walls, custom wood framing, and 3D architectural stage wings.
                </p>
              </div>

              {/* Theatrical Draping */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Theatrical Draping' } })}
                >
                  Theatrical Draping
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Premium flame-retardant pipe and drape systems for space transformation, acoustic isolation, masking, and elegant VIP enclosures.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Grid with Image Labels */}
          <div className="w-full xl:w-1/2 p-6 md:p-8 bg-gray-100 grid grid-cols-2 gap-4 items-center relative z-10">
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={tech_stage} alt="Stage Design" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">Stage Design</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={tech_rigging} alt="Rigging Systems" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">Rigging Systems</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={tech_backdrop} alt="Backdrop Solutions" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">Backdrop Solutions</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img src={tech_draping} alt="Theatrical Draping" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 flex items-end p-4">
                <span className="text-white font-bold text-sm">Theatrical Draping</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Broadcasting & Live Streaming */}
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
                Broadcasting & Live Streaming
              </h2>
              <p className="text-[#f59e0b] font-semibold text-sm tracking-wide uppercase">
                Global reach with TV-grade broadcast infrastructure
              </p>
            </div>

            <div className="space-y-8">
              {/* Live Streaming */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Live Streaming' } })}
                >
                  Live Streaming Solutions
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Low-latency, multi-platform live streaming to YouTube, LinkedIn, custom web portals, and private hybrid event platforms with real-time Q&A and interactive polling.
                </p>
              </div>

              {/* Broadcast Solutions */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Broadcast Solutions' } })}
                >
                  Multi-Camera Broadcast Setup
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Television-grade production trucks, 4K camera rigs, jib arms, wireless steadicams, and live direction switchers to capture every highlight in pristine clarity.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Broadcast Grid */}
          <div className="w-full xl:w-1/2 bg-gray-100 p-6 md:p-10 flex flex-col gap-4 relative z-10 min-h-[450px]">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative group overflow-hidden rounded-xl shadow-md h-full">
                <img src={tech_livestream} alt="Live Streaming" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-white font-bold text-base">Live Streaming</span>
                  <span className="text-gray-300 text-xs">Multi-Platform HD Streaming</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-md h-full">
                <img src={tech_broadcast} alt="Broadcast Setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-white font-bold text-base">Broadcast Rigging</span>
                  <span className="text-gray-300 text-xs">4K Multi-Cam Direction</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4. Project & Production Management */}
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
                Project & Production Management
              </h2>
              <p className="text-[#f59e0b] font-semibold text-sm tracking-wide uppercase">
                Flawless execution from concept through tear-down
              </p>
            </div>

            <div className="space-y-8">
              {/* Event Production */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Event Production' } })}
                >
                  Technical Event Production
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Turnkey management of all technical vendors, load-in schedules, run-of-show cue sheets, and stage management to keep complex productions operating seamlessly.
                </p>
              </div>

              {/* Project Management */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Project Management' } })}
                >
                  Project Management & Oversight
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Rigorous budget control, venue risk assessments, authority permits, and timeline oversight to guarantee deliverables on time without compromising safety.
                </p>
              </div>

              {/* Pavilion Design */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Pavilion Design' } })}
                >
                  Custom Pavilion Engineering
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Structural design and full technical integration for large-scale outdoor pavilions, exhibition halls, and temporary domain structures.
                </p>
              </div>

              {/* Fabrication */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Fabrication' } })}
                >
                  In-House Custom Fabrication
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Skilled carpentry, metalwork, 3D CNC carving, and custom scenic painting to build unique event props, branded entry archways, and immersive environments.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Production Showcase Grid */}
          <div className="w-full xl:w-1/2 bg-gray-100 p-6 md:p-8 flex flex-col gap-4 relative z-10 justify-between">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-xl shadow-md">
                <img src={tech_eventprod} alt="Event Production" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-3 flex items-end">
                  <span className="text-white font-bold text-xs">Technical Production</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-md">
                <img src={tech_projectmg} alt="Project Management" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-3 flex items-end">
                  <span className="text-white font-bold text-xs">Project Oversight</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-md">
                <img src={tech_pavilion} alt="Pavilion Design" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-3 flex items-end">
                  <span className="text-white font-bold text-xs">Pavilion Engineering</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-md">
                <img src={tech_fabrication} alt="Fabrication" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-3 flex items-end">
                  <span className="text-white font-bold text-xs">Custom Fabrication</span>
                </div>
              </div>
            </div>
            
            <div className="relative group rounded-2xl overflow-hidden shadow-lg mt-2 flex-1 min-h-[180px]">
              <img src={t4} alt="Production Control" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. Digital & Web Infrastructure */}
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
                Digital & Web Infrastructure
              </h2>
              <p className="text-[#f59e0b] font-semibold text-sm tracking-wide uppercase">
                Robust digital architecture for registration & attendee engagement
              </p>
            </div>

            <div className="space-y-8">
              {/* Website Development */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Website Development' } })}
                >
                  Event Website & Portal Development
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Custom high-converting event landing pages, delegate registration portals, badge generation engines, and secure payment gateway integration.
                </p>
              </div>

              {/* Website Maintenance */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Website Maintenance' } })}
                >
                  Server & Infrastructure Maintenance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  High-capacity cloud server hosting, SSL encryption, load balancing for traffic spikes, and continuous technical support.
                </p>
              </div>

              {/* Mobile App Development */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Mobile App Development' } })}
                >
                  Custom Mobile Event Apps
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Dedicated iOS and Android mobile event applications with live agenda scheduling, speaker profiles, interactive floor maps, B2B matchmaking, and push notifications.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Digital Grid */}
          <div className="w-full xl:w-1/2 bg-gray-100 p-6 md:p-10 flex flex-col gap-4 relative z-10 justify-between min-h-[450px]">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <img src={tech_webdev} alt="Web Dev" className="w-full aspect-square object-cover rounded-xl shadow-md mb-2" />
                <span className="text-[0.7rem] font-bold text-gray-600 text-center">Web Portals</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={tech_webmain} alt="Web Maintenance" className="w-full aspect-square object-cover rounded-xl shadow-md mb-2" />
                <span className="text-[0.7rem] font-bold text-gray-600 text-center">Server Care</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={tech_mobileapp} alt="Mobile App" className="w-full aspect-square object-cover rounded-xl shadow-md mb-2" />
                <span className="text-[0.7rem] font-bold text-gray-600 text-center">Event Apps</span>
              </div>
            </div>

            <div className="relative group rounded-2xl overflow-hidden shadow-lg flex-1 min-h-[200px] mt-2">
              <img src={t5} alt="Digital Technology" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-amber-500/20">
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Ready to Elevate Your Event's Technical Standards?
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              Partner with our expert technical engineers to bring precision, reliability, and cutting-edge AV power to your next activation.
            </p>
            <button
              onClick={() => navigate('/contact', { state: { service: 'Technical Services Consultation' } })}
              className="mt-4 inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-widest text-black bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:shadow-[0_8px_24px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:scale-105"
            >
              <Send size={16} className="rotate-45" />
              <span>REQUEST TECHNICAL QUOTE</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalServicesPage;
