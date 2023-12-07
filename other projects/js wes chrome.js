functions

function starWarsAdd(name) {
    return "Obi-one" + name;
 }

 function sayHi(name) {
    return "Hi" + name;
 }

 // using one as parameter for another
 sayHi(starWarsAdd("kaska"));


 //if nothing passsed as parameter, it will go up a level
 function sayHI(name = "kaska ka") {
    return 'hey ${name}';
 }

// calling
sayHi('kaska')
// ?output hey kaska

// when no parameter, default name
sayHi()
hey kaska ka



function calculateBill( billAmount, taxRate = 0.13) {
    console.log(billAmount,taxRate);
    console.log('Running Calculate Bill!!');
    const total = billAmount * (1 + taxRate);
    return total;
}
Declaring fucntions


