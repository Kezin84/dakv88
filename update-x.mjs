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
    const iconUrl = await getDirectImageUrl('https://ibb.co/hF86Pghd');
    await downloadImage(iconUrl, path.resolve('public', 'social', 'x-icon.png'));
    
    const qrUrl = await getDirectImageUrl('https://ibb.co/0yvmRqzb');
    await downloadImage(qrUrl, path.resolve('public', 'social', 'x-qr.png'));
    
    console.log('Successfully downloaded X assets');
  } catch(e) {
    console.error(e);
  }
}
run();
