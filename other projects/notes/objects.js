// Here is a sample of using dot notation (.) to read an object's property:
// so to create a property ( not property value) create a box, and not to put object in box

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

// example
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line

//   if object has a space in name
const myCat = {
    "name": "Lasercat",
    "Cat color": "grey white",
}
const nameValue = myCat.Laser;
const colorValue = myCat['Cat Color']

// use a variable to access a property 

const cats = {
    Laser: "grey",
    Wafel: "black"
};
const myCat = "Laser";
const myColor = cats[myCat];
console.log(myColor);


// const dogs = {
//     Fido: "Mutt",
//     Hunter: "Doberman",
//     Snoopie: "Beagle"
//   };
  
//   const myDog = "Hunter";
//   const myBreed = dogs[myDog];
//   console.log(myBreed); 

// to change property of object
myCat.name = "Laser Puss";
or
myCat["name"] = "Laser Puss";

ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper";

// to add a property
// ourDog.bark = "bow-wow";
// or
// ourDog["bark"] = "bow-wow";
myCat.sound = "purr";
myCat["sound"] = "purr";

//  to delete property
delete myCat.sound;
// delete ourDog.bark;



// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup = {
       "alpha": "Adams",
       "bravo": "Boston",
       "charlie": "Chicago",
       "delta": "Denver",
       "echo": "Easy",
       "foxtrot": "Frank",
    };
  // access object property 
  //  lookup val to get result 
  result = lookup[val];
    // Only change code above this line
    return result;
  }
  



  function carModelLookup(brand) {
    let model = "";

    // Define the lookup object
    const carModels = {
        "Toyota": "Corolla",
        "Ford": "Mustang",
        "Honda": "Civic",
        "Chevrolet": "Impala",
        "Tesla": "Model S"
    };

    // Your code to find the model based on the brand
    model = carModels[brand];
    
    return model;
}

// Example usage
console.log(carModelLookup("Honda")); // Should return "Civic"
  phoneticLookup("charlie");

  //alternative
// find book title by author

function findBookTitle(author) {
    let title = "";

    //define object
    const library = {
        "King": "The Shining",
        "Asprey": "Bulletproof"
    };
    title = library[author];
    return title;
}

// test  object4 a property
function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
  }


  function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
    // Only change code above this line
  }



  Problem: "Student Grade Lookup"

You have a JavaScript object that represents the final grades of students in a class. 
Each student's name is mapped to their final grade. Your task is to write a function called 
findStudentGrade that takes two parameters: a student's name and the grades object. The function 
should check if the student's name exists in the grades object. If it does, the function should 
return the student's grade. If the student's name is not in the object, the function should return 
"Student not found".

The grades object might look something like this:


// function findStudentGrade(name, grade) {    
//     // define object 
//     const classGrades = {
//         "Alice": "A",
//         "Bob": "B",
//         "Charlie": "C",
//         // more students and grades
//       };


//         if (name.hasOwnProperty(grade)) {
//             return name[grade];
//         } else { 
//             return "Student not found";
//         }
//         }


edit above incorrect


Exercise: Pet Store Inventory Management
Scenario: You're managing a pet store's inventory. The store keeps 
various types of pets, each identified by a unique ID. For each pet, the 
store records its type (like "dog", "cat", "fish"), and the quantity of that pet 
type currently in stock.

The petStore inventory object could look like this:


let petStore = {
    1: { type: "dog", quantity: 5 },
    2: { type: "cat", quantity: 3 },
    3: { type: "fish", quantity: 10 }
};
Task: Write a function updateInventory that takes three parameters: petStore (the inventory object), 
petID (the ID of the pet type), and additionalQuantity (the number of new pets of that type received by 
    the store). The function should update the quantity of the specified pet type by adding the 
    additionalQuantity. If the pet type with the given petID does not exist in the petStore, the 
    function should add a new entry with petID, an assumed type of "Unknown", and the additionalQuantity
     as its stock.

Return the updated petStore inventory after the operation.


