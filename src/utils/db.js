const { Pool } = require("pg");
require("dotenv").config({ path: "../../../.env" });

const db = new Pool({
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  port: process.env.PG_PORT,
  password: process.env.PG_PASSWORD,
  max: 10,
  min: 1,
});

module.exports = db;
