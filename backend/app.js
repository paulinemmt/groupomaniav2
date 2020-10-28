//////////////////////////////APPLICATION/////////////////////////////////

const express = require('express'); //Express framework
const helmet = require("helmet"); //Add header to http to secure app
const bodyParser = require('body-parser'); //JSON object extraction
const Sequelize = require('sequelize'); //ORM 

const app = express();
const path = require('path');

//Routes files importation
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

  const exportss = module.exports = {};
  exports.sequelize = sequelize;

//CORS error
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Secure app
app.use(helmet());

//Middleware global : JSON
app.use(bodyParser.json());

//Routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


module.exports = app;
