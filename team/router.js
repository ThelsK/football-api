const Team = require("./model")

const teamRouter = new require("express").Router()
teamRouter.get("/team", (req, res, next) => {
  Team.findAll()
    .then(teams => res.send(teams))
    .catch(console.error)
})

module.exports = teamRouter