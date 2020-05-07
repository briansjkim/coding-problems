// binarySearch

//i: array of integers (sorted) and a value
//o: index of the value or -1 if the value isn't there
//c: log n time complexity
//e:

var binarySearch = function (ints, n) {
  let start = 0;
  let end = ints.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (n === ints[mid]) {
      return mid;
    } else if (n > ints[mid]) {
      start = mid + 1;
    } else if (n < ints[mid]) {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)) // 3
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], 11)) // -1
