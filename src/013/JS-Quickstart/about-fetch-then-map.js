// src/013/JS-Quickstart/about-fetch-then-map.js

// node --watch about-fetch-then-map.js
console.clear();
// Whenever we request JSON from some API service,
// that JSON will be either an object or an array.
fetch('https://randomuser.me/api?results=10')
//                              \ query string
    .then(response => response.json())
//   \__ Promise<object | Array>  __/
    // The data (below) is the result of parsing JSON above
    .then(data => {
        console.log(`Received ${data.results.length} users`);
        // console.log(data.results[0].name, '\n----\n');
        const length = data.results.length;
        for(let index = 0; index < length; index++) {
            let person = data.results[index];
            console.log(person.name);
        }

        // BTW, if you intend on having more .then()
        // calls, you should return something from
        // this function
        return data; // return the data unchanged
    })
    .then(data => {
        console.clear(); // to reduce the "noise"
        console.log(`data is a(n) ${typeof data}`);
        // TODO: Bring in a function to describe the type of data we are using....
        return data; // Again, return the data unchanged
    })
    .then(data => {
        // Let's "transform" the data by "mapping" the
        // results into another array "shape"
        let info = data.results.map(item => {
            return {
                name: item.name.first + ' ' + item.name.last,
                place: item.location.city
            }
        });
        return info;
    })
    .then(data => {
        console.table(data);
    });
    
