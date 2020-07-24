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

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
});
// making an http request

// const countryRequest = new XMLHttpRequest();
// const countryCode = "NL";
// countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
// countryRequest.send();

// countryRequest.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const countries = JSON.parse(e.target.responseText);
//     const country = countries.find((country) => country.alpha2Code === countryCode);

//     console.log(country.name);
//   } else if (e.target.readyState === 4) {
//     console.log("An error has taken place");
//   }
// });
