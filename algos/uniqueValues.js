// implement a function called countUniqueValues
// accepts a sorted array and counts the unique values in the array
// can be negative numbers in the array, but it'll always be sorted

// Example:
  // countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
  // countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
  // countUniqueValues([]); //0
  // countUniqueValues([-2, -1, -1, 0, 1]) // 4

// LINEAR TIME COMPLEXITY SOLUTION
  // also works for unsorted arrays
var countUniqueValues = (array) => {
  var unique = {};
  for (var i = 0; i < array.length; i++) {
    let el = array[i];
    if (unique[el]) {
      continue;
    } else {
      unique[el] = 1;
    }
  }

  return Object.keys(unique).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([2, 4, 1, 5, 7, 3, 3, 2, 7])); // 6
