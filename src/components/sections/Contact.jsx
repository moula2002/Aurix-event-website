import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import AnimatedSection from '../layout/AnimatedSection';
import SectionHeader from '../layout/SectionHeader';
import SectionTitle from '../layout/SectionTitle';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Ax Aurix Events LLC SPC\nLevel 5 The Hub WTC Mall\nAbu Dhabi',
  },
  {
    icon: Phone,
    label: 'Call Us Directly',
    value: 'You may call or whatsapp on\n+971 54 574 5761',
    isLink: 'tel:+971545745761',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'contact@axaurix.com',
    isLink: 'mailto:contact@axaurix.com',
  },
];

const inputClasses =
  'w-full bg-transparent border-2 border-gray-100 focus:border-[#f59e0b] rounded-xl px-4 py-4 outline-none transition-colors duration-300 font-medium text-gray-900 placeholder-transparent';

const Contact = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState('idle');
  const [values, setValues] = useState({ name: '', email: '', phone: '', service: location.state?.service || '', message: '' });

  const handleChange = (e) => setValues(v => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.name || !values.email) return;
    setStatus('submitting');
    try {
      const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit', hour12: true
      }).format(new Date());

      const res = await fetch('https://aurix-event-server.onrender.com/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, date: formattedDate })
      });
      if (res.ok) {
        setStatus('success');
        setValues({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={`${isHome ? 'py-24' : 'pb-28'} bg-[#fefefe] relative overflow-hidden`}>
      
      {/* ── Premium Background Decorations ── */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-gradient-to-bl from-[#fff7ed] to-transparent opacity-90 z-0 pointer-events-none rounded-bl-[100%]" />
      <div className="absolute bottom-[10%] left-[-5%] w-[40vw] h-[60vh] bg-gradient-to-tr from-[#ffedd5] via-[#ffedd5]/50 to-transparent z-0 pointer-events-none rounded-tr-[100%] rounded-br-[20%]" />
      <div className="absolute top-[40%] right-12 z-0 opacity-40 pointer-events-none hidden md:block" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1.5px, transparent 1.5px)', backgroundSize: '24px 24px', width: '150px', height: '150px' }}></div>
      <div className="absolute bottom-[20%] left-12 z-0 opacity-20 pointer-events-none hidden lg:block" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1.5px, transparent 1.5px)', backgroundSize: '24px 24px', width: '100px', height: '100px' }}></div>

      <div className="relative z-10">
        {isHome ? (
          <div className="max-w-7xl mx-auto px-6 mb-16 pt-12">
            <SectionTitle subtitle="GET IN" title="TOUCH" />
          </div>
        ) : (
          <SectionHeader title="CONTACT" />
        )}
      </div>

      <div className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 ${!isHome ? 'mt-20' : ''}`}>

        {/* Left info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <p className="text-gray-500 text-lg mb-12 leading-relaxed max-w-lg mt-10">
            Let's create an unforgettable experience together. Reach out to our team of experts and let's discuss your vision.
          </p>

          <div className="flex flex-col gap-6">
            {contactInfo.map(({ icon: Icon, label, value, isLink }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * idx + 0.3, duration: 0.6 }}
                className="flex items-start gap-5 group cursor-pointer"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#f59e0b] group-hover:bg-[#f59e0b] group-hover:text-black transition-all duration-300 shadow-sm group-hover:shadow-[0_8px_20px_rgba(245,158,11,0.3)]">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                  {isLink ? (
                    <a href={isLink} className="text-base font-bold text-gray-900 hover:text-[#f59e0b] transition-colors whitespace-pre-line">
                      {value}
                    </a>
                  ) : (
                    <p className="text-base font-bold text-gray-900 whitespace-pre-line leading-relaxed">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden"
        >
          {/* Gold top bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706]" />

          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-wider mb-8">
              Send a Message
            </h3>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {[
                { name: 'name', label: 'Full Name', type: 'text' },
                { name: 'email', label: 'Email Address', type: 'email' },
                { name: 'phone', label: 'Phone Number', type: 'tel' },
                { name: 'service', label: 'Service Inquiry', type: 'text' },
              ].map(({ name, label, type }) => (
                <div key={name} className="relative">
                  <label
                    htmlFor={name}
                    className={`absolute left-4 transition-all duration-300 font-medium pointer-events-none z-10 ${
                      focused === name || values[name]
                        ? '-top-2.5 text-xs text-[#f59e0b] bg-white px-1'
                        : 'top-4 text-sm text-gray-400'
                    }`}
                  >
                    {label}
                  </label>
                  <input
                    id={name}
                    type={type}
                    name={name}
                    value={values[name]}
                    onChange={handleChange}
                    onFocus={() => setFocused(name)}
                    onBlur={() => setFocused(null)}
                    className={inputClasses}
                    required={name === 'name' || name === 'email'}
                  />
                </div>
              ))}

              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 font-medium pointer-events-none z-10 ${
                    focused === 'message' || values.message
                      ? '-top-2.5 text-xs text-[#f59e0b] bg-white px-1'
                      : 'top-4 text-sm text-gray-400'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={values.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {status === 'success' && (
                <div className="text-green-600 font-bold bg-green-50 p-4 rounded-xl border border-green-200">
                  Thank you! Your message has been sent successfully. Our team will contact you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="text-red-600 font-bold bg-red-50 p-4 rounded-xl border border-red-200">
                  Oops! Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full bg-gray-900 hover:bg-[#f59e0b] text-white hover:text-black font-bold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-3 transition-colors duration-400 mt-2 overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] disabled:opacity-70"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                <span className="relative z-10">{status === 'submitting' ? 'Sending...' : 'Submit Request'}</span>
                {status !== 'submitting' && <Send size={16} className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
