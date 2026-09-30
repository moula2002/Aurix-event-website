const fs = require('fs');
const path = require('path');
const https = require('https');

const imageMap = [
  { file: 'src/components/sections/Services.jsx', url: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=800&auto=format&fit=crop', name: 'services-furniture-1', var: 'imgServicesFurniture1' },
  { file: 'src/components/sections/Services.jsx', url: 'https://images.unsplash.com/photo-1581428982868-e410dd4e1a92?q=80&w=800&auto=format&fit=crop', name: 'services-furniture-2', var: 'imgServicesFurniture2' },
  { file: 'src/components/sections/Services.jsx', url: 'https://images.unsplash.com/photo-1497369806509-66cbb41a4574?q=80&w=800&auto=format&fit=crop', name: 'services-furniture-3', var: 'imgServicesFurniture3' },
  { file: 'src/components/sections/Services.jsx', url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop', name: 'services-florist', var: 'imgServicesFlorist' },
  { file: 'src/components/sections/Services.jsx', url: 'https://images.unsplash.com/photo-1550974864-7c6f2a240c31?q=80&w=800&auto=format&fit=crop', name: 'services-gifts-1', var: 'imgServicesGifts1' },
  { file: 'src/components/sections/Services.jsx', url: 'https://images.unsplash.com/photo-1607083206869-4c767ba7b539?q=80&w=800&auto=format&fit=crop', name: 'services-gifts-2', var: 'imgServicesGifts2' },
  { file: 'src/components/sections/Services.jsx', url: 'https://images.unsplash.com/photo-1557004396-6663db15b3ea?q=80&w=800&auto=format&fit=crop', name: 'services-gifts-3', var: 'imgServicesGifts3' },
  { file: 'src/components/sections/Services.jsx', url: 'https://images.unsplash.com/photo-1545622830-6d80ff52f82c?q=80&w=800&auto=format&fit=crop', name: 'services-hosts', var: 'imgServicesHosts' },
  { file: 'src/components/sections/Services.jsx', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop', name: 'services-toilets', var: 'imgServicesToilets' },
  
  { file: 'src/components/sections/Hero.jsx', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop', name: 'hero-crowd', var: 'imgHeroCrowd' },
  { file: 'src/components/sections/Hero.jsx', url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop', name: 'hero-conference', var: 'imgHeroConference' },
  { file: 'src/components/sections/Hero.jsx', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop', name: 'hero-stage', var: 'imgHeroStage' },
  
  { file: 'src/components/sections/About.jsx', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop', name: 'about-celebration', var: 'imgAboutCelebration' }
];

const imgDir = path.join(__dirname, 'src', 'assets', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  const fileUpdates = {};

  for (const item of imageMap) {
    const destPath = path.join(imgDir, `${item.name}.jpg`);
    console.log(`Downloading ${item.name}...`);
    try {
      await download(item.url, destPath);
      
      if (!fileUpdates[item.file]) {
        fileUpdates[item.file] = {
          content: fs.readFileSync(item.file, 'utf8'),
          imports: []
        };
      }
      
      // Add import
      fileUpdates[item.file].imports.push(`import ${item.var} from '../../assets/images/${item.name}.jpg';`);
      
      // Replace URL with variable
      // Using literal replacement of the URL string within src="..."
      fileUpdates[item.file].content = fileUpdates[item.file].content.replace(`"${item.url}"`, `{${item.var}}`);

    } catch (e) {
      console.error(`Failed to download ${item.name}`, e);
    }
  }

  // Write updated files
  for (const [file, data] of Object.entries(fileUpdates)) {
    // Insert imports after the last import statement
    const lines = data.content.split('\n');
    let lastImportIndex = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        lastImportIndex = i;
      }
    }
    
    if (lastImportIndex !== -1) {
      lines.splice(lastImportIndex + 1, 0, ...data.imports);
    } else {
      lines.unshift(...data.imports);
    }
    
    fs.writeFileSync(file, lines.join('\n'));
    console.log(`Updated ${file}`);
  }
}

run();
