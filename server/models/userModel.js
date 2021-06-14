const { Pool } = require("pg");

const PG_URI =
  "postgres://lkoevsww:q8V6TRsIzwbHfYdQ3I8GPGq1Uni_DxTD@batyr.db.elephantsql.com/lkoevsww";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};


/** FOR REFERENCE ONLY */
/** MONGOOSE SCHEMA FOR USER */

/*
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


 * Hint: Why is bcrypt required here?
 
const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// mongoose middleware that runs before a document saves to the database
// no arrow functions here b/c 'this'
userSchema.pre("save", function (next) {
  // 'this' refers to the document about to be saved
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err)
      return next({
        log: "Error in model middleware",
        status: 500,
        message: {
          err: "Error 500 - Internal Server Error: There was an error in",
        },
      });
    // reassign password to be saved as its hashed version
    this.password = hash;
    return next();
  });
});

module.exports = mongoose.model("User", userSchema);
*/
