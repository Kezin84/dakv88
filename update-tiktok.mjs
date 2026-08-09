import https from 'https';
import fs from 'fs';
import path from 'path';

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
  try {
    const directUrl = await getDirectImageUrl('https://ibb.co/xSs8N52H');
    console.log('Direct URL:', directUrl);
    await downloadImage(directUrl, path.resolve('public', 'social', 'tiktok-icon.png'));
    console.log('Successfully replaced tiktok-icon.png');
  } catch(e) {
    console.error(e);
  }
}
run();
