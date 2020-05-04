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
  // create min var to store the first index
  let min = 0;
  // create max var to store the last index
  let max = ints.length - 1;

  // while the first index is less than or equal to the max index
  while (min <= max) {
    // create mid var to store the middle index
    let mid = Math.floor((min + max) / 2);

    // if n is greater than the int at the mid index
    if (n > ints[mid]) {
      // set min to mid + 1
      // this is so that we can go through the right side of the array
      min = mid + 1;
    } else if (n < ints[mid]) {
      // if n is less than the int at the mid index
      // set max to mid - 1
      // this is so that we can go through the left side of the array
      max = mid - 1;
    } else {
      // return mid if none of the other conditions are true
      return mid;
    }
  }
  // return -1 if n is NOT located inside the array
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)) // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)) // -1

