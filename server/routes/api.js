const express = require('express');
const snippetsController= require('../controllers/snippetsController');
const router = express.Router();

// for fetch requests to localhost:3000/api/
router.get(
  '/',
  snippetsController.getSnippets,
  (req, res) => {
    res.status(200).json(res.locals.results);
     // can be an object of { tagName: true } just like starwars favs
  } 
);

// router.get(
//   '/search',
//   snippetsController.getTagSnippets,
//   (req, res) => {
//     res.status(200).json({
//       snippets: res.locals.snippets,
//       // tags: res.locals.tags          // do we still need to send back tags?
//     });
//   }     
// );

// router.post(
//   '/',
//   snippetsController.getSnippets,
//   snippetsController.addSnippet,
//   snippetsController.addTags,
//   (req, res) => {
//     res.status(200).json('Your snippet was saved!');
//   }
// );


/**potential other controllers:
 * - clicking on specific tagID
 * -
 */

module.exports = router;
