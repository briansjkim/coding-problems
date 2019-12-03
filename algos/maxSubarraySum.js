// write a function called maxSubarraySum
// accepts an array of integers and a number called n
// the function should calculate the maximum sum of n consecutive elements in the array
// return null is the input is empty

// numbers can be negative and/or positive
// n can be greater than the input length

// LINEAR TIME COMPLEXITY
var maxSubarraySum = (array, num) => {
  var tempSum = 0;
  var maxSum = 0;

  for (var i = 0; i < num; i++) {
    tempSum += array[i];
  }
  maxSum = tempSum;
  for (var j = num; j < array.length; j++) {
    // subtract the first value from the previous sum
    // then add the last value from the current iteration
    tempSum = tempSum - array[j - num] + array[j];
    // maxSum will now be the greatest value between maxSum and tempSum
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// sliding window pattern
