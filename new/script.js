const words = ["javascript", "python", "developer", "programming", "scramble", "frontend", "backend", "design", "challenge", "algorithm"];
const scrambledWordDisplay = document.getElementById("scrambledWord");
const inputBox = document.getElementById("inputBox");
const submitBtn = document.getElementById("submitBtn");
const messageDisplay = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

let currentWord = "";
let scrambledWord = "";
let score = 0;
let timeLeft = 15; // Initial time for each round
let timer;

function scrambleWord(word) {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

function startGame() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  scrambledWord = scrambleWord(currentWord);

  scrambledWordDisplay.textContent = scrambledWord;

  inputBox.value = "";
  messageDisplay.textContent = "";
  timeLeft = 15;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 5) {
      timerDisplay.style.color = '#ff5c8d';
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      messageDisplay.textContent = `⏳ Time's up! The correct word was: ${currentWord} 😔`;
      setTimeout(startGame, 2500);
    }
  }, 1000);
}

submitBtn.addEventListener("click", () => {
  const playerInput = inputBox.value.trim().toLowerCase();

  if (playerInput === currentWord) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    messageDisplay.textContent = "🎉 Correct! Well done!";
    setTimeout(startGame, 1000);
    clearInterval(timer);
  } else {
    messageDisplay.textContent = "❌ Incorrect, try again!";
  }
});

startGame();
