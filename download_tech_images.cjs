const fs = require('fs');
const https = require('https');
const path = require('path');

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download image. Status code: ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
};

const images = [
  { name: 'tech_stage.jpg', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80' },
  { name: 'tech_rigging.jpg', url: 'https://images.unsplash.com/photo-1543364195-bfe6e4932397?w=800&q=80' },
  { name: 'tech_backdrop.jpg', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80' },
  { name: 'tech_draping.jpg', url: 'https://images.unsplash.com/photo-1507676184212-d0c30a38e8da?w=800&q=80' }
];

async function run() {
  const dir = path.join(__dirname, 'src', 'assets', 'images', 'technical');
  for (const img of images) {
    const filepath = path.join(dir, img.name);
    console.log(`Downloading ${img.name}...`);
    try {
      await downloadImage(img.url, filepath);
      console.log(`Successfully downloaded ${img.name}`);
    } catch (err) {
      console.error(`Error downloading ${img.name}:`, err.message);
    }
  }
}

run();
