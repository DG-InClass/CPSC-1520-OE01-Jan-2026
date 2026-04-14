// ~/tests/gamePieces.spec.js
import { describe, test, it, expect } from 'vitest';
import { isCard, CARD_CODES } from '../js/gamePieces';

// There are two primary "game pieces":
// - Individual Playing Cards
// - "Pile" of cards
/* Big Picture of the "parts" of working with cards/deck
    - Visual aspect to my game: I can create a custom element
        <playing-card card="5D"></playing-card>
    - "Data" characteristic of a card
        - 2 character string, where the first character is
          the value and the second is the suit
    - "Data" characteristic of a "pile" of cards
        - An array of zero or more card objects
    
    How it all works:
        Before I can get around to the <playing-card> elements
    I would be interested in being able to build a card from
    a string. I want to have confidence that the string will
    represent a "real" card and not some garbage data.
        I would also want to have the sense of confidence
    around grouping cards together in a pile, such as a
    fresh deck of cards or a player's hand or a discard or
    draw pile.
        - isCard(code) should
            - return true for a valid card code
            - return false for an invalid code
*/
describe('Game Piece utility functions/object/types', () => {
    // Template for any test/specification
    test.todo('', () => {});

    test.each(CARD_CODES)
    ('isCard() should return true for %s', (given) => {
        // Arrange - set up the things for the SUT
        // const given = "5D";

        // Act - where I "do" the thing I'm testing/designing
        const actual = isCard(given);
        console.log('sending in', given);

        // Assert - make sure it works
        expect(actual).toBe(true);
    });

    test.each(['', null, 'bob'])
    ('isCard() should return false for "%s"', (given) => {
        // Arrange
        // Act
        const actual = isCard(given);
        // Assert
        expect(actual).toBe(false);
    });
});

describe('Individual Playing Card', () => {
    /* PlayingCard
        - should have a suit
        - should have a value
    */
    test.todo('should have a suit', () => { });
});
