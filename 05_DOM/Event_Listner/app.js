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
  red =! red
});


