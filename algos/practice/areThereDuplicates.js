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
var areThereDuplicates = function () {
  let storage = {};

  for (let i = 0; i < arguments.length; i++) {
    if (storage[arguments[i]]) {
      return true;
    } else {
      storage[arguments[i]] = true;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

