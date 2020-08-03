class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.guessedLetters = [];
    this.remainingGuesses = remainingGuesses;
    this.status = "playing";
  }

  get puzzle() {
    // lege variabele om de return in op te slaan.
    let puzzle = "";

    //Check voor elk item in de array (forEach)
    this.word.forEach((letter) => {
      //gebruik includes om te checken of een letter in een array zit. Of spatie.
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }

  checkStatus() {
    // met .every kun je checken of elk van de items in een array voldoen aan je criteria. Zo ja: true, zo nee: false
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === " ");

    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished === true) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }

  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "failed") {
      return `Nice try! The word was: ${this.word.join("")}`;
    } else if (this.status === "finished") {
      return `Great work! You guessed the word`;
    }
  }

  makeGuess(guess) {
    guess = guess.toLowerCase();
    // verbetering: aparte variabelen aanmaken, is makkelijker te lezen.
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    // Zorg ervoor dat als mensen niet meer "playing" zijn, ze niet meer kunnen raden.
    if (this.status !== "playing") {
      return;
    }
    if (isUnique) {
      this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }
    this.checkStatus();
  }
}

export { Hangman as default };
