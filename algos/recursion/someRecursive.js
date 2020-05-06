/**
 * Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise, it returns false
 *
 * Examples
 * someRecursive([1, 2, 3, 4], isOdd) // true
 * someRecursive([4, 6, 8, 9], isOdd) // true
 * someRecursive([4, 6, 8], isOdd) // false
 * someRecursive([4, 6, 8], val => val > 10); // false
 */

const isOdd = val => val % 2 !== 0;


var someRecursive = function (ints, cb) {
  if (ints.length === 0) {
    return false;
  } else if (cb(ints[0])) {
    return true;
  } else {
    return someRecursive(ints.slice(1), cb);
  }
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false

