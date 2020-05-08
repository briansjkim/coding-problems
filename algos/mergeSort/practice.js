/**
 * Combination of two things - merging and sorting
 * Exploits the fact that arrays of 0 or 1 element are always sorted
 * Works by decomposing an array into SMALLER arrays of 0 or 1 element, then building up a newly sorted array
 *
 * i: unsorted array of integers
 * o: sorted array of integers
 * c: O(n + m) time complexity and O(n + m) space complexity
 * e:
 */

// helper function used to compare values and merge arrays
var merge = function (ints1, ints2) {
  let newInts = [];
  let i = 0;
  let j = 0;

  while (i < ints1.length && j < ints2.length) {
    if (ints1[i] < ints2[j]) {
      newInts.push(ints1[i]);
      i++;
    } else {
      newInts.push(ints2[j]);
      j++;
    }
  }

  while (i < ints1.length) {
    newInts.push(ints1[i]);
    i++;
  }

  while (j < ints2.length) {
    newInts.push(ints2[j]);
    j++;
  }

  return newInts;
}

var mergeSort = function (ints) {
  // arrays of 0 or 1 are always sorted
  if (ints.length <= 1) { return ints; }

  let mid = Math.floor(ints.length / 2);
  // breaks down the left side of the array until there's 0 or 1 elements
  let left = mergeSort(ints.slice(0, mid));
  // same with the right side
  let right = mergeSort(ints.slice(mid));

  // merge the two together
  return merge(left, right);
}

console.log(mergeSort([4, 3, 2, 7, 10, 99, 50, 100]))
