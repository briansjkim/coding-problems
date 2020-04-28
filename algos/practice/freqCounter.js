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

var same = function (arr1, arr2) {
  let storage = {};

  for (let i = 0; i < arr1.length; i++) {
    let squared = Math.pow(arr1[i], 2);
    if (!storage[squared]) {
      storage[squared] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (!storage[arr2[j]]) {
      return false;
    }
  }

  return true;
}

// console.log(same([1, 2, 3], [4, 1, 9]));
