// Apply these modifications one-by-one and observe the changes in the page's appearance.

// 1) Change the text of the first heading by appending the text "with JavaScript".
let h1Element = document.querySelector('h1');
console.log(h1Element.innerText);
h1Element.innerText = h1Element.innerText + ' with JavaScript';

// 2) Identify the element with the brand name and wrap its text in a <em> tag.
let brandNameText = document.getElementById('brand-name').innerText;
let newHtml = `<em>${brandNameText}</em>`;
document.getElementById('brand-name').innerHTML = newHtml;


// 3) Find the <mark> element in the first paragraph of the body and change its text from 'HTML' to 'DOM'.
document.querySelector('body p mark').innerText = 'DOM';

// 4) Add the .striped class to the HTML table.
let theTable = document.querySelector('table');
// Every DOM element has a property called .classList
// which holds all of the CSS class named on that element.
// <div class="intro large">
// The .classList property itself has a few methods/functions
// we can call to modify that list of CSS classes.
theTable.classList.add('striped'); // <table class="striped">
