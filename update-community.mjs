import https from 'https';
import fs from 'fs';
import path from 'path';

const images = [
  { id: 'review', url: 'https://ibb.co/pvN5ZFYD' },
  { id: 'share', url: 'https://ibb.co/ymY3xV52' },
  { id: 'fanpage', url: 'https://ibb.co/DHy8PfB9' }
];

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

async function run() {
  const targetDir = path.resolve('public', 'community');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const img of images) {
    try {
      const directUrl = await getDirectImageUrl(img.url);
      console.log(`Direct URL for ${img.id}:`, directUrl);
      await downloadImage(directUrl, path.join(targetDir, `${img.id}.jpg`));
      console.log(`Successfully downloaded ${img.id}.jpg`);
    } catch(e) {
      console.error(`Error downloading ${img.id}:`, e.message);
    }
  }
}
run();
