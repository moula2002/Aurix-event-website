const fs = require('fs');
const https = require('https');
const path = require('path');

const clientDir = path.join(__dirname, 'src', 'assets', 'images', 'clients');
if (!fs.existsSync(clientDir)) {
  fs.mkdirSync(clientDir, { recursive: true });
}

const clients = [
  { name: 'inbev', url: 'https://icon.horse/icon/ab-inbev.com' },
  { name: 'addinol', url: 'https://icon.horse/icon/addinol.de' },
  { name: 'airtel', url: 'https://icon.horse/icon/airtel.in' },
  { name: 'bmw', url: 'https://icon.horse/icon/bmw.com' },
  { name: 'beacon', url: 'https://icon.horse/icon/beaconstac.com' },
  { name: 'kingfisher', url: 'https://icon.horse/icon/kingfisher.com' },
  { name: 'levis', url: 'https://icon.horse/icon/levi.com' },
  { name: 'mahindra', url: 'https://icon.horse/icon/mahindra.com' },
  { name: 'malabar', url: 'https://icon.horse/icon/malabargoldanddiamonds.com' },
  { name: 'ovion', url: 'https://icon.horse/icon/oviond.com' },
  { name: 'emirates', url: 'https://icon.horse/icon/emirates.com' },
  { name: 'emaar', url: 'https://icon.horse/icon/emaar.com' },
  { name: 'jumeirah', url: 'https://icon.horse/icon/jumeirah.com' },
  { name: 'dpworld', url: 'https://icon.horse/icon/dpworld.com' },
  { name: 'nakheel', url: 'https://icon.horse/icon/nakheel.com' }
];

async function downloadImage(url, dest, name) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 308) {
        downloadImage(response.headers.location, dest, name).then(resolve).catch(reject);
      } else if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        // Fallback to ui-avatars for missing logos
        const fallbackUrl = `https://ui-avatars.com/api/?name=${name}&background=random&color=fff&size=128&font-size=0.33`;
        https.get(fallbackUrl, (fallbackRes) => {
           if (fallbackRes.statusCode === 200) {
              const file = fs.createWriteStream(dest);
              fallbackRes.pipe(file);
              file.on('finish', () => file.close(resolve));
           } else {
              reject(new Error(`Fallback failed for ${name}`));
           }
        });
      }
    }).on('error', reject);
  });
}

async function run() {
  for (const client of clients) {
    const dest = path.join(clientDir, `${client.name}.png`);
    console.log(`Downloading ${client.name}...`);
    try {
      await downloadImage(client.url, dest, client.name);
    } catch (e) {
      console.error(e);
    }
  }
  console.log('Done.');
}

run();
