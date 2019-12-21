var fibonacciIterative = (n) => {
  var result = [0, 1];
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

