const fibonacci = function (a) {
  let num = +a;
  if (num < 0)
    return "OOPS";
  else if (num == 0)
    return 0;

  let num1 = 1, num2 = 1;
  if (num == 1 || num == 2)
    return num1;
  else {
    let count = 2;
    let num3;
    while (count < num) {
      num3 = num1 + num2;
      num1 = num2;
      num2 = num3;
      count++;
    }
    return num3;
  }
};

// Do not edit below this line
module.exports = fibonacci;
