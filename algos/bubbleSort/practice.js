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

// works in all cases (not sorted, somewhat sorted, sorted)
// time complexity is quadratic
const bubbleSort = (arr) => {
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        swap(arr, j, i);
      }
    }
  }
  return arr;
}

// depends on how the elements are already sorted
// doesn't work if the first element is the smallest of all the elements
// best case time complexity is linear
const optimizedSort = (arr) => {
  for (var i = arr.length - 1; i >= 0; i--) {
    var swapped = false;
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        swap(arr, j, i);
        swapped = true;
      }
    }
    if (!swapped) { break; }
  }
  return arr;
}


// console.log(bubbleSort([3, 38, 5, 44, 47, 15, 36]));
// console.log(optimizedSort([3, 38, 5, 44, 47, 15, 36])); // doesn't work the way it should

// console.log(bubbleSort([37, 45, 29, 8]));
// console.log(optimizedSort([37, 45, 29, 8]));

// console.log(bubbleSort([1, 2, 3, 4, 5, 6]));
// console.log(optimizedSort([1, 2, 3, 4, 5, 6]));

// console.log(optimizedSort([8, 1, 2, 3, 4, 5, 6]));
// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6]));