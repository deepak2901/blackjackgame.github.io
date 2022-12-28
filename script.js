/**
 * Function which build pack of Cards as an Array and as an Object
 * @param {*} asArray - which decides whether to return as an Array or as an Object
 * @returns - packArr if asArray is true, else packObj
 */
function buildCards(asArray = true) {
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
  const packArr = [];
  const packObj = {};

  // write your code here

  packArr = [
    "Ace of Hearts",
    "2 of Hearts",
    "3 of Hearts",
    "4 of Hearts",
    "5 of Hearts",
    "6 of Hearts",
    "7 of Hearts",
    "8 of Hearts",
    "9 of Hearts",
    "10 of Hearts",
    "Jack of Hearts",
    "Queen of Hearts",
    "King of Hearts",
    "Ace of Diamonds",
    "2 of Diamonds",
    "3 of Diamonds",
    "4 of Diamonds",
    "5 of Diamonds",
    "6 of Diamonds",
    "7 of Diamonds",
    "8 of Diamonds",
    "9 of Diamonds",
    "10 of Diamonds",
    "Jack of Diamonds",
    "Queen of Diamonds",
    "King of Diamonds",
    "Ace of clubs",
    "2 of clubs",
    "3 of clubs",
    "4 of clubs",
    "5 of clubs",
    "6 of clubs",
    "7 of clubs",
    "8 of clubs",
    "9 of clubs",
    "10 of clubs",
    "Jack of clubs",
    "Queen of clubs",
    "King of clubs",
    "Ace of Spades",
    "2 of Spades",
    "3 of Spades",
    "4 of Spades",
    "5 of Spades",
    "6 of Spades",
    "7 of Spades",
    "8 of Spades",
    "9 of Spades",
    "10 of Spades",
    "Jack of Spades",
    "Queen of Spades",
    "King of Spades",
  ];

  packObj = {
    "Ace of Hearts": 1,
    "2 of Hearts": 2,
    "3 of Hearts": 3,
    "4 of Hearts": 4,
    "5 of Hearts": 5,
    "6 of Hearts": 6,
    "7 of Hearts": 7,
    "8 of Hearts": 8,
    "9 of Hearts": 9,
    "10 of Hearts": 10,
    "Jack of Hearts": 11,
    "Queen of Hearts": 12,
    "King of Hearts": 13,
    "Ace of Diamonds": 1,
    "2 of Diamonds": 2,
    "3 of Diamonds": 3,
    "4 of Diamonds": 4,
    "5 of Diamonds": 5,
    "6 of Diamonds": 6,
    "7 of Diamonds": 7,
    "8 of Diamonds": 8,
    "9 of Diamonds": 9,
    "10 of Diamonds": 10,
    "Jack of Diamonds": 11,
    "Queen of Diamonds": 12,
    "King of Diamonds": 13,
    "Ace of clubs": 1,
    "2 of clubs": 2,
    "3 of clubs": 3,
    "4 of clubs": 4,
    "5 of clubs": 5,
    "6 of clubs": 6,
    "7 of clubs": 7,
    "8 of clubs": 8,
    "9 of clubs": 9,
    "10 of clubs": 10,
    "Jack of clubs": 11,
    "Queen of clubs": 12,
    "King of clubs": 13,
    "Ace of Spades": 1,
    "2 of Spades": 2,
    "3 of Spades": 3,
    "4 of Spades": 4,
    "5 of Spades": 5,
    "6 of Spades": 6,
    "7 of Spades": 7,
    "8 of Spades": 8,
    "9 of Spades": 9,
    "10 of Spades": 10,
    "Jack of Spades": 11,
    "Queen of Spades": 12,
    "King of Spades": 13,
  };

  if (!asArray) {
    return packObj;
  }
  return packArr;
}

/**
 * Define Deck class
 */
class Deck {
  constructor() {
    this.deck = [];
    this.reset(); //Add 52 cards to the deck
    this.shuffle(); //Suffle the deck
  } //End of constructor

  /**
   * Resetting the Deck
   * Hint: use buildCards in this method
   */
  reset() {
    // write your code here
  } //End of reset()

