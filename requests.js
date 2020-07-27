//Als getPuzzle wordt aangeroepen dan doet hij een HTTP req.
// Als readystate 4 is, en target status = 200, dan assigned hij de data.
// Daarna roept hij callback, wat eigenlijk dus de functie is die ik invoerde als argument bij getPuzzle.
// Als target status niet 200 is dan doet hij een andere callback, met een error message.

const getPuzzle = (wordCount) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolve(data.puzzle);
      } else if (e.target.readyState === 4) {
        reject("An error has taken place");
      }
    });
    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
  });

const getCountry = (countryCode) =>
  new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();
    countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
    countryRequest.send();

    countryRequest.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const countries = JSON.parse(e.target.responseText);
        const country = countries.find((country) => country.alpha2Code === countryCode);
        resolve(country);
        // callback
      } else if (e.target.readyState === 4) {
        reject("An error has occured");
      }
    });
  });
