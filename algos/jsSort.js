// using JavaScript's built-in sorting method

var sortString = (string1, string2) => {
  return string1.length - string2.length;
}
// if a negative number is returned, a (string1) will come before b (string2)
// if a positive number is returned, a will come after b
// if 0 is returned, a and b are considered the same

var strings = ['Hello', 'There', 'Animals', 'Nature'];

// this implementation sorts the strings in the array in alphabetical order
// console.log(strings.sort());
// // this implmentation sorts the strings in the array depending on the comparison between lengths
// console.log(strings.sort(sortString));

var sortNumbers = (num1, num2) => {
  return num1 - num2;
}

var numbers = [1, 2, 10, 5, 78, 44];

// different results depending on how you sort
// console.log(numbers.sort());
// console.log(numbers.sort(sortNumbers));
