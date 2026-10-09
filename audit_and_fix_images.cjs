const fs = require('fs');
const https = require('https');
const path = require('path');

const techDir = path.join(__dirname, 'src', 'assets', 'images', 'technical');
const creDir = path.join(__dirname, 'src', 'assets', 'images', 'creative');
const servDir = path.join(__dirname, 'src', 'assets', 'images', 'services');

if (!fs.existsSync(techDir)) fs.mkdirSync(techDir, { recursive: true });
if (!fs.existsSync(creDir)) fs.mkdirSync(creDir, { recursive: true });
if (!fs.existsSync(servDir)) fs.mkdirSync(servDir, { recursive: true });

const imagesToUpdate = [
  // --- TECHNICAL SERVICES ---
  // 1. Stage Design: Professionally constructed event stage with platform, LED backdrop and lighting trusses.
  {
    path: path.join(techDir, 'tech_stage.jpg'),
    url: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1200&auto=format&fit=crop'
  },
  // 2. Rigging & Truss Systems: Real aluminium truss structures, suspended lighting fixtures and event rigging.
  {
    path: path.join(techDir, 'tech_rigging.jpg'),
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop'
  },
  // 3. Live Streaming Solutions: Live event streamed with professional cameras, encoders, monitors & production desk.
  {
    path: path.join(techDir, 'tech_livestream.jpg'),
    url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop'
  },
  // 4. Multi-Camera Broadcast Setup: Professional video cameras filming live event, camera operators & broadcast equipment.
  {
    path: path.join(techDir, 'tech_broadcast.jpg'),
    url: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1200&auto=format&fit=crop'
  },
  // 5. Temporary Event Structures / Pavilion: Modular event pavilion / marquee structure.
  {
    path: path.join(techDir, 'tech_pavilion.jpg'),
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop'
  },
  // 6. Audio Production: Sound engineer & audio console at live event venue.
  {
    path: path.join(techDir, 'tech_audio.jpg'),
    url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop'
  },
  // 7. Video Production: High-res LED screen mapping & video switcher.
  {
    path: path.join(techDir, 'tech_video.jpg'),
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'
  },
  // 8. AV Setup & Integration: Audiovisual equipment in real corporate venue.
  {
    path: path.join(techDir, 'tech_av.jpg'),
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop'
  },
  // 9. Lighting Design: Stage illuminated by professional event lighting fixtures.
  {
    path: path.join(techDir, 'tech_lighting.jpg'),
    url: 'https://images.unsplash.com/photo-1508247200715-776b2512f716?q=80&w=1200&auto=format&fit=crop'
  },
  // 10. Backdrop & Set Solutions: Branded stage backdrop & scenic set.
  {
    path: path.join(techDir, 'tech_backdrop.jpg'),
    url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop'
  },
  // 11. Theatrical Draping: Stage curtains & theatrical drapes.
  {
    path: path.join(techDir, 'tech_draping.jpg'),
    url: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1200&auto=format&fit=crop'
  },
  // 12. Technical Event Production: Production management & crew control desk.
  {
    path: path.join(techDir, 'tech_eventprod.jpg'),
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop'
  },
  // 13. Project Management: Technical CAD layout & floor plan planning.
  {
    path: path.join(techDir, 'tech_projectmg.jpg'),
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop'
  },
  // 14. Custom Fabrication: Workshop construction of custom scenic elements.
  {
    path: path.join(techDir, 'tech_fabrication.jpg'),
    url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop'
  },
  // 15. Web Dev & Portals: Event registration web portal on screen.
  {
    path: path.join(techDir, 'tech_webdev.jpg'),
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
  },
  // 16. Web Maintenance & Infrastructure: Server rack equipment.
  {
    path: path.join(techDir, 'tech_webmain.jpg'),
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop'
  },
  // 17. Mobile App Dev: Smartphone showcasing event app.
  {
    path: path.join(techDir, 'tech_mobileapp.jpg'),
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop'
  },

  // --- CREATIVE SERVICES ---
  // 18. Motion Graphics & VFX: Motion designer working on animation timeline.
  {
    path: path.join(creDir, 'cre_motion.jpg'),
    url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop'
  },
  // 19. 2D/3D Content Creation: 3D scene creation / 3D software rendering.
  {
    path: path.join(creDir, 'cre_2d3d.jpg'),
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'
  },
  // 20. Animated Infographics: Visual data infographics software design.
  {
    path: path.join(creDir, 'cre_info.jpg'),
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop'
  },
  // 21. 3D Hologram Displays: Futuristic 3D hologram stage display.
  {
    path: path.join(creDir, 'cre_holo.jpg'),
    url: 'https://images.unsplash.com/photo-1633424484931-e129184d0b17?q=80&w=1200&auto=format&fit=crop'
  },
  // 22. 3D Projection Mapping: Architectural 3D projection mapping on venue surface.
  {
    path: path.join(creDir, 'cre_projection.jpg'),
    url: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=1200&auto=format&fit=crop'
  },
  // 23. AR/VR & Immersive Activations: Attendee using VR/AR interactive technology.
  {
    path: path.join(creDir, 'cre_interactive.jpg'),
    url: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1200&auto=format&fit=crop'
  },
  // 24. UI/UX Design: Interface design workstation.
  {
    path: path.join(creDir, 'cre_uiux.jpg'),
    url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop'
  },
  // 25. Mobile App UI: Event app on smartphone screen.
  {
    path: path.join(creDir, 'cre_mobile.jpg'),
    url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop'
  },
  // 26. Branded Mini-Games: Interactive touch game screen booth activation.
  {
    path: path.join(creDir, 'cre_game.jpg'),
    url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200&auto=format&fit=crop'
  },
  // 27. Full Video Production: Crew filming scene with cinema camera.
  {
    path: path.join(creDir, 'cre_video.jpg'),
    url: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=1200&auto=format&fit=crop'
  },
  // 28. High-End Corporate Films: Cinematographer operating cinema camera equipment.
  {
    path: path.join(creDir, 'cre_films.jpg'),
    url: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=1200&auto=format&fit=crop'
  },
  // 29. TV Commercials & Teasers: Commercial filming studio set.
  {
    path: path.join(creDir, 'cre_tvc.jpg'),
    url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop'
  },
  // 30. Cinematic Event Aftermovies: Event highlights filmed at live event.
  {
    path: path.join(creDir, 'cre_eventcov.jpg'),
    url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1200&auto=format&fit=crop'
  },
  // 31. Event Concepts & Direction: Moodboard & creative director studio.
  {
    path: path.join(creDir, 'cre_concepts.jpg'),
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
  },
  // 32. 3D CAD Renders: Architectural stage 3D render CAD model on screen.
  {
    path: path.join(creDir, 'cre_techdesign.jpg'),
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop'
  },
  // 33. Exhibition Stand Design: Bespoke trade show exhibition booth.
  {
    path: path.join(creDir, 'cre_exhibition.jpg'),
    url: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1200&auto=format&fit=crop'
  },

  // --- SUPPORT & GENERAL ---
  // 34. Corporate Gifting Showcase (replaces generic placeholder)
  {
    path: path.join(servDir, 'gift_set_showcase.jpg'),
    url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop'
  },
  // 35. Hostesses / Ushers Showcase (replaces generic placeholder)
  {
    path: path.join(servDir, 'hostesses_showcase.jpg'),
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop'
  },
  // 36. Tech General Service Banner
  {
    path: path.join(servDir, 'service-tech-gen.jpg'),
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop'
  },
  // 37. Creative General Service Banner
  {
    path: path.join(servDir, 'service-creative-gen.jpg'),
    url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop'
  },
  // 38. Support General Service Banner
  {
    path: path.join(servDir, 'service-support-gen.jpg'),
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop'
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

async function run() {
  console.log(`Updating ${imagesToUpdate.length} images...`);
  for (const img of imagesToUpdate) {
    try {
      if (fs.existsSync(img.path)) {
        fs.unlinkSync(img.path);
      }
      console.log(`Downloading replacement for: ${path.basename(img.path)}`);
      await downloadImage(img.url, img.path);
    } catch (e) {
      console.error(`Error processing ${img.path}:`, e.message);
    }
  }
  console.log('Finished image downloads.');
}

run();
