// Import the functions necessary to make the API calls
import { fetchData } from './utils';

// Select the necessary DOM elements
const loadButton = document.getElementById('loadBooks');
const list = document.getElementById('bookList');

// Define the API endpoint
const endpoint = 'http://localhost:3000/books'; // Note: This variable might be better to put in another file (depending on how complex/large your code starts to get in `main.js`)

// Define a function to handle loading and displaying the list of books
const loadHandler = function() {
    fetchData(endpoint)
        .then(data => {
            // 😁 Looks like we got data parsed from JSON endpoint
            console.log(data);
        })
}

// Define a function to handle form submission for adding a new book

// Attach event listeners to the button and form
loadButton.addEventListener('click', loadHandler);

// TODO: Add delete functionality
