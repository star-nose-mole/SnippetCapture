const db = require('../models/snippetsModels');

const fileController = {};

fileController.getSnippets = async (req, res, next) => {
  try {
    const snippetsQuery = `
    SELECT p.name, p.gender, s.name AS species, p.species_id, p.homeworld_id, p.birth_year, p.eye_color, p.hair_color, p.skin_color, p.height, p.mass, pl.name AS homeworld 
    FROM people p
    LEFT OUTER JOIN species s ON p.species_id = s._id
    LEFT OUTER JOIN planets pl ON p.homeworld_id = pl._id;
  `;                    
  
  const snippetsQueryResult = await db.query(snippetsQuery);
  res.locals.snippets = snippetsQueryResult.rows;
  return next();
  } catch(err) {
    return next({
      log: 'error in fileController:getSnippets',
      message: {
        err: `error something something: ' ${err}`
        }
      })
  }
}   




fileController.getTagSnippets = async (req, res, next) => {
  try {

  } catch(err) {
    return next({
      log: 'error in fileController:getSnippets',
      message: {
        err: `error something something: ' ${err}`
        }
      })
  }
};

fileController.addSnippets = async (req, res, next) => {
  try {

  } catch(err) {
    return next({
      log: 'error in fileController:getSnippets',
      message: {
        err: `error something something: ' ${err}`
        }
      })

  }
};

fileController.addTag = async (req, res, next) => {
  try {

  } catch(err) {
    return next({
      log: 'error in fileController:getSnippets',
      message: {
        err: `error something something: ' ${err}`
        }
      })
};










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

















module.exports = starWarsController;