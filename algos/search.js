// given a sorted array of integers, write a function called search
// it accepts a value and returns the index where the value passed to the function is located
// if the value is not found, return -1

// divide and conquer solution

// initial solution
var search = (array, num) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
}



console.log(search([1,2,3,4,5], 5));
