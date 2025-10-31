// CJS
const { faker } = require("@faker-js/faker");
// Get the client
const mysql = require("mysql2");

// Create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  password: "Tushar@123",
});

let getRandomUser = () => {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
console.log(getRandomUser());
