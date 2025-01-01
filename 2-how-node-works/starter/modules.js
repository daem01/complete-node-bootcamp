// console.log(arguments, '\n'); // arguments is an array in JS that contains all of the values that were passed into a function
// console.log(require('module').wrapper); // IIFE wrapper function

// console.log('\n-----------------------\n')

/////////////////
// module.exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));

console.log('-----------------------');
////////////////
// exports
// const calc2 = require('./test-module-2');
const { add, multiply } = require('./test-module-2');
console.log(multiply(2, 5));

console.log('-----------------------\n');
////////////////
// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
