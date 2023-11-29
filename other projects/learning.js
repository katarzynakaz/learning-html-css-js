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
  


  function feedLaserTreats(plannedTreats, actualTreats) {
    if (actualTreats === 1) {
      return "Hole-in-one!";
    } else if (actualTreats <= plannedTreats - 2) {
      return "Eagle";
    } else if (actualTreats === plannedTreats - 1) {
      return "Birdie";
    } else if (actualTreats === plannedTreats) {
      return "Par";
    } else if (actualTreats === plannedTreats + 1) {
      return "Bogey";
    } else if (actualTreats === plannedTreats + 2) {
      return "Double Bogey";
    } else {
      return "Go Home!";
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