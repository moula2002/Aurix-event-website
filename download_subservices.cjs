const fs = require('fs');
const https = require('https');
const path = require('path');

const techDir = path.join(__dirname, 'src', 'assets', 'images', 'technical');
const creDir = path.join(__dirname, 'src', 'assets', 'images', 'creative');

if (!fs.existsSync(techDir)) fs.mkdirSync(techDir, { recursive: true });
if (!fs.existsSync(creDir)) fs.mkdirSync(creDir, { recursive: true });

const images = [
  { url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_audio.jpg') },
  { url: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_video.jpg') },
  { url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_av.jpg') },
  { url: 'https://images.unsplash.com/photo-1508247200715-776b2512f716?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_lighting.jpg') },
  { url: 'https://images.unsplash.com/photo-1549451371-64aa12a62660?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_stage.jpg') },
  { url: 'https://images.unsplash.com/photo-1563841930606-67e2bce48b78?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_rigging.jpg') },
  { url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_backdrop.jpg') },
  { url: 'https://images.unsplash.com/photo-1518335345716-b8afbc08c2a9?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_draping.jpg') },
  { url: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_livestream.jpg') },
  { url: 'https://images.unsplash.com/photo-1621360841013-c76831f12560?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_broadcast.jpg') },
  { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_eventprod.jpg') },
  { url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_projectmg.jpg') },
  { url: 'https://images.unsplash.com/photo-1572097561917-0639d6718d78?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_pavilion.jpg') },
  { url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_fabrication.jpg') },
  { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_webdev.jpg') },
  { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_webmain.jpg') },
  { url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop', path: path.join(techDir, 'tech_mobileapp.jpg') },

  { url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_motion.jpg') },
  { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_2d3d.jpg') },
  { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_info.jpg') },
  { url: 'https://images.unsplash.com/photo-1633424484931-e129184d0b17?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_holo.jpg') },
  { url: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_projection.jpg') },
  { url: 'https://images.unsplash.com/photo-1561736796-3c0f32467d1d?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_interactive.jpg') },
  { url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_uiux.jpg') },
  { url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_mobile.jpg') },
  { url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_game.jpg') },
  { url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_video.jpg') },
  { url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_films.jpg') },
  { url: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_tvc.jpg') },
  { url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_eventcov.jpg') },
  { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_concepts.jpg') },
  { url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_techdesign.jpg') },
  { url: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=800&auto=format&fit=crop', path: path.join(creDir, 'cre_exhibition.jpg') }
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
  for (const img of images) {
    if (!fs.existsSync(img.path)) {
      console.log(`Downloading ${img.path}...`);
      try {
        await downloadImage(img.url, img.path);
      } catch (e) {
        console.error(e);
      }
    }
  }
  console.log('Done.');
}

run();
