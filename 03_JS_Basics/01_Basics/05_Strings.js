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
console.log(myString2.indexOf(e)); // Output: 1



