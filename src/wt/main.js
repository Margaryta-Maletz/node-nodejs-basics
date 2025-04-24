import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';
import { Worker } from 'worker_threads'

const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
  const fileName = join(__dirname, 'worker.js');

  const coresCount = cpus().length;

  const workers = []

  for (let i = 0; i < coresCount; i++) {
    const worker = new Promise((resolve) => {
      const createWorker = new Worker(fileName, {workerData: 10 + i});

      createWorker.on('message', (data) => resolve({status: 'resolved', data}));
      createWorker.on('error', () => resolve({status: 'error', data: null}));
    })

    workers.push(worker);
  }

  const result = await Promise.all(workers);

  console.log(result);
};

await performCalculations();
