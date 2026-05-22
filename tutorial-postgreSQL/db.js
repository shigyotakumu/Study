const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "users",
  password: "0730",
  port: 5432,
});

module.exports = pool;