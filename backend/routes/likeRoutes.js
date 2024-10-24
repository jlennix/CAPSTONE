let express = require("express");
let likeRouter = express.Router();
let Controllers = require("../controllers/"); 

// Get http://localhost:8080/api/likes
likeRouter.get('/', (req, res) => {
Controllers.likeController.getLikes(res);
})

// Post http://localhost:8080/api/likes
likeRouter.post('/', (req, res) => {
Controllers.likeController.createLike(req, res);
})

//Put http://localhost:8080/api/likes/:id
likeRouter.put('/:id', (req, res) => {
    Controllers.likeController.updateLike(req, res);
    })

//Delete http://localhost:8080/api/likes/:id
likeRouter.delete('/:id', (req, res) => {
    Controllers.likeController.deleteLike(req, res);
    })

module.exports = likeRouter;