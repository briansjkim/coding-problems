/**
 * Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
 * Works by selecting one element (the "pivot") and finding the index where the pivot should end up in the sorted array
 * Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
 *  the runtime of quick sort depends in part on how one selects the pivot
 *  ideally, the pivot should be chosen so that it's roughly the median value
 */

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function pivot(arr, start = 0, end = arr.length + 1) {
  // starting our pivot point at the first element
  let pivot = arr[start];
  // the swapIdx will be the first index because that's our pivot point
  let swapIdx = start;

  // iterate through the array starting from start + 1
  for (let i = start + 1; i < arr.length; i++) {
    // if pivot is greater than a value
    if (pivot > arr[i]) {
      // increment the swapIdx so that we can have an idea of where to put the pivot element
      swapIdx++;
      // then swap the element at swapIdx and the element at i
      swap(arr, i, swapIdx);
    }
  }
  // then swap the element at the swapIdx with the element at the start index
  swap(arr, start, swapIdx);
  return swapIdx;
}


