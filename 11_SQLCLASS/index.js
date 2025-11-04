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
  "INSERT INTO users (Id, username, email, password) VALUES ?"; // for multiple data insertion
let users = [
  ["123B", "123_newuserB", "abc@gmail.com", "abcB"],
  ["123C", "123_newuserC", "abc@gmail.com", "abcC"],
];

try {
  connection.query(query, users, (error, results) => {
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
