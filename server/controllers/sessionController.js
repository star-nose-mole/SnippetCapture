const db = require("../models/snippetsModel");

const sessionController = {};

/**
 * startSession - create and save a new Session into the database.
 */


sessionController.startSession = async (req, res, next) => {
  try {
    const cookieId = res.locals.userId;
    const newExp = Date.now() + 604800;
    // console.log(`startSession -- newExp: ${newExp}`)
    const newSessionQuery = {
      text: 'INSERT INTO sessions(cookie_id, exp) VALUES ($1, $2)',
      values: [cookieId, newExp]
    }
    await db.query(newSessionQuery);
    return next();
  } catch (err) {
    return next({
      log: "Error in sessionController.startSession",
      status: 500,
      message: {
        err: "Error 500 - Internal Server Error: Check server logs for more details",
      },
    });
  }
};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = async (req, res, next) => {
  try {
    res.locals.isLoggedIn = false;
    if (res.cookie.ssid) {
      const cookieId = req.cookie.ssid;

      const dateNow = Date.now();
      const currSessionQuery = {
        text: 'SELECT cookie_id FROM sessions WHERE cookie_id = $1 AND exp < $2;',
        values: [cookieId, dateNow]    
      } 
      const currSession = await db.query(currSessionQuery);
      if (currSession.rows.length) {   
        res.locals.isLoggedIn = true;
      }
    }
  
    return next();
  } catch (err) {
    return next({
      log: "Error in sessionController.isLoggedIn",
      status: 500,
      message: {
        err: "Error 500 - Internal Server Error: Check server logs for more details",
      },
    });
  }
};

module.exports = sessionController;
