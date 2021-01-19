/**
 * If you need multiple arguments you need to wrap them in parenthesis.
 */

 // slice() returns the selected elements in an array.
let inputs = process.argv.slice(2);

let results = inputs.map((val, key, col) => val[0])
                    .reduce((acc, val, key, col) => {return acc += val}, '');

console.log(`[${inputs}] becomes "${results}"`);
