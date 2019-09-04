const City = require("./model")
const Team = require("../team/model")
const Player = require("../player/model")

City.hasMany(Team)
City.hasMany(Player)

const cityRouter = new require("express").Router()

cityRouter.get("/city", (req, res, next) => {
  City.findAll()
    .then(citys => res.send(citys))
    .catch(console.error)
})

cityRouter.get("/city/:id", (req, res, next) => {
  City.findByPk(req.params.id, { include: { all: true } })
    .then(city => {
      if (city) {
        res.send(city)
      } else {
        res.status(404).end()
      }
    })
    .catch(console.error)
})

cityRouter.post("/city", (req, res, next) => {
  City.create(req.body)
    .then(city => res.send(city))
    .catch(console.error)
})

module.exports = cityRouter