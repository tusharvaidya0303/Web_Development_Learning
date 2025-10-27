const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "Tushar Vaidya",
    content: "This is the content of the first post.",
  },
  {
    username: "Ketan Vishwakarma",
    content: "Hello world!",
  },
  {
    username: "Aman Vishwakarma",
    content: "Learning webdev.",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
