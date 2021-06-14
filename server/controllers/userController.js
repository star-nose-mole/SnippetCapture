// const db = require("../models/snippetsModel");
// const bcrypt = require("bcryptjs");
// // const { WatchIgnorePlugin } = require("webpack");
// // const e = require("express");

// const userController = {};

// userController.createUser = async (req, res, next) => {
//   try {
//     //is there a pre-function method to bcrypt the password?
//     const createQuery = `
//       INSERT INTO public_user (username, password) 
//       VALUE ('username', 'password);
//       `;

//     const newUser = await db.query(createQuery);
 
//     res.locals.user = newUser; // will this newUser have an ID automatically generated
//     return next();
//   } catch (err) {
//     return next({
//       log: "Error in userController.createUser",
//       message: {
//         err: "Error 500 - Internal Server Error: There was a problem creating the user.",
//       },
//     });
//   }
// };

// userController.verifyUser = async (req, res, next) => {
//   try {
//     const { username, password } = req.body;
//     if (!username || !password)
//       return next({
//         log: "Error in userController.verifyUser",
//         status: 400,
//         message: {
//           err: "Error 400 - Bad request: Missing username or password.",
//         },
//       });
//     const isLoggedIn = false;
//     const verifyQuery = `
//       SELECT _id, username, password
//       FROM public-user
//       WHERE username = ${username}
//       `;

//     const newUser = await db.query(verifyQuery);
//     if (newUser) isLoggedIn = true;
//     res.locals.isLoggedIn = isLoggedIn;
//     return next();
//   } catch (err) {
//     return next({
//       log: "Error in userController.verifyUser",
//       message: {
//         err: "Error 500 - Internal Server Error: There was a problem creating the user.",
//       },
//     });
//   }
// };
