const express = require('express')
const cardRouter = express.Router()
const cardController = require('../controllers/cardController')

//http://localhost:3000/api/cards



cardRouter.get('/cards', (req, res)=>{
    cardController.getCards(req, res)
})

cardRouter.post('/cards/post', (req, res)=>{
    cardController.postCard(req, res)
})

module.exports = cardRouter;