import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import AnimatedSection, { AnimatedItem } from '../layout/AnimatedSection';
import SectionHeader from '../layout/SectionHeader';
import SectionTitle from '../layout/SectionTitle';

import work1 from '../../assets/images/portfolio/work-1.jpg';
import work2 from '../../assets/images/portfolio/work-2.jpg';
import work3 from '../../assets/images/portfolio/work-3.jpg';
import work4 from '../../assets/images/portfolio/work-4.jpg';
import work5 from '../../assets/images/portfolio/work-5.jpg';
import work6 from '../../assets/images/portfolio/work-6.jpg';
import work7 from '../../assets/images/portfolio/work-7.jpg';
import work8 from '../../assets/images/portfolio/work-8.jpg';
import work9 from '../../assets/images/portfolio/work-9.jpg';
import work10 from '../../assets/images/portfolio/work-10.jpg';
import work11 from '../../assets/images/portfolio/work-11.jpg';
import work12 from '../../assets/images/portfolio/work-12.jpg';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const location = useLocation();
  const isHome = location.pathname === '/';

  const filters = ['All', 'Corporate Events', 'Conferences', 'Exhibitions', 'Activations', 'Brand Launches', 'Live Events'];

  const projects = [
    { id: 1, category: 'Corporate Events', title: 'Tech Summit 2025', image: work1 },
    { id: 2, category: 'Live Events',  title: 'Summer Festival',  image: work2 },
    { id: 3, category: 'Exhibitions',  title: 'Auto Expo',    image: work3 },
    { id: 4, category: 'Corporate Events', title: 'Annual Gala',      image: work4 },
    { id: 5, category: 'Conferences',  title: 'Global Leaders',       image: work5 },
    { id: 6, category: 'Brand Launches',  title: 'Perfume Launch',    image: work6 },
    { id: 7, category: 'Corporate Events', title: 'Award Ceremony',   image: work7 },
    { id: 8, category: 'Activations',  title: 'Pop-up Experience',  image: work8 },
    { id: 9, category: 'Exhibitions',  title: 'Tech Pavilion', image: work9 },
    { id: 10, category: 'Conferences', title: 'Medical Symposium',  image: work10 },
    { id: 11, category: 'Live Events',  title: 'Indie Showcase',  image: work11 },
    { id: 12, category: 'Activations',  title: 'Mall Activation', image: work12 },
  ];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const displayProjects = isHome ? filtered.slice(0, 4) : filtered;

  return (
    <section id="gallery" className={`py-12 bg-gray-50 relative overflow-hidden ${!isHome ? 'pt-0' : ''}`}>
      {isHome ? (
        <div className="max-w-7xl mx-auto px-6 pt-12 mb-14">
          <SectionTitle subtitle="OUR" title="GALLERY" />
        </div>
      ) : (
        <div className="mb-14">
          <SectionHeader title="GALLERY" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {!isHome && (
          <div className="flex flex-col md:flex-row justify-center items-center mb-14 gap-6">

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden ${
                  filter === f
                    ? 'bg-[#f59e0b] text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                    : 'bg-white text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-[#f59e0b]/50'
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-[#f59e0b] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
            </motion.div>
          </div>
        )}

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
                style={{ willChange: "transform, opacity" }}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Image bg placeholder */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle dark overlay for readability */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>

                {/* Category pill */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/80 text-[0.6rem] font-bold uppercase tracking-widest border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-[#f59e0b]/85 flex flex-col items-center justify-center p-6 z-10"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4"
                  >
                    <Search size={20} className="text-black" />
                  </motion.div>
                  <h3 className="font-black text-xl uppercase tracking-wider text-black text-center mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold tracking-widest uppercase text-black/60">
                    {project.category}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-black/70 text-xs font-bold uppercase tracking-wider hover:text-black transition-colors group/link">
                    <span>View Project</span>
                    <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>

                {/* Bottom gradient text */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent z-5 translate-y-0 group-hover:translate-y-full transition-transform duration-400">
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        {isHome && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex justify-center mt-14"
            style={{ willChange: "transform, opacity" }}
          >
            <Link to="/gallery" className="group flex items-center gap-3 px-8 py-3.5 border-2 border-gray-200 hover:border-[#f59e0b] text-gray-900 hover:text-[#f59e0b] font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              View More
              <ExternalLink size={14} className="group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;
