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
  for (var a in suits) {
    for (var s in values) {
      packArr.push(values[s] + " of " + suits[a]);
      packObj[values[s] + " of " + suits[a]] = parseInt(s) + 1;
    }
  }

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
    this.deck = [];
    this.deck = buildCards(true);
  } //End of reset()

  /**
   * Shuffling the cards
   */
  shuffle() {
    for (var asArray = this.deck.length, a = 0; a < asArray; a++) {
      var suits = Math.floor(Math.random() * asArray),
        values = this.deck[a];
      this.deck[a] = this.deck[suits];
      this.deck[suits] = values;
    }
  } //End of shuffle()

  /**
   * Deal a card
   * @returns {String} A Card from the deck of cards
   */
  deal() {
    return this.deck.pop();
  } //End of deal()

  /**
   * Check if the Deck is empty
   * @returns {Boolean} True or False
   */
  isEmpty() {
    this.deck.length == 0 ? true : false;
  } //End of isEmpty()

  /**
   * Remaining cards in the Deck
   * @returns {Number} Number of cards in the Deck
   */
  length() {
    return this.deck.length;
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
    this.placeHolder.style.backgroundPosition = flipped
      ? -150 * this.position + "px"
      : "0px";
  }
  flip() {
    if (this.flipped) {
      this.placeHolder.style.backgroundPosition = "0px";
      this.flipped = false;
    } else {
      this.placeHolder.style.backgroundPosition = -150 * this.position + "px";
      this.flipped = true;
    }
  } // End of displayCard
}
/**
 * Method to flip the card
 * End of flip()
 * End of Card class*/

/**
 * Functions which help Play the BlackJack game
 */
const deck = new Deck();
let card1, card2, playerCard1, playerCard2, playerCard3, playerCard4;
playerTotal = 0;
dealerTotal = 0;

/**
 * Dealing initial Cards
 */
function initialDeal() {
  if (deck.length() < 7) {
    deck.reset();
    deck.shuffle();
  }

  card1 = new Card(deck.deal());
  card2 = new Card(deck.deal());
  playerCard1 = new Card(deck.deal());
  playerCard2 = new Card(deck.deal());
  card1.displayCard("card1", true);
  card2.displayCard("card2", false);
  playerCard1.displayCard("playerCard1", true);
  playerCard2.displayCard("playerCard2", true);
  card1.value = 10 < card1.value ? 10 : card1.value;
  card2.value = 10 < card2.value ? 10 : card2.value;
  playerCard1.value = 10 < playerCard1.value ? 10 : playerCard1.value;
  playerCard2.value = 10 < playerCard2.value ? 10 : playerCard2.value;
  21 === (playerTotal = playerCard1.value + playerCard2.value) &&
    cuteAlert({
      type: "success",
      title: "Superb!!!",
      message: "Blackjacked !!!",
      buttonText: "Wohoo !!!",
      img: "success.svg",
    }).then(() => {
      location.reload();
    });
}

// Deal(Instantiate) 2 Dealer cards and 2 Player cards
// Open the board with 2 Dealer cards (one Dealer card is closed) and 2 Player cards (both open)
// Setting face card values to 10
// Getting player cards total - show an alert only if there is a Blackjack
// Alert to show Blackjack
//         cuteAlert({
//             type: "success",
//             title: "Superb!!!",
//             message: "Blackjacked !!!",
//             buttonText: "Wohoo !!!",
//             img:"success.svg"
//         }).then(() => {
//             location.reload()  // Load a new game
//         })
// } //End of deal()

/**
 * If the Player stands with his cards - the Dealer has to flip his closed card and determine who wins the game
 */
function stand() {
  card2.flip();
  dealerTotal = card1.value + card2.value;
  (playerTotal >= dealerTotal
    ? cuteAlert({
        type: "success",
        title: "Congratualtions !!!",
        message: "You won the Game",
        buttonText: "Yayy !",
        img: "success.svg",
      })
    : cuteAlert({
        type: "error",
        title: "Oh No !!!",
        message: "Dealer won the Game",
        buttonText: "Ok :(",
        img: "error.svg",
      })
  ).then(() => {
    location.reload();
  });
}


// flip Dealer cards and compare
// Checking Dealer and Player score - to give the result using cuteAlerts (just like the alert in initialDeal function)
// Variable to track the extra cards dealed


let extraCnt = 0;

/**
 * function which deals extra playercards - Max. 2 cards
 */
function hit() {
  dealButton = document.getElementById("deal");
  playerCard3 = new Card(deck.deal());
  playerCard4 = new Card(deck.deal());
  if (0 === extraCnt) {
    playerCard3.displayCard("playerCard3", !0);
    playerCard3.value = 10 < playerCard3.value ? 10 : playerCard3.value;
    playerTotal += playerCard3.value;
  } else if (1 === extraCnt) {
    playerCard4.displayCard("playerCard4", !0);
    playerCard4.value = 10 < playerCard4.value ? 10 : playerCard4.value;
    playerTotal += playerCard4.value;
  } else {
    asArray.style.display = "none";
    cuteAlert({
      type: "warning",
      title: "Sorry...",
      message: "Max. Cards dealed",
      buttonText: "OK",
      img: "warning.svg",
    });
  }
  if (21 < playerTotal) {
    cuteAlert({
      type: "error",
      title: "Busted...",
      message: "You lost the Game",
      buttonText: "OK",
      img: "error.svg",
    }).then(() => {
      location.reload();
    });
    asArray.style.display = "none";
  } else
    21 === playerTotal &&
      cuteAlert({
        type: "success",
        title: "Superb!!!",
        message: "Blackjacked !!!",
        buttonText: "Wohoo !!!",
        img: "success.svg",
      }).then(() => {
        location.reload();
      });

  // Dealing the extra cards that the player requests
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
