import { dirname, sep } from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import a from './files/a.json' assert { type: 'json' };
import b from './files/b.json' assert { type: 'json' };

import './files/c.cjs';

const random = Math.random();
export const unknownObject = random > 0.5 ? a: b;

const __dirname = dirname(fileURLToPath(import.meta.url));
const argv = process.argv;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${argv[1]}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
