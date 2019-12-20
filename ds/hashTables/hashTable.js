// practice hash function for strings
function hashStrings(key, arrayLen) {
  let total = 0;
  for (var char of key) {
    let val = char.charCodeAt(0) - 96;
    total = (total + val) % arrayLen;
  }
  return total;
}
// only hashes strings
// not constant time - linear in key length
// could be a little more random
