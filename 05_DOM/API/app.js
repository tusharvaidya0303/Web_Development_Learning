url = "https://catfact.ninja/fact";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
