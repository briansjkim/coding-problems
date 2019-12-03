// given two strings, write a function to determine if the second string is an anagram of the first
// an anagram is a word, phrase, or name formed by rearranging the letters of another

// Example
  // validAnagram('cinema', 'iceman'); // true
  // validAnagram('aaz', 'zza'); // false
  // validAnagram('', ''); // true

// Won't be spaces, numbers, punctuations
// All lowercase

// Linear time complexity solution
var validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  var obj1 = {};
  var obj2 = {};

  for (var i = 0; i < str1.length; i++) {
    if (obj1[str1[i]]) {
      obj1[str1[i]]++;
    } else {
      obj1[str1[i]] = 1;
    }
  }

  for (var j = 0; j < str2.length; j++) {
    if (obj2[str2[j]]) {
      obj2[str2[j]]++;
    } else {
      obj2[str2[j]] = 1;
    }
  }

  return isAnagram(obj1, obj2);
}

var isAnagram = (obj1, obj2) => {
  for (var key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

// if letters were both uppercase and lowercase
var validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  var lowerCaseStr1 = str1.toLowerCase();
  var lowerCaseStr2 = str2.toLowerCase();

  var obj1 = {};
  var obj2 = {};

  for (var i = 0; i < lowerCaseStr1.length; i++) {
    if (obj1[lowerCaseStr1[i]]) {
      obj1[lowerCaseStr1[i]]++;
    } else {
      obj1[lowerCaseStr1[i]] = 1;
    }
  }

  for (var j = 0; j < lowerCaseStr2.length; j++) {
    if (obj2[lowerCaseStr2[j]]) {
      obj2[lowerCaseStr2[j]]++;
    } else {
      obj2[lowerCaseStr2[j]] = 1;
    }
  }

  return isAnagram(obj1, obj2);
}

// console.log(validAnagram('Aabc', 'aAbc')); // true
// console.log(validAnagram('Asthma', 'thmsaa')); // true
// console.log(validAnagram('', '')); //true
// console.log(validAnagram('aaz', 'zza')); // false
// console.log(validAnagram('anagram', 'nagaram')); //true
// console.log(validAnagram('rat', 'car')); // false
// console.log(validAnagram('awesome', 'awesom')); // false
// console.log(validAnagram('qwerty', 'qeywrt')); // true
// console.log(validAnagram('texttwisttime', 'timetwisttext')); // true