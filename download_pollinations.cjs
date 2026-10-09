const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets', 'images', 'technical');

const images = [
  { url: 'https://image.pollinations.ai/prompt/Professional%20concert%20stage%20design%20and%20construction,%20indoor%20corporate%20event,%20scaffolding,%20clean%20professional%20photography?width=800&height=1000&nologo=true', name: 'tech_stage.jpg' },
  { url: 'https://image.pollinations.ai/prompt/Event%20rigging%20and%20truss%20systems,%20metal%20trusses%20hanging%20from%20ceiling,%20heavy%20stage%20lighting%20fixtures,%20motors,%20professional%20event%20production?width=800&height=1000&nologo=true', name: 'tech_rigging.jpg' },
  { url: 'https://image.pollinations.ai/prompt/Precision%20fabricated%20stage%20backdrop%20for%20corporate%20event,%20large%20seamless%20printed%20panel,%20LED%20video%20walls,%20elegant%20set%20solutions?width=800&height=1000&nologo=true', name: 'tech_backdrop.jpg' },
  { url: 'https://image.pollinations.ai/prompt/Elegant%20theatrical%20draping,%20premium%20event%20space,%20black%20and%20dark%20blue%20flame-retardant%20pipe%20and%20drape%20systems,%20VIP%20enclosure?width=800&height=1000&nologo=true', name: 'tech_draping.jpg' }
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
