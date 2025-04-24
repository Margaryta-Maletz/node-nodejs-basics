import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const fileName = join(__dirname, 'files/fileToWrite.txt');

  const writeStream = fs.createWriteStream(fileName);

  process.stdin.resume()
    .setEncoding('utf-8')
    .on('data', (chunk) => writeStream.write(chunk))
    .on('end', () => writeStream.end());

  console.log('Please input data. Press Enter. Press CTRL+C')
};

await write();
