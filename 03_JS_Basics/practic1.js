// Qs1.Create a number variable num with some value.Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
// let num = 100;
// if(num%10 == 0){
//     console.log("Good")
// }else{
//     console.log("Bad")
// }

// Qs2.Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert 
// (by substituting their name & age) :name is age years old. [Use template Literals to print this sentence]
// let Name = prompt("Enter the Name:");
// let Age = prompt("Enter the Age:");
// alert(Name + " is "+Age+" year's old")

// Qs3.Write a switch statement to print the months in a quarter.
// let Quarter = 1;
// switch(Quarter){
//     case 1:
//         console.log("January,Febuarary,March");
//         break;
//     case 2:
//         console.log("April,May,June");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break;
//     default:
//         console.log("Not a Quarter");
// }

// Qs4.A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5.For a given
//  string print if it is golden or not.
// let str="apple";
// if(str[0]=="A" && str[0]=='a' || str.length>=5){
//     console.log("Golden String")
// }else{
//     console.log("Not a Golden String")
// }

// Qs5.Write a program to find the largest of 3 numbers.
// let num1=2;
// let num2=4;
// let num3=6;
// if(num1>num2 && num1>num3){
//     console.log("Greatest num :"+num1);
// }
// else if(num2>num1 && num2>num3){
//     console.log("Greatest num :"+num2);
// }else{
//     console.log("Greatest num :"+num3)
// }
// Qs6(Bonus).Write a program to check if 2 number share the same last digit. Eg: 32 and 47852 have the same last digit i.e 2.
let num1 =32;
let num2 =47852;
if((num1%10)==(num2%10)){
    console.log("number share the same last digit which is ",num1%10);
}else{
    console.log("numbers don't have the same last digit");
}