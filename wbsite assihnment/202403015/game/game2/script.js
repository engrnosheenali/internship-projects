const images = [
  "🍎",
  "🍌",
  "🍒",
  "🍇",
  "🍉",
  "🍓",
  "🍍",
  "🥝",
  "🥭",
  "🍋",
  "🍏",
  "🍊",
];
let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;

function createGameBoard() {
  const gameGrid = document.getElementById("game-grid");
  const doubledImages = images.concat(images).sort(() => 0.5 - Math.random());

  doubledImages.forEach((image) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = image;
    card.innerHTML = `<img src="images/apple.jpg" alt="Card Back">`;
    card.addEventListener("click", flipCard);
    gameGrid.appendChild(card);
  });
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function resetGame() {
  const gameGrid = document.getElementById("game-grid");
  gameGrid.innerHTML = "";
  createGameBoard();
}

createGameBoard();
const doubledImages = images.concat(images).sort(() => 0.5 - Math.random());
