let express = require("express");
let userRouter = express.Router();
let Controllers = require("../controllers/"); 

// Get http://localhost:8080/api/users
userRouter.get('/', (req, res) => {
Controllers.userController.getUsers(res);
})

// Post http://localhost:8080/api/users
userRouter.post('/', (req, res) => {
Controllers.userController.createUser(req, res);
})

//Put http://localhost:8080/api/users/:id
userRouter.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res);
    })

//Delete http://localhost:8080/api/users/:id
userRouter.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res);
    })

module.exports = userRouter;