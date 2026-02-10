// Some global variables that we will re-use frequently
// <input type="text" id="userInput" value="Lorem ipsum dolor sit amet">
const userInput = document.getElementById('userInput');

// <pre id="transformedText"></pre>
const output = document.getElementById('transformedText');


// Show the user input in the output
output.innerText = userInput.value;
// A little prep....
const presetPaddingLength = function() {
    let input = document.getElementById('minLength');
    input.value = userInput.value.length + 5;
}
presetPaddingLength();

// And now for the lesson....
// Demo: 0) Completed demo to transform the user's input to upper case and display it
document.getElementById('transformToUpperCase').addEventListener('click', function() {
    // userInput    <input ..... />
    let newValue = userInput.value.toUpperCase();
    //    /\       \  string     /\__ string___/
    //     |                           |
    //     |---------------------------|
    output.innerText = newValue;
});

// TODO: 1) Write the code to transform the user's input to lower case and display it
//       STUDENT_CODE_HERE
document                                    // the entire DOM page
    .querySelector('#transformToLowerCase') // <button>
    .addEventListener('click', function() {
        let text = userInput.value;
        let lowerCaseText = text.toLowerCase();
        output.innerText = lowerCaseText;
    });


// Demo: 2) Write the code to pad the end of input text with the supplied character(s).
// TODO:    Modify the code below to use the appropriate user input for padding.
document.querySelector('#transformPadEnd').addEventListener('click', function() {
    let currentValue = userInput.value;             // ✅
    let minLengthInput = document.querySelector('#minLength');
    let minLen = parseInt(minLengthInput.value);
    let char = document.getElementById('endText').value;
    let newValue = currentValue.padEnd(minLen, char);
    output.innerText = newValue;
});

// TODO: 3) Write the code to output the input text with spaces trimmed from the left-hand side.

// TODO: 4) Write the code to output the input text with spaces trimmed from the right-hand side.

// TODO: 5) Write the code to output the input text with spaces trimmed from the both sides.

// TODO: 6) Write the code to pad the start of input text with the supplied character(s).

// TODO: 7) Write the code to replace text in the user's input.

// TODO: 8) Write the code to repeat the text the specified number of times on separate lines.

