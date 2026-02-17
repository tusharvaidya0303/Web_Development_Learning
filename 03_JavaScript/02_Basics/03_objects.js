//objects are collection of key value pairs. It is a non-primitive data type in JavaScript.
//Objects are used to store and organize data in a structured way. They can represent real-world entities,
//such as a person, a car, or a book, by encapsulating their properties and behaviors.

//Creating an object literal

let symbol = Symbol("id"); // Creating a unique symbol

const User = {
    name: "Tushar",
    'Full Name': "Tushar Vaidya", // Property name with space, must be accessed using bracket notation
    age: 25,
    email: "tushar@example.com",
    isAdmin: true,
    [symbol]: "unique_id"
};

//Accessing object properties
console.log(User.name); // Output: Tushar
console.log(User['age']); // Output: 25
console.log(User['Full Name']); // Output: Tushar Vaidya

console.log(User[symbol]); // Output: unique_id
// We can access object properties using dot notation (User.name) or bracket notation (User['age']).
// For symbol properties, we must use bracket notation with the symbol variable (User[symbol]).
console.log(typeof(User[symbol])); // Output: symbol

//Adding and modifying object properties
User.phone = "123-456-7890"; // Adding a new property to the User object
console.log(User.phone); // Output: 123-456-7890

User.age = 26; // Modifying an existing property of the User object
console.log(User);

Object.freeze(User); // Freezing the User object to prevent further modifications
User.name = "New Name"; // Attempting to modify a property of the frozen User object (will not work)
console.log(User.name); // Output: Tushar (the name property remains unchanged due to Object.freeze())