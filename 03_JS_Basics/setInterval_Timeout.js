// printing hello world 5 times using set interval of 2 sec and stoping it.
let id = setInterval(() => {
    console.log("hello World");
},2000)

setTimeout(() => {
    clearInterval(id);
    console.log("Clear interval ran");
    
},12000)