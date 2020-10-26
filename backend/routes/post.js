//////////////////////////ROUTES SAUCE////////////////////////////////

const express = require('express');
const postRouter = express.Router(); //appel méthode router de express

const auth = require('../middleware/auth'); //importation authentification
// const multer = require('../middleware/multer-config'); //importation multer pour la gestion des images

const postCtrl = require('../controllers/post'); //importation des controllers article

//routes
postRouter.get('/',auth, postCtrl.getAllPost);
// postRouter.post('/', postCtrl.addPost);
// postRouter.put('/:id',auth, postCtrl.modifyPost);
// postRouter.delete('/:id', auth, postCtrl.deletePost);


module.exports = postRouter;