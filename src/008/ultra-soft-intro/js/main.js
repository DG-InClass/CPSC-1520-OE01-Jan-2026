// A "global" variable called counter
let counter = 0; // initializing it to zero

// Creating a function using Function Expression
const increment = function() {
    counter++;  // counter = counter + 1
    document.querySelector('div').innerText = `Clicked ${counter} times.`;
}

// I get a reference to <button>Click Me</button>
const theButton = document.querySelector('button');

// Adding an Event Listener.
// When the 'click' event happens on theButton,
// the browser will call my increment function.
theButton.addEventListener('click', increment);
