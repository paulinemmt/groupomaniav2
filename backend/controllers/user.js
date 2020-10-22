//////////////////////////CONTROLLER USER///////////////////////////

const bcrypt = require('bcrypt'); //hashage du mot de passe
const jwt = require('jsonwebtoken'); //création des token d'identification pour la session

const models = require('../models'); //importation du model User


//INSCRIPTION USER
exports.signUpUser = (req, res, next) => {
    console.log('coucou')
    const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const photo = req.body.photo;
        
        //Verify parameters
        if (email == null || username == null || password == null) {
            return res.status(400).json({'error': 'missing parameters'})
        }

        //Very pseudo lenght, mail regex, password 
        
        models.User.findOne({
            attributes: ['email'],
            where: {email: email}
        })
        .then(function(userFound){
            if (!userFound) {
                bcrypt.hash(password, 5, function(err, bcryptedPassword){
                    const newUser = models.User.create({
                        email: email,
                        username: username,
                        password: bcryptedPassword,
                        photo: photo,
                        isAdmin: 0
                    })
                    .then(function(newUser){
                        return res.status(201).json({
                            'userId': newUser.id
                        })
                    })
                    .catch(function(err){
                        return res.status(500).json({'error': 'cannot add user'});
                    })
                })
            }else{
                return res.status(409).json({ 'error' : 'user already exist'});
            }
        })
        .catch(function(err){
            return res.status(500).json({'error': 'unable to verify user'});
        })

    // console.log(req.body);
    // //cryptage du mot de passe
    // bcrypt.hash(req.body.password, 10)
    //     //creation user et enregistrement dans la base de donnée
    //     .then( hash => {
    //         const user = User.create({
    //             email: req.body.email,
    //             password: hash,
    //             pseudo: req.body.pseudo,
    //             photo: req.body.photo
    //             // isAdmin: 
    //         });
    //         user.save()
    //             .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
    //             .catch(error => res.status(400).json({ error }));
    //     })
    //      .catch(error => res.status(500).json({ error }));
};


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