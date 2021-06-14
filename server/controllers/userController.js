const db = require("../models/snippetsModel");
const bcrypt = require("bcryptjs");
// const { WatchIgnorePlugin } = require("webpack");
// const e = require("express");

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    //is there a pre-function method to bcrypt the password?
    // const { username, password } = req.body;
    let username = 'Test15';
    let password = 'Test15';
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
    // let username = 'bbygorl';
    // let password = 'ian';
    
    if (!username || !password) {
      return next({
        log: "Error in userController.verifyUser",
        status: 400,
        message: {
          err: "Error 400 - Bad request: Missing username or password.",
        },
      });
    }
    
    console.log('before query')
    res.locals.isLoggedIn = false;
    const verifyQuery = {
      // text: `SELECT * FROM users;`,
      text: 'SELECT _id FROM users WHERE username = $1 AND password = $2;',
      values: [username, password]
    }
    const userFound = await db.query(verifyQuery);
    console.log('after query')
    const currentUser = userFound.rows[0]._id;
    console.log("current user:", currentUser)
    if (!currentUser) {
      return res.send('could not verify')
    }
    res.locals.isLoggedIn = true;
    res.locals.userId = currentUser;
    return next();
  } catch (err) {
      return next({
        log: "Error in userController.createUser",
        message: {
          err: "Error 500 - Internal Server Error: There was a problem verifying the user.",
        },
      });
    }
};

module.exports = userController;