let score = "33abc";
console.log(typeof (score)); // string

let valueInNumber = Number(score);
console.log(valueInNumber); // NaN (Not a Number)
console.log(typeof valueInNumber); // number

// when we want to convert a string to number, we can use Number() function
// 33 => 33
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0  


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true
console.log(typeof booleanIsLoggedIn); // boolean

// when we want to convert a number to string, we can use toString() method
// 1 => true
// 0 => false
// "" => false
// " " => true, "abc" => true

let someNumber = 55;
let stringSomeNumber = String(someNumber);
// let stringSomeNumber = someNumber.toString();
console.log(stringSomeNumber); // "55"
console.log(typeof stringSomeNumber); // string

// when we want to convert a number to string, we can use toString() method.