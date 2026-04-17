😈 The Evil AI: Number Guessing Game
"Mwahahaha... I want to play a game, Human."

A robust, terminal-style guessing game built in JavaScript. This isn't just a simple loop; it’s a battle of wits against a sentient AI that lives in your browser console. The project focuses on asynchronous flow control, input sanitization, and cross-browser UI rendering.

🕹️ Game Mechanics
The Evil AI selects a secret integer between 1 and 100. You have 10 attempts to identify it before your "digital soul" is claimed.

🏆 Scoring System
The faster you defeat the AI, the higher your survival score:

1–3 Attempts: +5 Points (Master Strategist)

4–7 Attempts: +3 Points (Solid Effort)

8–10 Attempts: +1 Point (Barely Survived)

🛠️ Technical Highlights
⚡ The "Breathe" Fix (Async/Await)
Standard JavaScript while loops are "blocking," meaning they freeze the browser UI. In most browsers (like Chrome), this prevents console.log messages from appearing until the game ends.

This project solves that by converting the game loop into an async function and injecting a micro-delay:

JavaScript
This forces the Browser Event Loop to "breathe," allowing the AI's taunts to appear in the console even while a prompt() window is active.

🚀 How to Run
Clone this repository.

Open index.html in any modern web browser.

Crucial: Open your Developer Tools (F12 or Cmd + Option + I) and click the Console tab to see the AI's dialogue.

Prepare for judgment.

📁 File Structure
index.html: The entry point and game UI.

script.js: The core engine containing the async game loop and scoring logic.

style.css: Minimalist styling to focus the user on the console experience.