const reverseString = function (str) {
  let len = str.length;
  let arr = str.split('');
  for (let i = 0; i < len / 2; i++) {
    [arr[i], arr[len - i - 1]] = [arr[len - i - 1], arr[i]];
  }
  str = arr.join("");
  return str;
  // return str.split("").reverse().join(""); ALSO WORKS!!
};

// Do not edit below this line
module.exports = reverseString;
