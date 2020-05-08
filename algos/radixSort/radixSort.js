/**
 * Special sorting algo that works on lists of numbers
 * Never makes comparisons between elements
 * Instead, it exploits the fact that info about the size of a number is envoded in the number of digits
 * More digits means a bigger number
 *
 *
 * first looks at the right-most digit in each number
 * then second to right-most, so on
 *
 * radix sort helpers
 * getDigit(num, place) = returns the digit in num at the given place value
 */

var getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// console.log(getDigit(7323, 2)); // 3
// console.log(getDigit(7323, 1)); // 2
// console.log(getDigit(7323, 0)); // 3
// console.log(getDigit(7323, 4)); // 0
// console.log(getDigit(7323, 3)); // 7

/**
 * The amount of the times we need to run this next helper is to determine which number has the largest or most number of digits
 * [10, 1, 5, 302, 182, 749, 2083, 7383, 857, 123]; = we would need to run this helper function 4 times because the largest number is 7383/2083 which has 4 digits
 *
 * digitCount(num) - returns the number of digits in num
 */

var digitCount = function (num) {
  if (num === 0) { return 1; }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(423)); // 3
console.log(digitCount(10)); // 2
