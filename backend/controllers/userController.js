'use strict'
let Models = require('../models')

const getUsers = (res) => {
    //finds all users
    Models.User.find({})
    .then(data => res.status(200).json({result:200, data:data}))
    .catch(err => {
        console.log(err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

const createUser = (req, res) => {
    const data = req.body 
    console.log('userController - createUser:', data)
    new Models.User(data).save()
    .then(data => res.status(200).json({result: 200, data: data}))
    .catch( err => {
        console.log('userController - createUser:', err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

// const loginUser = (req, res) => {
//     let email = req.body.email
//     let password = req.body.password
  
//     console.log('loginController.jsx - loginUser', req.body)
  
//     //find the user from userData array by matching the email
//     const foundUser = userData.find((user)=> user.email === email)
//     console.log('loginController.jsx - foundUser result', foundUser)
  
//     // if find found a user, then check the password
//     if (foundUser) {
//       if(foundUser.password === password) {
//         // correct password
//         res.status(200).json( {result: "success"})
//       } else (
//         // password bad
//         res.status(401).json( {result: "Email or password incorrect"})
//       )
//     } else {
//       //user not found
//       res.status(404).json( {result: "Email or password not found"})
//     }
    
//   }

const updateUser = (req, res) => {
    const data = req.body
    const id = req.params.id
    console.log('userController - updateUser:', id, data)
    Models.User.findByIdAndUpdate(id, data, { new: true})
    .then(data => res.status(200).json({result: 200, data: data}))
    .catch( err => {
        console.log('userController - updateUser:', err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

const deleteUser = (req, res) => {
    const id = req.params.id
    Models.User.findByIdAndDelete(id)
    .then(data => res.status(200).json({result: 200, data: data}))
    .catch( err => {
        console.log('userController - deleteUser:', err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

module.exports = {
    getUsers, createUser, updateUser, deleteUser, 
}