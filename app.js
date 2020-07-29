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

getPuzzle("2")
  .then((puzzle) => {
    console.log(puzzle);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

// getCountry("NL")
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

getLocation()
  .then((location) => {
    return getCountry(location.country);
  })
  .then((country) => console.log(country.name))
  .catch((err) => {
    console.log(err);
  });
