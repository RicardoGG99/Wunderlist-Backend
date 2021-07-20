const { Pool } = require("pg");
require("dotenv").config({ path: "../../../.env" });

const db = new Pool({
  host: "ec2-34-193-112-164.compute-1.amazonaws.com",
  database: "d1vbj3tecjalio",
  user: "gjkgyzewiagehl",
  port: 5432,
  password: "d40f8b8b874d96343611f97f33a8af19ac07450dcfbbd997ac3d94ff8842ddc8",
  max: 10,
  min: 1,
});

module.exports = db;
