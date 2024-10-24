'use strict'
let Models = require('../models')

const getComments = (res) => {
    //finds all users
    Models.Comment.find({})
    .then(data => res.status(200).json({result:200, data:data}))
    .catch(err => {
        console.log(err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

const createComment = (req, res) => {
    const data = req.body 
    console.log('commentController - createComment:', data)
    new Models.Comment(data).save()
    .then(data => res.status(200).json({result: 200, data: data}))
    .catch( err => {
        console.log('commentController - createComment:', err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

const updateComment = (req, res) => {
    const data = req.body
    const id = req.params.id
    console.log('commentController - updateComment:', id, data)
    Models.Comment.findByIdAndUpdate(id, data, { new: true})
    .then(data => res.status(200).json({result: 200, data: data}))
    .catch( err => {
        console.log('commentController - updateComment:', err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

const deleteComment = (req, res) => {
    const id = req.params.id
    Models.Comment.findByIdAndDelete(id)
    .then(data => res.status(200).json({result: 200, data: data}))
    .catch( err => {
        console.log('commentController - deleteComment:', err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

module.exports = {
    getComments, createComment, updateComment, deleteComment
}