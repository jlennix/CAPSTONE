'use strict'
let Models = require('../models')

const getPosts = (res) => {
    //finds all posts
    Models.Post.find({})
    .then(data => res.status(200).json({result:200, data:data}))
    .catch(err => {
        console.log(err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

const createPost = (req, res) => {
    const data = req.body 
    console.log('postController - createPost:', data)
    new Models.Post(data).save()
    .then(data => res.status(200).json({result: 200, data: data}))
    .catch( err => {
        console.log('postController - createPost:', err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

const updatePost = (req, res) => {
    const data = req.body
    const id = req.params.id
    console.log('postController - updatePost:', id, data)
    Models.Post.findByIdAndUpdate(id, data, { new: true})
    .then(data => res.status(200).json({result: 200, data: data}))
    .catch( err => {
        console.log('postController - updatePost:', err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

const deletePost = (req, res) => {
    const id = req.params.id
    Models.Post.findByIdAndDelete(id)
    .then(data => res.status(200).json({result: 200, data: data}))
    .catch( err => {
        console.log('postController - deletePost:', err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

module.exports = {
    getPosts, createPost, updatePost, deletePost
}