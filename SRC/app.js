const express = require("express")
const app = express()
const router = require("./route/jogosRoutes")

app.use("/", router)
