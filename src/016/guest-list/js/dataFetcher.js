/**
 * isInLocation() is a predicate function created for filtering
 * RandomUser data. It will match for the person's location being either Alberta or Saskatchewan.
 * 
 * @param {object} person - An object matching the RandomUser data structure
 * @param {object} person.location - The location data about a RandomUser
 * @param {string} person.location.country - The country of the RandomUser
 * @param {string} person.location.state - The state/province/region of the Randomuser 
 * @returns {boolean} - True if the person is in Alberta or Saskatchewan, Canada
 */
const isInLocation = 
    (person) => person.location.country === 'Canada'
             && (person.location.state === 'Alberta' ||
                 person.location.state === 'Saskatchewan');

/**
 * toSimpleProfile() takes a RandomUser (from RandomUser.me/api) and simplifies the resulting data for what I'm interested in on my page.
 * @param {object} person - A RandomUser object
 * @returns {object} - A simple restructuring of the RandomUser data
 */                 
const toSimpleProfile =
    (person) => {
        let age = person.dob.age;
        if (age < 20 || age > 40) {
            age = 20 + Math.floor(Math.random() * 21);
        }
        return {
            name: person.name,
            gender: person.gender,
            dob: { ...person.dob, age },
            id: person.id,
            home: {
                city: person.location.city,
                prov: person.location.state,
                code: person.location.postCode,
                country: person.location.country,
                street: person.location.street
            },
            thumb: person.picture.thumbnail
        }
    };

export async function fetchData() {
    try {
        const r = await fetch('https://randomuser.me/api?results=3000');
        // The API above is monitored so as to prevent "over-use"
        // or abuse. If you make too many requests in too short
        // a period of time, then the server will return a status
        // code of 429, "Too many requests".
        if (r.status === 429) {
            // For this demo, I'm providing a "fallback" of some
            // stored (cached) data that I provided with this
            // starter kit
            const cachedR = await fetch('./data/cached.json');
            const d = await cachedR.json();
            let result = d.results.filter(isInLocation);
            result = result.map(toSimpleProfile);
            return { data: result, isCached: true };
        } else {
            const d = await r.json();
            // Every array has certain methods such as the .filter().
            let sample = [1, 3, 4, 6, 7].filter(num => num%2 !== 0)
            console.log('Odd numbers:', sample);
            let result = d.results.filter(isInLocation);
            // The .map() is another popular method every array has
            result = result.map(toSimpleProfile);
            return { data: result, isCached: false };
        }
    } catch (error) {
        console.error('Fetch error:', error);
        // Fallback to cached
        const cachedR = await fetch('./data/cached.json');
        const d = await cachedR.json();
        let result = d.results.filter(isInLocation);
        result = result.map(toSimpleProfile);
        return { data: result, isCached: true };
    }
}