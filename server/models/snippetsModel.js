const { Pool } = require('pg');

const PG_URI = 'postgres://zfvmtdje:xDdlC4x_d2EMsfcC6B7Tq0WeEAvN2lmp@batyr.db.elephantsql.com/zfvmtdje';

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