  /**
   * Shuffling the cards
   */
  shuffle() {
    // write your code here
  } //End of shuffle()

  /**
   * Deal a card
   * @returns {String} A Card from the deck of cards
   */
  deal() {
    // write your code here
  } //End of deal()

  /**
   * Check if the Deck is empty
   * @returns {Boolean} True or False
   */
  isEmpty() {
    // write your code here
  } //End of isEmpty()

  /**
   * Remaining cards in the Deck
   * @returns {Number} Number of cards in the Deck
   */
  length() {
    // write your code here
  } //End of length()
} //End of Deck Class

/**
 * Define Card Class
 */
class Card {
  constructor(card) {
    this.card = card;

    // Get all cards as an Object with key as card name and value as the number of the card
    const cardValues = buildCards(false);

    this.value = cardValues[card];
    this.suit = card.substring(card.indexOf(" of ") + 4);
    this.placeHolder = null;
    this.flipped = false;

    var suits = { Hearts: 0, Diamonds: 13, Clubs: 26, Spades: 39 };
    this.position = suits[this.suit] + this.value; //Position in a sorted deck
  } //End of Constructor

  /**
   * Method to display the card
   * @param {*} placeHolder
   * @param {*} flipped
   */
  displayCard(placeHolder, flipped = true) {
    this.placeHolder = document.getElementById(placeHolder);
    this.placeHolder.classList.add("card");
    this.flipped = flipped;
    if (flipped) {
      this.placeHolder.style.backgroundPosition = -150 * this.position + "px";
    } else {
      this.placeHolder.style.backgroundPosition = "0px";
    }
  } // End of displayCard

  /**
   * Method to flip the card
   */
  flip() {
    if (this.flipped) {
      this.placeHolder.style.backgroundPosition = "0px";
      this.flipped = false;
    } else {
      this.placeHolder.style.backgroundPosition = -150 * this.position + "px";
      this.flipped = true;
    }
  } //End of flip()
} //End of Card class

/**
 * Functions which help Play the BlackJack game
 */
const deck = new Deck();
let card1, card2, playerCard1, playerCard2, playerCard3, playerCard4;

let playerTotal = 0;
let dealerTotal = 0;

/**
 * Dealing initial Cards
 */
function initialDeal() {
  if (deck.length() < 7) {
    deck.reset();
    deck.shuffle();
  }

  // Deal(Instantiate) 2 Dealer cards and 2 Player cards

  // write your code here

  // Open the board with 2 Dealer cards (one Dealer card is closed) and 2 Player cards (both open)

  // write your code here

  // Setting face card values to 10

  // write your code here

  // Getting player cards total - show an alert only if there is a Blackjack
  /*
    // Alert to show Blackjack
        cuteAlert({
            type: "success",
            title: "Superb!!!",
            message: "Blackjacked !!!",
            buttonText: "Wohoo !!!",
            img:"success.svg"
        }).then(() => {
            location.reload()  // Load a new game
        })
    */

  // write your code here
} //End of deal()

/**
 * If the Player stands with his cards - the Dealer has to flip his closed card and determine who wins the game
 */
function stand() {
  // flip Dealer cards and compare
  // write your code here
  // Checking Dealer and Player score - to give the result using cuteAlerts (just like the alert in initialDeal function)
  // write your code here
}

// Variable to track the extra cards dealed
let extraCnt = 0;

/**
 * function which deals extra playercards - Max. 2 cards
 */
function hit() {
  let dealButton = document.getElementById("deal");

  // Dealing the extra cards that the player requests

  // write your code here

  // Dealing new cards
  // Use conditional block
  /*
    When 4 cards are dealed use the following code
        dealButton.style.display = 'none'
        // Alert - Max. Cards dealed
        cuteAlert({
            type: "warning",
            title: "Sorry...",
            message: "Max. Cards dealed",
            buttonText: "OK",
            img:"warning.svg"
        })
    */

  // write your code here

  // Checking the total of the player cards before dealing new cards
  // cuteAlert - Player looses the game - as score is more than 21
  // cuteAlert - Player wins with BlackJack !!!

  // Increment extra card count
  extraCnt++;
}

/**
 * Initial Deal
 */
initialDeal();
