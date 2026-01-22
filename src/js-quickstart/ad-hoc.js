// Open the folder containing this file in the terminal
// and then run the following
//  node --watch ad-hoc.js
console.log('ad-hoc.js is running');
console.log(); // blank line

// declaring variable and
// initializing them with
// values
let quantity = 10;
let unitCost = 12.5;
let total = quantity * unitCost;

let message; // just declaring a variable
message = 'The total is $';
console.log(message, total.toFixed(2));
