// define a function that takes two strings. takes larger string and the pattern we're looking for

// naive quadratic time solution
var findSubstring = (string, substring) => {
  var counter = 0;

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < substring.length; j++) {
      // i +j => 0 + 0 = 0checks the first char at the longer string and the substring
      // i + j => 0 + 1 = 0 checks the second char at the longer string and the substring
      // i +j => 0 + 2 = 0 checks the third char at the longer string and the substring
      // so on
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

console.log(findSubstring('hello there, he is my friend heho', 'he'));
console.log(findSubstring('lorie loled', 'lol'));

