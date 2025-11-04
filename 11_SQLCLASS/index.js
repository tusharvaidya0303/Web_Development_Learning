// CJS
const { faker } = require("@faker-js/faker");
// Get the client
const mysql = require("mysql2");

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Delta_app",
  password: "Tushar@123",
});

//Inserting new data into the table
let query =
  "INSERT INTO users (Id, username, email, password) VALUES (?, ?, ?, ?) ";
let user = ["123", "123_newuser", "abc@gmail.com", "abc"];

try {
  connection.query(query, user, (error, results) => {
    if (error) throw error;
    console.log(results);
  });
} catch (error) {
  console.log("Error occurred:", error);
}

connection.end();

let getRandomUser = () => {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
