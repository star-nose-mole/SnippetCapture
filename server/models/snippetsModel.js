const { Pool } = require('pg');

const PG_URI = 'postgres://qphtkkrz:I8mpdB1VWvvbGbGUp4QRnv_aSpXoCy0c@batyr.db.elephantsql.com/qphtkkrz';

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
