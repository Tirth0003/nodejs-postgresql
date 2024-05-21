const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Tirth",
  database: "customer",
});

module.exports = client;
