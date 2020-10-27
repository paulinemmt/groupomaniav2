const models = require('../models'); //importation du modèle Post
const fs = require('fs'); //importation module node fs (intéraction avec le système de fichier)
const bodyParser = require('body-parser'); //importation module body-parser (permet d'extraire des objet JSON)
const sequelize = require('sequelize');
const jwtUtils = require('../utils/jwt.utils');
var asyncLib = require('async');
const { title } = require('process');


//VIEW ALL POSTS
exports.getAllPost = (req, res, next) => {
    console.log('coucou');
  models.Post.findAll({
    order: [['createdAt','ASC']]
  }).then(posts => res.status(200).json(posts))
  .catch(error => res.status(400).json({ error }));
}

//CREATE A POST
  exports.addPost = (req, res, next) => {
    console.log('coucou')
    console.log(req.body)

    //Params
    const id_users = req.body.id_users
    const title = req.body.title;
    const content = req.body.content;
    const UserId = req.body.UserId;

    //Verify parameters
    if (title == null || content == null) {
      return res.status(400).json({'error': 'missing parameters'})
    }

    //Create the post
    const newPost = models.Post.create({
      //userId ????
      id_users: id_users,
        title: title,
        content: content,
        UserId: UserId
    })
      .then (function(newPost){
        return res.status(201).json({
          'postId': newPost.id
        })
    })
    .catch(function(err){
      return res.status(500).json({'error': 'cannot add post'})
    })
  };
  
      

// exports.addPost = (req, res, next) => {
//     // Getting auth header
//     var headerAuth  = req.headers['authorization'];
//     var userId      = jwtUtils.getUserId(headerAuth);

//     // Params
//     var title   = req.body.title;
//     var content = req.body.content;

//     if (title == null || content == null) {
//       return res.status(400).json({ 'error': 'missing parameters' });
//     }


//     asyncLib.waterfall([
//       function(done) {
//         models.User.findOne({
//           where: { id: userId }
//         })
//         .then(function(userFound) {
//           done(null, userFound);
//         })
//         .catch(function(err) {
//           return res.status(500).json({ 'error': 'unable to verify user' });
//         });
//       },
//       function(userFound, done) {
//         if(userFound) {
//           models.Post.create({
//             title  : title,
//             content: content,
//             UserId : userFound.id
//           })
//           .then(function(newPost) {
//             done(newPost);
//           });
//         } else {
//           res.status(404).json({ 'error': 'user not found' });
//         }
//       },
//     ], function(newPost) {
//       if (newPost) {
//         return res.status(201).json(newPost);
//       } else {
//         return res.status(500).json({ 'error': 'cannot post message' });
//       }
//     })
//   }