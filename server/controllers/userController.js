const db = require("../models/snippetsModel");
const bcrypt = require("bcryptjs");
// const { WatchIgnorePlugin } = require("webpack");
// const e = require("express");

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    //is there a pre-function method to bcrypt the password?
    // const { username, password } = req.body;
    let username = 'Test12';
    let password = 'Test12';
    const createQuery = {
      text: 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING _id',
      values: [username, password],
    }

    const newUserId = await db.query(createQuery);
    res.locals.userId = newUserId.rows[0]._id;
    return next();
  } catch (err) {
    return next({
      log: "Error in userController.createUser",
      message: {
        err: "Error 500 - Internal Server Error: There was a problem creating the user.",
      },
    });
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return next({
        log: "Error in userController.verifyUser",
        status: 400,
        message: {
          err: "Error 400 - Bad request: Missing username or password.",
        },
      });
    const isLoggedIn = false;
    const verifyQuery = {
      text: 'SELECT _id, username FROM user WHERE username = $1',
      values: [username]
    }

    const userFound = await db.query(verifyQuery);
    const currentUser = userFound.rows;
    if (currentUser && currentUser.password === password) isLoggedIn = true;
    res.locals.isLoggedIn = isLoggedIn;
    return next();
  } catch (err) {
    return next({
      log: "Error in userController.verifyUser",
      message: {
        err: "Error 500 - Internal Server Error: There was a problem creating the user.",
      },
    });
  }
};

module.exports = userController;