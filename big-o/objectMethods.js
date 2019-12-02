// time complexity for common object methods
// objects are unordered data structures
var obj = {
  firstName: 'Brian',
  lastName: 'Kim',
}

// INSERTION: O(1) / Constant Time
obj['age'] = 23;
console.log(obj); // { firstName: 'Brian', lastName: 'Kim', age: 23 }

// REMOVAL: O(1) / Constant Time
delete obj['age'];
console.log(obj); // {firstName: 'Brian', lastName: 'Kim'}

// ACCESS: O(1) / Constant Time
console.log(obj.firstName); // 'Brian'

// SEARCHING: O(n) / Linear Time
// this doesn't mean looking for a key because that's access
  // this means checking to see if a given piece of info is a value somewhere
for (var key in obj) {
  if (obj[key] === true) {
    console.log(key);
  }
  console.log(false);
}

// Object.keys() is O(n) / Linear time
// has to go through the whole obj and put each key into an array and then return it
console.log(Object.keys(obj));

// Object.values() is O(n) / Linear time
// same reason as Object.keys()
console.log(Object.values(obj));

// Object.entries() is O(n) / Linear time
// gets each key-value pairs and puts them into an obj
// same reason as Object.keys()
console.log(Object.entries(obj));

// Object.hasOwnProperty() is O(1) / Constant time
// It's constant because it's accessing the value of the object's property
console.log(obj.hasOwnProperty('firstName')); // true
