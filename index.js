const app = require("express")()
const port = process.env.PORT || 3000
const appListen = () =>
  app.listen(port, () => console.log(`Listening on :${port}`))

const teamRouter = require("./team/router.js")
app.use(teamRouter)

appListen()