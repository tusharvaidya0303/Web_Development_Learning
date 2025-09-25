url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getfact();
  console.log(fact);
  let p = document.getElementById("result");
  p.innerText = fact;
});

async function getfact() {
  try {
    let response = await axios.get(url);
    return response.data.fact;
  } catch (error) {
    return "Error fetching data: " + error;
  }
}


