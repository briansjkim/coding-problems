// This pattern involes dividing a data set into smaller chunks and then repeating a process w/ a subset of data
// This pattern can tremendously decrease time complexity

// Ex: Quick Sort and Merge Sort

// Example:
// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located.
// If the value is not found, return -1

// Examples:
// search([1, 2, 3, 4, 5, 6], 4) // 3
// search([1, 2, 3, 4, 5, 6], 6) // 5
// search([1, 2, 3, 4, 5, 6], 11) // -1

/**
 * i: array of integers and an integer to use to return index
 * o: index of the integer
 * c: log (n) time complexity
 * e:
 *
 * approach:
 * // iterate through the array
 * // if the target number matches the integer in the array
 * // return its index
 * // if the targe tnumber was not in the array
 * // return -1
 */

var search = function (ints, n) {
  for (let i = 0; i < ints.length; i++) {
    if (ints[i] === n) {
      return i;
    }
  }
  return -1;
}
