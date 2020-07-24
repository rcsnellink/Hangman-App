// select the elements
const puzzleEl = document.querySelector("#puzzle");
const remainingEl = document.querySelector("#guessesleft");

// functions to render the elements
const renderPuzzle = () => {
  puzzleEl.innerHTML = `Puzzle: ${game1.getPuzzle()}`;
};
const renderRemaining = () => {
  remainingEl.innerHTML = `You have: ${game1.remainingGuesses} remaining guesses`;
};

// Maak een game
const game1 = new Hangman("Cat", 10);

renderPuzzle();
renderRemaining();
console.log(game1.status);

window.addEventListener("keypress", function (e) {
  game1.makeGuess(e.key);
  renderPuzzle();
  renderRemaining();
  console.log(game1.status);
  //   console.log(game1.word);
  //   console.log(game1.guessedLetters);
});
