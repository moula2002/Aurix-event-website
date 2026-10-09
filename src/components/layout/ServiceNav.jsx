import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ServiceNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    { name: 'Technical Services', path: '/services/technical' },
    { name: 'Creative Services', path: '/services/creative' },
    { name: 'Support Services', path: '/services/support' },
  ];

  return (
    <div className="flex justify-center px-6 mt-12 mb-16">
      <div className="inline-flex p-1.5 bg-gray-200/80 backdrop-blur-md rounded-full border border-gray-300/60 shadow-inner max-w-full overflow-x-auto no-scrollbar">
        {tabs.map((tab) => {
          const isActive = currentPath === tab.path;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 uppercase whitespace-nowrap ${
                isActive
                  ? 'bg-[#f59e0b] text-white shadow-md scale-105'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/60'
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceNav;
