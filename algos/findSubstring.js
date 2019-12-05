// define a function that takes two strings. takes larger string and the pattern we're looking for

// naive quadratic time solution
var findSubstring = (string, substring) => {
  var counter = 0;

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < substring.length; j++) {
      if (string[i + j] !== substring[j]) {
        // if they don't match
        break;
      }
      // if the index reaches the end of the substring
      // that means that all of the characters match
      if (j === substring.length - 1) {
        counter++;
      }
    }
  }
  return counter;
}

// console.log(findSubstring('hello there, he is my friend heho', 'he'));
// console.log(findSubstring('lorie loled', 'lol'));

