/**
 * Builds up the sort by gradually creating a larger left portion which is always sorted
 *
 * i: array of unsorted integers
 * o: array of sorted integers
 * c: quadratic
 * e:
 */

var swap = function (arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}


var insertionSort = function (ints) {
  for (let i = ints.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (ints[i] < ints[j]) {
        swap(ints, i, j);
      }
    }
  }
  return ints;
}

console.log(insertionSort([2, 1, 9, 74, 6]));
console.log(insertionSort([5, 3, 4, 1, 2]));
