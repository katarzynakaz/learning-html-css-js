// proper function syntax


function determinevalueOfCrypto(x) {
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
function tallyFlowerColors(color) {
  let addition = 0;
  switch (color) {
      case "red":
      addition += 2;
      break;
      case "blue":
      addition += 1;
      break;
      case "yellow":
      addition -= 1;
      break;
  }

  score += addition;
  return score;

}
// Problem: "Flower Color Tally"

// In a garden, you are observing flowers of different colors. Your task is to write a JavaScript function that helps in 
// tallying the colors of the flowers. There are three primary colors to consider:

// Red Flowers: Each red flower counts as 2 points.
// Blue Flowers: Each blue flower counts as 1 point.
// Yellow Flowers: Each yellow flower deducts 1 point.






function whoIsPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomName = names[randomPersonPosition];
    return randomName = " is going...."
}


function feedTheCat(sound) {
    switch (sound) {
      case "meow":
      return "Cat needs to be fed.";
      break;
      case "no meow":
        return "Cat is full.";
        break;
        default:
          return "Who knows."
}  
}


== equal
= assigns var on left to value on right
== performs conversion
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true

=== does not perform conversion // will be considered false

if (num > 5 && num < 10) {
    return "Yes";
  }
  return "No";

  // breakdown if (num > 5) {
//   if (num < 10) {
//     return "Yes";
//   }
// }
// return "No";


logical operator - 1 value needs to be true to be true
if (numberOfCats > 5) {
    if (numberOfCats < 10) {
      return "Yes";
    }
  }
  return "No";
  // if more than 10 cats or less than  5 cats it's true

//   if statements
  if (num > 15) {
    return "Bigger than 15";
  } else if (num < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 15";
  }

  else if is more specific 
  



//   switch
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case 1 :
    answer = "alpha";
    break;
   case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
    break;
    }
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);

//   function chooseBeverage(mood) {
//   let beverage;
//   switch (mood) {
//     case "happy":
//       beverage = "Smoothie";
//       break;
//     case "tired":
//       beverage = "Coffee";
//       break;
//     case "hot":
//       beverage = "Iced Tea";
//       break;
//     case "cold":
//       beverage = "Hot Chocolate";
//       break;
//   }
//   return beverage;

with default 
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case "a": 
      answer = "apple";
      break;
      case "b":
      answer = "bird";
      break;
      case "c":
      answer = "cat";
      break;
      default: 
      answer = "stuff";
      break;
  }
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);

  analogy
//   function switchOfStuff(val) {
//   let answer = "";
//   // Think of 'val' as the label on a key
//   switch (val) {
//     case "a": 
//       // If the key is labeled 'a', it opens a box with an apple
//       answer = "apple";
//       break;
//     case "b":
//       // If the key is labeled 'b', it opens a box with a bird
//       answer = "bird";
//       break;
//     case "c":
//       // If the key is labeled 'c', it opens a box with a cat
//       answer = "cat";
//       break;
//     default: 
//       // Any other label, the key opens a box with 'stuff'
//       answer = "stuff";
//       break;
//   }
//   // Return the content of the opened box
//   return answer;
// }

// switchOfStuff(1); // This will return 'stuff' as the key labeled '1' opens the mystery box

sweitch instead of what if 
in switch number ()
string " "
empty ""

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
      case "bob":
      answer = "Marley";
      break;
      case (42):
      answer = "The Answer";
      break;
      case (1):
      answer = "There is no #1";
      break;
      case (99):
      answer = "Missed me by this much!";
      break;
      case (7):
      answer = "Ate Nine";
      break;
      case "John":
      answer = "";
      break;
      case (156):
      answer = "";
    }
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);




  Booleanfunction isDarkOutside(a, b) {
    // 'a' is the current time, 'b' is sunset time
    // The function checks if it's dark outside (if the current time is later than sunset time)
    // It's like an automatic light switch:
    // If it's dark (current time is later than sunset time), the light turns on (returns true)
    // If it's not dark (current time is earlier than sunset time), the light stays off (returns false)
    return a > b; // Automatically returns true if it's dark, false if it's not
  }
  
  // Example usage:
  isDarkOutside(21, 18); // Is it dark outside at 9 PM if sunset is at 6 PM? Returns true.


  better analogyunction hasFinishedFirst(runnerA, runnerB) {
    if (runnerA < runnerB) {
      return true;  // Runner A finished first
    } else {
      return false; // Runner B finished first or they finished at the same time
    }
  }

  can be shown as

  
  function hasFinishedFirst(runnerA, runnerB) {
    // Directly check if Runner A's time is less than Runner B's time
    // It's like directly knowing who crossed the finish line first without needing a judge to decide
    return runnerA < runnerB;
  }


 

let treatsPlanned = prompt("How many treats did you plan to feed your cat today?");
let treatsFed = prompt("How many treats did your cat trick you into getting?");

function feedCatTreats(plannedTreats, actualTreats) {
  if (plannedTreats === actualTreats) {
     return "Right on target, treat master!";
  } else if (actualTreats >= plannedTreats) {
     return "Oops, one treat too many!";
  } else if (actualTreats <= plannedTreats) {
     return "That's impossible!";

  }
}

let result = feedCatTreats;
alert(result);





let planned = prompt("How many treats did you plan to feed your cat today?");
  let actual = prompt("How many treats did your cat trick you into getting?");

function feedCatTreats(planned, actual) {
  
  let treatDifference = actual - planned;
  switch (true) {
    case (treatDifference === 0):
     return "Right on target, treat master!";
     break;
   case (treatDifference > 0): 
     return "Oops, one treat too many!";
     break;
   case (treatDifference < 0):
     return "That's impossible!!";
     break;
  default: 
     return "Oh no, the cat stole all of them!";
}
}
let result = feedCatTreats(Number(planned), Number(actual));
alert(result);

const myCat = {
  "name": "Laser",
  "color": "grey",
    "kittens" {
      "kitten1": "Pumpkin", 
      "kitten2": "Bob",
    }
}

console.log(myCat.name + "will have 2 kittens" + myCat.kittens)





Use Multiple Conditional (Ternary) Operators
In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.




function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
 }





//  arrow function

var magic = function() {
  return new Date();
};

const magic = () => new Date;