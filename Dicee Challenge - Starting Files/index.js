var randomNumber1 = Math.random;
// 0-0.99999

randomNumber1 = Math.floor(randomNumber1() * 6) + 1;
// randomNumber1 = Math.floor(randomNumber1() * 6)  1 - 5, increase 

// select random image 

var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice 1 to 6 png
var randomImageSource = "Images/" + randomDiceImage; //images/dice 1-6

// assign random image

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
// 1st inpit atribute name, 2nd parameter, what changed to 
// image1.setAttribute("class", one);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// assign
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw! Try again!"
}
