const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Convert dark theme classes to light theme classes
  content = content.replace(/bg-neutral-950/g, 'bg-white');
  content = content.replace(/bg-neutral-900/g, 'bg-gray-50');
  content = content.replace(/bg-\[\#050505\]/g, 'bg-white');
  content = content.replace(/bg-black\/50/g, 'bg-white/50');
  
  // Specific fix for Navbar from previous change
  content = content.replace(/bg-\[\#050505\]\/95/g, 'bg-white/95');
  content = content.replace(/border-gray-900/g, 'border-gray-100');
  
  // Text colors
  content = content.replace(/text-white/g, 'text-gray-900');
  content = content.replace(/text-gray-400/g, 'text-gray-500');
  content = content.replace(/text-gray-300/g, 'text-gray-600');
  
  // Revert Hero.jsx specific dark mode elements
  content = content.replace(/text-shadow:\s*'0 10px 30px rgba\(245,158,11,0\.2\)'/g, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, 'src/components'));
