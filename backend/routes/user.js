//////////////////////////ROUTES USER////////////////////////////////

const express = require('express');
const userRouter = express.Router(); //appel méthode router de express

const userCtrl = require('../controllers/user');//importation des controllers user

// const auth = require('../middleware/auth'); //importation authentification
// const multer = require('../middleware/multer-config'); //importation multer pour la gestion des images

//routes
userRouter.post('/signup',  userCtrl.signUpUser);
// userRouter.post('/login', userCtrl.loginUser);
// userRouter.put('/:id',auth, multer, userCtrl.modifyUser);
// userRouter.delete('/:id', auth, userCtrl.deleteUser);

module.exports = userRouter;



// //imports
// const bcrypt = require('bcrypt');
// const jwtUtils = require('../utils/jwt.utils');
// const models = require('../models')

// //Routes
// module.exports = {
//     register: function(req, res) {
//         console.log('coucou')

//         //Params
//         const email = req.body.email;
//         const username = req.body.username;
//         const password = req.body.password;
//         const photo = req.body.photo;
        
//         //Verify parameters
//         if (email == null || username == null || password == null) {
//             return res.status(400).json({'error': 'missing parameters'})
//         }

//         //Very pseudo lenght, mail regex, password 
        
//         models.User.findOne({
//             attributes: ['email'],
//             where: {email: email}
//         })
//         .then(function(userFound){
//             if (!userFound) {
//                 bcrypt.hash(password, 5, function(err, bcryptedPassword){
//                     const newUser = models.User.create({
//                         email: email,
//                         username: username,
//                         password: bcryptedPassword,
//                         photo: photo,
//                         isAdmin: 0
//                     })
//                     .then(function(newUser){
//                         return res.status(201).json({
//                             'userId': newUser.id
//                         })
//                     })
//                     .catch(function(err){
//                         return res.status(500).json({'error': 'cannot add user'});
//                     })
//                 })
//             }else{
//                 return res.status(409).json({ 'error' : 'user already exist'});
//             }
//         })
//         .catch(function(err){
//             return res.status(500).json({'error': 'unable to verify user'});
//         })
//     },

//     login: function(req, res) {

//         //Params
//         const email = req.body.email;
//         const password = req.body.password;

//         if (email == null || password == null) {
//             return res.status(400).json({'error': 'missing parameters'});
//         }

//         //Verify password lenght ans mail regex
//         models.User.findOne({
//             attributes: ['email'],
//             where: {email: email}
//         })
//         .then(function(userFound){
//             if(userFound){
//                 bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt) {
//                     if(resBycrypt) {
//                         return res.status(200).json({
//                             'userId': userFound.id,
//                             'token': jwtUtils.generateTokenForUser(userFound)
//                         });
//                     }else{
//                         return res.status(403).json({'error': 'invalid password'});
//                     }
//                 });
//             }else{
//                 return res.status(404).json({ 'error': 'user not exist in DB'})
//             }
//         })
//         .catch(function(err){
//             return res.status(500).json({'error' : 'unable to verify user'});
//         });
//     }
// }