/**
 * Write a function called productOfArray which takes in an array of number and returns the product of them all
 *
 * Examples:
 * productOfArray([1, 2, 3]) // 6
 * productOfArray([1, 2, 3, 10]) // 60
 */

var productOfArray = function (ints) {
  if (ints.length === 0) {
    return 1;
  } else {
    return ints[0] * productOfArray(ints.slice(1))
  }
}

console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10]))// 60
console.log(productOfArray([2, 4, 10, 3])) // 240
