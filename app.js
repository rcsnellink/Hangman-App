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

//Hij roept de functie getPuzzle aan, met een functie als argument.
//Deze functie heeft 2 parameters, error en puzzle.

getPuzzle("2").then(
  (puzzle) => {
    console.log(puzzle);
  },
  (error) => {
    console.log(`Error: ${error}`);
  }
);

getCountry("NL").then(
  (country) => {
    console.log(country.name);
  },
  (error) => {
    console.log(`The error: ${error}}`);
  }
);

// create function for getting country details
// call it with 2 arguments, country code, callback function
// make the http req and callback  with country info
// use the callback to print the country name
//
// making an http request
