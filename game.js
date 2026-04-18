const SETTINGS = {
  MIN: 1,
  MAX: 100,
  MAX_ATTEMPTS: 10,
};

// --- GLOBAL SCOPE ---
let totalScore = 0;
let gamesPlayed = 0;

// Number Generator
const generateRandomNumber = () => {
  return (
    Math.floor(Math.random() * (SETTINGS.MAX - SETTINGS.MIN + 1)) + SETTINGS.MIN
  );
};

// Getting player input
const getPlayerGuess = (attempts) => {
  while (true) {
    const rawInput = prompt(
      `[Attempt ${attempts + 1}/${SETTINGS.MAX_ATTEMPTS}] What is your guess? 🤔`,
    );

    if (rawInput === null) {
      const confirmQuit = confirm("Giving up already? Typical Human. 🙄");

      if (confirmQuit) {
        return null;
      } else {
        console.log("A wise choice... the game continues. 😈");
        continue;
      }
    }

    const input = Number(rawInput);

    // Validation
    if (
      isNaN(input) ||
      !Number.isInteger(input) ||
      rawInput.trim() === "" ||
      input < SETTINGS.MIN ||
      input > SETTINGS.MAX
    ) {
      console.log(
        "Mwahahaha! I only deal in whole numbers between 1 and 100! 😈",
      );
      continue;
    }

    return input;
  }
};

// Checking Logic
const checkGuess = (playerNo, secretNumber) => {
  if (playerNo === secretNumber) return "correct";
  return playerNo > secretNumber ? "too high" : "too low";
};

// Game Logic
const game = async () => {
  let attempts = 0;
  let correct = false;
  let currentGameScore = 0;
  const randomNumber = generateRandomNumber();

  const guessHistory = [];

  if (totalScore === 0 && gamesPlayed === 0) {
    alert(
      "Mwahahaha! I want to play a game, Human... 😈\n\n" +
        "THE RULES:\n" +
        "1. I have chosen a number between 1 and 100.\n" +
        "2. You have 10 attempts to find it or face the consequences.\n" +
        "3. Every guess is recorded... there is no hiding.\n" +
        "4. Peer into the shadows (Developer Console - F12)\n\n" +
        "The clock is ticking. Let us begin. ⏳",
    );
  }

  while (attempts < SETTINGS.MAX_ATTEMPTS && !correct) {
    const guessNumber = getPlayerGuess(attempts);

    // Handle Cancellation
    if (guessNumber === null) {
      console.log("----------------------------");
      console.log(`FINAL SESSION SCORE: ${totalScore}`);
      console.log(`GAMES COMPLETED: ${gamesPlayed}`);
      console.log("----------------------------");
      return false;
    }

    if (guessHistory.includes(guessNumber)) {
      console.log(
        `You already guessed ${guessNumber}, you forgetful mortal! 😂`,
      );
      console.log("I won't count that attempt... this time.");
      await new Promise((resolve) => setTimeout(resolve, 50));
      continue;
    }

    guessHistory.push(guessNumber);

    const result = checkGuess(guessNumber, randomNumber);

    if (result === "correct") {
      if (attempts < 3) currentGameScore = 5;
      else if (attempts < 7) currentGameScore = 3;
      else currentGameScore = 1;

      totalScore += currentGameScore;
      correct = true;

      alert("No...no this isnt possible...YOU'VE WON 😱");
      console.log(`Attempts used: ${attempts + 1}`);
      console.log(`Current Total Score: ${totalScore}`);
    } else {
      if (result === "too high") {
        console.log("tsk tsk tsk... too high my friend 🙄");
      } else {
        console.log("Oooooo someone is toooo low 😒");
      }
      console.log(`📜 Guess History: ${guessHistory.join(", ")}`);
      attempts++;
    }

    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  gamesPlayed++;

  if (correct) {
    console.log(
      `📊 Session Stats: ${totalScore} points over ${gamesPlayed} game(s).`,
    );
  } else {
    alert(`💀 Game Over. The number was ${randomNumber}.`);
    console.log(`Total Score: ${totalScore} | Games: ${gamesPlayed}`);
  }

  return confirm("Do you crave more punishment? (Play again?) 😈");
};

const startApp = async () => {
  let keepPlaying = true;

  while (keepPlaying) {
    const decision = await game();

    if (decision === true) {
      keepPlaying = true;
    } else {
      keepPlaying = false;
      alert("MWAHAHAHA FLEE! FLEE FOR YOUR LIVES! 😈");
    }
  }
};

startApp();