// function updateInventory (petStore, petID, additionalQuantitiy) {
//     if (!petStore[petID]) {
//         petStore[petID] = { petID: "unknown", stock: additionalQuantity}
//     } else {
//     let  quantity =+ additionalQuantitiy;
//     }
// return petStore;
// }

function updateInventory(petStore, petID, additionalQuantity) {
    if (!petStore[petID]) {
        // Add a new pet type entry if it does not exist
        petStore[petID] = { type: "Unknown", quantity: additionalQuantity };
    } else {
        // Update the quantity for an existing pet type
        petStore[petID].quantity += additionalQuantity;
    }

    return petStore;
}






Exercise: Classroom Attendance Tracker
Scenario: You are managing a classroom's attendance. Each student in the classroom is identified by a unique
 ID. For each student, the classroom records their name and a list of dates when they were present.

The classroom object might look like this:

let classroom = {
    1: { name: "Alice", attendance: ["2023-09-01", "2023-09-02"] },
    2: { name: "Bob", attendance: ["2023-09-01"] }
};


Task: Write a function markAttendance that takes three parameters: classroom (the attendance object), 
studentID (the ID of the student), and date (the date of attendance to be marked). The function should add 
the date to the student's attendance array. If the student with the given studentID does not exist in the 
classroom, the function should add a new student entry with studentID, an assumed name of "Unknown", and the
 date in their attendance.

Return the updated classroom attendance after the operation.


// function markAttendance (classroom, studentID, date) {
//     if (!classroom[studentID]) {
//        classroom[studentID] = {name: "Unknown", attendance: [date]}
//     }
//     else {
//         classroom[studentID][attendance].push(date);
//     }
// return classroom;
// }

function markAttendance(classroom, studentID, date) {
    if (!classroom[studentID]) {
        // Add a new student entry if it does not exist
        classroom[studentID] = { name: "Unknown", attendance: [date] };
    } else {
        // Add the date to the attendance array for an existing student
        classroom[studentID].attendance.push(date);
    }

    return classroom;
}






Exercise: Managing a Plant Nursery
Scenario: You manage a plant nursery, and you need to keep track of various plants and their watering schedules. Each plant is identified by a unique ID, and for each plant, you store the last date it was watered.

The nursery object looks like this:

let nursery = {
    1: { plantName: "Fern", lastWatered: "2023-10-01" },
    2: { plantName: "Cactus", lastWatered: "2023-10-05" }
};
Task: Write a function updateWateringSchedule that takes three parameters: nursery (the object), plantID (the ID of the plant), and wateringDate (the date when the plant was last watered). The function should update the lastWatered date for the specified plant. If the plant with the given plantID does not exist in the nursery, the function should add a new plant entry with plantID, an assumed plantName of "Unknown", and the wateringDate.

Your function should then return the updated nursery object.
function updateWateringSchedule(nursery, plantID, wateringDate) {
    // Check if the plant with the given plantID exists in the nursery
    if (!nursery[plantID]) {
        // If the plant doesn't exist, create a new entry with the plantID
        nursery[plantID] = { plantName: "Unknown", lastWatered: wateringDate };
    } else {
        // If the plant exists, update the lastWatered date
        nursery[plantID].lastWatered = wateringDate;
    }

    return nursery;
}






// // Setup
// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Only change code below this line
//   function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete recordCollection[prop];
//   }
//   // If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
//   else if (prop !== 'tracks' && value !== "") {
//     recordCollection[id][prop] = value;
  
//   // If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
//   //  ;
//   } else if (prop === 'tracks' && value !== "") {
//   recordCollection[id][tracks] = tracks[];
//   tracks.push(value);
//   }
//    return records;
//   }
//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');



// // It's important to use recordCollection[id][prop] instead of recordCollection[prop]
// //  to target the specific album's property.
//  // Only change code below this line
//  function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete recordCollection[id][prop];
//   }

//   // If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
//   else if (prop !== 'tracks' && value !== "") {
//     recordCollection[id][prop] = value;
  
