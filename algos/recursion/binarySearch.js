// binarySearch in recursion

/**
 * i: array of sorted integers and a value
 * o: boolean -- true if value is there, false if the value isn't
 * c: log n time complexity
 * e:
 */

var binarySearch = function (ints, n) {
  let mid = Math.floor(ints.length / 2);

  if (n === ints[mid]) {
    return true;
  } else if (n > ints[mid]) {
    return binarySearch(ints.slice(mid + 1), n);
  } else if (n < ints[mid]) {
    return binarySearch(ints.slice(0, mid - 1), n);
  } else {
    return false;
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)) // true
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)) // true
console.log(binarySearch([1, 2, 3, 4, 5, 6], 11)) // false

