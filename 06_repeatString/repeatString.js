const repeatString = function (str, num) {
  let str2 = "";
  if (num < 0)
    return "ERROR";
  for (let i = 0; i < num; i++) {
    str2 += str;
  }
  return str2;
};

// Do not edit below this line
module.exports = repeatString;
