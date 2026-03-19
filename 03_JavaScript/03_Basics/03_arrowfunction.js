const user = {
    name: "Tushar",
    age: 25,
    welcomeMessage : function (){
        console.log(`${this.name} just logged in`);  //this keyword refers to the current object.
        console.log(this);  //this keyword refers to the current object.
        
    }
}

// user.welcomeMessage();
// user.name="Vaidya";
// user.welcomeMessage();
// console.log(this);    //this keyword refers to the global object. it willbe empty object.

function one () {
    let username = "Tushar"
    console.log(this.username);  //Undefined because this keyword refers to the global object and global object has no username property
    console.log(username); //Tushar username is accessible here
}
// one();

//Arrow function
const two = () => {
    let username = "Tushar"
    console.log(this.username);  //Undefined because this keyword refers to the global object and global object has no username property
    console.log(username); //Tushar username is accessible here
}
// two();

const addTwo = (num1, num2) => {
    return num1 + num2;               //explicit return
}
// console.log(addTwo(2,3)); //output : 5

// const addThree = (num1, num2) => num1 + num2;  //both are same
const addThree = (num1, num2) => (num1 + num2);    //implicit return
console.log(addThree(2,3));  //output : 5

const obj =() => ({name:"Tushar", age:25})         //for object use curly braces inside parenthesis
console.log(obj());
