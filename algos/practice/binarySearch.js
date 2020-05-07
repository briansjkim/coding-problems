// binarySearch

//i: array of integers (sorted) and a value
//o: index of the value or -1 if the value isn't there
//c: log n time complexity
//e:

var binarySearch = function (ints, n) {
  let mid = Math.floor(ints.length / 2);

  if (n === ints[mid]) {
    console.log(mid)
    return mid;
  } else if (n > ints[mid]) {
    console.log(mid, ints[mid])
    return binarySearch(ints.slice(mid + 1), n);
  } else if (n < ints[mid]) {
    return binarySearch(ints.slice(0, mid - 1), n);
  } else {
    return -1;
  }
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)) // 3
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)) // 5
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 11)) // -1
