// CJS
const { faker } = require("@faker-js/faker");
// Get the client
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Delta_app",
  password: "Tushar@123",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM users";
  try {
    connection.query(q, (error, results) => {
      if (error) throw error;
      let count = results[0]["count(*)"]; // Accessing the count value
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log("Error occurred:", error);
    res.send("An error occurred in DB");
  }
});

//Show Routes
app.get("/users", (req, res) => {
  let q = `SELECT * FROM users`;
  try {
    connection.query(q, (error, users) => {
      if (error) throw error;
      res.render("showusers.ejs", { users });
    });
  } catch (error) {
    console.log("Error occurred:", error);
    res.send("An error occurred in DB");
  }
});

//Edit Routes
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM users WHERE id = '${id}'`;
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (error) {
    console.log("Error occurred:", error);
    res.send("An error occurred in DB");
  }
});
//Update Routes in database
app.patch("/user/:id", (req, res) => {
  res.send("Updated");
});
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
