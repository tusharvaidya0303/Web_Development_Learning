let button = document.createElement("button");
let input = document.createElement("input");

button.innerText="Click me !!"

document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.setAttribute("id","btn");
input.setAttribute("placeholder","Username")

let btn = document.querySelector("#btn")
btn.classList.add("btnStyle")

let h1 = document.createElement("h1");
h1.innerHTML="<u>DOM Practice</u>"

document.querySelector("body").prepend(h1);

let p = document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice"

document.querySelector("body").append(p);


