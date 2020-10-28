//////////////////////////////////CONTROLLERS POST////////////////////////////////////
const models = require('../models'); //importation du modèle Post
const bodyParser = require('body-parser'); //importation module body-parser (permet d'extraire des objet JSON)

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
    

    //Verify parameters
    if (title == null || content == null) {
      return res.status(400).json({'error': 'missing parameters'})
    }

    //Create the post
    const newPost = models.Post.create({
      id_users: id_users,
        title: title,
        content: content,
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
  
//DELETE POST FOR MANAGER
exports.deletePost = (req, res, next) => {
  let id = req.body.id
  models.Post.destroy({ where: { id: id } })
          .then(() => res.status(200).json({ message: 'Post deleted !' }))
          .catch(error => res.status(500).json({ error }));
} 
