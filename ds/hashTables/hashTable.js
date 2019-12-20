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

  set(key, val) {
    // hash the key
    // store the key-value pair in the hash table array via separate chaining
    var idx = this._hash(key);
    // if the idx is empty, create a new array to store the key-value pair
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    // could alert user if there are duplicate keys

    // regardless of whether the idx is empty or not, push the key-value pair in a tuple
    this.keyMap[idx].push([key, value]);
    return this;
  }

  get(key) {
    // hashes the key
    // retrieve the key-value pair in the hash table
      // must check if it matches
    // if key isn't found, return undefined
    var idx = this._hash(key);
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        // keyMap[idx][i] gets all of the key-value pairs at the specific index
        if (this.keyMap[idx][i][0] === key) {
          // we just want the value to be returned
          return this.keyMap[idx][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      // this.keyMap[i] gets us all of the key-value pairs
      if (this.keyMap[i]) {
        // this.keyMap[i][j] gets us each subarray
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // handling duplicate values so that we only return unique values
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}
