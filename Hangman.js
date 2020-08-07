const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");
console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

let wrongGuesses = 0;
let correctGuesses = 0;
let gamesPlayed = 0;
let gamesWon = 0;
let guessBar = [];
let randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let i = 0;
while (i < randWord.length + 7) {
  i++;
  const letter = prompt.question("Please guess a letter: ");
  function fillGuessBar() {
    if ((i = 1)) {
      for (let j = 0; j < randWord.length; j++) {
        guessBar.push("_");
      }
    }
    console.log(guessBar);
  }
  fillGuessBar();
  if (randWord.includes(letter)) {
    const charIndex = randWord.indexOf(letter);
    guessBar[charIndex] = letter;
    correctGuesses++;
  } else {
    wrongGuesses++;
    if ((wrongGuesses = 1)) {
      console.log("  O  ");
    } else if ((wrongGuesses = 2)) {
      console.log("  O  \n  |  ");
    } else if ((wrongGuesses = 3)) {
      console.log("  O  \n  |  \n  |  ");
    } else if ((wrongGuesses = 4)) {
      console.log("  O  \n |/  \n  |  ");
    } else if ((wrongGuesses = 5)) {
      console.log("  O  \n |/ \n  |  ");
    } else if ((wrongGuesses = 6)) {
      console.log("  O  \n |/ \n  |  \n / ");
    } else {
      console.log("  O  \n |/  \n  |  \n /  ");
    }
  }
  if (randWord.length === correctGuesses) {
    gamesWon++;
    gamesPlayed++;
    console.log(`You won the game! \n${gamesWon} out of ${gamesPlayed} won!`);
    break;
  } else if (wrongGuesses === 7) {
    gamesPlayed++;
    console.log(`Oh no! You Lost! \n${gamesWon} out of ${gamesPlayed} won!`);
    break;
  } else {
    console.log("Guess again!");
  }
  console.log(wrongGuesses);
  console.log(correctGuesses);
  console.log(i);
}
//}
