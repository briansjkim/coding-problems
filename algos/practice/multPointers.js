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
// create two variables that will serve as pointers
// set one of the pointers to 0 (to start at the beginning of the array) and the other to the 1st pointer + 1
// while the first pointer is less the length of the array
// check if the sum of the value at the first pointer and the value at the second pointer equal 0
// if they do
// return an array with both values
// if they don't
// move the second pointer to the next value
// if the second pointer reaches the end of the array
// move the first pointer to the next value
// return undefined if there is no sum of zero

var sumZero = function (ints) {

}
