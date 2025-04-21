import { readdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const fileFolderPath = join(__dirname, 'files');

  await stat(fileFolderPath).catch(() => {
    throw Error('FS operation failed');
  });

  const files = await readdir(fileFolderPath, {
    withFileTypes: true
  });

  console.log(files.filter(file => file.isFile()).map(file => file.name));
};

await list();
