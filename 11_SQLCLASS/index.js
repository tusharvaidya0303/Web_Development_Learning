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

let query = "SHOW TABLES";

try {
  connection.query(query, (error, results) => {
    if (error) throw error;
    console.log(results);
    console.log(results.length);
    console.log(results[0]);
    console.log(results[1]);
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
