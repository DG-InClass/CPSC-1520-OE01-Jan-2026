// Fetch utility function
// ⚠️ NOTE: The version of `fetchData()` that I am showing here differs from the version shown in the `README.md` docs for this demo.
export function fetchData(endpoint) {
    return fetch(endpoint).then(handleResponse);
    //     \_____________/
    //       | Promise<Response>
}

/**
 * Check that the response is ok (status code 200) and returns a
 * JavaScript object from the JSON data.
 * @param {Response} response - An HTTP Response from a web server
 * @return {Promise<object>} - A promise of some JavaScript object
 */
const handleResponse = function(response) {
    if(!response.ok) {
        // Uh-oh, something went wrong
        let message = `Server responsed with ${response.status} (${response.statusText}). (${response.url})`;
        throw new Error(message);
    }
    // Since throwing an exception automatically exits a function,
    // we don't need an "else" part to our "if" statement.
    return response.json(); // Parse the body of the response as though it is a JSON string and return the JavaScript object/array.
}


// POST utility function
export async function postData(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Network response failed');
  }

  const data = await response.json();
  return data;
}

// TODO: Add DELETE function here
