'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//vendosim function per cdo queryselector ,soo nuk na duhet ta shkruajm cdo here por therrasim funksionin
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

// console.log(secretNumber);
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);
  //NO input at all
  if (!guess) {
    displayMessage(`No number!`);
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.number`).textContent = secretNumber;
    displayMessage(`correct Number`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
      document.querySelector(`.number`).style.width = `30rem`;
    }
  } else if (guess !== secretNumber)
    if (score > 1) {
      //   document.querySelector(`.message`).textContent =
      //     guess > secretNumber ? `too high` : `too low`;
      score--;
      displayMessage(guess > secretNumber ? `too high` : `too low`);
      document.querySelector(`.score`).textContent = score;
    }
});
//     //when number is to high
//   } else if (guess > secretNumber) {
//     if (score > 0) {
//       document.querySelector(`.message`).textContent = `Too high!`;
//       score--;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `You lost the game!`;
//     }
//     //when number is to low
//   } else if (guess < secretNumber) {
//     if (score > 0) {
//       document.querySelector(`.message`).textContent = `Too low!`;
//       score--;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `You lost the game!`;
//     }
//   }
// });

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start guessing`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
