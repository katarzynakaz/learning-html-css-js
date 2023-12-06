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






