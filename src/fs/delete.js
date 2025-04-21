import { stat, unlink } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const filePath = join(__dirname, 'files', 'fileToRemove.txt');

  await stat(filePath).catch(() => {
    throw Error('FS operation failed');
  });

  await unlink(filePath);
};

await remove();
