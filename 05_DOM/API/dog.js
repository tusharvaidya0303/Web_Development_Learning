let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let link = await getDogImage();

  let img = document.querySelector("img");
  img.src = link;
});

async function getDogImage() {
  try {
    let response = await axios.get(url);
    return response.data.message;
  } catch (error) {
    return "Error fetching data: " + error;
  }
}
