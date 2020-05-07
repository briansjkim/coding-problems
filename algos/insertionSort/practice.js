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
  for (let i = 1; i < ints.length; i++) {
    let currentVal = ints[i];
    for (var j = i - 1; j >= 0 && ints[j] > currentVal; j--) {
      ints[j + 1] = ints[j];
    }
    ints[j + 1] = currentVal;
  }
  return ints;
}

console.log(insertionSort([2, 1, 9, 74, 6]));
console.log(insertionSort([5, 3, 4, 1, 2]));
