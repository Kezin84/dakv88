import fs from 'fs';
import path from 'path';
import https from 'https';

const networks = [
  { id: 'zalo', icon: 'https://ibb.co/4RFxGXxh', qr: 'https://ibb.co/bjJTb6VC' },
  { id: 'facebook', icon: 'https://ibb.co/D6MyCpF', qr: 'https://ibb.co/pvwD70nV' },
  { id: 'telegram', icon: 'https://ibb.co/m52s208f', qr: 'https://ibb.co/HDvx7xhz' },
  { id: 'instagram', icon: 'https://ibb.co/HTPP8W41', qr: 'https://ibb.co/ZpHzZLH1' },
  { id: 'threads', icon: 'https://ibb.co/Mkg8ggfB', qr: 'https://ibb.co/dJk6cLPQ' },
  { id: 'signal', icon: 'https://ibb.co/XxM64ywR', qr: 'https://ibb.co/rG0nzvYQ' },
  { id: 'tiktok', icon: 'https://ibb.co/dsVNvfV2', qr: 'https://ibb.co/t6bDqC8' },
  { id: 'wechat', icon: 'https://ibb.co/JWpH9Njv', qr: 'https://ibb.co/6R191qp5' },
  { id: 'line', icon: 'https://ibb.co/Wv7JtRfK', qr: 'https://ibb.co/s9K1Gpxq' },
  { id: 'kakaotalk', icon: 'https://ibb.co/W4q9cpPr', qr: 'https://ibb.co/tMnY7h5K' },
  { id: 'whatsapp', icon: 'https://ibb.co/9k5S6VyN', qr: 'https://ibb.co/chQz6PVd' },
  { id: 'viber', icon: 'https://ibb.co/84DStkdp', qr: 'https://ibb.co/pv3ZBLYK' },
  { id: 'lotus', icon: 'https://ibb.co/kgQXkQFB', qr: 'https://ibb.co/4wF5L2n4' },
];

const targetDir = path.resolve('public', 'social');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function getDirectImageUrl(pageUrl) {
  return new Promise((resolve, reject) => {
    https.get(pageUrl, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta property="og:image" content="([^"]+)"/);
        if (match && match[1]) {
          resolve(match[1]);
        } else {
          reject(new Error('No og:image found on ' + pageUrl));
        }
      });
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function processAll() {
  for (const net of networks) {
    try {
      console.log(`Processing ${net.id}...`);
      
      const iconDirectUrl = await getDirectImageUrl(net.icon);
      await downloadImage(iconDirectUrl, path.join(targetDir, `${net.id}-icon.png`));
      
      const qrDirectUrl = await getDirectImageUrl(net.qr);
      await downloadImage(qrDirectUrl, path.join(targetDir, `${net.id}-qr.png`));
      
      console.log(`Successfully downloaded for ${net.id}`);
    } catch (err) {
      console.error(`Error processing ${net.id}:`, err.message);
    }
  }
}

processAll();
