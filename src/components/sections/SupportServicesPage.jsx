import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../layout/SectionHeader';

import imgA from '../../assets/images/services/toilet_open_1.png';
import imgB from '../../assets/images/services/toilet_open_2.png';
import imgC from '../../assets/images/services/toilet_standard.png';
import imgD from '../../assets/images/services/handwash_stations.png';

import f1 from '../../assets/images/services/furniture_1.png';
import f2 from '../../assets/images/services/furniture_2.png';
import f3 from '../../assets/images/services/furniture_3.png';
import f4 from '../../assets/images/services/furniture_4.png';
import f5 from '../../assets/images/services/furniture_5.png';
import f6 from '../../assets/images/services/furniture_6.png';

import g1 from '../../assets/images/services/gift_usb.png';
import g2 from '../../assets/images/services/gift_keyholder.png';
import g3 from '../../assets/images/services/gift_luggagetag.png';
import g4 from '../../assets/images/services/gift_set_showcase.jpg';
import g5 from '../../assets/images/services/hostesses_showcase.jpg';

const SupportServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <SectionHeader title="SUPPORT SERVICES" />
      
      <div className="max-w-4xl mx-auto text-center px-6 mt-20 mb-16">
        <p className="text-xl text-gray-600 leading-relaxed">
          The difference between a good event and a great one lies in the details. Our comprehensive support services ensure that every aspect of your event—from VIP comfort to logistical necessities—is handled with uncompromising premium quality.
        </p>
      </div>

      {/* Featured Service: Furniture Rentals & Floral Design */}
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
              <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Event Support Services</h2>
            </div>

            <div className="space-y-10">
              
              {/* Furniture Rentals */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-4 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Furniture Rentals' } })}
                >
                  Furniture Rentals
                </h3>
                <div className="flex flex-col gap-2 mb-6">
                  <a href="https://tiptopevents.ae/furniture-rentals-services/" target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] font-medium underline hover:text-[#d97706] transition-colors text-sm break-words w-fit">
                    https://tiptopevents.ae/furniture-rentals-services/
                  </a>
                  <a href="https://www.purrpleorryx.com/furniture-rental-dubai" target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] font-medium underline hover:text-[#d97706] transition-colors text-sm break-words w-fit">
                    https://www.purrpleorryx.com/furniture-rental-dubai
                  </a>
                </div>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed text-justify">
                  <p>
                    As the tourism industry and corporate sector grows rapidly in the Middle East, the demand for customized events increases exponentially. Event organizers strive to provide a more engaging high-quality experience and memorable occasion.
                  </p>
                  <p>
                    From conferences and social events to festivals and exhibition, we provide a wide variety a rental solutions for all your event requirements, including Furniture, Tents, Audio- visual, Lighting and more. There are limitless possibilities to how you can visually and functionally combine props and furniture as part of our high-quality event rental solutions.
                  </p>
                  <p>
                    Renting Furniture has proven to be a more efficient option during event production. During setup of an event, renting incurs less costs while providing more options to select from a wide range of options. We cater to exhibitions, social events, community events, corporate events and many more. As a company, our collective goal is to create the best possible experience for our clients.
                  </p>
                </div>
              </div>

              {/* Florist & Planters */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-4 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Florist & Planters - Event Design' } })}
                >
                  Florist & Planters - Event Design
                </h3>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed text-justify">
                  <p>
                    We are here to help make every moment a special one and to provide an experience like no other. From creative concept development to full event design and management, we're a one-stop shop for all your event design and production needs. We truly believe that your event should showcase your style, your message and your image. Our floral designs and produces events of all sizes.
                  </p>
                  <p>
                    We can produce and manage every aspect of an event. No project is too big or small for us. Our production competencies include : staging, lighting, content production, installations, activations, furniture rentals, décor rentals and floral design. We take great pride in producing each project with a fresh vision and unique approach.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
          {/* Right Side: Images Grid (3 rows, 2 cols) */}
          <div className="w-full xl:w-1/2 grid grid-cols-2 grid-rows-3 relative z-10 min-h-[600px] xl:min-h-auto gap-1 bg-gray-100 p-1">
            <img src={f1} alt="Event Setup" className="w-full h-full object-cover rounded-sm" />
            <img src={f2} alt="Event Setup" className="w-full h-full object-cover rounded-sm" />
            <img src={f3} alt="Event Setup" className="w-full h-full object-cover rounded-sm" />
            <img src={f4} alt="Event Setup" className="w-full h-full object-cover rounded-sm" />
            <img src={f5} alt="Event Setup" className="w-full h-full object-cover rounded-sm" />
            <img src={f6} alt="Event Setup" className="w-full h-full object-cover rounded-sm" />
          </div>

        </motion.div>
      </div>

      {/* Featured Service: Corporate Gifting & Hostesses */}
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

            <div className="space-y-10">
              
              {/* Corporate Gifting */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-4 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Corporate Gifting' } })}
                >
                  Corporate Gifting
                </h3>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed text-justify">
                  <p>
                    Most organizations opt for personalized gifts to show their appreciation for their clients and employees. It is a great way for corporates to promote, advertise & showcase their brand. We can help save time and energy thinking about gift ideas for your clients or employees by letting us do that for you.
                  </p>
                  <p>
                    We can guide you through the process of picking what to include in the gift boxes, based on your budget and occasion. If you prefer to send them directly to each recipient we can do that for your convenience as well. We want to ensure you have a stress free gifting experience by efficiently managing client expectations and timelines while working with a given budget.
                  </p>
                  <p>
                    We offer our clients all types of corporate gift options like customized Diaries/Planners, Fashion Accessories, Wallets, Pens and more, to create a lasting impression about your brand and business.
                  </p>
                </div>
              </div>

              {/* Hosts / Hostesses */}
              <div>
                <h3 
                  className="font-bold text-gray-900 text-2xl mb-4 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                  onClick={() => navigate('/contact', { state: { service: 'Hosts / Hostesses' } })}
                >
                  Hosts/ Hostesses
                </h3>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed text-justify">
                  <p>
                    We specialize in providing experienced, friendly event hosts to ensure that your event runs smoothly. Whether you need an usher, registration staff or models, we have the ideal person for the role!
                  </p>
                </div>
              </div>

            </div>
          </div>
          
          {/* Right Side: Images Collage */}
          <div className="w-full xl:w-1/2 bg-white p-6 md:p-10 flex flex-col gap-4 relative z-10 min-h-[500px]">
            {/* Top Row: 3 images */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <img src={g1} alt="USB Drive" className="w-full aspect-square object-cover rounded-md shadow-md mb-2" />
                <span className="text-[0.6rem] text-gray-400">In-style Genuine Leather - 16g USB Drive</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={g2} alt="Key Holder" className="w-full aspect-square object-cover rounded-md shadow-md mb-2" />
                <span className="text-[0.6rem] text-gray-400">Saffiano Leather Car Key Holder</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={g3} alt="Luggage Tag" className="w-full aspect-square object-cover rounded-md shadow-md mb-2" />
                <span className="text-[0.6rem] text-gray-400">Personalised Luggage Tag</span>
              </div>
            </div>
            {/* Bottom Row: 2 images */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center justify-center">
                <img src={g4} alt="Corporate Gifting Set" className="w-full aspect-[4/3] object-cover rounded-xl shadow-md" />
              </div>
              <div className="flex items-center justify-center">
                <img src={g5} alt="Event Hostesses" className="w-full aspect-[4/3] object-cover rounded-xl shadow-md" />
              </div>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Featured Service: Portable Toilets Detailed Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row relative"
        >
          {/* Subtle background decoration */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-100/50 pointer-events-none rounded-l-full blur-3xl opacity-50"></div>

          {/* Left Side: Images Grid */}
          <div className="w-full lg:w-5/12 p-8 md:p-12 lg:pr-8 grid grid-cols-2 gap-6 items-start relative z-10">
            {/* Image A */}
            <div className="relative group">
              <img src={imgA} alt="Merlin Ultra Toilets" className="w-full aspect-[4/5] object-cover rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300 bg-gray-100" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center font-black text-gray-900 shadow-sm text-lg">A</div>
            </div>
            
            {/* Image B */}
            <div className="relative group mt-12">
              <img src={imgB} alt="Executive Portaloos" className="w-full aspect-[4/5] object-cover rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300 bg-gray-100" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center font-black text-gray-900 shadow-sm text-lg">B</div>
            </div>

            {/* Image C */}
            <div className="relative group">
              <img src={imgC} alt="Chemical Toilets" className="w-full aspect-[4/5] object-cover rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300 bg-gray-100" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center font-black text-gray-900 shadow-sm text-lg">C</div>
            </div>

            {/* Image D */}
            <div className="relative group mt-12">
              <img src={imgD} alt="Handwash Stations" className="w-full aspect-square object-cover rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300 bg-gray-100" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center font-black text-gray-900 shadow-sm text-lg">D</div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-7/12 p-8 md:p-12 lg:pl-16 relative z-10 flex flex-col justify-center">
            
            <div className="mb-10">
              <h2 
                className="text-3xl font-black text-gray-900 tracking-tight mb-2 cursor-pointer hover:text-[#f59e0b] transition-colors inline-block"
                onClick={() => navigate('/contact', { state: { service: 'Portable Toilets & Hand Wash Stations' } })}
              >
                Portable Toilets & Hand Wash Stations
              </h2><br/>
              <a href="https://portablesanitationcompany.com/" target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] font-medium underline hover:text-[#d97706] transition-colors">
                https://portablesanitationcompany.com/
              </a>
            </div>

            <div className="space-y-10">
              
              {/* Item A */}
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">A. Merlin Ultra Toilets</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Merlin Ultra Portable Toilets- The reliable name trusted by the market for durable rental / hiring used at construction sites or mega events. Merlin Ultra units are known for their durability and high build quality. Available in 110L water and 390L waste tank specifications, they provide 800 flush capacity per usage cycle.
                </p>
              </div>

              {/* Item B */}
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">B. Executive Portaloos</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  The eco-friendly and pocket friendly option for customers who are looking for long term rentals. 110L water and 390L waste tank give you an 800 flush capacity per usage cycle, making it more eco friendly with lesser water consumption.
                </p>
              </div>

              {/* Item C */}
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">C. Chemical Toilets</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  For budget and eco friendly toilets, we recommend "Chemical Toilets". We are the first exclusive supplier and manufacturer for portable toilets which helps us ensure quality of service.
                </p>
              </div>

              {/* Item D */}
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">D. Handwash Stations</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify mb-4">
                  This is a self contained free standing Portable FR Plastic Hand wash station which does not need electricity to operate with following features:
                </p>
                <ul className="text-gray-600 text-sm leading-relaxed list-disc list-inside space-y-1 ml-2">
                  <li>90 L Fresh water tank</li>
                  <li>90 L Waste water tank</li>
                  <li>Foot Pump operated water flow</li>
                  <li>Waste-water level indicator to maintain tank level capacity</li>
                  <li>Easy water inlet with chained cap</li>
                  <li>Tissue Dispenser</li>
                  <li>Soap Dispenser</li>
                </ul>
              </div>

            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default SupportServicesPage;
