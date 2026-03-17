// Import the functions necessary to make the API calls
import { fetchData, postData } from './utils';

// Select the necessary DOM elements
const loadButton = document.getElementById('loadBooks');
const list = document.getElementById('bookList');
const addForm = document.getElementById('addBook');

// Define the API endpoint
const endpoint = 'http://localhost:3000/books'; // Note: This variable might be better to put in another file (depending on how complex/large your code starts to get in `main.js`)

// Define a function to handle loading and displaying the list of books
const loadHandler = function() {
    // Note: A Promise<T> has two associated functions:
    //   .then(), which also returns a Promise<T> - when the promise suceeds
    //   .catch(), which returns a Promise<T> - when the promise fails (is rejected)
    fetchData(endpoint)
        .then(data => {
            // 😁 Looks like we got data parsed from JSON endpoint
            console.log(data);
            list.innerHTML = ''; // Clear the existing content
            data.forEach(book => {
                const li = `<li>${book.title} by ${book.author}</li>`;
                list.innerHTML += li; // Appending to the .innerHTML
            })
        })
        .catch(err => {
            // Let's handle the error
            list.innerHTML = `<li style="color:red">Error: ${err.message}</li>`;
        });
}

// Define a function to handle form submission for adding a new book
const submitHandler = async function(evt) {
    evt.preventDefault(); // stops the form from submitting and the page from refreshing
    /** @type {HTMLFormElement} */
    const form = evt.target;
    // 💫 Use the FormData API/class to collect use input from the form
    const formData = new FormData(form);
    console.log('User Inputs:', formData);
    // "convert" the form data into a simple JavaScript object
    const data = Object.fromEntries(formData.entries());
    data.year = parseInt(data.year);
    console.log('Actual user input:', data);

    // Sending this to the REST API to add our book
    // Note: We'll "continue" the async/await approach
    try {
        await postData(endpoint, data);
        // Call loadHandler to "refresh" the list
        loadHandler();
        form.reset(); // clear out the form.
    } catch(err) {
        // TODO: Display the error in a nicer way to the user.
        console.log('Error submitting form:', err);
    }
}

// Attach event listeners to the button and form
loadButton.addEventListener('click', loadHandler);
addForm.addEventListener('submit', submitHandler);

// TODO: Add delete functionality
