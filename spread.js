let myArguments = process.argv.slice(2);

console.log(`The minimum of [${myArguments}] is ${Math.min(...myArguments)}`);

