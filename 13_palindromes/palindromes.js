const palindromes = function (str) {
  let arr = str.split(''); // check solution, this too long and manual not utilisings js functions
  let arr2 = [];
  for (let i of arr) {
    if (isAlphabet(i) || isNumeric(i))
      arr2.push(i);
  }
  let len = arr2.length;
  for (let i = 0; i < len; i++) {
    if (isUpperCase(arr2[i]))
      arr2[i] = arr2[i].toLowerCase();
  }
  for (let i = 0; i < len / 2; i++) {
    if (arr2[i] !== arr2[len - i - 1])
      return false;
  }
  return true;
};

function isAlphabet(char) {
  return char.toLowerCase() !== char.toUpperCase();
}

function isNumeric(char) {
  return /^\d$/.test(char);
}

function isUpperCase(char) {
  return char === char.toUpperCase();
}

// Do not edit below this line
module.exports = palindromes;
