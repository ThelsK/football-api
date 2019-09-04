const Player = require("./model")
const Team = require("../team/model")
Team.hasMany(Player)

const playerRouter = new require("express").Router()

playerRouter.get("/player", (req, res, next) => {
  Player.findAll()
    .then(players => res.send(players))
    .catch(console.error)
})

playerRouter.get("/player/:id", (req, res, next) => {
  Player.findByPk(req.params.id)
    .then(player => {
      if (player) {
        res.send(player)
      } else {
        res.status(404).end()
      }
    })
    .catch(console.error)
})

playerRouter.post("/player", (req, res, next) => {
  Player.create(req.body)
    .then(player => res.send(player))
    .catch(console.error)
})



module.exports = playerRouter