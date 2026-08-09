import https from 'https';

const urls = [
  'https://ibb.co/vn925PL',
  'https://ibb.co/WNxWNV0Q',
  'https://ibb.co/twkC2MCx',
  'https://ibb.co/TBFB25VS',
  'https://ibb.co/Kz38djfX',
  'https://ibb.co/wN504fdZ',
  'https://ibb.co/yFxFnksL'
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
          resolve('NOT_FOUND');
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const directUrl = await getDirectImageUrl(url);
    console.log(`SEC ${i+1}: ${directUrl}`);
  }
}

run();
