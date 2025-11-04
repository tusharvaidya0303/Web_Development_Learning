// CJS
const { faker } = require("@faker-js/faker");
// Get the client
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "/views"));

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
  let q="SELECT count(*) FROM users";
  try {
  connection.query(q, (error, results) => {
    if (error) throw error;
    let count = results[0]['count(*)']; // Accessing the count value
    res.render("home.ejs", { count });
  });
} catch (error) {
  console.log("Error occurred:", error);
  res.send("An error occurred in DB");
}
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});



// //Inserting new data into the table
// let query = "INSERT INTO users (Id, username, email, password) VALUES ?"; // for multiple data insertion
// let data = [];
// for (let i = 0; i <= 100; i++) {
//   data.push(getRandomUser());
// }

// try {
//   connection.query(query, [data], (error, results) => {
//     if (error) throw error;
//     console.log(results);
//   });
// } catch (error) {
//   console.log("Error occurred:", error);
// }
// connection.end(); // close the database connection
