const parseArgs = () => {
  const argVars = process.argv;

  for (let ind = 2; ind < argVars.length; ind +=2) {
    console.log(`${argVars[ind].slice(2)} is ${argVars[ind+1]}`);
  }
};

parseArgs();
