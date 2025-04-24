import crypto from 'crypto';
import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const fileName = join(__dirname, 'files/fileToCalculateHashFor.txt');

  const fileStream = fs.createReadStream(fileName);

  const hash = crypto.createHash('sha256');

  fileStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  fileStream.on('end', () => {
    const resultHash = hash.digest('hex');
    console.log(resultHash);
  });
};

await calculateHash();
