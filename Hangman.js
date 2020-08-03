const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");
console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

//while (keycode != 17 && keycode != 67) {
//how to get javascript to accept ctrl+c as end
//how to wrap the entire game in a loop so it doesnt end when the game is over
wrongGuesses = 0;
correctGuesses = 0;
gamesPlayed = 0;
gamesWon = 0;
const guessBar = [];
const randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
for (let i = 0; i < randWord.length + 7; i++) {
  const letter = prompt.question("Please guess a letter: ");
  function fillGuessBar() {
    for (let i = 0; i < randWord.length; i++) {
      guessBar.push("_");
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
    }
    if ((wrongGuesses = 2)) {
      console.log("  O  \n  |  ");
    }
    if ((wrongGuesses = 3)) {
      console.log("  O  \n  |  \n  |  ");
    }
    if ((wrongGuesses = 4)) {
      console.log("  O  \n |  \n  |  ");
    }
    if ((wrongGuesses = 5)) {
      console.log("  O  \n |/  \n  |  ");
    }
    if ((wrongGuesses = 6)) {
      console.log("  O  \n |/  \n  |  \n / ");
    }
    if ((wrongGuesses = 7)) {
      console.log("  O  \n |/  \n  |  \n /  ");
    }
  }
  if ((randWord.length = correctGuesses)) {
    gamesWon++;
    gamesPlayed++;
    console.log(`You won the game!/n {$gamesWon} out of {$gamesPlayed} won!`);
    break; //break the for loop not the if
  } else if ((wrongGuesses = 7)) {
    gamesPlayed++;
    console.log(`Oh no! You Lost! /n {$gamesWon} out of {$gamesPlayed} won!`);
    break; //break the for loop not the if
  } else {
    console.log("Guess again!");
  }
  //break and console log: games won x out of y or break and console log You won this round
}
//}
