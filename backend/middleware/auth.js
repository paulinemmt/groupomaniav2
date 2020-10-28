//////////////////////AUTHENTIFICATION/////////////////////////////

//Creation of the missleware to protect routes
// + check authentification user with the token

////////IMPORTS
const jwt = require('jsonwebtoken'); //token

module.exports = (req, res, next) => {
  //Try catch : it can be error
  try {
    //Extraction token from athorization header
    const token = req.headers.authorization.split(' ')[1];
    console.log(req.headers.authorization);
    //verify token
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    //Compare with idUser
    const userId = decodedToken.userId;
    //If not valid, error
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
      //If valid, request
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};

