// const db = require("../models/snippetsModel");

// const sessionController = {};

// /**
//  * startSession - create and save a new Session into the database.
//  */


// sessionController.startSession = (req, res, next) => {
//   try {
//     const cookieId = res.locals.newUser.id; // does sql give the new user an id?
//     const newSessionQuery = `
//       INSERT INTO session-table(cookieID-column-name, exp) 
//       VALUE (cookieId, ${date.now = 30});
//     `;
//     return next();
//   } catch (err) {
//     return next({
//       log: "Error in sessionController.startSession",
//       status: 500,
//       message: {
//         err: "Error 500 - Internal Server Error: Check server logs for more details",
//       },
//     });
//   }
// };

// /**
//  * isLoggedIn - find the appropriate session for this request in the database, then
//  * verify whether or not the session is still valid.
//  */
// sessionController.isLoggedIn = (req, res, next) => {
//   try {
//     const cookieId = req.cookies.ssid;
//     res.locals.isLoggedIn = false;
//     // logic to determine WHERE condition forexpiration date
//     const currSessionQuery = `
//       SELECT
//       FROM public_session
//       WHERE user_id = session_id
//       WHERE
//     `;
//     const currSession = await db.query(currSessionQuery); // {params?},session?);
//     if (currSession) {
//       //logicto see if found cookie is expired
//       //use .rows() to return an array
//       res.locals.isLoggedIn = true;
//     }
//     res.send(res.locals.isLoggedIn);
//     return next();
//   } catch (err) {
//     return next({
//       log: "Error in sessionController.isLoggedIn",
//       status: 500,
//       message: {
//         err: "Error 500 - Internal Server Error: Check server logs for more details",
//       },
//     });
//   }
// };

// module.exports = sessionController;
