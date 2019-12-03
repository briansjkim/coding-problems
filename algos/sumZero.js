// write a function called sumZero which accepts a sorted array of integers
// the function should find the first pair where the sum is 0
// return an array that includes both values that sum to 0 or undefined if a pair doesn't exist

// Example
  // sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
  // sumZero([-2, 0, 1, 5]) // undefined
  // sumZero([-1, 2, 3, 4]) // undefined

// QUADRATIC TIME COMPLEXITY SOLUTION
var sumZero = (array) => {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
  return undefined;
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4])); // [-4, 4]
// console.log(sumZero([-2, 0, 1, 5])); // undefined

// LINEAR TIME COMPLEXITY SOLUTION
var sumZero = (array) => {
  var start = 0;
  var end = array.length - 1;

  while(start < end) {
    var sum = array[start] + array[end];
    if (sum === 0) {
      return [array[start], array[end]];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 5])); // undefined
console.log(sumZero([-1, 2, 3, 4])); // undefined
