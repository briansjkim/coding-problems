// first part of mergeSort (merging)
var merge = (arr1, arr2) => {
  var result = [];
  var i = 0;
  var j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

var mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  var mid = Math.floor(arr.length / 2);
  // breaks down the left side of the array until there's 0 or 1 elements left
  var left = mergeSort(arr.slice(0, mid));
  // breaks down the right side of the array until there's 0 or 1 elements left
  var right = mergeSort(arr.slice(mid));
  // uses the merge function to merge each array together (starting from when there was only 0 or 1 elements)
  // and then returns the completely sorted and merged array
  return merge(left, right);
}

// console.log(mergeSort([10, 76, 24, 73]));
// console.log(mergeSort([50, 3, 2, 16, 11, 93]));
