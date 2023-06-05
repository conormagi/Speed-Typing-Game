window.addEventListener("load", init);

const dropdown = document.querySelector(".dropdown");

const easy = document.querySelector(".easy");
const medium = document.querySelector(".med");
const hard = document.querySelector(".hard");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

easy.addEventListener("click", () => {
  currentLevel = levels.easy;
});
medium.addEventListener("click", () => {
  currentLevel = levels.medium;
});
hard.addEventListener("click", () => {
  currentLevel = levels.hard;
});

const levels = {
  easy: 5,
  medium: 3,
  hard: 1,
};

let currentLevel = levels.hard;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "lighten",
  "authority",
  "gullible",
  "understood",
  "abandoned",
  "smile",
  "chubby",
  "year",
  "poor",
  "snow",
  "consist",
  "mine",
  "digestion",
  "instinctive",
  "chivalrous",
  "sidewalk",
  "health",
  "shiny",
  "thaw",
  "macho",
  "uncovered",
  "rob",
  "apparel",
  "advise",
  "axiomatic",
  "bee",
  "flagrant",
  "brown",
  "ill",
  "structure",
  "worthless",
  "squirrel",
  "appear",
  "zippy",
  "jumbled",
  "decorous",
  "frequent",
  "subsequent",
  "tax",
  "guiltless",
  "collar",
  "tip",
  "gray",
  "fallacious",
  "aggressive",
  "roomy",
  "pastoral",
  "mature",
];

function init() {
  seconds.innerHTML = currentLevel;
  showWord(words);
  wordInput.addEventListener("input", startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}

function selectLevel() {
  if (easy === true) {
    currentLevel = levels.easy;
  }
}

console.log(currentLevel);
