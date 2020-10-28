//////////////////////////ROUTES SAUCE////////////////////////////////

const express = require('express');
const postRouter = express.Router(); //appel méthode router de express

const auth = require('../middleware/auth'); //importation authentification

const postCtrl = require('../controllers/post'); //importation des controllers article

//routes
postRouter.get('/',auth, postCtrl.getAllPost);
postRouter.post('/',auth, postCtrl.addPost);
postRouter.delete('/:id', auth, postCtrl.deletePost);


module.exports = postRouter;