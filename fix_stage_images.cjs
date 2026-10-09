const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets', 'images', 'technical');

// Direct Unsplash CDN image IDs - relevant to each heading
const images = [
  {
    name: 'tech_stage.jpg',
    // Concert stage with dramatic lighting
    url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=1000&fit=crop&q=80'
  },
  {
    name: 'tech_rigging.jpg',
    // Stage rigging / lighting truss systems
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=1000&fit=crop&q=80'
  },
  {
    name: 'tech_backdrop.jpg',
    // LED wall / event backdrop
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=1000&fit=crop&q=80'
  },
  {
    name: 'tech_draping.jpg',
    // Theater stage curtains / draping
    url: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=800&h=1000&fit=crop&q=80'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    
    function get(url) {
      https.get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          const size = fs.statSync(dest).size;
          console.log(`✅ ${path.basename(dest)} -> ${size} bytes`);
          resolve();
        });
      }).on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }
    
    get(url);
  });
}

(async () => {
  for (const img of images) {
    const dest = path.join(dir, img.name);
    try {
      await download(img.url, dest);
    } catch (err) {
      console.error(`❌ Failed ${img.name}: ${err.message}`);
    }
  }
  console.log('Done!');
})();
