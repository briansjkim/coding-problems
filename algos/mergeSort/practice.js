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

// time complexity is O(n log n)

// helper function
var merge = function (ints1, ints2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < ints1.length && j < ints2.length) {
    if (ints1[i] < ints2[j]) {
      result.push(ints1[i]);
      i++;
    } else {
      result.push(ints2[j]);
      j++;
    }
  }

  while (i < ints1.length) {
    result.push(ints1[i]);
    i++;
  }

  while (j < ints2.length) {
    result.push(ints2[j]);
    j++;
  }

  return result;
}

var mergeSort = function (ints) {
  // if an array is 0 or 1 elements, it's sorted
  if (ints.length <= 1) { return ints; }

  let mid = Math.floor(ints.length / 2);

  // break down left side of the array until it's 0 or 1 elements
  let left = mergeSort(ints.slice(0, mid));
  // same with right side
  let right = mergeSort(ints.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([4, 3, 2, 7, 10, 99, 50, 100]));
console.log(mergeSort([1, 5, 10, 4, 7, 11]));
console.log(mergeSort([]));
