const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Services.jsx', 'utf8');

// Fix border colors
content = content.replace(/border-white\/10/g, 'border-gray-200');

// Add hover effects to the service cards
content = content.replace(/className="bg-white border border-gray-200 rounded-3xl/g, 'className="bg-white border border-gray-200 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-500');

fs.writeFileSync('src/components/sections/Services.jsx', content);
