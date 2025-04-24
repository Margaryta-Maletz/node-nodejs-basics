import { createUnzip } from "zlib";
import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const archive = join(__dirname, 'files/archive.gz');
  const writeFile = join(__dirname, 'files/fileToCompress.txt');

  const readStream = fs.createReadStream(archive);
  const writeStream = fs.createWriteStream(writeFile);

  const unzip = createUnzip();

  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();