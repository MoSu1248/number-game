let total = 0;

// Number Generator
const numberGenerator = () => {
  return Math.floor(Math.random() * 100) + 1;
};

// Getting player input
const getPlayerGuess = (attempts) => {
  if (attempts === 0 && total === 0) {
    alert("Mwahahaha I want to play a game, Human 😈");
  }

  const userInput = prompt(
    `[Attempt ${attempts + 1}/10] I'm thinking of a number from 1 to 100, what is it? 🤔`,
  );

  if (userInput === null) {
    console.log("YOU DARE CANCEL ON ME HUMAN 😡");
    return null;
  }

  const input = Number(userInput);

  if (isNaN(input) || userInput.trim() === "") {
    console.log("Might I suggest an actual number 😂");
    return getPlayerGuess(attempts);
  }

  return input;
};

//Checking Logic
const checkGuess = (playerNo, answer) => {
  if (playerNo === answer) return "correct";
  if (playerNo > answer) return "too high";
  return "too low";
};

//Game Logic
const game = async () => {
  let attempts = 0;
  let correct = false;
  const randomNumber = numberGenerator();

  console.log("The Evil AI's Secret Number: " + randomNumber);

  while (attempts < 10 && !correct) {
    const guessNumber = getPlayerGuess(attempts);

    if (guessNumber === null) return; 

    const result = checkGuess(guessNumber, randomNumber);

    if (result === "correct") {
      if (attempts < 3) total += 5;
      else if (attempts < 7) total += 3;
      else total += 1;

      console.log("No...no this isnt possible...YOU WON 😱");
      console.log(`Attempts used: ${attempts + 1}`);
      console.log(`Current Total Score: ${total}`);
      correct = true;
    } else if (result === "too high") {
      console.log("tsk tsk tsk... too high my friend 🙄");
    } else {
      console.log("Oooooo someone is toooo low 😒");
    }

    attempts++;
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  if (!correct) {
    alert(`Mwahahahaaha You've lost 😂. The number was ${randomNumber}.`);
  }

  restartGame();
};

//function to restart game

const restartGame = () => {
  let validResponse = false;

  while (!validResponse) {
    const restartInput = prompt("Do you want to restart the game? (yes/no)");

    // Handle if they hit 'Cancel'
    if (restartInput === null) {
      console.log("Farewell, Human... for now. 😈");
      return;
    }

    const response = restartInput.toLowerCase().trim();

    if (response === "yes") {
      validResponse = true;
      game();
    } else if (response === "no") {
      validResponse = true;
      console.log("Giving up already? Typical. 🙄");
    } else {
      alert("I asked for a 'yes' or a 'no', not your life story! 😡");
    }
  }
};

setTimeout(game, 1000);
