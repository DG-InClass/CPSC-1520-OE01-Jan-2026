// It's common practice to import any 3rd-party libraries
// at the top of your script file.
import markdownit from 'markdown-it';
// The following line will add the CSS stylesheet
// to our page from the node package in our dependencies
import '@picocss/pico/css/pico.css';

console.log('Loaded main.js');

// <section id="content"></section>

/**
 * handleResponse() is used to get the text from a
 * `fetch()` Response object.
 * @param {Response} resp Response from a fetch call
 * @returns {Promise<string>} - The text from the response
 */
const handleReponse = function(resp) {
    console.log(resp);
    return resp.text(); // instead of .json(), because we loaded a Markdown file
}

/**
 * Parse the markdown into HTML and dynamically add it to the page.
 * @param {string} markdown Some text that is expected to be in Markdown format
 */
const handleContent = function(markdown) {
    console.log(markdown);

    // Convert Markdown to HTML
    const md = markdownit()
    const result = md.render(markdown);
    console.log(result);

    // Add to the page
    let section = document.getElementById('content');
    section.innerHTML = result;
}

fetch('./content/ReadMe.md')    // fetch() returns a Promise<Response>
    .then(handleReponse)        // We need to handle the response from the web server
    .then(handleContent);       // Next, we process the content of the response


// Browsers supply a DOM API that allows for a more fine-grained control when manipulating
// HTML. With it, you can create HTML Elements, move elements around, or just about anything
// you want to do to the web page.

// Create a <footer><div>&copy; 2025 - Dan Gilleland</div></footer>
let foot = document.createElement('footer');
let div = document.createElement('div');
let text = document.createTextNode(' 2025 - Dan Gilleland');

// I'm using .innerHTML to put in the HTML Character Entity because I need the browser to "render"/interpret the copyright symbol. (Try changing it to &trade;)
div.innerHTML = '&copy; '; // HTML entity for: ©
div.appendChild(text);
foot.appendChild(div);

document.body.appendChild(foot);
