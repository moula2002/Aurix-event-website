const fs = require('fs');
const path = require('path');

const filePaths = [
  'src/components/sections/Hero.jsx',
  'src/components/sections/About.jsx',
  'src/components/sections/Services.jsx'
];

const imageMap = {
  // Hero Images
  '1540575467063-178a50c2df87': '1556761175-5973dc0f32e7', // Event Crowd -> Premium Conference Crowd
  '1505373877841-8d25f7d46678': '1515187029135-18ee286d815b', // Corporate Conference -> High End Stage
  '1514525253161-7a46d19cd819': '1526405822365-1d07c7cb6c5c', // Concert Stage -> Elegant Event Lighting

  // About Image
  '1533174000273-7d2243cba371': '1511578314322-379afb476865', // Sparklers -> Luxury Event/Gala Setup

  // Services - Furniture
  '1519167758481-83f550bb49b3': '1561501900-3701fa6a0864', // Furniture 1 -> Modern VIP Lounge
  '1527529482837-4698179dc6ce': '1581428982868-e410dd4e1a92', // Furniture 2 -> Elegant Seating
  '1522771731535-61a9fa6bc45e': '1497369806509-66cbb41a4574', // Furniture 3 -> Premium Banquet Hall

  // Services - Florist
  '1519225421980-715cb0215aed': '1501281668745-f7f57925c3b4', // Florist -> Luxury Floral Centerpiece

  // Services - Gifts
  '1549465220-1a8b9238cd48': '1550974864-7c6f2a240c31', // Gift 1 -> Premium Gift Box
  '1572981779307-38b8cabb2407': '1607083206869-4c767ba7b539', // Gift 2 -> Luxury Packaging
  '1610486804861-536f90bbdb9d': '1557004396-6663db15b3ea', // Gift 3 -> Corporate Swag Box

  // Services - Hosts
  '1521791136064-7986c2920216': '1545622830-6d80ff52f82c', // Hosts -> Professional Event Staff/Ushers

  // Services - Toilets/Handwash
  '1594916301362-e6191ef97e58': '1584622650111-993a426fbf0a' // Toilets -> Clean Modern Restroom/Wash Basin
};

for (const filePath of filePaths) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  for (const [oldId, newId] of Object.entries(imageMap)) {
    if (content.includes(oldId)) {
      content = content.replace(newId, oldId); // Just in case it was already replaced and we want to revert? No.
      content = content.replace(new RegExp(oldId, 'g'), newId);
      updated = true;
    }
  }

  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}
