// Javascript is Dynamically Typed Language
/* We don't need to specify the data type of a variable when we declare it.
 The data type is determined automatically based on the value assigned to the variable.*/

// Javascript is lusely typed, meaning that variables can hold values of any type and can change type at runtime.
/* This flexibility allows for more dynamic and flexible coding styles, but it also requires developers to be mindful of
   type-related issues and to use appropriate type-checking techniques when necessary. */

// JavaScript has several built-in data types, including:
// 1. Primitive Types: string, number, boolean, null, undefined, symbol (ES6+), Bigint (ES2020+)
// 2. Non-primitive Objects types(reference): object (including arrays and functions)
// JavaScript also has a special value called NaN (Not a Number) which is of type number but represents an invalid number.
// primitive datatypes are stored in S

// Example of primitive types

let name = "John"; // string
console.log(typeof(name));// string

let age = 30; // number
console.log(typeof(age)); // number

let isStudent = true; // boolean
console.log(typeof(isStudent)); // boolean

let address = null; // null
console.log(typeof(address)); // object (this is a quirk in JavaScript, null is of type object)
console.log(typeof(null));// object (this is a quirk in JavaScript, null is of type object)

let phoneNumber; // undefined
console.log(typeof(phoneNumber)); // undefined

// Example of non-primitive types (objects)
let person = {
    name: "Tushar",
    age: 22,
    isStudent: false
};
console.log(typeof(person)); // object

// Example of arrays (which are also objects)
let numbers = [1, 2, 3, 4, 5];
console.log(typeof(numbers)); // object

// Example of functions (which are also objects)
const greetFunction = function() {
    console.log("Hello, World!");
}
console.log(typeof(greetFunction)); // function (although functions are technically objects, JavaScript has a special type for them)

// Summary:
// - JavaScript is dynamically typed, meaning variables can hold values of any type and can change type at runtime.
// - JavaScript has several built-in data types, including primitive types (string, number, boolean, null, undefined, symbol, Bigint) and non-primitive object types (objects, arrays, functions).
// - The typeof operator can be used to check the type of a variable or value.