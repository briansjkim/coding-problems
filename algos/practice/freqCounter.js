// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or Exponential time complexity operations w/ arrays/strings
// This pattern will be linear

// Example:
// Write a function called same, which accepts 2 arrays.
// Function should return true if every value in the array has its corresponding value squared in the second array.
// The frequency of values must be the same

// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

// i: two arrays
// o: boolean
// c: linear
// e:

// approach:
// create a storage variable to hold the values of an array (storage)
// iterate through the first array
// add each SQUARED value to storage
// iterate through the second array
// check if the squared value is in storage
// if it's not, return false
// if for loop ends, return true

// var same = function (arr1, arr2) {
//   let storage = {};

//   for (let i = 0; i < arr2.length; i++) {
//     if (!storage[arr2[i]]) {
//       storage[arr2[i]] = true;
//     }
//   }

//   for (let j = 0; j < arr1.length; j++) {
//     let squared = Math.pow(arr1[j], 2);
//     if (!storage[squared]) {
//       return false;
//     } else {
//       delete storage[squared]
//     }
//   }

//   return true;
// }

// better solution
var same = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freq1 = {};
  let freq2 = {};

  for (let i = 0; i < arr1.length; i++) {
    if (freq1[arr1[i]]) {
      freq1[arr1[i]]++;
    } else {
      freq1[arr1[i]] = 1;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (freq2[arr2[j]]) {
      freq2[arr2[j]]++;
    } else {
      freq2[arr2[j]] = 1;
    }
  }

  for (let key in freq1) {
    let squared = Math.pow(key, 2);
    if (!(squared in freq2)) {
      return false;
    }
    if (freq2[squared] !== freq1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // false (must be same frequency)