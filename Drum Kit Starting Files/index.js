// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// // create for (var i = 0, i<document.querySelectorAll(".drum").length) 
// // for (var i = 0; i<numberOfDrumButtons; i++) {

// // document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
// // }


// // function handleClick() {
// //     alert("I got clicked");
// // }

// // while btn clieed run handleClick , can also be an annonymos function written as funciton() {}


// // adding sound
// // function that plays when button clicked using play audio inside

// // longer way
// // for (var i = 0; i<numberOfDrumButtons; i++) {
// //     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
// // }

// // function handleClick() {
// // var audio = new Audio('tom-1.mp3');
// // audio.play;
// // }
// // shotrter way



// // detecting button press
// for (var i = 0; i<numberOfDrumButtons; i++) {
    
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
//         var buttonInnerHTML = this.innerHTML;
        
//         makeSound(buttonInnerHTML);
//         buttonAnimation(buttonInnerHTML);
// });
// }
        
// // detecting keyboard press
// document.addEventListener("keydown", function(event) {

//     makeSound(event.key);
//     buttonAnimation(event.key);
    
// });



// function makeSound(key) {
//     switch (key) {
//         case "w":
//             var crash = new Audio("sounds/crash.mp3");
//             crash.play();

//         break;

//         case "a":
//             var kickBass = new Audio("sounds/kick-bass.mp3");
//             kickBass.play();

//             break;

//         case "s":
//             var snare = new Audio("sounds/snare.mp3");
//             snare.play();

//             break;

//         case "d":
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();

//             break;

//         case "j":
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play(); 

//             break;

//         case "k":
//             var tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();

//             break;

//         case "l":
//             var tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play();

//             break;

        

//         default: console.log(buttonInnerHTML);
//     };
// }

// // animated button add remove class with a timeout
// function buttonAnimation(currentKey) {
//        var activeButton = document.querySelector("." + currentKey);

//        activeButton.classList.add("pressed");

//        setTimeOut(function() {
//          activeButtton.classList.remove("pressed");
//        }, 100); 

//     }
// above works in adding class, but does not remove class  
// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();

        // which button triggered event
        // this.style.color = "white";
        





// /add event listener when clicked

function handleClick() {
    alert("I got clicked");
}

//button to trigger whern clicked 

//add event listener in html and call function 

document.querySelector("button").addEventListener("click", handleClick);
// find first button in doc and add event listener to listen for clicks, when does runs handle click function
// calling fucntion above without () as () run function immediately
//instead of () calling the function imediately, we are passing the name of the function as an input to run when cliked





