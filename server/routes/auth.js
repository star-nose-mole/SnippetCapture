const express = require("express");
const fileController = require("../controllers/cookieController");
const fileController = require("../controllers/sessionController");
const fileController = require("../controllers/fileController");

const authRouter = express.Router();

// CHANGE NAME OF OTHER ROUTER

authRouter.post(
  "/", // ASK BE WHAT IS FETCH ENDPOINT //signup
  userController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => res.status(200).send(res.locals.isLoggedIn)
);

authRouter.post(
  "/", // login
  userController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => res.status(200).send(res.locals.isLoggedIn)
);

authRouter.get("/", sessionController.isLoggedIn, (req, res) =>
  res.status(200).redirect("/")
);

module.exports = authRouter;

