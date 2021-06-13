const express = require('express');
const fileController = require('../controllers/cookieController');
const fileController = require('../controllers/sessionController');
const fileController = require('../controllers/fileController');

const authRouter = express.Router();

// CHANGE NAME OF OTHER ROUTER


authRouter.post(
  '/',
  fileController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => res.status(200).redirect('/user')
);

app.post('/', 
  userController.createUser, 
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => res.status(200).redirect('/user')
);

authRouter.get(
  '/',
  sessionController.isLoggedIn,
  (req, res) => res.status(200).redirect('/')
);



module.exports =  authRouter;