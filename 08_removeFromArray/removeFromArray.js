// const removeFromArray = function () {
//   const args = [...arguments];
//   let args2 = args.slice(1);
//   let arr = args[0];
//   return arr.filter((item) => {
//     for (const i of args2) {
//       if (i === item)
//         return false;
//     }
//     return true;
//   })
// };

const removeFromArray = function (array, ...args) {
  return array.filter(val => !args.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;
