// const express = require("express");
// const userController = require("../controllers/userController");
// const cookieController = require("../controllers/cookieController");
// const sessionController = require("../controllers/sessionController");

// const authRouter = express.Router();

// // CHANGE NAME OF OTHER ROUTER

// authRouter.post(
//   "/signup/",
//   userController.createUser,
//   sessionController.startSession,
//   cookieController.setSSIDCookie,
//   (req, res) => res.status(200).send(res.locals.isLoggedIn)
// );

// authRouter.post(
//   "/login",
//   // userController.verifyUser,
//   sessionController.startSession,
//   cookieController.setSSIDCookie,
//   (req, res) => res.status(200).send(res.locals.isLoggedIn)
// );

// // authRouter.get("/", sessionController.isLoggedIn, (req, res) =>
// //   res.status(200).redirect("/")
// // );

// module.exports = authRouter;
