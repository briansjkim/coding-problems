// practice hash function for strings
// function hashStrings(key, arrayLen) {
//   let total = 0;
//   for (var char of key) {
//     let val = char.charCodeAt(0) - 96;
//     total = (total + val) % arrayLen;
//   }
//   return total;
// }
// // only hashes strings
// // not constant time - linear in key length
// // could be a little more random


// // not great but works for this example of a hash table
// // still only hashes strings
// function hash(key, arrayLen) {
//   let total = 0;
//   let WEIRD_PRIME = 31;
//   // primes are used to reduce collisions
//   // spreading data out for faster retrieval
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//       let char = key[i];
//       let value = char.charCodeAt(0) - 96;
//       total = (total * WEIRD_PRIME + value) % arrayLen;
//   }
//   return total;
// }

class HashTable {
  // size = how large the hash should be
  // default is 53 because we want it to be prime
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let val = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + val) % this.keyMap.length;
    }
    return total;
  }
}
