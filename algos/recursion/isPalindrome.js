/**
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward).
 * Otherwise it returns false
 *
 * Examples:
 * isPalindrome('awesome') // false
 * isPalindrome('foobar') // false
 * isPalindrome(tacocat') // true
 * isPalindrome('amanaplanacanalpanama') // true
 * isPalindrome('amanaplanacanalpandemonium') // false
 *
 * i: string
 * o: boolean
 * c:
 * e:
 */

var isPalindrome = function (string) {
  let reverse = '';

  function recurse(str) {
    if (str.length <= 1) {
      return str[0];
    } else {
      return reverse += recurse(str.slice(1)) + str[0]
    }
  }
  recurse(string);

  return reverse === string;
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
