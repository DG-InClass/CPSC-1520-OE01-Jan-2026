// node --watch ArraysAndLoops.js
const l = console.log;
l('Arrays and Loops');

let answer, firstNumber = 12, secondNumber = 13;
answer = firstNumber + secondNumber;
l(firstNumber,'+',secondNumber,'=',answer);
let thirdNumber = 10;
answer = firstNumber + secondNumber + thirdNumber;
l(firstNumber,'+',secondNumber,'+',thirdNumber,'=',answer);
// change one values
thirdNumber = 45;
answer = firstNumber + secondNumber + thirdNumber;
l(firstNumber,'+',secondNumber,'+',thirdNumber,'=',answer);

// Let's explore Arrays
console.clear();
l('Exploring Arrays');
// An array is a set of zero or more values stored contigously in memory.
// Denote arrays using the square brackets.

let numbers = [3, 5, 9, 6];
l('I have the following array of numbers:', numbers);
l('The first number is:', numbers[0]);
l(`There are ${numbers.length} values in my array`);

const addNumbers = function() {
    let position = 0;
    answer = 0;

    while(position < numbers.length) {
        //\__true to enter loop___/
        answer = answer + numbers[position];
        position = position + 1;
    } // return to the conditional expression

    l();
    l('Adding these numbers',numbers,'produces',answer);
}
addNumbers();
numbers.push(12); // add 12 to the end
addNumbers();

/*
Besides the while() statement, there is
the do-while() statement (which checks
the conditional expression after running
the repeating block of code).

There is also the for() statement. In
JavaScript, there are actually several
types of "for statements".

- Tradtional: for(init;cond_exp;inc)
- for..in   : for(index in array)
- for..of   : for(element of array)
*/

