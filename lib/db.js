// const { Client } = require('pg');
const { Pool } = require('pg');
require('dotenv').config();

let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };
}

// const client = new Client(dbParams);
const pool = new Pool(dbParams);

// client.connect(() => {
//   console.log('connected to the db');
// });

module.exports = pool;