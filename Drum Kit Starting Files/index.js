var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// create for (var i = 0, i<document.querySelectorAll(".drum").length) 
for (var i = 0; i<numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}


function handleClick() {
    alert("I got clicked");
}

// while btn clieed run handleClick , can also be an annonymos function written as funciton() {}
