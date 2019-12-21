var fibonacciIterative = (n) => {
  var result = [0, 1];
  // we want to make i less than n + 1 because if we do n, i stops at 4 and the length is only 5
  // which means that the index only goes up to 4 rather than 5
  // following the fibonacci sequence, if we didn't do n + 1
    // then fibonacciIterative(5) would return 3 instead of 5
  for (var i = 2; i < n + 1; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result[n];
}

// console.log(fibonacciIterative(1)); // 1
// console.log(fibonacciIterative(2)); // 1
// console.log(fibonacciIterative(3)); // 2
// console.log(fibonacciIterative(4)); // 3
// console.log(fibonacciIterative(5)); // 5

// time complexity is EXPONENTIAL
var fibonacciRecursive = (n) => {
  if (n <= 2) {
    return 1;
  }

  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

// console.log(fibonacciRecursive(1)); // 1
// console.log(fibonacciRecursive(2)); // 1
// console.log(fibonacciRecursive(3)); // 2
// console.log(fibonacciRecursive(4)); // 3
// console.log(fibonacciRecursive(5)); // 5

// with dynamic programming, we can reduce the time complexity
// using memoization
var fib = (n, memo = []) => {
  // if the result is stored in the array,
    // just return it rather than re-solving it
  if (memo[n] !== undefined) {
    return memo[n];
  }
  // same base case as usual
  if (n <= 2) {
    return 1;
  }
  // store the result of the fib operation for a number
  var result = fib(n - 2, memo) + fib(n - 1, memo);
  memo[n] = result;
  // return the result
  return result;
}
