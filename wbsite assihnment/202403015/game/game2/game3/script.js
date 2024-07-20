const words = ["banana", "apple", "orange", "grape", "strawberry"];
let selectedWord;
let guessedWord;
let attemptsLeft;

function resetGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedWord = Array(selectedWord.length).fill("_");
  attemptsLeft = 5;
  displayWord();
  displayLetters();
  updateAttempts();
}

function displayWord() {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = guessedWord.join(" ");
}

function displayLetters() {
  const lettersContainer = document.getElementById("letters-container");
  lettersContainer.innerHTML = "";
  for (let i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i);
    const button = document.createElement("button");
    button.textContent = letter;
    button.addEventListener("click", () => checkLetter(letter));
    lettersContainer.appendChild(button);
  }
}

function checkLetter(letter) {
  if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        guessedWord[i] = letter;
      }
    }
    displayWord();
    if (!guessedWord.includes("_")) {
      alert("Congratulations! You guessed the word correctly.");
      resetGame();
    }
  } else {
    attemptsLeft--;
    updateAttempts();
    if (attemptsLeft === 0) {
      alert(`Game over! The word was "${selectedWord}".`);
      resetGame();
    }
  }
}

function updateAttempts() {
  document.getElementById("attempts-left").textContent = attemptsLeft;
}

// Start the game
resetGame();
