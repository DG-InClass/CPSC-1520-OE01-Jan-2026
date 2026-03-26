const addDots = function() {
    let myOutput = document.getElementById('dots');
    myOutput.innerText += '.';
    myOutput.setAttribute('title', `There are ${myOutput.innerText.length} dots`);
}

// The setInterval is just like the setTimeout except that
// the timer is "reset" to repeat after the delay has
// expired.
let cancellationRef = setInterval(addDots, 1250); // 1.25 seconds delay

// Add an event listener to the button that will stop the interval.
document.querySelector('button')
        .addEventListener('click', function(evt) {
            console.log('Button clicked');
            if(cancellationRef) {
                clearInterval(cancellationRef);
                cancellationRef = 0; // to indicate I've cancelled the interval
                evt.target.innerText = "Continue Interval";
            } else {
                // Re-create the interval
                cancellationRef = setInterval(addDots, 1250);
                evt.target.innerText = "Stop Interval";
            }
        });
