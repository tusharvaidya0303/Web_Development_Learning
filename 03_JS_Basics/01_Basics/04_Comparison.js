console.log(3 > 2); // true
console.log(3 < 2); // false
console.log(3 >= 2); // true
console.log(3 <= 2); // false
console.log(3 == 2); // false
console.log(3 != 2); // true

// ==  → loose equality (does type conversion)
// === → strict equality (no type conversion)
// Special rule:
// null == undefined → true
// null does NOT equal 0 with ==

// Number and string
console.log(3 == "3");   // true  (string "3" is converted to number 3)
console.log(3 === "3");  // false (different types: number vs string ,=== does not do type conversion)

// Number and boolean
console.log(0 == false);  // true  (false is converted to 0)
console.log(0 === false); // false (different types: number vs boolean, === does not do type conversion)

// null comparisons
console.log(0 == null);   // false (null only equals undefined with ==)
console.log(0 >= null);   // true  (null is converted to 0 in numeric comparison)

// undefined comparisons
console.log(0 == undefined);   // false (undefined only equals null with ==)
console.log(0 >= undefined);   // false (undefined becomes NaN → comparison is false)

// null and undefined
console.log(null == undefined);  // true  (special rule in JS)
console.log(null === undefined); // false (different types, null vs undefined, === does not do type conversion)

// NaN comparisons
console.log(NaN == NaN);   // false (NaN is not equal to anything, even itself)
console.log(NaN === NaN);  // false (same reason)

// To check if a value is NaN, we can use the Number.isNaN() method
console.log(typeof(undefined)); // undefined
console.log(typeof(null)); // object (this is a quirk in JavaScript, null is of type object)
console.log(typeof(NaN));// number (NaN is considered a number in JavaScript)
console.log(Number.isNaN(NaN)); // true

// Summary:
// - Use === for most comparisons to avoid unexpected type coercion.
// - Be cautious when comparing null and undefined, as they have special rules.
// - NaN is not equal to anything, including itself, so use Number.isNaN() to check for it.