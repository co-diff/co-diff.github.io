// detecting button press

var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  drumButtons[i].addEventListener("mousedown", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
  drumButtons[i].addEventListener("mouseup", function () {
    var buttonInnerHTML = this.innerHTML;
    
    removeAnimation(buttonInnerHTML);
  })
};

//detecting keys

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

document.addEventListener("keyup", function (event) {
    removeAnimation(event.key);
  });

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/Vintage hat 1.wav");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/Acid Kick.wav");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/Kounty Klap 1.wav");
      snare.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "k":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "l":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      break;
  }
}

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." +currentKey);
    activeButton.classList.add("pressed");
    var drumKit = document.querySelector("h1");
    drumKit.classList.add("pressed");
    document.body.classList.add("pressed");
}

function removeAnimation (currentKey) {
    var activeButton = document.querySelector("." +currentKey);
    activeButton.classList.remove("pressed");
    var drumKit = document.querySelector("h1");
    drumKit.classList.remove("pressed");
    document.body.classList.remove("pressed");
}