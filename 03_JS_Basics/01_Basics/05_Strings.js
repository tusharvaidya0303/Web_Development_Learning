let myString = "A";
// Strings are immutable, which means that you cannot change a string after it has been created.
//  However, you can create a new string by concatenating two or more strings together.
// Concatenationis the process of combining two or more strings together to create a new string.
// You can use the + operator to concatenate strings in JavaScript.
 let firstName = "John";
 let lastName = "Doe";
 let fullName = firstName + " " + lastName; //Output: John Doe // 
 let age = 22; 

 // You can also use template literals (introduced in ES6) to concatenate strings in a more readable way.
console.log(`Name is ${firstName} ${lastName}, and age is ${age}`);// Output: Name is John Doe, and age is 22

// You can also use the String.concat() method to concatenate strings.
let fullName2 = firstName.concat(" ", lastName); // Output: John Doe
console.log(fullName2);

//another way to create strings is by using the String constructor.
let myString2 = new String("Hello, World!");

console.log(myString2[2]); // Output: l
console.log(myString2.length); // Output: 13
console.log(myString2.charAt(0)); // Output: H
console.log(myString2.indexOf("e")); // Output: 1
console.log(myString2.toUpperCase()); // Output: HELLO, WORLD!
console.log(myString2.toLowerCase()); // Output: hello, world!
console.log(myString2.__proto__);// Output: String {length: 0, constructor: ƒ, charAt: ƒ, charCodeAt: ƒ, concat: ƒ, …}

const newString = myString2.substring(0, 5); // Output: Hello
console.log(newString);

const newString2 = myString2.slice(0, 5); // Output: Hello
console.log(newString2);
const newString3 = myString2.slice(-6, myString2.length); // Output: World! 
console.log(newString3);
//if a negative index is used, it counts from the end of the string. So,
// -6 means 6 characters from the end of the string, which is the start of "World!".

const newString4 = "    hello     ";
console.log(newString4);           // Output: "    hello     "
console.log(newString4.trim()); // Output: hello
// The trim() method removes whitespace from both ends of a string. 
// It does not affect the original string, but returns a new string with the whitespace removed.

const url = "https://www.tushar%20vaidya.com";
console.log(url.replace("%20", "-")); // Output: https://www.tushar-vaidya.com
// The replace() method searches a string for a specified value,
// and returns a new string where the specified values are replaced.
console.log(url.includes("tushar")); // Output: true
console.log(url.includes("something")); // Output: false
// The includes() method determines whether a string contains a specified substring, and returns true or false as appropriate.

const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.split(" ")); // Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
// The split() method divides a String into an ordered list of substrings,
// puts these substrings into an array, and returns the array.


