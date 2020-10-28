//////////////////////////ROUTES USER////////////////////////////////

const express = require('express');
const userRouter = express.Router(); //appel méthode router de express

const userCtrl = require('../controllers/user');//importation des controllers user

const auth = require('../middleware/auth'); //importation authentification
// const multer = require('../middleware/multer-config'); //importation multer pour la gestion des images

//routes RAJOUTER LES AUTH
userRouter.post('/signup',  userCtrl.signUpUser);
userRouter.post('/login', userCtrl.loginUser);
userRouter.put('/:id',auth, userCtrl.updateUser);
userRouter.delete('/:id',auth, userCtrl.deleteUser);

module.exports = userRouter;


