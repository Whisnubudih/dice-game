const { Game} = require('../models/index')


const getGame = async (req,res,next) => {
    try {
        const result = await Game.findAll({
            order: [
                ['id', 'ASC'],
            ]
        })

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}



const getGameId = async (req,res,next) => {
    try {
        const { id } = req.params
        const result = await Game.findByPk(id)
    if (!result) {
        throw { name: "notFound"}
    }
        res.status(200).json(result)
        
    } catch (err) {
        next(err)
    }
}

const addGame = async (req,res,next) => {
    try {
        
        const { name,win,lose,match,score } = req.body
        const result = await Game.create({name,win,lose,match,score})
       
        res.status(201).json(result)

    } catch (err) {
        next(err)
    }
}



const editGame = async (req,res,next) => {
    try {
        
        const { id } = req.params
        const { name,win,lose,match,score} = req.body
       
        const findGame = await Game.findByPk(id)
        if (!findGame) {
            throw { name: "notFound"}
        } 
      
        const result = await Game.update({
            name,win,lose,match,score
        },
        {
            where: {id},
            returning: true
        })
    
        res.status(201).json(result[1][0])
    } catch (err) {
        next(err)
    }
}

const deleteGame = async (req,res,next) => {
    try {
        const {id} = req.params
        const findGame= await Game.findByPk(id)

        const result = await Game.destroy({
            where:{id}
        })
        res.status(200).json({msg:`id${findGame.id} success deleted`})
   } catch (error) {
       next(error)
   }
}




module.exports = {getGame,getGameId,addGame,deleteGame,editGame}