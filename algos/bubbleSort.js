// create a function that takes in an list
// iterate through the list starting at the beginning
  // iterate through the list again starting at 1 + the first iteration's index
  // if the first iteration's el is larger than the second iteration's el
    // swap the two elements
  // repeat until the list is sorted
// return the now sorted array

var swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

var bubbleSort = (array) => {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}


// console.log(bubbleSort([1, 5, 2, 7, 2, 3]));
// console.log(bubbleSort([10, 11, 1, 3, 7, 2]));
