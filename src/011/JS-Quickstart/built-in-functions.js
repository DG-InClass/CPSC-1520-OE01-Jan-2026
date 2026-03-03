// node --watch built-in-functions.js

// There are a number of functions that are common for all arrays:
// .forEach()
// .filter()
// .map()
// .sort()
// .join()

/**
 * @type {{name:string, days:number}[]}
 */
let months = [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 },
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 }
];

let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// TODO: A live demonstration...
let result; // a re-usable variable
//  Manipulating arrays to achieve:
//  - Short week-day names
result = weekDays.map(dayName => dayName.substring(0,3));
//       weekDays.map(function(dayName) {
//           return dayName.substring(0,3);
//       });
console.log('The short week-day names are:', result);
console.log();

//  - Short month names
result = months.map( (month) => {
    return month.name.substring(0,3);
});
console.log('The short names of the months of the year are:', result);
console.log();

//` - All the months with only 30 days
//    Demo of the .filter() method of arrays
result = months.filter(month => month.days === 30);
console.log('The months with only 30 days are:', result);
//  - The week-day name of the last day of this month


