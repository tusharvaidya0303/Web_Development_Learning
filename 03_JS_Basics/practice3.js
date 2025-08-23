// Qs1.Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example: if arr=[1,2,3,4,5,6,2,3] & num = 2 Result should be arr =[1,3,4,5,6,3]
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 2) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);


// Qs2.Write a JS program to find the no of digits in a number. Example: if number = 287152, count=6.
// let num = 287152;
// let count = 0;
// while(num>0){
//     count++;
//     num = Math.floor(num/10);
// }
// console.log(count);

// Qs3.Write a JS program to find the sum of digits in a number. Example: if number=287152, sum=25.
// let num = 287153;
// let sum =0;
// while(num>0){
//     let digit = num%10;
//     sum += digit;
//     num = Math.floor(num/10);
// }
// console.log(`The Sum is ${sum}`)

// Qs4.Print the factorial of a numbern.
// let num = 5;
// let factorial = 1;

// for(i=1;i<=num;i++){
//     factorial *= i;
// }
// console.log(`Factorial of ${num} is ${factorial}`)

// Qs5. Find the largest number in an array with only positive numbers.
let arr = [2,5,10,4,2,7,1,9];
let largest = arr[0];

for(let i=0; i<=arr.length;i++){
    if(largest<arr[i]){
        largest=arr[i];
    }
}
console.log(largest);

