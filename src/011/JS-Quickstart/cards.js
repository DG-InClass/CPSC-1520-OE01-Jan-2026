// cards.js
// node --watch cards.js
const cardSuits = [ 'Spades', 'Hearts', 'Diamonds', 'Clubs' ];
const cardValues = [ 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King' ];

/** @typedef { { suit: string, value: string } } Card */

/** @type { Card[] } */
const deck = [];

// TODO: 1) Create a deck of cards
for(let suitIndex = 0; suitIndex < cardSuits.length; suitIndex++) {
    let suit = cardSuits[suitIndex];
    // console.log(suit);
    for(let valueIndex = 0; valueIndex < cardValues.length; valueIndex++) {
        let value = cardValues[valueIndex];
        // console.log(value);
        deck.push({suit, value});
    }
}
console.log('I have a fresh deck of cards\n');
// console.log(deck);

// TODO: 2) Shuffle a deck of cards
//   Uses the Fisher-Yates Shuffle Algorithm
// for(let index = deck.length - 1; index > 0; index--) {
//     // Generate a random index position
//     const rand = Math.floor(Math.random() * (index + 1));
//     // Swap the current card with the randomly chosen card
//     let temp = deck[rand];
//     deck[rand] = deck[index];
//     deck[index] = temp;
// }
console.clear();
// console.log(deck);

// TODO: 3) Deal a card from the deck
// Arrays have a few methods to add to the array
// as well as to remove from the array
console.clear();
let position = 0;
console.log(`\n${deck[position].value} ${deck[position].suit}`);
let aCard = deck.pop(); // Removed from the end of the array
console.log(aCard.value, aCard.suit);
console.log(`I have ${deck.length} cards left`);
aCard = deck.shift(); // Removed from the start of the array
console.log(aCard.value, aCard.suit);
console.log(`I have ${deck.length} cards left`);

/* Arrays have methods like
    .push() ===> Add to the end of the array
    .pop()  ===> Remove from the end
    .unshift() ==> Add to the start
    .shift() ====> Remove from the start
*/
