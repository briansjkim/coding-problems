// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

/**
 * Examples:
 * sameFrequency(182, 281) // true
 * sameFrequency(34, 14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22, 222) // false
 */

/**
 * i: two integers
 * o: boolean
 * c: linear time complexity
 * e:
 */

var sameFrequency = function (num1, num2) {
  let int1 = num1.toString();
  let int2 = num2.toString();
  let freq1 = {};
  let freq2 = {};

  for (let i = 0; i < int1.length; i++) {
    if (freq1[int1[i]]) {
      freq1[int1[i]]++;
    } else {
      freq1[int1[i]] = 1;
    }
  }

  for (let j = 0; j < int2.length; j++) {
    if (freq2[int2[j]]) {
      freq2[int2[j]]++;
    } else {
      freq2[int2[j]] = 1;
    }
  }

  for (let key in freq1) {
    if (!(key in freq2)) {
      return false;
    }
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true;
}

// console.log(sameFrequency(182, 281)) // true
// console.log(sameFrequency(34, 14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22, 222)) // false
