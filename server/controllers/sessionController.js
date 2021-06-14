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
    const cookieId = req.cookies.ssid;
    res.locals.isLoggedIn = false;
    // logic to determine WHERE condition forexpiration date
    const dateNow = Date.now();
    const currSessionQuery = `
      SELECT session.cookie_id, session.exp
      FROM session
      INNER JOIN users
      WHERE users._id = session.cookie_id
      WHERE exp < ${dateNow};
    `;
    const currSession = await db.query(currSessionQuery); // {params?},session?);

    if (currSession.rows.length) {   
      res.locals.isLoggedIn = true;
    }
    res.send(res.locals.isLoggedIn);
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
