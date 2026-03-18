let a = 10;
var b = 20;
const c = 30;

if (true) {
  let a = 40; // This 'a' is a different variable than the one declared outside the block. It is scoped to this block.
  var b = 50; // This 'b' is the same variable declared outside the block. It is function-scoped, so it is accessible throughout the function.
  const c = 60; // This 'c' is a different variable than the one declared outside the block. It is scoped to this block.
  console.log(a); // Output: 40
  console.log(b); // Output: 50
  console.log(c); // Output: 60
}
console.log(a); // Output: 10
console.log(b); // Output: 50 // The value of 'b' is 50 because 'var' is function-scoped, and the assignment inside the block affects the same variable declared outside the block.
console.log(c); // Output: 30

// In JavaScript, there are three types of variable declarations: var, let, and const.
// The scope of a variable declared with var is function-scoped, which means it is accessible throughout the entire function in which it is declared.
// The scope of a variable declared with let and const is block-scoped, which means it is only accessible within the block (enclosed by curly braces {}) in which it is declared.
// Variables declared with const cannot be reassigned after they are initialized, while variables declared with var and let can be reassigned.

function one() {
    const username = "Tushar"
    function two(){
        const website = " youtube"
        console.log(username+website);
    }
    // two(); // Uncomment to call the inner function and see the output
    console.log(website); // ❌ This will error - 'website' is not accessible here
}

one(); // Output: "Tushar youtube"

if(true){
    const username = "Tushar"
    if(true){
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website); // Uncomment to see the error
}
// Output: "Tushar youtube"

// Variables declared with const are block-scoped, which means they are only accessible within the block (enclosed by curly braces {}) in which they are declared.