// console.log("Hello world")

// const myName = "Kaska"
// let myAge = 35

// console.log(myAge)

// console.log("Hello world, my name is " + myName + " and my age is " + myAge + " years old.")

// const mySentence = "Hello world, my name is " + myName + " and my age is " + myAge + " years old."

// console.log(mySentence)
// const mySentence = `Hello, my name is ${myName} and I am ${myAge} years old.`
// console.log(mySentence)

const num1 = 5
const num2 = 12

console.log(num1 / num2)

const myPrompt = prompt("How old are you?");
alert(myPrompt);


// console.log("Hello world")

// const myName = "Kaska"
// let myAge = 35

// console.log(myAge)

// console.log("Hello world, my name is " + myName + " and my age is " + myAge + " years old.")

// const mySentence = "Hello world, my name is " + myName + " and my age is " + myAge + " years old."

// console.log(mySentence)
// const mySentence = `Hello, my name is ${myName} and I am ${myAge} years old.`
// console.log(mySentence)

const num1 = 5
const num2 = 12

console.log(num1 / num2)

const myPrompt = prompt("How old are you?");
alert(myPrompt);

// let plannedTreats = prompt("How many treats did you plan to feed your cat today?");
// let actualTreats = prompt("How many treats did your cat trick you into getting?");
// let plannedTreatsN = Number(plannedTreats);
// let actualTreatsN = Number(actualTreats);

// function message(plannedTreatsN, actualTreatsN) {
//   if (plannedTreatsN === actualTreatsN) {
//      return "Right on target, treat master!";
//   } else if (actualTreatsN >= plannedTreatsN) {
//      return "Oops, one treat too many!";
//   } else if (actualTreatsN <= plannedTreatsN) {
//      return "That's impossible!";
//   }
// }

// let result = message();
// alert(result);



let plannedTreatsN = Number(prompt("How many treats did you plan to feed your cat today?"));
let actualTreatsN = Number(prompt("How many treats did your cat trick you into getting?"));

function message (plannedTreatsN, actualTreatsN) {
  if (plannedTreatsN === actualTreatsN) {
     return "Right on target, treat master!";
  } else if (actualTreatsN >= plannedTreatsN) {
     return "Oops, one treat too many!";
  } else if (actualTreatsN <= plannedTreatsN) {
     return "That's impossible!";
  }
}

let result = message(plannedTreatsN, actualTreatsN);
alert(result);



/ // recap
// console.clear()
always use a const unless have to use let




if statements 

const myAge = 35;
const myName = Kaska"

// const myCondition = ![myName == "kaska" || myAge -- 35]; //false if wrapped in [] with !
console.log(myCondition);

!=


funtion addNumbers (this is 2 parametersnum1, num2) {
  console.log(num1 + num2);
}

to call function 
annNumbers();
or pass arguments 
addNUmbers(4, 3);

addNumbers(argument1 argument 2 so number 1 and num 2)
2 parameters in setup and 2 arguments to run function

hoisting 




while loops

let countdown = 3;

while (countdown > 0) {
    countdown-- //decrement
    console.log(countdown)
}

//change loop varriable inside loop to avoid infinite

slice - extract poirtion of array =- remove secrtion
modify startingg from index
removes from before

start at 2, finish at 3(not including 3)

let fruit = ["applr", "banana", "kiwi", "avocado", "peach"]

console.log(fruit.slice(2, 3));


splice - add or remove from anywhere within the array





Assignment
list that loops throigh items in a list and outputs them 