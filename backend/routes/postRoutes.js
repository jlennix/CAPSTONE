let express = require("express");
let postRouter = express.Router();
let Controllers = require("../controllers"); 
//yo

// Get http://localhost:8080/api/posts
postRouter.get('/', (req, res) => {
Controllers.postController.getPosts(res);
})

// Post http://localhost:8080/api/posts
postRouter.post('/', (req, res) => {
Controllers.postController.createPost(req, res);
})

//Put http://localhost:8080/api/posts/:id
postRouter.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req, res);
    })

//Delete http://localhost:8080/api/posts/:id
postRouter.delete('/:id', (req, res) => {
    Controllers.postController.deletePost(req, res);
    })

module.exports = postRouter;