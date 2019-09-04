const app = require("express")()
const port = process.env.PORT || 3000
const appListen = () =>
  app.listen(port, () => console.log(`Listening on :${port}`))

// app.use(require("./routers/studentRouter"))
// app.use(require("./routers/teacherRouter"))

const db = require("./db")
appListen()