// select the elements
const puzzleEl = document.querySelector("#puzzle");
const remainingEl = document.querySelector("#guessesleft");

// functions to render the elements
const renderPuzzle = () => {
  puzzleEl.textContent = `Puzzle: ${game1.puzzle}`;
};
const renderRemaining = () => {
  remainingEl.textContent = game1.statusMessage;
};

// Maak een game
const game1 = new Hangman("Cat Dus", 3);

renderPuzzle();
renderRemaining();

window.addEventListener("keypress", function (e) {
  game1.makeGuess(e.key);
  renderPuzzle();
  renderRemaining();
});
