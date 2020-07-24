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

window.addEventListener("keypress", (e) => {
  game1.makeGuess(e.key);
  renderPuzzle();
  renderRemaining();
});

// making an http request

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  } else if (e.target.readyState === 4) {
    console.log("An error has taken place");
  }
});

request.open("GET", "http://puzzle.mead.io/puzzle?la=la");
request.send();
