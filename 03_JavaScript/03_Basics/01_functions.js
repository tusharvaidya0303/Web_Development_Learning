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

