const express = require('express');
const snippetsController= require('../controllers/snippetsController');
const userController = require("../controllers/userController");
const cookieController = require("../controllers/cookieController");
const sessionController = require("../controllers/sessionController");

const router = express.Router();

// for fetch requests to localhost:3000/api/
router.get(
  '/search',
  snippetsController.getSnippets,
  (req, res) => {
    res.status(200).json(res.locals.results);
     // can be an object of { tagName: true } just like starwars favs
  } 
);

// router.post(
//   '/add',
//   snippetsController.getSnippets,
//   snippetsController.addSnippet,
//   snippetsController.addTags,
//   (req, res) => {
//     res.status(200).json('Your snippet was saved!');
//   }
// );



router.post(
  '/signup',
  userController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => res.status(200).send(res.locals.isLoggedIn)
);

router.post(
  '/login',
  userController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => res.status(200).send(res.locals.isLoggedIn)
);


// router.get(

//   '/', 
//   sessionController.isLoggedIn, 
//   (req, res) => res.status(200).send(res.locals.isLoggedIn)
// );


module.exports = router;
