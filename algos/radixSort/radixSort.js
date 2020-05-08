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

// console.log(digitCount(423)); // 3
// console.log(digitCount(10)); // 2

/**
 * This next helper function tells us the number of digits in the largest numbers in the list
 */

var mostDigits = function (nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// console.log(mostDigits([1234, 56, 7])); // 4
// console.log(mostDigits([1, 10, 50, 44, 183])); //3
// console.log(mostDigits([232, 2324, 5467, 2123, 121])); //4

var radixSort = function (ints) {
  let maxDigitCount = mostDigits(ints);

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < ints.length; j++) {
      digitBuckets[getDigit(ints[j], i)].push(ints[j]);
    }
    ints = [].concat(...digitBuckets);
  }
  return ints;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
