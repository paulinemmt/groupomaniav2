//////////////////////////ROUTES POST////////////////////////////////

const express = require('express');
const postRouter = express.Router(); //Router method

const auth = require('../middleware/auth'); //authentification

const postCtrl = require('../controllers/post'); //Post controllers

//routes
postRouter.get('/',auth, postCtrl.getAllPost);
postRouter.post('/',auth, postCtrl.addPost);
postRouter.delete('/',auth,  postCtrl.deletePost);


module.exports = postRouter;