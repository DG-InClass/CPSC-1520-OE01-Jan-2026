console.clear();
console.log('About Object Properties');

let person = {
    firstName: 'Stewart',
    lastName: 'Dent',
    'middle-initial': 'A'
}
console.log(person);
console.log('Hello', person.firstName);
console.log('Last Name:', person['lastName']);
//                               \_string_/
// that string is the name of the property
console.log('The full name is:');
let message = `${person.firstName} ${person['middle-initial']}. ${person.lastName}`;
console.log(message);


console.log('\n\n');
