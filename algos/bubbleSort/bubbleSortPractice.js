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
  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] > ints[j]) {
        swap(ints, i, j);
      }
    }
  }
  return ints;
}

console.log(bubbleSort([37, 45, 8, 12, 88]));
console.log(bubbleSort([1, 5, 2, 7, 2, 3]));
console.log(bubbleSort([10, 11, 1, 3, 7, 2]));
