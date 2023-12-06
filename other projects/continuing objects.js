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