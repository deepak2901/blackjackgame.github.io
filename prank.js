const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
const packArr = [];
const packObj = {};
for (var a in suits){
    for (var s in values){
      packArr.push(values[s] + " " + "of"+ " " + suits[a]);
      packObj[values[s]+ " " + "of" + " " + suits[a]] = parseInt(s)+1
    }
  }
  console.log(packArr);
  console.log(packObj);