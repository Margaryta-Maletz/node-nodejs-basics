import { stat, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const filePath = join(__dirname, 'files', 'fresh.txt');

  await stat(filePath).then(() => {throw new Error('FS operation failed')}, (error) => {
    if (error.code !== 'ENOENT') {
      throw Error(error);
    }
  });

  const content = 'I am fresh and young';
  await writeFile(filePath, content);
};

await create();
