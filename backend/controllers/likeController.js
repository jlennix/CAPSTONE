'use strict'
let Models = require('../models')

const getLikes = (res) => {
    //finds all users
    Models.Like.find({})
    .then(data => res.status(200).json({result:200, data:data}))
    .catch(err => {
        console.log(err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

const createLike = (req, res) => {
    const data = req.body 
    console.log('likeController - createLike:', data)
    new Models.Like(data).save()
    .then(data => res.status(200).json({result: 200, data: data}))
    .catch( err => {
        console.log('likeController - createLike:', err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

const updateLike = (req, res) => {
    const data = req.body
    const id = req.params.id
    console.log('likeController - updateLike:', id, data)
    Models.Like.findByIdAndUpdate(id, data, { new: true})
    .then(data => res.status(200).json({result: 200, data: data}))
    .catch( err => {
        console.log('likeController - updateLike:', err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

const deleteLike = (req, res) => {
    const id = req.params.id
    Models.Like.findByIdAndDelete(id)
    .then(data => res.status(200).json({result: 200, data: data}))
    .catch( err => {
        console.log('likeController - deleteLike:', err)
        res.status(500).json({ result: 500, error: err.message})
    })
}

module.exports = {
    getLikes, createLike, updateLike, deleteLike
}