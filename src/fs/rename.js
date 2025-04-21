import { rename as renameFile, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = join(__dirname, 'files', 'properFilename.md');

  await stat(oldPath).catch(() => {
    throw Error('FS operation failed');
  });

  await stat(newPath).then(() => {
    throw Error('FS operation failed');
  }, (error) => {
    if (error.code !== 'ENOENT') {
      throw Error(error);
    }
  });

  await renameFile(oldPath, newPath);
};

await rename();
