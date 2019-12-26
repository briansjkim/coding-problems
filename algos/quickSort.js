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
var quickSort = (arr) => {

}
