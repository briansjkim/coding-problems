/**
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
 * Note that a subarray must consist of CONSECUTIVE elements from the original array.
 *
 * Examples:
 * maxSubarraySum([100, 200, 300, 400], 2) // 700
 * maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
 * maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) //5
 * maxSubarraySum([-3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
 * maxSubarraySum([2, 3], 3) // null
 *
 * i: array of integers (not sorted) and an integer indicating the number of consecutive numbers
 * o: integer; largest sum of array
 * c: linear time complexity and constant space complexity
 * e:
 */

var maxSubarraySum = function (ints, target) {
  if (target > ints.length || ints.length < 1) { return null; }
  let tempSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < ints.length; i++) {
    tempSum += ints[i];

    if (i >= target - 1) {
      maxSum = Math.max(maxSum, tempSum);
      tempSum = tempSum - ints[i - (target - 1)]
    }
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) //5
console.log(maxSubarraySum([-3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5
console.log(maxSubarraySum([2, 3], 3)) // null
