import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import AnimatedSection, { AnimatedItem } from '../layout/AnimatedSection';

import SectionHeader from '../layout/SectionHeader';
import SectionTitle from '../layout/SectionTitle';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    fetch('https://aurix-event-server.onrender.com/api/gallery')
      .then(res => res.json())
      .then(data => {
        const mapped = data.map(item => ({
          id: item._id,
          category: item.category,
          title: item.title,
          image: item.imageBase64 || (item.imageUrl ? `https://aurix-event-server.onrender.com${item.imageUrl}` : '')
        }));
        setProjects(mapped);
      })
      .catch(err => console.error('Failed to fetch gallery:', err));
  }, []);

  const displayProjects = isHome ? projects.slice(0, 4) : projects;

  return (
    <>
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
          


          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {displayProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  layoutId={`project-container-${project.id}`}
                  onClick={() => setSelectedProject(project)}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-[#f59e0b] transition-colors bg-white/10 rounded-full p-2 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <motion.div
              layoutId={`project-container-${selectedProject.id}`}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-3/5 h-64 md:h-auto">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white">
                <span className="text-[#f59e0b] font-bold tracking-widest uppercase text-xs mb-4 inline-block">{selectedProject.category}</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">{selectedProject.title}</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Experience the flawless execution and exceptional creativity behind our {selectedProject.title.toLowerCase()}. We deliver world-class event solutions tailored to perfection from concept to reality.
                </p>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#111827] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#f59e0b] hover:text-black transition-all duration-300 w-max">
                  Book Similar Event
                  <ExternalLink size={14} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
