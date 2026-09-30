const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets', 'images', 'portfolio');

const images = [
  { url: 'https://picsum.photos/seed/corpevent1/800/800', name: 'work-4.jpg' },
  { url: 'https://picsum.photos/seed/wedding1/800/800', name: 'work-6.jpg' },
  { url: 'https://picsum.photos/seed/wedding2/800/800', name: 'work-12.jpg' },
];

images.forEach((img) => {
  const file = fs.createWriteStream(path.join(dir, img.name));
  
  https.get(img.url, (response) => {
    if (response.statusCode === 301 || response.statusCode === 302) {
      https.get(response.headers.location, (res) => {
        res.pipe(file);
      });
    } else {
      response.pipe(file);
    }
  });
});
