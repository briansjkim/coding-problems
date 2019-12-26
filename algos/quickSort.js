// pivot/partition helper
var pivot = (arr, start = 0, end = arr.length + 1) => {
  function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

// first sorts the left side and then sorts the right side
var quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    var pivotIndex = pivot(arr, left, right);
    // left side
    quickSort(arr, left, pivotIndex - 1);
    // right side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
// console.log(quickSort([8, 10, 2, 7, 1, 37, 9]))
