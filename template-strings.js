/**
 * Template strings can even be multiline simply by placing linebreaks inside the string.
 * Note that if you add white space after indenting then that whitespace will be included!
 */

 let name = process.argv[2];

 console.log(`Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`);        