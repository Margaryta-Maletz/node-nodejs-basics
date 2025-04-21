import { readFile, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const filePath = join(__dirname, 'files', 'fileToRead.txt');

  await stat(filePath).catch(() => {
    throw Error('FS operation failed');
  });

  const file = await readFile(filePath, { encoding: 'utf8' });
  console.log(file);
};

await read();
