const convertToCelsius = function (fahr) {
  // let cel = (fahr - 32) * (5 / 9);
  // let rounded = Math.round(cel * 10) / 10;
  // return rounded;
  return Math.round((fahr - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (cel) {
  // let fahr = (9 / 5) * cel + 32;
  // let rounded = Math.round(fahr * 10) / 10;
  // return rounded;
  return Math.round(((9 / 5) * cel + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
