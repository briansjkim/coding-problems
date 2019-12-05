var swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

var selectionSort = (array) => {
  for (var i = 0; i < array.length; i++) {
    let min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        // if el at j(index) is smaller than el at min
        // set min to j
        min = j;
      }
    }
    // if i doesn't equal min
    if (i !== min) {
      // then swap
      swap(array, i , min)
    }
  }
  return array;
}

// console.log(selectionSort([19, 4, 6, 2, 11, 1]));
// console.log(selectionSort([40, 23, 11, 67, 44, 22]))
