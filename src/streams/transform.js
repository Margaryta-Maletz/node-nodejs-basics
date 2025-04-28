import { Transform } from 'stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const reverse = chunk.toString().trim().split('').reverse().join('') + '\n';
      callback(null, reverse);
    }
  })

  process.stdin.pipe(transformStream).pipe(process.stdout);

  console.log('Please input data. Press Enter. To finish press CTRL+C')
};

await transform();
