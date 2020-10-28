//////////////////////////ROUTES USER////////////////////////////////

const express = require('express');
const userRouter = express.Router(); //Router method

const userCtrl = require('../controllers/user');//User controllers

const auth = require('../middleware/auth'); //Authentification

//Routes
userRouter.get('/',auth, userCtrl.getUser);
userRouter.post('/signup',  userCtrl.signUpUser);
userRouter.post('/login', userCtrl.loginUser);
userRouter.put('/:id',auth, userCtrl.updateUser);
userRouter.delete('/:id',auth, userCtrl.deleteUser);

module.exports = userRouter;

 
