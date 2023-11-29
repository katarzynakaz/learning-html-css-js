function whoIsPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomName = names[randomPersonPosition];
    return randomName = " is going...."
}


function feedTheCat(whenCatReallyHungry) {
    if (whenCatReallyHungry) {
        return "Cat needs to be fed.";
    }
    return "Cat is lying.";
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
  


  function feedCatTreats(plannedTreats, actualTreats) {
    if (actualTreats === 1) {
      return "Is it your cat's birthday?";
    } else if (actualTreats <= plannedTreats - 2) {
      return "The weight loss is going well";
    } else if (actualTreats === plannedTreats - 1) {
      return "Birdie";
    } else if (actualTreats === plannedTreats) {
      return "Par";
    } else if (actualTreats === plannedTreats + 1) {
      return "Bogey";
    } else if (actualTreats === plannedTreats + 2) {
      return "Double Bogey";
    } else {
      return "";
    }
  }


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
let treatsFed = prompt("How many treats did your cat trick you into getting?")


  function feedCatTreats(plannedTreats, actualTreats) {
    if (actualTreats === 1) {
      return "Wow";
    } else if (actualTreats <= plannedTreats - 2) {
      return "The weight loss is going well";
    } else if (actualTreats === plannedTreats - 1) {
      return "Birdie";
    } else if (actualTreats === plannedTreats) {
      return "Par";
    } else if (actualTreats === plannedTreats + 1) {
      return "Bogey";
    } else if (actualTreats === plannedTreats + 2) {
      return "Double Bogey";
    } else {
      return "";
    }
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