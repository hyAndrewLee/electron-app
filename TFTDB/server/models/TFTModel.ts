const { Pool } = require('pg');
const dotenv = require('dotenv');

const PG_URI = process.env.URI;

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text: string, params: string, callback: any) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}; 