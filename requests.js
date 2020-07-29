const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch a new puzzle");
      }
    })
    .then((data) => data.puzzle); // return niet het hele object maar alleen de puzzle waarde.
};

const getCountry = (countryCode) => {
  return fetch("http://restcountries.eu/rest/v2/all")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch data");
      }
    })
    .then((countries) => countries.find((country) => country.alpha2Code === countryCode)); //return een individueel country object
};

const getLocation = () => {
  return fetch("http://ipinfo.io/json?token=e6fa78ce09d685").then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Unable to fetch data");
    }
  });
};
