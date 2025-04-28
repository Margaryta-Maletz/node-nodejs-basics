import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const fileName = join(__dirname, 'files/fileToRead.txt');

  const fileStream = fs.createReadStream(fileName);

  let result = '';

  fileStream.on('data', (chunk) => {
    result += chunk;
  });

  fileStream.on('end', () => {
    process.stdout.write(result);
  });
};

await read();
