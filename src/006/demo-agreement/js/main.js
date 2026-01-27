/*

	Create variables to hold the receiving party's name, disclosing party's name, and the date

	Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/
confirm('Are you ready to start the contract?');
// A function is a set of instructions to perform some task
let firstParty = prompt('Enter the name of the first party');
let secondParty = prompt('Enter the name of the second party');
console.log(new Date(), firstParty, secondParty);

// .querySelector() takes in a "selector string". This works just like the selectors from CSS.
document.querySelector('.disclosing-party').innerText = firstParty;
document.querySelector('.receiving-party').innerText = secondParty;

// Put those names in the bottom part with the signature as well
document.querySelector('.signature .disclosing-party').innerText = firstParty;
document.querySelector('.signature .receiving-party').innerText = secondParty;

// Fill in the current date
let today = new Date(); // defaults to current date/time
let month = today.getMonth() + 1; // Jan is month #0
let dayOfMonth = today.getDate();
let year = today.getFullYear();

let contractDate = document.querySelector('span.date');
contractDate.innerText = `${month}, ${dayOfMonth}, ${year}`;
// Template string        \______/  \___________/  \_____/
//                             
//                                   "1, 26, 2026"
