const score = 400;
console.log(score); 

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length); // 3

console.log(balance.toFixed(2)); // output : 100.00 ; used to format a number to a specific number of decimal places.
console.log(balance.toPrecision(3)); // output : 100 ; used to format a number to a specific length.

console.log(balance.valueOf()); // output : 100 ; used to get the primitive value of a Number object.

const num1 = 0.1;
const num2 = 0.2;
const sum = num1 + num2;
console.log(sum); // output : 0.30000000000000004 ; due to floating-point precision issues in JavaScript.
console.log(sum.toFixed(2)); // output : 0.30 ; to mitigate the precision issue by formatting the result to 2 decimal places.

const value = 123456789;
console.log(value.toLocaleString('en-US')); // output : 123,456,789 ; formats the number in a locale-specific way.
console.log(value.toLocaleString('en-IN')); // output : 12,34,56,789 ; formats the number in Indian numbering system.

const num3 = 123.456789;
console.log(num3.toPrecision(2)); // output : 1.2e+2 ; formats the number to 2 significant digits.
console.log(num3.toPrecision(4)); // output : 123.5 ; formats the number to 4 significant digits.

console.log(Number.MAX_VALUE); // output : 1.7976931348623157e+308 ; the largest representable number in JavaScript.
console.log(Number.MIN_VALUE); // output : 5e-324 ; the smallest representable positive number in JavaScript.
//many more methods and properties are available for numbers in JavaScript, such as Math object for mathematical operations,
// parseInt and parseFloat for converting strings to numbers, and more.

//*********************************************** Maths ***********************************************************************/

console.log(Math.PI); // output : 3.141592653589793 ; the value of pi.
console.log(Math.E); // output : 2.718281828459045 ; the value of Euler's number.
console.log(Math.sqrt(16)); // output : 4 ; calculates the square root of a number.
console.log(Math.pow(2, 3)); // output : 8 ; calculates the base to the exponent power(2^3).

console.log(Math.abs(-5)); // output : 5 ; returns the absolute value of a number. from -5 to 5(negative to positive).
console.log(Math.abs(5)); // output : 5 ; returns the absolute value of a number. from 5 to 5(positive to positive).

console.log(Math.round(4.7)); // output : 5 ; rounds a number to the nearest integer.
console.log(Math.round(4.3)); // output : 4 ; rounds a number to the nearest integer.
console.log(Math.ceil(4.3)); // output : 5 ; rounds a number up to the next largest integer.
console.log(Math.floor(4.7)); // output : 4 ; rounds a number down to the largest integer less than or equal to a given number.

console.log(Math.min(2,3,4,5)); // output : 2 ; returns the smallest of zero or more numbers.
console.log(Math.max(2,3,4,5)); // output : 5 ; returns the largest of zero or more numbers.

console.log(Math.random()); // output : a random number between 0 (inclusive) and 1 (exclusive) ;
// generates a random decimal number. 
console.log(Math.random()*10); // output : a random number between 0 (inclusive) and 10 (exclusive) ;

console.log(Math.floor(Math.random()*10)); // output : a random integer between 0 (inclusive) and 10 (exclusive) ;
// generates a random integer by multiplying the random decimal by 10 and then using
//  Math.floor to round it down to the nearest whole number.

console.log(Math.floor(Math.random()*10)+1); // output : a random integer between 1 (inclusive) and 10 (inclusive) ;
// generates a random integer between 1 and 10 by adding 1 to the result of Math.floor(Math.random()*10).

//if the range is from 10 to 20, we can use the following we use min and max values to generate a random number in that range:
const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // output : a random integer between 10 (inclusive) and 20 (inclusive) ;
// generates a random integer between 10 and 20 by calculating the range (max - min + 1) 
// and then adding the minimum value to shift the range to the desired starting point.










