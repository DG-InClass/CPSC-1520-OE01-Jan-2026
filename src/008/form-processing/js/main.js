const appendFeedback = function(line) {
    document.querySelector('#feedback').innerText += `\n${line}`;
    // This uses a template string with placeholder  \_________/
}

const clearFeedback = function(text) {
    document.querySelector('#feedback').innerText = `${text || ''}`;
}

// Process the 'subscribe' form's inputs
document
    .getElementById('subscribe') // Get the <form id="subscribe"> element
    .addEventListener('submit', function(ev) { // an anonymous function responding to submit
        ev.preventDefault(); // 📌 This will stop the browser from submitting the form to the server
        console.log(ev);
        let theForm = ev.target;
        clearFeedback('The subscribe form was submitted.');
        let firstNameInput = theForm.elements.firstname;
        appendFeedback("The first name is: '" + firstNameInput.value + "'");
        let emailInput = theForm.elements.email;
        appendFeedback(`Their email is: '${emailInput.value}'`);

        // <input name="terms" type="checkbox" />
        // theForm.element.terms   has a property called .checked
        appendFeedback(`Agreed to terms? '${theForm.elements.terms.checked}'`);
        console.log(theForm.elements.term); // see the <input type="checkbox" in the console
    });


let otherForm = document.querySelector('#assorted');
const exploreForm = function(ev) {
    ev.preventDefault(); // 📌 Always call .preventDefault()

    clearFeedback('This is the data from the assorted form:');
    
    let target = ev.target; // <form id="assorted">....
    let theInputs = target.elements; // All of the user controls
    console.log('theInputs: ', theInputs);

    let dateInput = theInputs.date; // <input type="date" name="date" >
    let dateValue = dateInput.value; // data type of .value is string
    let message = `Today is ${dateValue}`; // What will it be
    appendFeedback(message);
    let dateObj = new Date(dateValue);
    message = `The date as a Date object is ${dateObj.toDateString()}`;
    appendFeedback(message);

    let timeInput = theInputs.time; // 
    let theTime = timeInput.value;  // theTime is a string
    message = `The time supplied was ${theTime}`;
    appendFeedback(message); // 🤦‍♂️ d'oh
    console.log(theTime, 'split on the :', theTime.split(':'));

    // Playing with date/time information
    let year = dateObj.getFullYear(); // 4-digit year
    let month = dateObj.getMonth();   // 0-11
    let dayOfMonth = dateObj.getDate();
    let timeParts = theTime.split(':'); // array of two strings
    let hours = parseInt(timeParts[0]);
    let minutes = parseInt(timeParts[1]);
    // Create a new Date object based on these two <input> controls
    let dateAndTime = new Date(year, month, dayOfMonth, hours, minutes);
    message = `\nMy combined date and time produces:\n\t${dateAndTime}`;
    appendFeedback(message);

    // If your input control has a name with a dash in it,
    // use the name's value as an "index" for the object. 🤔
    let theBackgroundColorInput = theInputs['bg-color'];
    // for <input type="radio" name="bg-color" value="#ff0000" />

    // Here's an interesting (but wonky) use of indexers to call
    // the .log() function of the console object.
    console['log']("Isn't that cool?!");
};
otherForm.addEventListener('submit', exploreForm);
