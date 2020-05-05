/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
 *
 * Examples:
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c', 'a') // true
 *
 * i: variable number of arguments
 * o: boolean
 * c: linear time complexity, linear space complexity
 * e:
 */

// linear time complexity, linear space complexity
// var areThereDuplicates = function () {
//   let storage = {};

//   for (let i = 0; i < arguments.length; i++) {
//     if (storage[arguments[i]]) {
//       return true;
//     } else {
//       storage[arguments[i]] = true;
//     }
//   }

//   return false;
// }

var areThereDuplicates = function (...args) {
  args.sort((a, b) => a > b);

  let i = 0;
  let j = 1;

  while (j < args.length) {
    if (args[i] === args[j]) {
      return true;
    } else {
      i++;
      j++;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
console.log(areThereDuplicates('a', 'b', 'b', 'c', 'a', 'd'));
console.log(areThereDuplicates(1, 5, 3, 2, 7));

