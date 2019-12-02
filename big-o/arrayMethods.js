// time complexity for common array methods
// arrays are ordered lists of data
  // the tradeoff for being ordered is that some operations are slower than most of object's methods

var array = ['Brian', 'Kim', 23];

// ACCESS: O(1) / Constant time
// quick because js doesn't need to go through the whole array to find the element
// having the index is like a shortcut
console.log(array[1]); // 'Kim'

// INSERTION: Depends...
  // if inserting to the END, it's constant time
  // if inserting to the BEGINNING, it's linear time
    // this is because the elements now have to be re-ordered to have the correct index
array.push(1); // CONSTANT
array.unshift(2); // LINEAR

// REMOVAL: Depends...
  // if removing from the END, it's constant time
  // if removing from the BEGINNING, it's linear time
    // same reason as insertion
array.pop(1); // CONSTANT
array.shift(2); // LINEAR

// SEARCHING: O(n) / Linear time
// if you wanted to check if a certain element was in the array and didn't have the index
  // you'd have to search through (possibly) the whole array to find it
for (var i = 0; i < array.length; i++) {
  if (array[i] === 23) {
    return i;
  }
}

// Concat() is linear time
// creates a new array with the elements in the object that it's called followed by the order of the second obj
var array2 = ['NYC', 'LA', 'SF', 'Austin'];
var newArr = array.concat(array2);

// Slice() is linear time
// copies the elements of an array which means you have to go through the whole array
var slicedArr = array.slice();

// Sort() is O(n logn)
// larger than O(n) because you have to make comparisons and move things around

// Map, filter, reduce, forEach... is linear time
// have to loop over each element and act on/with each of them