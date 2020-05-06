/**
 * Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
 * Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8,... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 *
 * Examples:
 * fib(4) // 3
 * fib(10) // 55
 * fib(28) // 317811
 * fib(35) // 9227465
 *
 * i: integer
 * o: integer which is the sum of the previous two numbers
 * c:
 * e:
 */

var fib = function (int) {
  if (int <= 2) {
    return 1;
  } else {
    return fib(int - 2) + fib(int - 1);
  }
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465
