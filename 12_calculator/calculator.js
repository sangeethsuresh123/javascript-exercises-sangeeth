const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((init, val) => init + val, 0);
};

const multiply = function (arr) {
  return arr.reduce((init, val) => init * val, 1);
};

const power = function (a, b) {
  // let val = a;
  // for (let i = 0; i < b - 1; i++) {
  //   a = a * val;
  // }
  // return a;
  return a ** b;
};

const factorial = function (num) {
  let fact = 1;
  for (let i = num; i > 1; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
