const marval_Heros = ["Iron Man", "Thor", "Spider-Man"];
const dc_Heros = ["Superman", "Batman", "flash"];

marval_Heros.push(dc_Heros); // Adds the entire dc_Heros array as a single element to the end of marval_Heros
console.log(marval_Heros); // Output: ["Iron Man", "Thor", "Spider-Man", ["Superman", "Batman", "flash"]]
// The last element of marval_Heros is now an array (dc_Heros), which is why it is displayed as a nested array in the output.

// To add the elements of dc_Heros individually to marval_Heros, we can use the spread operator (...) or the concat() method.

// Using the concat() method
const all_Heros = marval_Heros.concat(dc_Heros);
console.log(all_Heros); // Output: ["Iron Man", "Thor", "Spider-Man", "Superman", "Batman", "flash"]

// Using the spread operator
const all_Heros_Spread = [...marval_Heros, ...dc_Heros];
console.log(all_Heros_Spread); // Output: ["Iron Man", "Thor", "Spider-Man", "Superman", "Batman", "flash"]

//Spread operator is a more concise and modern way to combine arrays, while concat() is an older method that achieves
// the same result. Both methods create a new array that contains the elements of both marval_Heros and dc_Heros 
// without modifying the original arrays. But in spread we can add more arrays or elements in between as well.

const indian_Heros = ["Shaktiman", "Nagraj"];
const all_Heros_Spread_Indian = [...marval_Heros, ...dc_Heros, ...indian_Heros];
console.log(all_Heros_Spread_Indian); // Output: ["Iron Man", "Thor", "Spider-Man", "Superman", "Batman", "flash", "Shaktiman", "Nagraj"]

const anotherarr = [0, 1, 2, 3, 4,[5, 6, 7], 8, 9,[10, 11, 12,[13, 14, 15]]];
console.log(anotherarr); // Output: [0, 1, 2, 3, 4, [5, 6, 7], 8, 9, [10, 11, 12, [13, 14, 15]]]
const flattenedArr = anotherarr.flat(Infinity); // Flattens the array to any depth
console.log(flattenedArr); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
// By passing Infinity as the argument, we ensure that all nested arrays are flattened regardless of their depth.

console.log(Array.isArray("Tushar")); // Output: false 
// The isArray() method checks if the provided value is an array and returns true or false accordingly.

console.log(Array.from("Tushar")); // Output: ["T", "u", "s", "h", "a", "r"]
// The from() method creates a new array instance from an array-like or iterable object. 
// In this case, it converts the string "Tushar" into an array of its individual characters.

console.log(Array.of("Tushar")); // Output: ["Tushar"]
// The of() method creates a new array instance with a variable number of arguments,
// regardless of the number or type of the arguments. 
// In this case, it creates an array with a single element "Tushar".
// If we had passed multiple arguments, it would have created an array with those elements.

let score1 = 200;
let score2 = 300;
let score3 = 400;
console.log(Array.of(score1,score2,score3)); // Output: [200, 300, 400]
// The of() method is useful for creating arrays from a list of arguments, while from() is more versatile and can
//  create arrays from various types of iterable objects.


