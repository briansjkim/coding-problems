// sorting algo that works by repeatedly swapping adjacent elements if they are in the wrong order

// iterates through the list
// if the left element is greater than the right element
  // swap
// if the right element is greater than the left element
  // continue
// repeat until the list is sorted
// possibly optimize so that it doesn't iterate through the array without making any swaps

const swap = (arr, idx1, idx2) => {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const bubbleSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j)
      }
    }
  }
  return arr;
}


// console.log(bubbleSort([3, 38, 5, 44, 47, 15, 36]));
