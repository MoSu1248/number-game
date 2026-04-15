// Number Generator
const numberGenerator = () => {
  return Math.floor(Math.random() * 100);
};

//Getting player input
const getPlayerGuess = () => {
  const input = Number(prompt("number:"));

  if (input === null) {
    console.log("cancelled");
    return null;
  }

  if (isNaN(input)) {
    console.log("valid number");
    return getPlayerGuess();
  }

  return input;
};

//Checking Logic
const checkGuess = (playerNo, answer) => {
  if (playerNo === answer) {
    console.log("you win");
    return true;
  } else if (playerNo > answer) {
    console.log("too high");
    return false;
  } else {
    console.log("too low");
    return false;
  }
};

// Game Logic
const game = () => {
  let attempts = 0;
  let correct = false;
  const randomNumber = numberGenerator();

  while (attempts < 10 && !correct) {
    console.log(`${attempts + 1}/10`);
    const guessNumber = getPlayerGuess();
    if (guessNumber === null) break;
    correct = checkGuess(guessNumber, randomNumber);
    attempts++;
  }

  if (!correct) {
    console.log(`You lost. The number was ${randomNumber}`);
  }
};

game();
