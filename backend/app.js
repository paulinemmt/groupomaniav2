//////////////////////////////APPLICATION/////////////////////////////////

const express = require('express'); //ajout du framework express au projet
const helmet = require("helmet"); //sécurisation de l'app en ajoutant divers en-tête http
const bodyParser = require('body-parser'); //ajout de body-parser au projet : permet extraction d'objet JSON
const Sequelize = require('sequelize');

const app = express();
const path = require('path');

//routes files importation
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

//Data base connexion
const sequelize = new Sequelize('groupomania_social_media', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
 })  
    try {
    sequelize.authenticate();
    console.log('Connection with the data base has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const exportsd = module.exports = {};
  exports.sequelize = sequelize;

//correction des erreurs de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//sécurisation de l'application
app.use(helmet());

//middleware global : JSON
app.use(bodyParser.json());

//routes
app.use('/images', express.static(path.join(__dirname, 'images'))); //express doit gérer la ressource image de manière statique
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


module.exports = app;


// //Imports
// const express = require('express');
// const usersCtrl = require('./routes/UsersCtrl');

// //Router
// exports.router = (function(){
//     const apiRouter = express.Router();

//     //CORS error
// apiRouter.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

//     //Users routes
//     apiRouter.route('users/register/').post(usersCtrl.register);
//     apiRouter.route('users/login/').post(usersCtrl.login);

//     return apiRouter;
// })();