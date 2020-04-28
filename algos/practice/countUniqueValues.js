// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted

// Example:
// countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); 7
// countUniqueValues([]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]); //4

// count each value ONCE
// if there are duplicates, ignore them

// i: array of integers
// o: integer
// c: linear time complexity
// e:

// approach:
// create two variables to act as pointers
// set the first pointer to 0 and the second pointer to the first pointer + 1
// while the first pointer is less than the length of the input array
// if the value at the first pointer and the second pointer are the same
// remove the value at the second pointer
// after finishing the iteration
// return the number of integers left in the array


