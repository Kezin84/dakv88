import https from 'https';
import fs from 'fs';
import path from 'path';

const url = 'https://ibb.co/1t2tNFJs';
const dest = path.resolve('public', 'community', 'telegram.jpg');

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="og:image" content="([^"]+)"/);
    if (match && match[1]) {
      const directUrl = match[1];
      console.log('Downloading from:', directUrl);
      const file = fs.createWriteStream(dest);
      https.get(directUrl, (res) => {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Successfully downloaded telegram.jpg');
        });
      });
    } else {
      console.log('No direct image found.');
    }
  });
});
