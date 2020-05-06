/**
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 *
 * Examples
 * recursiveRange(6) // 21
 * recursiveRange(10) // 55
 *
 * i: integer
 * o: sum of all the numbers from 0 to the input number
 * c:
 * e:
 */

var recursiveRange = function (int) {
  if (int === 0) {
    return 0;
  } else {
    return int += recursiveRange(int - 1);
  }
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
console.log(recursiveRange(3));//6
console.log(recursiveRange(0)); // 0
