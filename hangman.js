// create method for recaclculate status to playing, finished or failed
// call that method after each guess
// use console.log to print the status

// start the game and see playing
// make two incorrect guesses and see failed
// guess c a t and win.

const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.guessedLetters = [];
  this.remainingGuesses = remainingGuesses;
  this.status = "playing";
};

//Check of de guessedLetters overeenkomen met word
Hangman.prototype.getPuzzle = function () {
  // lege variabele om de return in op te slaan.
  let puzzle = "";

  //Check voor elk item in de array (forEach)
  this.word.forEach((letter) => {
    //gebruik includes om te checken of een letter in een array zit. Of spatie.
    // Ik wilde eerst nog een foreach doen om door de guessLetters array te gaan. Maar dat is niet zo handig.
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });
  return puzzle;
};

//
Hangman.prototype.checkStatus = function () {
  // in principe win je dus. BEHALVE als finished false wordt.
  // Hij gaat over elke letter heen en doet niks, waardoor finished TRUE blijft. (dit had ik niet goed..)
  let finished = true;
  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter)) {
      //
    } else {
      finished = false;
    }
  });

  if (this.remainingGuesses === 0) {
    this.status = "failed";
  } else if (finished === true) {
    this.status = "finished";
  } else {
    this.status = "played";
  }
};

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();

  // verbetering: aparte variabelen aanmaken, is makkelijker te lezen.
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
  }
  this.checkStatus();
};
