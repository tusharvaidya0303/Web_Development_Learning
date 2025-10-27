const { randomUUID } = require("crypto");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

const { v4: uuidv4 } = require("uuid");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "Tushar Vaidya",
    content: "This is the content of the first post.",
  },
  {
    id: uuidv4(),
    username: "Ketan Vishwakarma",
    content: "Hello world!",
  },
  {
    id: uuidv4(),
    username: "Aman Vishwakarma",
    content: "Learning webdev.",
  },
];

app.get("/posts", (req, res) => {
  // /posts route to get all posts
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  // /posts/new route to create a new post

  res.render("new.ejs");
});
app.post("/posts", (req, res) => {
  // /posts route to handle new post submission
  const { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  // /posts/:id route to get a specific post by ID
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log(post);

  if (post) {
    res.render("show.ejs", { post });
  } else {
    res.status(404).send("Post not found");
  }
});

app.patch("/posts/:id", (req, res) => {
  // /posts/:id route to update a specific post by ID
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);

  if (post) {
    post.content = newContent;
    res.redirect(`/posts/${id}`);
  } else {
    res.status(404).send("Post not found");
  }
  res.send("Update post");
});
app.get("/posts/:id/edit", (req, res) => {
  // /posts/:id/edit route to render edit form for a specific post by ID
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);

  if (post) {
    res.render("edit.ejs", { post });
  } else {
    res.status(404).send("Post not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
