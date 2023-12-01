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
