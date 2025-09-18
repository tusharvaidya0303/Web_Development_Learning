let btn = document.querySelector("button");
let red = false;
btn.addEventListener("click", function () {
  if (red) {
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  } else {
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
  }
  red = !red;
});

let btn2 = document.querySelector("#btn");
const color = ["red", "green", "blue", "violet"];
let index = 0;

btn2.addEventListener("click", () => {
  btn2.style.backgroundColor = color[index];
  btn2.style.color = "white";

  index = (index + 1) % color.length;
});
