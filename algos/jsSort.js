// using JavaScript's built-in sorting method

var sortString = (string1, string2) => {
  return string1.length - string2.length;
}

var strings = ['Hello', 'There', 'Animals', 'Nature'];

console.log(strings.sort());
console.log(strings.sort(sortString));
