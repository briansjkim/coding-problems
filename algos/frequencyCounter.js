// write a function called same, which accepts 2 arrays.
// the function should return true if EVERY value in the array has its corresponding value squared in the second array
// the frequency of values must be the same

// Examples
  // same([1, 2, 3], [4, 1, 9]) // true
  // same([1, 2, 3], [1, 9]) // false
  // same([1, 2, 1], [4, 4, 1]) // false

// i: two arrays
// o: boolean
// c: n/a
// e:

// quadratic time complexity approach
var same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(Math.pow(arr1[i], 2));
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
}

// console.log(same([1,2,3], [4,1,9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [5, 4, 1])); // false


// Linear time complexity
var same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  var counter1 = {};
  var counter2 = {};

  for (var i = 0; i < arr1.length; i++) {
    var el = arr1[i];
    if (counter1[el]) {
      counter1[el]++;
    } else {
      counter1[el] = 1;
    }
  }

  for (var j = 0; j < arr2.length; j++) {
    var el2 = arr2[j];
    if (counter2[el2]) {
      counter2[el2]++;
    } else {
      counter2[el2] = 1;
    }
  }

  for (var key in counter1) {
    var squaredKey = Math.pow(key, 2);
    // checks if the squared value is in the second array
    if (!(squaredKey in counter2)) {
      return false;
    }

    // checks if the frequency of the squared value is equal in both arrays
    if (counter1[squaredKey] !== counter2[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([1,2,3], [4,1,9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [5, 4, 1])); // false
