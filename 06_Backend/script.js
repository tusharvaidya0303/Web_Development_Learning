// let x = 10;

// for(let i= 0; i<= x; i++){
//     console.log(`Hello ${i}`);
// }

console.log(process.argv);

let arg = process.argv[2];

for(let i= 2; i<= arg; i++){
    console.log(`Hello ${i}`);
}