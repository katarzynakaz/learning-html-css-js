// proper function syntax


function determineBananaNumber(x) {
    let amount;
    if (x > 10) {
      amount = +1;
    } else {
      amount = -1;
    }
    return amount;
  }

  let change;
if (condition) {
  change = +1;
} else {
  change = -1;
}

function doWeAdd(card) {
    let change; // Correctly declared
    if (arrPlus.includes(card)) {
      change = +1; // Correctly assigned
      // ... similar assignments in other blocks
    }
    return change;
  }

//   Counting Cards
let count = 0;

function cc(card) {
  // Arrays categorizing card values
  const arrPlus = [2, 3, 4, 5, 6];
  const arrNothing = [7, 8, 9];
  const arrMinus = [10, "J", "Q", "K", "A"];

  // Determine the value change for the card
  function doWeAdd(card) {
    let change; // Variable declared once
    if (arrPlus.includes(card)) {
      change = +1; // Assign the value directly without re-declaring 'let'
    } else if (arrNothing.includes(card)) {
      change = 0;
    } else if (arrMinus.includes(card)) {
      change = -1;
    }
    return change;
  }

  // Update the count
  count += doWeAdd(card); 

  // Determine player action
  function playerAction() {
    if (count > 0) {
      return "Bet";
    } else {
      return "Hold";
    }
  }

  return count + " " + playerAction();


//   In a fruit market, you are tasked with keeping track of banana bunches based on their size. There are three categories:

//   Small Bunches: Each small bunch has 1 to 3 bananas.
//   Medium Bunches: Each medium bunch has 4 to 6 bananas.
//   Large Bunches: Each large bunch has more than 6 bananas.
//   Your goal is to write a function that takes the number of bananas in a bunch as input and updates a running tally with points based on these rules:
  
//   For each small bunch, add 1 point.
//   For each medium bunch, add 2 points.
//   For each large bunch, add 3 points.
//   The function should return the total points after each bunch is counted.
function bananaBunchC(numberOfBananas){
    let tally = 0;
    //add banana bunch type 
    function calculateAddToCount(numberOfBananans) { //based of how mnay banans in bunch
        let addToCount = 0;
        if (numberOfBananas <= 3) {
            addToCount += 1;
        } else if (numberOfBananas >= 4 && numberOfBananas <= 6) {
            addToCount += 2;
        } else if (numberOfBananas > 6) {
            addToCount += 3;
        }
        return addToCount;
    }
    tally += calculateAddToCount(numberOfBananas);
    return tally;
}
let score = 0;
function tallyColors {

    function calculate
    // if red tally +=2 
    // if blue += 1
    // if yellow -= 1
    
    
    
    
    
    
    return tally;
}



// Problem: "Flower Color Tally"

In a garden, you are observing flowers of different colors. Your task is to write a JavaScript function that helps in 
tallying the colors of the flowers. There are three primary colors to consider:

Red Flowers: Each red flower counts as 2 points.
Blue Flowers: Each blue flower counts as 1 point.
Yellow Flowers: Each yellow flower deducts 1 point.