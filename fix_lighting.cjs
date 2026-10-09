const fs = require('fs');
const https = require('https');
const path = require('path');

const techDir = path.join(__dirname, 'src', 'assets', 'images', 'technical');
const target = path.join(techDir, 'tech_lighting.jpg');
const url = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop';

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

downloadImage(url, target).then(() => {
  console.log('Successfully downloaded tech_lighting.jpg');
}).catch(err => {
  console.error(err);
});
