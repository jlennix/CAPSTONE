const express = require('express')
const authRouter = express.Router()
const authController = require('../controllers/authController')

// http://localhost:8080/auth/loginUser

authRouter.post('/loginUser', (req, res)=> {
  authController.loginUser(req, res)
})

module.exports = authRouter;