// ~/js/gamePieces.js

// Hard-coded ranges
const CARD_CODES = ['AS', '2S', '3S', '4S', '5S', '6S', '7S',
    '8S', '9S', '0S', 'JS', 'QS', 'KS',
    'AD', '2D', '3D', '4D', '5D', '6D', '7D',
    '8D', '9D', '0D', 'JD', 'QD', 'KD',
    'AC', '2C', '3C', '4C', '5C', '6C', '7C',
    '8C', '9C', '0C', 'JC', 'QC', 'KC',
    'AH', '2H', '3H', '4H', '5H', '6H', '7H',
    '8H', '9H', '0H', 'JH', 'QH', 'KH'];

const CARD_SUITS = ["Hearts", "Diamonds", "Spades", "Clubs"];
const CARD_VALUES = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const CARD_VALUE_NAMES = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

// Make these hard-coded arrays immutable (impossible to change)
Object.freeze(CARD_CODES);
Object.freeze(CARD_SUITS);
Object.freeze(CARD_VALUES);
Object.freeze(CARD_VALUE_NAMES);

// Exported Functions
const isCard = (code) => {
    let isValid = false;
    if (CARD_CODES.includes(code)) {
        isValid = true;
    }
    return isValid;
}

const buildCard = (cardCode) => {
    return {
        code: cardCode,
        suit: suitFromCode(cardCode[1]),  // second character
        value: valueFromCode(cardCode[0]) // first character
    }
}

const nameCard = (cardCode) => {
    const suit = suitFromCode(cardCode[1]);
    const value = valueFromCode(cardCode[0]);
    const valueName = valueNameFromValue(value);
    return `${valueName} of ${suit}`;
}


// Internal Utility Functions
const valueFromCode = (codePart) =>
    CARD_VALUES.find(value => isNaN(parseInt(codePart)) ?
        value.startsWith(codePart) :
        value.endsWith(codePart));

const suitFromCode = (codePart) =>
    CARD_SUITS.find(suit => suit.startsWith(codePart));

const valueNameFromValue = (value) =>
    CARD_VALUE_NAMES[CARD_VALUES.indexOf(value)];


// Final list of exported items
export { CARD_CODES, CARD_SUITS, CARD_VALUES, CARD_VALUE_NAMES, isCard, buildCard, nameCard }
