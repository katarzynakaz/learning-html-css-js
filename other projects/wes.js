// // console.log('it works');


// // function doctorize(firstName) {
// //     return 'Dr $[firstName}';

// // }

// // // annonymous - sing as callbacks
// // function (firstName) {
// //     return 'Dr $[firstName}';
// // }


// // Fucntion Expression - fucntion stored as vaue in a var
// const doctorize = function(firstName) {
//     return 'Dr $[firstNAme}';
// }


// //  arrow function
// function add(a, b = 3) {
//     const totla = a + b;
//     return totla;
// }

// //to make shorter
// // 1 turn function into const, move return

// const add(a, b = 3) {
//  return a + b;
// }

// 2fat arrow, 1 line, remove return
// const add = (a, b = 3) => a + b;


// retutning an object 

function makeABaby(first, last) {
    const baby = {
        name: `${first} ${last}`,
        age: 0
    }
    return baby;
}
