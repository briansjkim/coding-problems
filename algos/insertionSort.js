var insertionSort = (array) => {
  for (var i = array.length - 1; i >= 0; i--) {
    let current = array[i];
    for (var j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = current;
  }
  return array;
}

// console.log(insertionSort([2, 1, 9, 74, 6]))
