// Add in the code from the walk-through and observe the page behaviour.
let first = prompt('Enter a number');
let second = prompt('Enter a number');
let result = parseInt(first) + parseInt(second);
// Alternatively, I could use parseFloat() - include decimal
// e.g.: parseInt('5.3') ==> 5
//       parseFloat('5.3') => 5.3
//       Number('5.3') ==> 5.3
//        |-- Constructor Function
console.log(first, second, result);

// Put those values into the page
// <output id="firstNumber"></output>
let firstOutput = document.querySelector('#firstNumber');
// <output id="secondNumber"></output>
let secondOutput = document.getElementById('secondNumber');
// <output id="answer"></output>
let answerOutput = document.getElementById('answer');

// We don't use .innerText to fill in an <output>.
// Instead, we use .value
firstOutput.value = first;
secondOutput.value = second;
answerOutput.value = result;