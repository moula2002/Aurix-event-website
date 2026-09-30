const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Replace all instances of red- with amber-, but be careful not to replace parts of other words if any, though red- is pretty specific to Tailwind.
  // We'll replace bg-red-, text-red-, border-red-, shadow-red-, from-red-, via-red-, to-red-, ring-red-
  const regex = /\b(bg|text|border|shadow|from|via|to|ring)-red-/g;
  const newContent = content.replace(regex, '$1-amber-');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, 'src'));
