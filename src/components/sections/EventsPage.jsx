import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Car } from 'lucide-react';
import SectionHeader from '../layout/SectionHeader';
import { Link } from 'react-router-dom';

import imgGala from '../../assets/images/portfolio/event-conference.jpg';
import imgCar from '../../assets/images/portfolio/event-carlaunch.jpg';

// Sporting collage images
import sportGolf from '../../assets/images/portfolio/event-sporting.jpg';
import sportSoccer from '../../assets/images/portfolio/work-8.jpg';
import sportArena from '../../assets/images/portfolio/sport-arena.jpg';
import sportMotorsport from '../../assets/images/portfolio/dubai_autodrome.jpg';
import sportAwards from '../../assets/images/portfolio/sport-awards.jpg';

const events = [
  {
    icon: Star,
    name: 'Conferences, Award Ceremonies & Gala Dinners',
    desc: 'From award ceremonies and gala opening or closing dinners to fundraisers, corporate parties, celebrations, weddings and fashion shows, our team delivers memorable events indoors or outdoors, large or small.\n\nWe provide complete technical production for conferences and meetings, from small meetings to full-scale conferences with plenary sessions and breakout rooms. Our experienced technicians, designers and producers focus on quality and professional event delivery.',
    gradient: 'from-amber-400 via-orange-400 to-orange-500',
    lightBg: 'bg-amber-50',
    textAccent: 'text-amber-600',
    borderAccent: 'border-amber-200',
    image: imgGala,
  },
  {
    icon: Car,
    name: 'Car Launches & Retail Brand Activations',
    desc: 'We provide AV support, stage design and content creation for car launches and retail brand activations. From simple curtain reveals to complex theatrical presentations, we coordinate lighting, staging and synchronized reveal moments to create a memorable experience for the audience.',
    gradient: 'from-rose-400 via-red-400 to-red-500',
    lightBg: 'bg-rose-50',
    textAccent: 'text-rose-600',
    borderAccent: 'border-rose-200',
    image: imgCar,
  },
  {
    icon: Trophy,
    name: 'International Sporting Events',
    desc: 'We support a wide range of international sporting events, including golf, beach soccer, polo, motorsports, horse racing, marathons, triathlons and tennis. Our services include PA systems, indoor and outdoor AV, lighting, staging, on-site branding, project management and technical support.',
    gradient: 'from-blue-400 via-indigo-400 to-indigo-600',
    lightBg: 'bg-blue-50',
    textAccent: 'text-blue-600',
    borderAccent: 'border-blue-200',
    isCollage: true,
    images: [sportMotorsport, sportGolf, sportSoccer, sportArena, sportAwards]
  }
];

const EventsPage = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <SectionHeader title="EVENTS" />

      <div className="w-full py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12"
          >
            <div className="flex flex-col gap-4 max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-tight leading-none">
                Our Event Categories
              </h2>
              <div className="flex items-center gap-3">
                <div className="h-1 w-20 rounded-full bg-[#f59e0b]" />
              </div>
            </div>
            <div className="flex flex-col gap-6 max-w-lg">
              <p className="text-gray-500 text-xl leading-relaxed">
                From high-profile corporate summits to international sporting spectacles, our expertise spans across a diverse range of premium event categories.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-10">
            {events.map((event, idx) => {
              const Icon = event.icon;
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
                  {event.isCollage ? (
                    // Collage Layout
                    <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px] p-4 bg-gray-100">
                      <div className="grid grid-cols-2 grid-rows-3 gap-3 w-full h-full">
                        <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-sm group">
                          <img src={event.images[0]} alt="Motorsport Event" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="relative overflow-hidden rounded-2xl shadow-sm group">
                          <img src={event.images[1]} alt="Golf Tournament" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="relative overflow-hidden rounded-2xl shadow-sm group">
                          <img src={event.images[2]} alt="Beach Soccer" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="relative overflow-hidden rounded-2xl shadow-sm group">
                          <img src={event.images[3]} alt="Sports Arena" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="relative overflow-hidden rounded-2xl shadow-sm group">
                          <img src={event.images[4]} alt="Sports Awards" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-8 z-10 pointer-events-none">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${event.gradient} flex items-center justify-center text-white shadow-xl`}>
                          <Icon size={24} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Standard Single Image Layout
                    <div className="w-full md:w-1/2 relative min-h-[280px] md:min-h-[420px] overflow-hidden group">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-20`} />
                      <div className="absolute bottom-6 left-6 z-10">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${event.gradient} flex items-center justify-center text-white shadow-xl`}>
                          <Icon size={24} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="w-full md:w-1/2 p-8 md:p-14 lg:p-16 flex flex-col justify-center gap-6">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">{event.name}</h3>
                    <div className="text-gray-500 text-base md:text-lg leading-relaxed space-y-4">
                      {event.desc.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-2 text-sm font-black px-6 py-3 rounded-full bg-gradient-to-r ${event.gradient} text-white w-fit shadow-md hover:shadow-lg transition-shadow`}
                    >
                      Plan an Event
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
