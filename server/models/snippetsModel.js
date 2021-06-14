const { Pool } = require('pg');

const PG_URI = 'postgres://lkoevsww:q8V6TRsIzwbHfYdQ3I8GPGq1Uni_DxTD@batyr.db.elephantsql.com/lkoevsww';

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
