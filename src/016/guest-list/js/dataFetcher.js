const isInLocation = 
    (person) => person.location.country === 'Canada'
             && (person.location.state === 'Alberta' ||
                 person.location.state === 'Saskatchewan');

                 
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
        if (r.status === 429) {
            const cachedR = await fetch('./data/cached.json');
            const d = await cachedR.json();
            let result = d.results.filter(isInLocation);
            result = result.map(toSimpleProfile);
            return { data: result, isCached: true };
        } else {
            const d = await r.json();
            let result = d.results.filter(isInLocation);
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