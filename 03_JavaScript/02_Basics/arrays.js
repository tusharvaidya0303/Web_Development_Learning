//Arrays are used to store multiple values in a single variable. They are a special type of object that can 
//hold a collection of items. In JavaScript, arrays are created using square brackets [] and can contain elements
//of any data type.

//Creating an array

let arr1 = [1, 2, 3, 4, 5]; // An array of numbers
let arr2 = ['Hello', 'World']; // An array of strings
let arr3 = [1, 'Hello', true, null]; // An array with mixed data types

//Accessing array elements
console.log(arr1[0]); // Output: 1
console.log(arr2[1]); // Output: World
console.log(arr3[2]); // Output: true

//Alternat method to create an array
let arr4 = new Array(1, 2, 3, 4, 5); // An array of numbers
console.log(arr4); // Output: [1, 2, 3, 4, 5]

//Array properties and methods
arr4.push(6); // Adds an element to the end of the array
console.log(arr4); // Output: [1, 2, 3, 4, 5, 6]

arr4.pop(); // Removes the last element from the array
console.log(arr4); // Output: [1, 2, 3, 4, 5]

arr4.unshift(0); // Adds an element to the beginning of the array
console.log(arr4); // Output: [0, 1, 2, 3, 4, 5]   

arr4.shift(); // Removes the first element from the array
console.log(arr4); // Output: [1, 2, 3, 4, 5]

console.log(arr4.length); // Output: 5 // Returns the number of elements in the array
console.log(arr4.indexOf(3)); // Output: 2 // Returns the index of the first occurrence of the specified element, or -1 if it is not found
console.log(arr4.includes(0));// Output: false // Determines whether an array includes a certain value among its entries, returning true or false as appropriate


const newArr = arr4.join(', '); // Joins all elements of an array into a string, separated by the specified separator
console.log(newArr); // Output: "1, 2, 3, 4, 5"
console.log(typeof(arr4)); // Output: object // Arrays are a type of object in JavaScript
console.log(typeof(newArr)); // Output: string // The result of join() is a string

// Difference between slice() and splice()
// slice() returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

console.log("A",arr4);

const slicedArr = arr4.slice(1, 4); // Creates a new array containing elements from index 1 to 3 (4 is not included)
console.log(arr4); // Output: [1, 2, 3, 4, 5] // Original array remains unchanged
console.log("B",slicedArr);// Output: [2, 3, 4] // New array with the sliced elements

const splicedArr = arr4.splice(1, 3); // Removes 3 elements starting from index 1 and returns the removed elements as a new array
console.log(arr4); // Output: [1, 5] // Original array is modified, elements at index 1, 2, and 3 are removed
console.log("C",splicedArr); // Output: [2, 3, 4] // New array with the spliced elements
