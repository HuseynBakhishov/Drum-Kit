`use strict`;

const numberOfButtons = document.querySelectorAll(`.drum`).length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(`.drum`)[i].addEventListener(`click`, function () {
    const mouseClick = this.innerHTML;
    sound(mouseClick);
    animation(mouseClick);
  });
}

//keyboard control
document.addEventListener(`keydown`, function (event) {
  const keyboardClick = event.key;
  sound(keyboardClick);
  animation(keyboardClick);
});

function sound(button) {
  switch (button) {
    case "w":
      new Audio(`sounds/tom-1.mp3`).play();
      break;
    case "a":
      new Audio(`sounds/tom-2.mp3`).play();
      break;
    case "s":
      new Audio(`sounds/tom-3.mp3`).play();
      break;
    case "d":
      new Audio(`sounds/tom-4.mp3`).play();
      break;
    case "j":
      new Audio(`sounds/crash.mp3`).play();
      break;
    case "k":
      new Audio(`sounds/kick-bass.mp3`).play();
      break;
    case "l":
      new Audio(`sounds/snare.mp3`).play();
      break;
    default:
      break;
  }
}

//press animation
function animation(button) {
  document.querySelector(`.${button}`).classList.add(`pressed`);
  setTimeout(function () {
    document.querySelector(`.${button}`).classList.remove(`pressed`);
  }, 100);
}
