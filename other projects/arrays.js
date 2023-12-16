let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

const catTreats [3, 5, 2, 6];
//forst cat gor 3, secomd 5...

let total = 0;
for (let i = 0; i < catTreats.length; i++) {
total += catTreats[i];
// totalTreats = totalTreats + catTreats[i]
}

// totalTreats is like your notebook. It starts at 0.
// The for loop goes through each element of catTreats (each cat).
// totalTreats += catTreats[i]; adds the treats of each cat to the total.
// After the loop, totalTreats holds the sum of all treats given to the cats, just like the number in your notebook.


function countBooks(bookstoreNetwork) {
    let totalBooks = 0;
    for (i = 0 ; i < bookstoreNetwork.length; i ++) {
        for (j = 0; j < bookstoreNetwork[i].length; j ++) {
            for (k = 0; k < bookstoreNetwork[i][j].length; k ++) {
                    totalBooks += bookstoreNetwork[i][j][k];
            }
        }
    }
    
    return totalBooks;
}



function sum(arr, n) {
    // Only change code below this line
  // Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
  if (n <= 0) {
    return 0; 
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
    
  
    // Only change code above this line
  }


  function totalZits(arr, n) {
    if (n <= 0) {
      return 0; // Base case: no patients left to treat.
    } else {
      return totalZits(arr, n - 1) + arr[n - 1]; // Treat the first patient and add it to the total for the rest.
    }
  }







  // Profile Lookup
  // We have an array of objects representing different people in our contacts lists.
  
  // A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
  
  // The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
  
  // If both are true, then return the "value" of that property.
  
  // If name does not correspond to any contacts then return the string No such contact.
  
  // If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

  // Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];



function lookUpProfile(name, prop) {
  // Only change code below this line
  if (contacts[0][firstName] === name && contacts[0].hasOwnProperty(prop)) {
  return true;

//  other way more general 


for (let i = 0; i < contacts.length; i++) {
if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
  return true;
}
or 

  if (contacts[i].hasOwnProperty(name) && contacts[i].hasOwnProperty(prop)) {
    return true;
  }

  or

if (contacts[i][name] && contacts[i][prop]) {
  return true;
}

// nested array for loop 
// for (let i= ... {
//   for let j = ...
//     if
//       return
// }
// }
// }


//1 sta array
for (let i = 0; i < contacts.length; i ++) {
// 2nd array
    for (let j = 0; j < contacts[i][j].length; j ++) {
      if (contacts[i].hasOwnProperty(name) && contacts[i][j].hasOwnProperty(prop))
        return true;
 }}


//   } else if (contacts[firstName] !== name) {
//   return "No such contact.";
//   } else if ( !== prop) {
//     return "No such property."
//   }
    
//   // Only change code above this line
// }

// lookUpProfile("Akira", "likes");


// //  array with objects use one loop with many ifs inside 






const contacts = [
  // {    this is i
    firstName: "Akira",
    properties: [
      // this is j
      { propName: "number", value: "0543236543" },
      // this is j
      { propName: "likes", value: ["Pizza", "Coding", "Brownie Points"] }
    ]
  },
  {
    firstName: "Harry",
    properties: [
      { propName: "number", value: "0994372684" },
      { propName: "likes", value: ["Hogwarts", "Magic", "Hagrid"] }
    ]

    function lookUpProfile(name, prop) {
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) { // Correct way to check the name
          if (contacts[i].hasOwnProperty(prop)) { // Check if the property exists
            return contacts[i][prop]; // Return the value of 'prop'
          } else {
            return "No such property"; // Property not found
          }
        }
      }
      return "No such contact"; // Name not found after searching all contacts
    }




// for (let i = 0; i < contacts.length; i ++) {
//   // 2nd array
//       for (let j = 0; j < contacts[i][j].length; j ++) {
//         if (contacts[i].hasOwnProperty(name) && contacts[i][j].hasOwnProperty(prop))
//       return contacts[i][prop];  
//       } else if (!contacts[i].hasOwnProperty(name) {
              return contacts[i]property; 
   }           } else {
//           return "No such contact.";
              }
//       } else if (!contacts[i][j].hasOwnProperty(prop)) {
//           return "No such property.";
//     }   

// incorrect
// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) { // Correct way to check the name
//       if (contacts[i].hasOwnProperty(prop)) { // Check if the property exists
//         return contacts[i][prop]; // Return the value of the property
//       } else {
//         return "No such property."; // Property not found
//       }
//     }
//   }
//   return "No such contact."; // Name not found after searching all contacts
// }


// worng 
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
function lookUpProfile(name, prop) {
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
          if (contacts[i].hasOwnProperty(prop) === prop) {
            let result = contacts[i][prop];
            return result; 
          }
        
        
        } else if (contacts[i].hasOwnProperty(prop) !== prop) {
          return "No such property"; 
        }
        
        else if (contacts[i].firstName !== name) {
              return "No such contact"; 
        }
        
        }
      }
      

  // Only change code above this line
}

lookUpProfile("Akira", "likes");// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
function lookUpProfile(name, prop) {
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
          if (contacts[i].hasOwnProperty(prop) {
            let result = contacts[i][prop];
            return result; 
          }
        
        
        } else if (contacts[i].hasOwnProperty(prop)) {
          return "No such property"; 
        }
        
        else if (contacts[i].firstName !== name) {
              return "No such contact"; 
        }
        
        }
      }
      

  // Only change code above this line
}

lookUpProfile("Akira", "likes");

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
function lookUpProfile(name, prop) {
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
          if (contacts[i].hasOwnProperty(prop)) {
            let result = contacts[i][prop];
            return result; 
          }
        } 
        else if (!contacts[i].hasOwnProperty(prop)) {
          return "No such property"; 
        
        } 
              
        } return "No such contact"; 
        
        }
      }
      

  // Only change code above this line
}

lookUpProfile("Akira", "likes");


wrong!!



// mutate array 
const s = [5, 6, 7];
s[2] = 45;
console.log(s);
5 6 45



// freeze object - const does not protect from mutation

let obj = {
  name: "Laser",
  age: 9,
}

Object.freeze(obj);
obj.name = "Pus";
obj.newProp = "1 tail";
same returned






