// Qs1.Write a JavaScript program to get the first n elements of an array.
// [n can be any positive number]. Forexample: for array[7,9,0,-2] and n=3 Print,[7,9,0]
// let arr = [7,9,0,-2]
// let n=3;
// let ans = arr.slice(0,n)
// console.log(ans);

// Qs2.Write a JavaScript program to get the last n elements of an array.[n can be any positive number].
// For example:for array [7,9,0,-2] and n=3 Print,[9,0,-2]
// let arr = [7,9,0,-2]
// let n=3;
// let ans = arr.slice(arr.length-n)
// console.log(ans);

// Qs3.Write a JavaScript program to check whether a string is blank or not.
// let str = prompt("Enter a string");
// if(str.length == 0){
//     console.log("String is empty");
// }else{
//     console.log("String is not empty");
// }

// Qs4.Write a JavaScript program to test whether the character at the given (character) index is lowercase.
// let str = "HellOWorld";
// let idx = 1;
// if(str[idx] == str[idx].toLowerCase()){
//     console.log("Character is lowercase")
// }else{
//     console.log("Character is not lowercase")
// }

// Qs5.Write a JavaScript program to strip leading and trailing spaces from a string.
// let str = prompt("please enter a string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces =${str.trim()}`);

// Qs6.Write a JavaScript program to check if an element exists in an array or not.
let arr =[2,3,4,5,6,7];
let key = 4;
if(arr.indexOf(key) != -1){
    console.log("Key is peresnt in array")
}else{
    console.log("Key is not present in array")
}
