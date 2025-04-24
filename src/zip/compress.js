import { createGzip } from "zlib";
import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const readFile = join(__dirname, 'files/fileToCompress.txt');
  const archive = join(__dirname, 'files/archive.gz');

  const readStream = fs.createReadStream(readFile);
  const writeStream = fs.createWriteStream(archive);

  const zip = createGzip();

  readStream.pipe(zip).pipe(writeStream);
};

await compress();
