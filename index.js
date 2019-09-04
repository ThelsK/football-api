const app = require("express")()
const port = process.env.PORT || 3000
const appListen = () =>
  app.listen(port, () => console.log(`Listening on :${port}`))

app.use(require("body-parser").json())
app.use(require("./team/router"))
app.use(require("./player/router"))
app.use(require("./city/router"))

appListen()