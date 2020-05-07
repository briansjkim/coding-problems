/**
 * Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
 *
 * i: array of unsorted integers
 * o: array of sorted integers
 * c:
 * e:
 */

var swap = function (arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = arr[idx1];
}
