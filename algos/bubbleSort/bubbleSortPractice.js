/**
 * A sorting algo where the largest values bubbles up to the top
 *
 * i: array of unsorted integers
 * o: sorted array
 * c: quadratic time complexity
 * e:
 */

var swap = function (arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

var bubbleSort = function (ints) {

}
