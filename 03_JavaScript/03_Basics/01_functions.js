// Function Declaration
function name() {
    console.log("Tushar");
}
name(); // Output: Tushar

function sum(number1,number2) {
    // const result = number1 + number2;
    // return result;
    return number1 + number2;
}
console.log(sum(10, 5)); // Output: 15
console.log(sum(10, "5")); // Output: 105
console.log(sum(10, "")); // Output: 105
// In JavaScript, functions are first-class citizens, which means they can be treated like any other value.
// They can be assigned to variables, passed as arguments to other functions, and returned from functions.
// Functions can also be defined using function expressions or arrow functions, providing flexibility in how they are created and used in JavaScript.

function loginUserMessage(username) {
    if(!username) {        // Check if the username is falsy (undefined, null, empty string, etc.)
        return "Please provide a username";
    }
    return `${username} just logged in`;
}
//console.log(loginUserMessage("Tushar")); // Output: Tushar just logged in
//console.log(loginUserMessage("")); // Output:  just logged in
console.log(loginUserMessage()); // Output: Please provide a username

const user = {
    name: "Tushar",
    age: 25
}

function handleObject(anyObject) {
    console.log(`User: ${anyObject.name}, Age: ${anyObject.age}`);
}
handleObject(user); // Output: User: Tushar, Age: 25
// In this example, we have a function called handleObject that takes an object as an argument and logs it to the console. 
// We create an object called user with properties name and age, and then we pass this object
// to the handleObject function, which outputs the object to the console. 
// This demonstrates how we can work with objects in JavaScript and pass them as arguments to functions.

handleObject({
    name: "Tushar",
    age: 25
}); // Output: User: Tushar, Age: 25
// We can also directly pass an object literal to the handleObject function without creating a separate variable for it. 
// This allows us to quickly create and use objects on the fly when calling functions.

const arr = [1, 2, 3, 4, 5];
function handleArray(anyArray) {
    console.log(`Array: ${anyArray}`);
    return anyArray[1]; // Accessing the second element of the array (index 1)
}
handleArray(arr); // Output: Array: 1,2,3,4,5
handleArray([10, 20, 30]); // Output: Array: 10,20,30
// Similar to objects, we can also pass arrays as arguments to functions. 
// In this example, we have a function called handleArray that takes an array as an argument and logs it to the console. 
// We create an array called arr and pass it to the handleArray function, which outputs the array to the console. 
// We can also directly pass an array literal to the handleArray function without creating a separate variable for it.

function CalculateCartPrice(itm1, itm2, ...otherItems) {
    return otherItems;
}
console.log(CalculateCartPrice(100, 200)); // Output: []
console.log(CalculateCartPrice(100, 200, 300, 400)); // Output: [300, 400]
// In this example, we have a function called CalculateCartPrice that takes two required parameters (itm1 and itm2) and a rest parameter (...otherItems). 
// The rest parameter allows us to pass an arbitrary number of additional arguments to the function, which are collected into an array. 
// When we call the function with only two arguments, the otherItems array is empty. 
// When we call the function with four arguments, the otherItems array contains the additional arguments (300 and 400).