//   // If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
//   //  ;
//   } else if (prop === 'tracks' && value !== "") {
//     recordCollection[id].hasOwnProperty('tracks') {
//      recordCollection[id].tracks = [];
//     recordCollection[id].tracks.push(value);
//   }
// }
//    return records;
//   }
//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');


// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };








// // Only change code below this line
// function updateRecords(records, id, prop, value) {
// if (value === "") {
//   delete records[id][prop];
// }
// // If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// else if (prop !== 'tracks' && value !== "") {
//   records[id][prop] = value;

// // If prop is tracks and value isn't an empty string, you need to update the 
// // album's tracks array. First, if the album does not have a tracks property, assign 
// // it an empty array. Then add the value as the last item in the album's tracks array.

// } else if (prop === 'tracks') {
//   records[id].hasOwnProperty('tracks') ||
// }
//  && value !== "") {
//   {
//     records[id].tracks = [];
// }
// records[id].tracks.push(value);
// }
//  return records;
// }
// updateRecords(recordCollection, 5439, 'artist', 'ABBA');



// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };



// Only change code below this line
function updateRecords(records, id, prop, value) {
if (value === "") {
  delete records[id][prop];
}
// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
else if (prop !== 'tracks' && value !== "") {
  records[id][prop] = value;

// If prop is tracks and value isn't an empty string, you need to update the album's tracks array. 
} else if (prop === 'tracks' && value !== "") {
  
  if (!records[id].hasOwnProperty('tracks')) {
  records[id].tracks = [];
 
}
records[id].tracks.push(value);
}
 return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');




// Simplified Challenge: Book Borrowing and Returning
// Scenario: You have a library object where each book is identified by a unique bookId. Each book object contains the book's title, author, and a boolean flag isAvailable indicating 
// if the book is available or currently borrowed.

// Task: Write a function manageLibrary that takes three parameters: library (the library object), bookId (the ID of the book), and action (a string that can be either 'borrow' or 'return').
//  The function should:

// If action is 'borrow', change the isAvailable status of the specified book to false.
// If action is 'return', change the isAvailable status of the specified book to true.
// The function should return the updated library object.
// Example:

const library = {
  1: { title: "1984", author: "George Orwell", isAvailable: true },
  2: { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: false },
  3: { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: true }
}

// manageLibrary(library, 1, 'borrow');
// This call should set the isAvailable property of the book with bookId 1 to false.


function manageLibrary(library, bookId, action) {
  // If action is 'borrow', change the isAvailable status of the specified book to false.
if (action === 'borrow') {
library[bookId].isAvailable = false;
} else if (action === 'return') {
  library[bookId].isAvailable = true;
} else {
  return 'incorrect data'
}
// If action is 'return', change the isAvailable status of the specified book to true.

// The function should return the updated library object.

return library;
}






// Challenge: Video Store Management
// Scenario: You're managing a video store where you keep a collection of movies. Each movie in the store is represented by an object with properties: title, director, rating, and isAvailable 
// (a boolean indicating if the movie is available for rent).

// The videoStore object might look like this:


// const videoStore = {
//     1: { title: "Inception", director: "Christopher Nolan", rating: 8.8, isAvailable: true },
//     2: { title: "The Godfather", director: "Francis Ford Coppola", rating: 9.2, isAvailable: false },
//     3: { title: "Pulp Fiction", director: "Quentin Tarantino", rating: 8.9, isAvailable: true }
// };
// Task: Write a function manageVideoStore that takes three parameters: videoStore (the video store object), movieId (the ID of the movie), and action (a string that can be either 'rent' or 
// 'return'). The function should:

// If action is 'rent', change the isAvailable status of the specified movie to false.
// If action is 'return', change the isAvailable status of the specified movie to true.
// The function should return the updated videoStore object.



manageVideoStore(videoStore, 1, 'rent');
This call should set the isAvailable property of the movie with movieId 1 to false.









// Challenge: Book Library Management
// Scenario: You are managing a small library system. The library has a collection of books, each 
// identified by a unique ID. For each book, the system stores the book's title, author, and a boolean flag indicating whether the book is currently available or borrowed.

// The library object could look like this:


const library = {
    1: { title: "1984", author: "George Orwell", isAvailable: true },
    2: { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: false },
    3: { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: true }
};

// Task: Write a function manageLibrary that takes four parameters: library (the library object), bookId (the ID of the book), action (a string that can be either 'borrow' or 'return'), 
// and newBook (an object representing a new book to be added to the library, applicable only if action is 'add'). The function should:

If action is 'borrow', change the isAvailable status of the specified book to false.
If action is 'return', change the isAvailable status of the specified book to true.
If action is 'add', add the newBook to the library with a unique bookId. Assume newBook has properties title, author, and isAvailable.
The function should return the updated library object.
Example:

function manageLibrary(library, bookId, action) {
  let action == 'borrow' if {

  }
  let action == 'return' if {

  }
}


let newBook = { title: "The Catcher in the Rye", author: "J.D. Salinger", isAvailable: true };
library = manageLibrary(library, 4, 'add', newBook);
// After adding a book, library should include the new book.


Object constructor 

// Extend Constructors to Receive Arguments

// manual
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";

// Bird constructor to accept parameters

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

// to nintialise object
let cardinal = new Bird("Bruce", "red")

cardinal.name
cardinal.color
cardinal.numLegs


function BellBoy(name, age, permit, languages) {
  this.name = name;
  this.age = age;
  this.permit = permit;
  this.languages = languages;
}

let bellBoy1 = new BellBoy("Timmy", 21, false, ["French", "Polish"]);

//object can have associated function - object has a method (function associated with an object) - call a method - bellBy move
 
let bellBoy1 = {
  name: "Timmy",
  age: 21,
  permit: false;
  languages: ["French", "Polish"],
  moveSuitcase: function () {
      alert("I will take your suitcase");
      phoneticLookup();
      this.moveSuitcase();
  }
}


bellBoy1.moveSuitcase();

// to incorporate method to constructor add this 
this.moveSuitcase = function () {
  alert("I will take your suitcase");
  phoneticLookup();
  this.moveSuitcase();



//object can have associated function - object has a method (function associated with an object) - call a method - bellBy move
  function BellBoy(name, age, permit, languages) {
    this.name = name;
    this.age = age;
    this.permit = permit;
    this.languages = languages;
    this.moveSuitcase = function () {
      alert("I will take your suitcase");
      phoneticLookup();
      this.moveSuitcase();
  }
}

// to call
bellBoy1.moveSuitcase();




  



// The constructor is more flexible. It's now possible to define the properties for each Bird at the time 
// it is created, which is one way that JavaScript constructors are so useful. They group objects together
//  based on shared characteristics and behavior and define a blueprint that automates their creation.

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog("Pumpkin", "orange");



// instance of to check if instance is a baby of constructor
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(3);
myHouse instanceof House;



// Own properties
// - defined directly on the instance object 
// as instance created from blueprint constructor

function Cat(name) {
  this.name = name;
  this.tail = 1;
}

let ragdoll = new Cat("Laser");
let tabby = new Cat("Tosia");
// every instance of cat has its own copy of properties


//to add all props to array
let ownProps = [];
for (let property in cat) {
  if(cat.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);



// Use Prototype Properties to Reduce Duplicate Code
// properties in prototype are shared in all instances of Cat
Cat.prototype.numLegs = 4;


// Own properties are defined directly on the object instance itself. 
// And prototype properties are defined on the prototype.

function Cat(name) {
  this.name = name //own property
}

Cat.prototype.numTails = 1; //prot property

let ragdoll = new Cat("Laser");
#

// push array props to own and prototype
let ownProps = [];
let prototypeProps = [];

for (let property in ragdoll) {
  if (ragdoll.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);



// constructor property
// to chek if instace was built using constructor function

console.log(ragdoll.constructor === Cat);
// will display true

function joinCatCafe(candiate) {
  if (candiate.constructor === Cat) {
    return true;
  } else {
    return false;
  }
  }



// Change the Prototype to a New Object
Cat.prototype.numLegs = 4,

Cat.prototype.hungry = function() {
  console.log("meow");
}

Cat.prototype.describe = function() {
  console.log("my name is" + this.name);
}

//instead of individual addition to prototype
//create an object

Cat.prototype = {
  numLegs: 4,
  hungry: function() {
    console.log("meow");
  },
  describe: function() {
    console.log("my name is" + this.name);
  }
};


// this updates the blueprint but link with constructor is lost and needs to be added manually

// Remember to Set the Constructor Property when Changing the Prototype
ragdoll.constructor === Cat; //false
ragdoll.constructor === Object; //auto true
ragdoll instanceof Cat; true


// so edit!!
Cat.prototype = {
  ...
  constructor: Cat,
}


// Just like people inherit genes from their parents, an object inherits its prototype directly from the
//  constructor function that created it.
function Cat(name) {
  this.name = name;
}

let ragdoll = new Cat("Wafel");

Cat.prototype.isPrototypeOf(ragdoll);

ConstructorFunction.prototype.isPrototypeOf(whatObjectIsChecked);

// because a prototype is an object, a prototype can have its own prototype! In this case, the prototype 
// of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Cat.prototype);

// Use Inheritance So You Don't Repeat Yourself DRY
// create supertype or parent//

Cat.prototype = {
  constructor: Cat,
  describe: function () {
    console.log("I am " + this.name);
  }
}


// if describe is also in another object then

function Pet() { };

Pet.prototype = {
  constructor: Pet,
  describe: function() {
    console.log("I am " + this.name);
  }
}

// then method describe can be removed from cat

Cat.prototype = {
  constructor: Cat
};


// Inherit Behaviors from a Supertype
// reuse inside multiple  objects to not define again
let animal = Object.create(Animal.prototype);

Object.create(prototypeOfObject)


//Set the Child's Prototype to an Instance of the Parent
function Animal() {}
 
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("Feed me");
  }
}

function Cat() {}

Cat.prototype = Object.create(Animal.prototype);
let ragdoll = new Cat();

// Reset an Inherited Constructor Property
// if object inherits prototype it also inherits supertype's constructor property 




Override Inherited Methods
In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object:

ChildObject.prototype = Object.create(ParentObject.prototype);
Then the ChildObject received its own methods by chaining them onto its prototype:

ChildObject.prototype.methodName = function() {...};
It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override. Here's an example of Bird overriding the eat() method inherited from Animal:

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:

duck => Is eat() defined here? No.
Bird => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.
Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());





Use a Mixin to Add Common Behavior Between Unrelated Objects
As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
The flyMixin takes any object and gives it the fly method.

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:

bird.fly();
plane.fly();
The console would display the string Flying, wooosh! twice, once for each .fly() call.

Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.

Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.



let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = function(obj) {
  obj.glide = function () {
    console.log("glide");
  }
}
glideMixin(boat);
glideMixin(bird);



Use Closure to Protect Properties Within an Object from Being Modified Externally
In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition.

bird.name = "Duffy";
Therefore, any part of your code can easily change the name of bird to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. In JavaScript, a function always has access to the context in which it was created. This is called closure.

Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.
function Bird() {
  let weight = 15;

this.getWeight = function() {
  return weight;
}

}


Understand the Immediately Invoked Function Expression (IIFE)
A common pattern in JavaScript is to execute a function as soon as it is declared:

(function () {
  console.log("Chirp, chirp!");
})();
This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).







Use an IIFE to Create a Module
An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
We can group these mixins into a module as follows:

let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:

motionModule.glideMixin(duck);
duck.glide();
Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

let funModule = (function () {
  return { 
    isCuteMixin: function(obj) {
  obj.isCute = function() {
    return true;
  };
},
 singMixin: function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
 };
 }
 }
 })();







function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);


Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();

