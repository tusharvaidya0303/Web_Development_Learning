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

