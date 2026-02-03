/* Soft Intro to Events
    Consider that the HTML elements are structured/nested as follows:
    - <body>
        - <h1>
            - <button>
            - <small>
                - <a>
        - <pre>
            - <output>
*/
console.log('JavaScript file loaded!');

const handleClick = function(event) {
    // If you want to STOP the default behaviour that the
    // browser uses for an event, you can call
    event.preventDefault();

    // TODO: Use for exploration purposes
    const target = event.target; // What "received" the event
    //    \____/  this will always be some HTMLElement
    document.getElementById('feedback').innerText = `Clicked from ${target.tagName}`;
    // All HTMLElement objects have a .tagName property
}

let heading = document.querySelector('h1');
heading.addEventListener('click', handleClick);
//                       \_____/  \_________/
// The event event name is  |        |
// always as a string                |
//                The second argument is an actual function
//                that will be called when the even happens



// TODO: Add an event listener for the button with id "register".
//       Listen for the 'dblclick' event.
//       Prompt the user for their name, then for their email,
//       then output the information to the #feedback element.
let theButton = document.getElementById('register');
theButton.addEventListener('dblclick', function(evt) {
    // This is an inline and anonymous function
    console.log(evt); // What's the event object?

    const aName = prompt('Tell me your name:');
    const email = prompt('What is your email?');
    const output = document.getElementById('feedback');
    output.innerText = `Hello ${aName}. I have shared your email with people on the dark web.... (${email})`;
});

// Ad-hoc demo: Listen to clicks on the body
document.body.addEventListener('click', function() {
    let output = document.getElementById('feedback');
    output.innerHTML += '<br />I heard that!';
});


// TODO: Add another event listener for the heading, this time for
//       the 'dblclick' event.
//       Try changing the theme by assigning either 'light' or 'dark'
//       to the following element's property:
//          document.querySelector('html').dataset.theme
//       Try it out, then inspect the elements in the Dev Tools.
heading.addEventListener('dblclick', function(ev) {
    ev.preventDefault();
    ev.stopPropagation(); // Google what this does
    let htmlTag = document.querySelector('html');
    let currentTheme = htmlTag.dataset.theme;
    // Bonus! An intro to if/else statements....
    if(currentTheme === 'dark')
        htmlTag.dataset.theme = 'light';
    else
        htmlTag.dataset.theme = 'dark';
});

// Can you describe the difference between the
// .stopPropagation() and .preventDefault() methods
// that exist on the Event object that's passed into
// an event handler?
document.body.innerHTML += '<a href="https://dgilleland.github.io/CPSC-1520/tutorials/0070/" target="_blank">Event Listeners</a>';
// What happens if you add a 'click' event handler to the link above and perform a call to the event's .stopPropagation()?
