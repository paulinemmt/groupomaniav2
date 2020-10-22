const models = require('../models'); //importation du modèle Post
const fs = require('fs'); //importation module node fs (intéraction avec le système de fichier)
const bodyParser = require('body-parser'); //importation module body-parser (permet d'extraire des objet JSON)
const sequelize = require('sequelize');

exports.getAllPost = (req, res, next) => {
    console.log('coucou');
  models.Post.findAll({
    order: [['date_publication','ASC']]
  }).then(posts => res.status(200).json(posts))
  .catch(error => res.status(400).json({ error }));
  
    //Tableau de donnée de sauces
    //  User.findAll()
    //   .then(posts => res.status(200).json(posts))
    //   .catch(error => res.status(400).json({ error }));
  };