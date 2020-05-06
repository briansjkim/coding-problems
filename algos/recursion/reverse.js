/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse
 *
 * Examples:
 * reverse('awesome') // 'emosewa'
 * reverse('rithmschool') // 'loohcsmhtir'
 *
 * i: string
 * o: string -- reversed
 * c:
 * e:
 */

var reverse = function (string) {
  if (string.length <= 1) {
    return string[0];
  } else {
    return reverse(string.slice(1)) + string[0];
  }
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
console.log(reverse('hello world')); // dlrow olleh
