// This demonstrates using a parameter
// e.g. greetUser('Jane Doe');
// e.g. greetUser(prompt('Name:'));

// <h1 class='intro'></h1>
const titleElement = document.querySelector('h1.intro');
const originalContents = titleElement.innerHTML;

// The following uses the Function Declaration
// syntax/grammar to create the function.
function greetUser(username) {
    // select the h1
    var mainTitle = document.querySelector('h1.intro');
    // update the h1 inner HTML
    // mainTitle.innerHTML = 'Welcome ' + username + ' to ' + mainTitle.innerHTML; // 🐞 I "duplicate" prior info
    mainTitle.innerHTML = 'Welcome ' + username + ' to ' + originalContents;
};

// Once a function has been created, I can call it whenever I need it.
greetUser('Stew Dent');
greetUser('<u>Dan Gilleland</u>');

// There's a "slight" problem with using Function Declaration
// syntax in creating our functions. The problem is that our
// function can be "lost" or "hijacked" by some other
// JavaScript code.
// (uncomment the following code to demonstrate)
// greetUser = 'bob'; //function(username) { alert('U-r code is mine!')};
// greetUser('Anna Lyst'); // WHOA!


// Another way to declare/create a function is to use the
// Function Expression syntax along with the const variable
// declaration.
const betterGreet = function(username) {
    titleElement.innerHTML = 'Welcome ' + username + ' to ' + originalContents;
}
// betterGreet = 'bob'; // This will crash because betterGreet is a constant.
betterGreet('Anna Lyst');

