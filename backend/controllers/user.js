//////////////////////////CONTROLLER USER///////////////////////////

const bcrypt = require('bcrypt'); //hashage du mot de passe
const jwtUtils = require('../utils/jwt.utils'); //création des token d'identification pour la session
const jwt = require('jsonwebtoken');
const models = require('../models'); //importation du model User


//INSCRIPTION USER
exports.signUpUser = (req, res, next) => {
    console.log('coucou')
    console.log(req.body)
    const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const photo = req.body.photo;
        
        //Verify parameters
        if (email == null || username == null || password == null) {
            return res.status(400).json({'error': 'missing parameters'})
        }

        //Verify pseudo lenght, mail regex, password 
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
    }

// //CONNEXION USER
//         exports.loginUser = (req, res, next) => {

//         //Params
//         const email = req.body.email;
//         const password = req.body.password;

//         if (email == null || password == null) {
//             return res.status(400).json({'error': 'missing parameters'});
//         }

//         //Verify password lenght and mail regex
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
//             return res.status(500).json({'error' : 'unable to verify user'})
//         })
//     }
      
    exports.loginUser = (req, res, next) => {
        console.log(req.body.password)
        //chercher l'adresse mail dans la base de donnée
        const email = req.body.email
        models.User.findOne({
        where: {email: email}
        })
            .then(user => {
                //si l'utilisateur n'est pas dans la base de donnée
                if (!user) {
                    return res.status(401).json({ error: 'User not exist in DB !' });
                }
                //si l'utilisateur est trouvé alors vérification du mot de passe crypté
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        //si le mot de passe ne correspond pas
                        if (!valid) {
                            return res.status(401).json({ error: 'Invalid password !' });
                        }
                        //si le mot de passe correspond alors création d'un token d'identification
                        res.status(200).json({
                            userId: user._id,
                            token: jwt.sign(
                                { userId: user._id },
                                //création d'un token
                                'RANDOM_TOKEN_SECRET',
                                //valable 24h
                                { expiresIn: '24h' }
                            )
                        });
                    })
                    // erreur serveur
                    .catch(error => res.status(500).json({ error }));
            })
            // erreur serveur
            .catch(error => res.status(500).json({ error }));
    };

//DELETE USER
    exports.deleteUser = (req, res, next) => {
            //accès à la sauce corrsepondante à l'id
            models.User.findOne({ _id: req.params.id })
              .then(user => {
                // //récupération du nom de fichier
                // const filename = sauce.imageUrl.split('/images/')[1];
                // //Supression du fichier
                // fs.unlink(`images/${filename}`, () => {
                //   //supression le Sauce de la DB
                  models.User.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'User deleted !' }))
                    .catch(error => res.status(400).json({ error }));
                })
              .catch(error => res.status(500).json({ error }));
    }


//MODIFY USER
exports.modifyUser = (req, res, next) => {
    //vérifie si req.file existe
  const sauceObject = req.file ?
  {
    //il existe : traitement de la nouvelle image
    ...JSON.parse(req.body.sauce),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    // il n'existe pas : traitement de l'objet entrant
  } : { ...req.body };
models.User.updateOne({ _id: req.params.id }, { ...userObject, _id: req.params.id })
  .then(() => res.status(200).json({ message: 'Sauce modifiée !' }))
  .catch(error => res.status(400).json({ error }));
}