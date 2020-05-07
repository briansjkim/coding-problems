/**
 * Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
 *
 * Selecting the minimum value and then swapping
 *
 * i: array of unsorted integers
 * o: array of sorted integers
 * c:
 * e:
 */

var swap = function (arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

var selectionSort = function (ints) {
  for (let i = 0; i < ints.length; i++) {
    let min = i;

    for (let j = i + 1; j < ints.length; j++) {
      if (ints[min] > ints[j]) {
        min = j;
      }
    }

    if (i !== min) {
      swap(ints, i, min);
    }
  }

  return ints;
}


console.log(selectionSort([19, 4, 6, 2, 11, 1]));
console.log(selectionSort([40, 23, 11, 67, 44, 22]))
