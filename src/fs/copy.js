import { cp, mkdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const source  = join(__dirname, 'files');
  const target  = join(__dirname, 'files_copy');

  await stat(source).catch(() => {
    throw Error('FS operation failed');
  });

  await stat(target).then(() => {
    throw Error('FS operation failed');
  }, (error) => {
    if (error.code !== 'ENOENT') {
      throw Error(error);
    }
  });

  await mkdir(target, { recursive: true });
  await cp(source, target, { recursive: true });
};

await copy();
