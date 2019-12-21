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


var fibonacciRecursive = (n) => {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

// console.log(fibonacciRecursive(1)); // 1
// console.log(fibonacciRecursive(2)); // 1
// console.log(fibonacciRecursive(3)); // 2
// console.log(fibonacciRecursive(4)); // 3
// console.log(fibonacciRecursive(5)); // 5

