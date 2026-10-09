const fs = require('fs');
const https = require('https');
const path = require('path');

const techDir = path.join(__dirname, 'src', 'assets', 'images', 'technical');
const creDir = path.join(__dirname, 'src', 'assets', 'images', 'creative');
const servDir = path.join(__dirname, 'src', 'assets', 'images', 'services');

const fallbacks = [
  {
    path: path.join(creDir, 'cre_holo.jpg'),
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop'
  }
];

function downloadImage(url, dest) {
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

async function verify() {
  const dirs = [techDir, creDir, servDir];
  let errors = 0;
  for (const f of fallbacks) {
    if (!fs.existsSync(f.path) || fs.statSync(f.path).size === 0) {
      console.log(`Downloading fallback for ${path.basename(f.path)}...`);
      await downloadImage(f.url, f.path);
    }
  }

  for (const dir of dirs) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isFile()) {
        const size = fs.statSync(fullPath).size;
        if (size === 0) {
          console.error(`ERROR: ${file} is 0 bytes!`);
          errors++;
        } else {
          console.log(`OK: ${file} (${(size / 1024).toFixed(1)} KB)`);
        }
      }
    }
  }
  console.log(`Verification completed with ${errors} errors.`);
}

verify();
