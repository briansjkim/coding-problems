// given a sorted array of integers, write a function called search
// it accepts a value and returns the index where the value passed to the function is located
// if the value is not found, return -1

// divide and conquer solution

// initial solution w/o divide and conquer
// linear time complexity
var search = (array, num) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
}

// divide and conquer solution
// binary search: Log(N) time complexity
var search = (array, num) => {
  var start = 0;
  var end = array.length - 1;

  // use a while loop and use this condition
    // because if num is located at the end of the array
    // you want to account for it
  while (start <= end) {
    // calculate the middle of the array
    var mid = Math.floor((start + end) / 2);

    if (num === array[mid]) {
      return mid;
    } else if (num > array[mid]) {
      // if the num is greater than the middle element
      // move the start to the element after the middle
      start = mid + 1;
    } else {
      // if num is less than the middle element
      // move the end to the element before the middle
      end = mid - 1;
    }
  }

  return -1;
}

// console.log(search([1,2,3,4,5], 5));
// console.log(search([4,5,6,7,8], 1));