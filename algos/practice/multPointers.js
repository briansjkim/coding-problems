// This pattern is creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition
// very efficient for solving problems w/ minimal space complexity as well

// Example:
// write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair of where the sum is 0
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// Examples:
// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined

// i: sorted array of integers
// o: array of 2 integers or undefined
// c: linear time complexity. constant space complexity?
// e:

// approach:
// create two variables to act as pointers
// set one pointer to 0 and the other to the input array's length - 1 => do this because the array is sorted
// while the first pointer is less than the second pointer
// if the sum of the values at the first pointer and the second pointer is 0
// return an array of the two values
// if the sum is greater than 0
// decrement the second pointer because this means that the value at the second pointer is too large
// if the sum is less than 0
// increment the first pointer because this means that the value at the first pointer is too small

var sumZero = function (ints) {
  let left = 0;
  let right = ints.length - 1;

  while (left < right) {
    let sum = ints[left] + ints[right];
    if (sum === 0) {
      return [ints[left], ints[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([])); // undefined
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined
console.log(sumZero([-10, -8, -5, -3, 2, 4, 5, 13, 20])); // [-5, 5]
