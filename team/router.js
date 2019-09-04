const Team = require("./model")
const City = require("../city/model")
const Player = require("../player/model")

Team.belongsTo(City)
Team.hasMany(Player)

const teamRouter = new require("express").Router()

teamRouter.get("/team", (req, res, next) => {
  Team.findAll()
    .then(teams => res.send(teams))
    .catch(console.error)
})

teamRouter.get("/team/:id", (req, res, next) => {
  Team.findByPk(req.params.id, { include: { all: true } })
    .then(team => {
      if (team) {
        res.send(team)
      } else {
        res.status(404).end()
      }
    })
    .catch(console.error)
})

teamRouter.post("/team", (req, res, next) => {
  Team.create(req.body)
    .then(team => res.send(team))
    .catch(console.error)
})

module.exports = teamRouter