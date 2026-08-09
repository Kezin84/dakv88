import https from 'https';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const urls = [
  'https://ibb.co/vn925PL',
  'https://ibb.co/WNxWNV0Q',
  'https://ibb.co/twkC2MCx',
  'https://ibb.co/TBFB25VS',
  'https://ibb.co/Kz38djfX',
  'https://ibb.co/wN504fdZ',
  'https://ibb.co/yFxFnksL'
];

const destDir = path.resolve('public', 'sections');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
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
          reject(new Error('Direct image URL not found for ' + pageUrl));
        }
      });
    }).on('error', reject);
  });
}

function fetchImageBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function run() {
  for (let i = 0; i < urls.length; i++) {
    const sectionIndex = i + 1;
    const destPath = path.join(destDir, `sec-${sectionIndex}.jpg`);
    
    try {
      console.log(`[Section ${sectionIndex}] Resolving direct URL...`);
      const directUrl = await getDirectImageUrl(urls[i]);
      
      console.log(`[Section ${sectionIndex}] Downloading image...`);
      const buffer = await fetchImageBuffer(directUrl);
      
      console.log(`[Section ${sectionIndex}] Converting to optimized JPEG...`);
      await sharp(buffer)
        .jpeg({ quality: 85, progressive: true })
        .toFile(destPath);
        
      console.log(`[Section ${sectionIndex}] Successfully saved to ${destPath}`);
    } catch (err) {
      console.error(`[Section ${sectionIndex}] Error:`, err.message);
    }
  }
}

run();
