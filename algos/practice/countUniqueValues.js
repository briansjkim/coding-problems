// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted

// Example:
// countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); 7
// countUniqueValues([]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]); //4

// count each value ONCE
// if there are duplicates, ignore them

// i: array of integers
// o: integer
// c: linear time complexity
// e:

// approach:
// create a storage variable to hold all the unique values
// iterate through the input array
// if the value isn't in storage
// add it
// if it is
// ignore it
// return the number of values in the storage

var countUniqueValues = function (ints) {
  if (ints.length < 1) { return 0; }

  let uniques = {};

  for (let i = 0; i < ints.length; i++) {
    if (!uniques[ints[i]]) {
      uniques[ints[i]] = 1;
    }
  }

  return Object.keys(uniques).length;
}


console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4