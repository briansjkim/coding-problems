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

console.log(getDigit(7323, 2)); // 3
console.log(getDigit(7323, 1)); // 2
console.log(getDigit(7323, 0)); // 3
console.log(getDigit(7323, 4)); // 0
console.log(getDigit(7323, 3)); // 7
