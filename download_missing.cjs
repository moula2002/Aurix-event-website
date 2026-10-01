const fs = require('fs');
const https = require('https');
const path = require('path');

const techDir = path.join(__dirname, 'src', 'assets', 'images', 'technical');
const creDir = path.join(__dirname, 'src', 'assets', 'images', 'creative');

const missing = [
  { url: 'https://picsum.photos/seed/tech_lighting/800/800', path: path.join(techDir, 'tech_lighting.jpg') },
  { url: 'https://picsum.photos/seed/tech_stage/800/800', path: path.join(techDir, 'tech_stage.jpg') },
  { url: 'https://picsum.photos/seed/tech_draping/800/800', path: path.join(techDir, 'tech_draping.jpg') },
  { url: 'https://picsum.photos/seed/tech_broadcast/800/800', path: path.join(techDir, 'tech_broadcast.jpg') },
  { url: 'https://picsum.photos/seed/tech_pavilion/800/800', path: path.join(techDir, 'tech_pavilion.jpg') },
  { url: 'https://picsum.photos/seed/cre_holo/800/800', path: path.join(creDir, 'cre_holo.jpg') },
  { url: 'https://picsum.photos/seed/cre_interactive/800/800', path: path.join(creDir, 'cre_interactive.jpg') }
];

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 308) {
        downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      } else if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function run() {
  for (const img of missing) {
    console.log(`Downloading ${img.path}...`);
    try {
      await downloadImage(img.url, img.path);
    } catch (e) {
      console.error(e);
    }
  }
  console.log('Done.');
}

run();
