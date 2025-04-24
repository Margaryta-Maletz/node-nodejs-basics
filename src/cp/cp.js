import { spawn } from 'child_process'
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const fileName  = join(__dirname, 'files/script.js');

    const child = await spawn('node', [fileName, ...args], { stdio: ['pipe', 'pipe', 'inherit']} );

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess([1, 2, 3, 4, 5]);
