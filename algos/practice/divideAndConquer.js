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
 *
 * better approach:
 * create a variable to store the middle value of the array ('mid')
 * if the target number is greater than mid
 *  iterate through the right side of the array
 * if the target number matches an integer, return its index
 *  if the target number is less than mid
 * if the target number matches an integer, return its index
 * iterate through the left side of the array
 * return -1 if there are no matches
 */

// linear time complexity
var search = function (ints, n) {
  for (let i = 0; i < ints.length; i++) {
    if (ints[i] === n) {
      return i;
    }
  }
  return -1;
}

// Log(n) time complexity
var search = function (ints, n) {
  let min = 0;
  let max = ints.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (n > ints[mid]) {
      min = mid + 1;
    } else if (n < ints[mid]) {
      max = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)) // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)) // -1

