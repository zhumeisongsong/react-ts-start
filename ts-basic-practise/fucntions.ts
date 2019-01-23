/*
 * Functions
 */

// Name function
import { type } from "os";
function add(x, y) {
  return x + y;
}

// Anonymous function
let myAdd = function (x, y) {
  return x + y;
}

/*
 * Function types
 * A function’s type has the same two parts: the type of the arguments and the return type.
 */

// Typing the function
function add(x: number, y: number) {
  return x + y;
}

let myAdd = function (x: number, y: number): number { // add a return type.
  return x + y
}

// Writing the function type
let myAdd: (x: number, y: number) => number =
  function (x: number, y: number): number {
    return x + y
  }

let myAdd: (baseValue: number, increment: number) => number = // sing a fat arrow (=>) between the parameters and the return type
  function (x: number, y: number): number {
    return x + y
  }

let returnVoid = function (x: number): void {
  console.log(x)
}

/*
 * Optional and default parameters
 */
function buildName(firstName: string, lastName?: string): string { // Any optional parameters must follow required parameters.
  if (lastName) {
    return firstName + '' + lastName;
  } else {
    return firstName;
  }
}

// Default-initialized parameters
function buildName(firstName: string, lastName = 'Smith'): string {
  return firstName + '' + lastName;
}

let result1 = buildName("Bob"); // works correctly now, returns "Bob Smith"
let result2 = buildName('Bob', undefined); // still works, also returns "Bob Smith"

/*
 * Rest parameters
 */

// Gather these arguments together into a variable
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + '' + restOfName.join(' ');
}

let employeeName = buildName('a', 'b', 'c', 'd');


// Attention This
let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function () { // A function that itself returns a function
    return () => {  // Arrow functions capture the this where the function is created rather than where it is invoked:
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      };
    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert(`card: ${pickedCard} of ${pickedCard.suit}`);


// Add a couple of interfaces
interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => card;

}

let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      };

    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert(`card: ${pickedCard} of ${pickedCard.suit}`);

/*
 * Overloads
 * A function has two more types of return values.
 */
let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

function pickCard(x): any {
  if (typeof x == 'object') {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x == 'number') {
    let pickedSuit = Math.floor(x / 13);
    return {suit: suits[pickedSuit], card: x % 13};
  }
}

let myDeck = [
  {
    suit: 'diamonds',
    card: 2
  },
  {
    suit: 'spades',
    card: 10
  },
  {
    suit: 'hearts',
    card: 4
  }
];

let pickedCard1 = myDeck[pickCard(myDeck)];
alert(`card: ${pickedCard1.card} of ${pickedCard1.suit}`);

let pickedCard2 = pickedCard(15);
alert(`card: ${pickedCard2.card} of ${pickedCard2.suit}`);

// Supply multiple function types for the same function as a list of overloads
let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

function pickCard(x: { suit: string; card: number; }[]): number;

function pickCard(x: number): { suit: string; card: number; };

function pickCard(x): any {
  // ...
}

let myDeck = [
  {
    suit: 'diamonds',
    card: 2
  },
  {
    suit: 'spades',
    card: 10
  },
  {
    suit: 'hearts',
    card: 4
  }
];

let pickedCard1 = myDeck[pickCard(myDeck)];
alert(`card: ${pickedCard1.card} of ${pickedCard1.suit}`);

let pickedCard2 = pickedCard(15);
alert(`card: ${pickedCard2.card} of ${pickedCard2.suit}`);


