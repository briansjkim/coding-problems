// write a function that calculates the sum of all numbers from 1 up to (and including) some number n

// EX 1
var addUpTo = (n) => {
  var result = 0;
    // 1 assignment
  for (var i = 0; i <= n; i++) {
    // i = 0 => 1 assignment
    // i <=n => n comparisons
    // i++ => n additions and n assignments
    result += i;
      // n additions (+)
      // n assignments (=)
  }
  return result;
}
// // not a static or constant number of operations
// // as n grows, the number of operations grows roughly in proportion to n
//   // number of operations is eventually bounded by a multiple of n
// // as n grows, time grows in proportion so: LINEAR TIME COMPLEXITY O(n)

console.log(addUpTo(5)); // 15
//   // result = 0; i = 0;
//     // result += 0; result = 0;
//   // result = 0; i = 1;
//     // result += 1; result = 1;
//   // result = 1; i = 2;
//     // result += 2; result = 3;
//   // result = 3; i = 3;
//     // result += 3; result = 6
//   // result = 6; i = 4;
//     // result += 4; result = 10;
//   // result = 10; i = 5;
//     // result += 5; result = 15;
console.log(addUpTo(10)); // 55

// // EX 2
// // this example is faster
var addUpTo = (n) => {
  return n * (n + 1) / 2;
}
// // 3 operations regardless of size of n
// // constant number of operations so: CONSTANT TIME COMPLEXITY O(1)

console.log(addUpTo(5)); // 15
//   // 5 * (5 + 1) / 2;
//   // 5 * 6 / 2;
//   // 30 /2
//   // 15
console.log(addUpTo(10)); // 55
//   // 10 * (10 + 1) / 2;
//   // 10 * 11 / 2;
//   // 110 / 2;
//   // 55;


var countUpAndDown = (n) => {
  console.log('Going up');
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('Reached the top. Now going down');
  for (var j = 0; j < n; j++) {
    console.log(j);
  }
  console.log('Reached the bottom');
}

// two loops that increase in size depending on n
  // linear and linear so 2n
    // but don't care about coefficient, so it's just O(n) not O(2n)

var nestedLoops = (n) => {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(nestedLoops(2)); // 4 pairs
console.log(nestedLoops(3)); // 9 pairs
console.log(nestedLoops(4)); // 16 pairs
// the trend is doubles!

// first loop is linear so O(n)
// second loop is also linear so O(n)
  // but because it's nested, it's not O(n)
// a linear operation inside of a linear operation is O(n^2) QUADRATIC

var logAtLeastFive = (n) => {
  for (var i = 1; i <= Math.max(5, n); i++) {
    return i;
  }
}

// time complexity is O(n)
  // as n grows larger and larger, the number of operations grows

var logAtMostFive = (n) => {
  for (var i = 1; i <= Math.min(5, n); i++) {
    return i;
  }
}

// if n is larger than 5, only 1-5 will be returned
// if n is smaller than 5, 1 - n will be returned
// time complexity is O(1)
  // as n grows larger and larger, the number of operations will be AT MOST a number when n is 5

// SPACE COMPLEXITY
function sum(arr) {
  let total = 0;
    // one number
  for (let i = 0; i < arr.length; i++) {
    // let i = 0; another number
    total += arr[i];
  }
  return total;
}

// as n grows, doesn't have an impact on space that's taken up because there's only 2 variables that are created
// this means, CONSTANT space

function double(arr) {
  let newArr = [];
    // one new arr
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
      // multiples each item and pushes it to the new array
  }
  return newArr;
}

// as input grows, the new arr gets longer and longer proportional to the input
// space taken up is directly proportional to the input array
// this means, LINEAR space
