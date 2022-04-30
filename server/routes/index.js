const express = require('express')
const router = express.Router()

const gameController = require('../controllers/gameController')

const userController = require('../controllers/userController')

const {authenticationMiddleWare} = require('../middleware/authentication')



// User
router.post('/login',userController.Login)
router.post('/register',userController.Register)



// Item
router.get('/game',authenticationMiddleWare, gameController.getGame)
router.post('/game',authenticationMiddleWare, gameController.addGame)
router.get('/game/:id',authenticationMiddleWare, gameController.getGameId)
router.delete('/game/:id',authenticationMiddleWare, gameController.deleteGame)
router.put('/game/:id',authenticationMiddleWare, gameController.editGame)



module.exports = router