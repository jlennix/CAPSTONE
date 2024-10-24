let express = require("express");
let commentRouter = express.Router();
let Controllers = require("../controllers/"); 

// Get http://localhost:8080/api/comments
commentRouter.get('/', (req, res) => {
Controllers.commentController.getComments(res);
})

// Post http://localhost:8080/api/comments
commentRouter.post('/', (req, res) => {
Controllers.commentController.createComment(req, res);
})

//Put http://localhost:8080/api/comments/:id
commentRouter.put('/:id', (req, res) => {
    Controllers.commentController.updateComment(req, res);
    })

//Delete http://localhost:8080/api/comments/:id
commentRouter.delete('/:id', (req, res) => {
    Controllers.commentController.deleteComment(req, res);
    })

module.exports = commentRouter;