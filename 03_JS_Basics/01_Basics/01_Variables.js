//difference between var, let and const

// var is function scoped, while let and const are block scoped
// var can be redeclared and updated, while let can be updated but not redeclared, and const cannot be updated or redeclared
// var is hoisted to the top of its scope and initialized with undefined, while let and const are hoisted but not initialized

/*Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope
 during the compilation phase. This means that you can use variables and functions before they are declared in the code.
 However, the behavior differs between var, let, and const: */

//-----------------------------------------------------------------------------------------------------------------------------
// Example of var update and scope
function varExample() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // 20
    }
    console.log(x); // 20
}
varExample();

// Example of var hoisting
function varHoisting() {
    console.log(a); // undefined
    var a = 10;
}varHoisting();

// Example of var redeclaration
function varRedeclaration() {
    var a = 10;
    var a = 20;
    console.log(a); // 20
}
varRedeclaration();

//---------------------------------------------------------------------------------------------------------------------

// Example of let
function letExample() {
    let y = 10;
    if (true) {
        let y = 20;
        console.log(y); // 20
    }
    console.log(y); // 10
}
letExample();

// Example of let hoisting
function letHoisting() {
    // console.log(b); // This will throw an error
    let b = 10;
}letHoisting();

// Example of let redeclaration
function letRedeclaration() {
    let b = 10;
    // let b = 20; // This will throw an error
    console.log(b); // 10
}letRedeclaration();

//---------------------------------------------------------------------------------------------------------------------

// Example of const
function constExample() {
    const z = 10;
    if (true) {
        const z = 20;
        console.log(z); // 20
    }
    console.log(z); // 10
}
constExample();

// Example of const hoisting
function constHoisting() {
    // console.log(c); // This will throw an error
    const c = 10;
}constHoisting();

// Example of const redeclaration  
function constRedeclaration() {
    const c = 10;
    // const c = 20; // This will throw an error
    console.log(c); // 10
}constRedeclaration();

// Example of const with objects
function constObjectExample() {
    const obj = { name: "John", age: 30 };
    obj.name = "Jane"; // This is allowed
    console.log(obj); // { name: "Jane", age: 30 }
    // obj = { name: "Doe", age: 25 }; // This will throw an error
}
constObjectExample();

//---------------------------------------------------------------------------------------------------------------------

// Summary
// var is function scoped, can be redeclared and updated, and is hoisted with undefined.
// let is block scoped, can be updated but not redeclared, and is hoisted but not initialized.
// const is block scoped, cannot be updated or redeclared, and is hoisted but not initialized.