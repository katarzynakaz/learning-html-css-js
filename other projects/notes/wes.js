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



// resolution notes
// div canvas width and height twice as big as css (display on screen) 
// for iphone or small cscreen high resolution px - double to get crisp look on page

1600 1000 // from html actual canvas size gets logged, not css dieplay size
const width = canvas.width;
const height = canvas.height;

console.log(width,height);


// destructturing object inside function declarations
// options instead of function(one, twom three, four, five +)
function draw(options) {
    console.log(options.key);
}

//destructure the object directly into variable 
function draw({ key }) {
    console.log(key);
} 
// to have a shorter variable name inside object and 


const MOVE_AMOUNT = 10;
// true constant in caps

// replace all 10s with moveB
ctx.lineWidth = 10;
x = x - 10;
// x -= 10 shorter
y = y - 10;


// querySelector select one Element
// querySelectorAll sdelect multiple elements
