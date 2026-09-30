import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../layout/AnimatedSection';

const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

const team = [
  { name: 'John Doe',     role: 'Event Director',     gradient: 'from-gray-900 to-gray-700' },
  { name: 'Jane Smith',   role: 'Creative Head',       gradient: 'from-amber-900 to-amber-700' },
  { name: 'Mike Johnson', role: 'Production Manager',  gradient: 'from-slate-900 to-slate-700' },
  { name: 'Sarah Wilson', role: 'Client Relations',    gradient: 'from-zinc-900 to-zinc-700' },
];

const socials = [
  { icon: FacebookIcon },
  { icon: TwitterIcon },
  { icon: LinkedinIcon },
  { icon: InstagramIcon },
];

const Experts = () => {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute right-8 top-16 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#f59e0b 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          width: '200px',
          height: '200px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection className="flex flex-col items-center text-center mb-16">
          <span className="section-label mb-4">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase">
            Meet Our <span className="text-[#f59e0b]">Experts</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md text-base leading-relaxed">
            The passionate professionals behind every extraordinary event we create.
          </p>
        </AnimatedSection>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer"
            >
              {/* Profile image area */}
              <div className={`w-full aspect-[3/4] bg-gradient-to-br ${member.gradient} relative overflow-hidden`}>

                {/* Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                  }}
                />

                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-black text-white/20 select-none">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Social icons — slide up on hover */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2.5 pb-5 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  {socials.map(({ icon: Icon }, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      initial={{ scale: 0, y: 10 }}
                      whileHover={{ scale: 1.15 }}
                      whileInView={{ scale: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="w-8 h-8 rounded-full bg-[#f59e0b] text-black flex items-center justify-center hover:bg-white hover:text-[#f59e0b] transition-colors duration-200 shadow-lg"
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>

                {/* Gold line top */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info area */}
              <div className="p-5 text-center border-t-[3px] border-[#f59e0b] bg-white relative z-10">
                <h3 className="font-black text-lg text-gray-900 uppercase tracking-wide mb-0.5 group-hover:text-[#f59e0b] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
