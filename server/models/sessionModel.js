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
/** MONGOOSE SCHEMA FOR SESSIONS */

/*
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


 * Check out the `createdAt` field below. This is set up to use Mongo's automatic document
 * expiration service by giving the Mongoose schema the `expires` property.
 * After 30 seconds, the session will automatically be removed from the collection!
 * (actually, Mongo's cleanup service only runs once per minute so the session
 * could last up to 90 seconds before it's deleted, but still pretty cool!)

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now },
});

module.exports = mongoose.model("Session", sessionSchema);
*/
