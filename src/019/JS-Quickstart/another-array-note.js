// node --watch another-array-note.js
console.clear();
console.log('Sorting Arrays');
console.log('==============');
const show = console.log; // an alias for console.log

// A) Sorting an array of numbers
let numbers = [2, 8, 4, 6, 3, 7, 12, 1];
show('The original numbers:\n', numbers);
let numbersSorted = numbers.sort();
// The default way the .sort() function works on arrays
// is to sort the array contents alphabetically (i.e:
// as strings)
show('\nSorted numbers:\n', numbersSorted);
show('\nOur original\n', numbers);

// The key to sorting is building a comparison function
function numberCompare(a, b) {
    return parseFloat(a) - parseFloat(b);
}
numbers.sort(numberCompare);
show('\nSorted by comparing the entries as numbers', numbers);

// B) Sorting an array of strings
let strings = 'I am sorting an array of strings'.split(' ');

// C) Sorting case-sensitive strings in a non-case-sensitive way
//    TODO:
strings.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));
console.clear();
show(strings);

// D) Sorting in reverse (numbers only)
strings.sort((a, b) => b.localeCompare(a, undefined, {sensitivity: 'base'}));
show(strings);

// E) Sorting playing cards
let cards = [ "JD", "9S", "0D", "5S", "AC", "9H", "2C", "0H" ];

const sortByCardSuit = function(a, b) {
    //   -1    0    1
    // ___|____|____|___
    //
    // a - b would produce a negative number when
    // a comes before b
    // a - b would produce a positive number when
    // a comes after b
    const aSuit = a[1];
    const bSuit = b[1];
    // I would need to decide what the sort order
    // of card suits should be:
    // Spades, Hearts, Diamonds, Clubs
    //   1   ,   2   ,   3     ,   4
    const sortOrder = ['S', 'H', 'D', 'C'];
    const aIndex = sortOrder.indexOf(aSuit);
    const bIndex = sortOrder.indexOf(bSuit);
    return aIndex - bIndex;
}
const sortByCardValue = function(a,b) {
    const sortOrder = "A234567890JQK".split('');
    const aIndex = sortOrder.indexOf(a[0]);
    const bIndex = sortOrder.indexOf(b[0]);
    return aIndex - bIndex;
}
const sortBySuitThenValue = function(a,b) {
    const suitOrder = sortByCardSuit(a, b);
    if(suitOrder === 0) {
        return sortByCardValue(a, b);
    } else {
        return suitOrder;
    }
}

console.clear();
show('Cards before:\n', cards);
show('Cards after\n', cards.sort(sortBySuitThenValue));

/*

  a  |  b  |  a - b       | result
=====|=====|==============|=======
 'S' | 'S' | Same           0
 'S' | 'H' | a is smaller  -1
 'S' | 'D' | a is smaller  -1
 'S' | 'C' | a is smaller  -1
 'H' | 'S' | a is bigger    1
 'H' | 'H' | Same           0
 'H' | 'D' | a is smaller  -1
 'H' | 'C' | a is smaller  -1
 'D' | 'S' | a is bigger    1
 'D' | 'H' | a is bigger    1
 'D' | 'D' | Same           0
 'D' | 'C' | a is smaller  -1
 'C' | 'S' | a is bigger    1
 'C' | 'H' | a is bigger    1
 'C' | 'D' | a is bigger    1
 'C' | 'C' | Same           0

*/
