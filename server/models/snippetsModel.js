const { Pool } = require('pg');

const PG_URI = 'postgres://pvijaeqs:k91l-XU5TR7NNVvuT1Nxy6grJQcMHo0H@batyr.db.elephantsql.com/pvijaeqs';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
