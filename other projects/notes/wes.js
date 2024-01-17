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



// COERCION

const isCool = true;

//if only else is used - i want the opposite of the value
if(isCool) {

} else {
    console.log('You are not cool')
}


// to change 
const isCool = true;

if(!isCool) {
    console.log('You are not cool')
}

// !flips boolean

/* ! also does coercion 
force different type string number to coorse it into true boolean, change type*/

/* !!can be coorsed into true true or false from truthy and falsy */



/* TERNARY */
// shorthand if statement 
// assign functionalitty based on true or false
// needs codition, what to do if false or true

const count = 2;
let word;
if(count ===1) {
    word = 'item';
} else {
    word = 'items':
}

const sentence = `You have ${count} ${word} in your cart`;
console.log(sentence);
// create empty variable and then update


// tu use ternary do this 

// 1 condition we need
// 2 what to do if true
// 3 what to do if false 


const word = count === 1 ? 'item' : 'items';
const sentence = `You have ${count} ${word} in your cart`;
console.log(sentence);





const catNUmber = 5;
let userCats;
if (catNumber === 1) {
    userCats = 'cat';
} else {
    userCats = 'cats';
}

const sentence = `You have ${catNumber} ${userCats} in your house`;
console.log(sentence);

const userCats === 1 ? 'cat' : 'cats';

const sentence = `You have ${catNumber} ${userCats} in your house`;
console.log(sentence);


// to take further
const sentence = `You have ${catNumber} cat${userCats === 1 ? '' : 's'} in your house`;
console.log(sentence);



//  also with booleans
function showAdminBar() {
    console.log('showing bar');
}

const isAdmin = true;

isAdmin ? showAdminBar() : null;

// null has to be there syntax .. ? () : ;


// AND AND TRICK
chaining conditions

function check1() {
    console.log('running check 1');
    return true;
}

function check2() {
    console.log('running check 2');
    return true;
}

function check3() {
    console.log('running check 3');
    return true;
}


if(check1() && check2() && check3()) {
    console.log('all checks passed');
} else {
    console.log('some checks faiuled');
}

// if 2 made false, and && 3rd will never run 
#// poisioning the well
// short circuting


isAdmin = true;
isAdmin ? showAdminBar() : null;
isAdmin && showAdminBar();  // if true run if not no dot run
// abusing condition chaining, see in react a lot

{isAdmin && <AdminBar/>}
// abusing/using condition


BLOCKLESS IF STATEMENT

if(isAdmin) {
    showAdminBar();
}

//put on one line with no {}
if (isAdmin) showAdminBar();

//can also do to be safer
if (isAdmin) { showAdminBar() };







