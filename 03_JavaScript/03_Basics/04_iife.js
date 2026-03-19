//Named IIFE
( function one () {
    console.log(`DB CONNECTED`)
})();
// use semicolon use next iffe function
//no named IIFE use arrow function
( (name) => {
    console.log(`DB CONNECTED ${name}`)
})("Tushar")