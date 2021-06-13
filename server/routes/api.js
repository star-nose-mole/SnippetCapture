const express = require('express');
const fileController = require('../controllers/fileController');
const router = express.Router();

// for fetch requests to localhost:3000/api/
router.get(
  '/',
  fileController.getSnippets,
  (req, res) => {
    res.status(200).json({
      snippets: res.locals.snippets,
      tags: res.locals.tags            // can be an object of { tagName: true } just like starwars favs
    });
  }
);

router.get(
  '/search',
  fileController.getTagSnippets,
  (req, res) => {
    res.status(200).json({
      snippets: res.locals.snippets,
      // tags: res.locals.tags          // do we still need to send back tags?
    });
  }     
);

router.post(
  '/',
  fileController.getSnippets,
  fileController.addSnippet,
  fileController.addTags,
  (req, res) => {
    res.status(200).json('Your snippet was saved!');
  }
);


/**potential other controllers:
 * - clicking on specific tagID
 * -
 */

module.exports = router;
