// This pattern involves creating a window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

// Example:
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
// maxSubarraySum([4, 2, 1, 6], 1) // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4)// 13
// maxSubarraySum([], 4) // null

var maxSubarraySum = function (ints, n) {
  if (ints.length < 1 || n > ints.length) { return null; }
  let tempSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < ints.length; i++) {
    tempSum += ints[i];

    if (i >= n - 1) {
      maxSum = Math.max(maxSum, tempSum);
      tempSum = tempSum - ints[i - (n - 1)];
    }
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4))// 13
console.log(maxSubarraySum([], 4)) // null

console.log(maxSubarraySum([-1, 2, 5, -2, 8, -1, 5], 2)) // 7
console.log(maxSubarraySum([1, -2, 5, 2, -8, 1, -5], 4)) // 6
console.log(maxSubarraySum([4, 2, -1, 6], 1)) // 6
console.log(maxSubarraySum([4, -2, 1, -6, 2], 4))// -3
console.log(maxSubarraySum([], 4)) // null


