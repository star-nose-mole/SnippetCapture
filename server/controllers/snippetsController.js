const db = require("../models/snippetsModel");

const snippetsController = {};

snippetsController.getSnippets = async (req, res, next) => {
  //THERE IS TAGS
  console.log(req.body.tags, "TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?TAG?")
  if (req.body.tags && req.body.tags.length) {
    console.log('NOTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT EMPTTTTTTYYYYYYYYY')
    //CHANGE QUERY VALUES TO BE CURRENT USER'S USER_ID
    try {
      let tagsArray = req.body.tags;
      let user = 4;
      let whereString = `'${tagsArray[0]}' = ANY (tags)`;
      for (let i = 1; i < tagsArray.length; i++) {
        whereString += ` OR '${tagsArray[i]}' = ANY (tags)`
      }
      console.log("1 check ")
      const snippetsQuery = `SELECT * FROM (SELECT s._id as snippet_id, s.code, s.url, array_agg(t.tag_name) as tags FROM users u INNER JOIN user_snippets us ON us.user_id = u._id And user_id = ${user} INNER JOIN snippets s ON us.snippet_id = s._id INNER JOIN snippet_tags st ON st.snippet_id = s._id INNER JOIN tags t ON st.tag_name = t.tag_name GROUP BY s._id, s.code, s.url) AS foo WHERE ${whereString}`; 
    const tagsQuery = {
      text: "SELECT t.* FROM users u INNER JOIN user_snippets us ON u._id = $1 AND us.user_id = u._id INNER JOIN snippets s ON us.snippet_id = s._id INNER JOIN snippet_tags st ON st.snippet_id = s._id INNER JOIN tags t ON st.tag_name = t.tag_name",
      values: ["4"],
    };

    const snippetsQueryResult = await db.query(snippetsQuery);
    const tagsQueryResult = await db.query(tagsQuery);
    
    const snippets = snippetsQueryResult.rows;
    const tags = tagsQueryResult.rows.map(tag => tag.tag_name);
    const results = { snippets, tags };
    res.locals.results = results;

    return next();
  } catch (err) {
      return next({
        log: "error in snippetsController:getSnippets",
        message: {
          err: 'Error 500 - Internal Server Error: There was a problem getting all the snippets',
        },
      });
    }
  } 
  //EMPTY TAGS -> return all snippets
  else {
    try {

      // const cookieId = req.cookie.ssid;
      // console.log('cookieID ISSSS: ',cookieId);
      const snippetsQuery = {
        text: "SELECT s._id as snippet_id, s.code, s.url,  array_agg(t.tag_name::text) as tags FROM users u INNER JOIN user_snippets us ON u._id = $1 AND us.user_id = u._id INNER JOIN snippets s ON us.snippet_id = s._id INNER JOIN snippet_tags st ON st.snippet_id = s._id INNER JOIN tags t ON st.tag_name = t.tag_name GROUP BY s._id, s.code, s.url;",
        values: [4],
      };
      const tagsQuery = {
        text: "SELECT t.* FROM users u INNER JOIN user_snippets us ON u._id = $1 AND us.user_id = u._id INNER JOIN snippets s ON us.snippet_id = s._id INNER JOIN snippet_tags st ON st.snippet_id = s._id INNER JOIN tags t ON st.tag_name = t.tag_name",
        values: [4],
      };

      const snippetsQueryResult = await db.query(snippetsQuery);
      const tagsQueryResult = await db.query(tagsQuery);
      
      const snippets = snippetsQueryResult.rows;
      const tags = tagsQueryResult.rows.map(tag => tag.tag_name);
      const results = { snippets, tags };
      
      res.locals.results = results;

      return next();
    } catch (err) {
      return next({
        log: "error in snippetsController:getSnippets",
        message: {
          err: 'Error 500 - Internal Server Error: There was a problem getting all the snippets',
        },
      });
    }
  }
};

// snippetsController.getTagSnippets = async (req, res, next) => {
//   //get user_id and array of tags from front end
//   try {
//     const snippetsQuery = {
//       text: "SELECT s._id as snippet_id, s.code, s.url,  array_agg(t.tag_name::text) as tags FROM users u INNER JOIN user_snippets us ON u._id = $1 AND us.user_id = u._id INNER JOIN snippets s ON us.snippet_id = s._id INNER JOIN snippet_tags st ON st.snippet_id = s._id INNER JOIN tags t ON st.tag_name = t.tag_name GROUP BY s._id, s.code, s.url;",
//       values: ["4", "algo", "fizz"]

//     };
//     const tagsQuery = {
//       text: "SELECT t.* FROM users u INNER JOIN user_snippets us ON u._id = $1 AND us.user_id = u._id INNER JOIN snippets s ON us.snippet_id = s._id INNER JOIN snippet_tags st ON st.snippet_id = s._id INNER JOIN tags t ON st.tag_name = t.tag_name",
//       values: ["4"],
//     };

//     const snippetsQueryResult = await db.query(snippetsQuery);
//     const tagsQueryResult = await db.query(tagsQuery);
//     const snippets = snippetsQueryResult.rows;
//     const tags = tagsQueryResult.rows.map(tag => tag.tag_name);
//     const results = { snippets, tags };
//     res.locals.results = results;

//     return next();
//   } catch (err) {
//     return next({
//       log: "error in snippetsController:getSnippets",
//       message: {
//         err: `error something something: ' ${err}`,
//       },
//     });
//   }
// };



// snippetsController.addSnippet = async (req, res, next) => {
//   try {
//     const { tags } = req.body;
//     const addTagQuery = {
//       text: 'INSERT INTO tags VALUES ($1)',
//       value: [tags]
//     }
//     await db.query(addTagQuery)
//   } catch (err) {
//     return next({
//       log: "error in snippetsController:getSnippets",
//       message: {
//         err: 'Error 500 - Internal Server Error. There was a problem adding new tag to the snippet.',
//       },
//     });
//   }
// };

// fileController.updateSnippets = async (req, res, next) => {
//   try {

//   } catch(err) {

//   }
// };

// fileController.deleteSnippets = async (req, res, next) => {
//   try {

//   } catch(err) {

//   }
// };

module.exports = snippetsController;
