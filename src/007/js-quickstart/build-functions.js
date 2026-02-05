// ~/src/007/js-quickstart/build-functions.js
// node --watch build-functions.js
// Trying to capture info from a function
// that doesn't explicitly return a value
// turns out to be pretty useless.
let result = showTitle('Build my own functions');
console.log('The value of result is:', result);
console.log(greet('Section E01'));

function showTitle(msg) {
    console.clear();
    console.log(msg);
    console.log("===========\n");
}

// There are two general perspective on functions in JavaScript (or any programming language)
// A) Create ("declare") a function - This defines what the function will do
// B) Use ("call") any function that has been declared.

// Creating my own function involves it having a name, a parameter list, and a body (set of statements).
// A parameter list is a comma-separated list of zero or more
// variable names. Those variables are used to "capture" information
// that might be passed in to the function when it is called.
// All the variables in a parameter list are Local Variables,
// meaning that they variable is only accessible from inside the
// function. The life-time and scope of the parameter is limited
// to the function in which it is declared.
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

