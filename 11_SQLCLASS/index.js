// CJS
const { faker } = require("@faker-js/faker");
// Get the client
const mysql = require("mysql2");

// Create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Delta_app",
  password: "Tushar@123",
});
try {
  connection.query("Show tables", (error, results) => {
    if (error) throw error;
    console.log(results);
  });
} catch (error) {
  console.error("Error occurred:", error);
}

let getRandomUser = () => {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
console.log(getRandomUser());
