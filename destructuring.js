/**
 * The destructuing assignment syntax is a JavaScript expression that makes it possible to extract
 * data from arrays or objects into distinct variables.
 * 
 * It is a useful technique that allows extracting necessary data from complex elements.
 */

let userArray = process.argv.slice(2);

let object = {};

[, object.username, object.email] = userArray;

console.log(object);