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

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//Inserting new data into the table
let query = "INSERT INTO users (Id, username, email, password) VALUES ?"; // for multiple data insertion

let data = [];

for (let i = 0; i <= 100; i++) {
  data.push(getRandomUser());
}

try {
  connection.query(query, [data], (error, results) => {
    if (error) throw error;
    console.log(results);
  });
} catch (error) {
  console.log("Error occurred:", error);
}

connection.end();
