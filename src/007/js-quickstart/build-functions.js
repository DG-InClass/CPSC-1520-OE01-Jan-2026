// ~/src/007/js-quickstart/build-functions.js
// node --watch build-functions.js
console.log('Build my own functions');

// There are two general perspective on functions in JavaScript (or any programming language)
// A) Create ("declare") a function - This defines what the function will do
// B) Use ("call") any function that has been declared.

// Creating my own function involves it having a name, a parameter list, and a body (set of statements).
function greet(name) {
    return `Hello ${name}`;
}

let greeting = greet('Stewart');
console.log(greeting);
greeting = greet('Dan');
console.log(greeting);
// In the examples above, 'Stewart' and 'Dan' are arguments
// we send into the function.

// Note that the grammar used to declare the function in
// lines 10 through 12 is called a Function Declaration.

// The problem with using Function Declaration syntax is
// our function name can be "modified" into something else
greet = 42; // 😱 You replaced my function!
// Uncomment the line below to see it crash....
// greeting = greet('Bob'); // 💥 This will crash!

// There is another way to declare a function.
// I can use a Function Expression along with a constant.
const farewell = function(name) {
    return `Time to go. Goodbye ${name}.`;
}

// Now, because farewell is a constant, none of my later code
// can change/replace that function.
// farewell = 32; // This will crash - but it's a "good" crash
console.log(farewell('everyone'));
//      |   \__________________/  farewell() is called first
//      \______________________/  log() is called next

