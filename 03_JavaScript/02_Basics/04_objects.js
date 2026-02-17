// Objects as sinletones
// In JavaScript, objects can be used as singletons, which means that they can be created and used as a single
// instance throughout the application. A singleton is a design pattern that restricts the instantiation 
// of a class to a single instance. This can be useful when you want to ensure that there is only one instance 
// of a particular object.

// Creating a singleton object

const tinderUser = new Object(); // Creating an empty object using the Object constructor

tinderUser.name = "Sammy"; // Adding properties to the tinderUser object
tinderUser.age = 30;
tinderUser.isActive = true;

console.log(tinderUser); // Output: { name: 'Sammy', age: 30, isActive: true }

// The tinderUser object is a singleton because it is created as a single instance and can be accessed
// and modified throughout the application. 
// We can add properties to the tinderUser object, modify existing properties, and access its values as needed.

const regularUser = {
    name: "Regular User",
    'Full Name': {
        userFullName:{
            firstName: "Regular",
            lastName: "User"
        }
    } ,
    age: 28,
    isActive: false
};
console.log(regularUser["Full Name"]);
console.log(regularUser["Full Name"].userFullName.firstName);

const obj1 = {1: "one", 2: "two"};
const obj2 = {3: "three", 4: "four"};
const obj3 = {4: "four", 5: "five"};

const mergedObj = {obj1, obj2, obj3}; // Merging objects using object literal syntax
console.log(mergedObj); // Output: { obj1: { '1': 'one', '2': 'two' }, obj2: { '3': 'three', '4': 'four' }, obj3: { '4': 'four', '5': 'five' } }
// In this example, we have three objects (obj1, obj2, and obj3) with some overlapping keys.

const mergedObjassign = Object.assign({}, obj1, obj2, obj3); // Merging objects using Object.assign()
console.log(mergedObjassign); // Output: { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five' }
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more
// source objects to a target object.

const mergedObjSpread = {...obj1, ...obj2, ...obj3}; // Merging objects using the spread operator
console.log(mergedObjSpread); // Output: { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five' }
// The spread operator (...) is a more concise and modern way to merge objects.