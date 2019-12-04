// define a function that takes two strings. takes larger string and the pattern we're looking for

// naive quadratic time solution
var findSubstring = (string, substring) => {
  var counter = 0;

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < substring.length; j++) {
      if (string[i] !== substring[j]) {
        break;
      }
      counter++;
    }
  }
  return counter;
}

console.log(findSubstring('hello there, he is my friend heho', 'he'));

