// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

// Examples:
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram('rat', 'car') // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// i: two strings
// o: boolean
// c: linear time complexity
// e:

// approach:
// check if the the length of the two input strings are equal
// if they aren't, return false
// create two storage objects to store each character from each string
// iterate through the first string and add each char to the first storage obj
// set the value of each char to 1
// increment the value if a char is repeated
// do the same as above with the second string and the second storage obj
// iterate through one of the storage obj
// check the values of each char from both objs
// if they don't match, return false
// return true at the end

var validAnagram = function (str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (counter1[str1[i]]) {
      counter1[str1[i]]++;
    } else {
      counter1[str1[i]] = 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (counter2[str2[j]]) {
      counter2[str2[j]]++;
    } else {
      counter2[str2[j]] = 1;
    }
  }

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true