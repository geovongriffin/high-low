// 🎯 High-Low Number Guessing Game Starter
// You will use prompt(), alert(), and confirm() to make an interactive guessing game!

const gameStats = { 
  prevGuesses: [],
  attempts: 0,
  wins: 0,
  losses: 0
}

function playGame() {
  // Welcome message
  window.alert("🎮 Welcome to the High-Low Game!");
  window.alert("Guess a number between 1 and 100...");

  // Variables
  const targetNumber = Math.floor(Math.random() * 100) + 1;
  let guessesLeft = 10;
  let guess = null;
  console.log(targetNumber)

  // Logic
  while (guess !== targetNumber) {
    let input = window.prompt("Take a guess!");
      if (input === null) {
        window.alert("Game forfeited.");
        gameStats.losses++;
        break;
      }
      guess = parseInt(input); // convert first to prevent feedback loops
      if (isNaN(guess)) {
        window.alert("Please give me a number.");
        continue;
      }

  // Checking
    if (guess === targetNumber) {
      window.alert("I was indeed thinking of " + targetNumber + ". Nice work." + "\n \n" + "You got it with " + guessesLeft  + " tries remaining.");
      gameStats.wins++;
      let playAgain = window.confirm("Want to play again?");
        if (playAgain) {
          clearGuesses();
          playGame();
          return;
        }
        else {
          window.alert("Thanks for your time!");
          clearGuesses();
          break;
        }
    }
    // close ranges (first) bc order matters in js apparently
    else if (guess < targetNumber && guess >= targetNumber - 10) {
      window.alert("Close! A bit too low...");
    }
    else if (guess > targetNumber && guess <= targetNumber + 10) {
      window.alert("Close! You're on the high side...")
    }
    // general ranges (last)
    else if (guess < targetNumber) {
      window.alert("No, too low.");
    }
    else if (guess > targetNumber) {
      window.alert("It's too high...");
    }

    guessesLeft--;
    gameStats.prevGuesses.push(" " + input);
    gameStats.attempts++;

    if (guessesLeft === 0 && guess !== targetNumber) {
      window.alert("Oh no, you ran out of time! I was thinking of " + targetNumber + ". \n \n" + 
      "You tried:" + (gameStats.prevGuesses));
      gameStats.losses++;
      let playAgain = window.confirm("Want to play again?");
      if (playAgain) {
        clearGuesses();
        playGame();
        return;
      }
      return;
    }
  }
  
}
function displayStats() {
  window.alert("---- Your Stats: ---- \n \n" + 
    "Wins: " + (gameStats.wins) + "\n" + 
    "Losses: " + (gameStats.losses) + "\n" +
    "Total Guess Attempts: " + (gameStats.attempts));
}
function resetStats() {
  gameStats.attempts = 0;
  gameStats.wins = 0;
  gameStats.losses = 0;
}
function clearGuesses() {
  gameStats.prevGuesses = [];
}