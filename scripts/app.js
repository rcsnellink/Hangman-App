// select the elements
const puzzleEl = document.querySelector("#puzzle");
const remainingEl = document.querySelector("#guessesleft");

// Maak een game
let game1;

window.addEventListener("keypress", (e) => {
  game1.makeGuess(e.key);
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  remainingEl.textContent = game1.statusMessage;

  game1.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    puzzleEl.appendChild(letterEl);
    letterEl.textContent = letter;
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle(2);
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
