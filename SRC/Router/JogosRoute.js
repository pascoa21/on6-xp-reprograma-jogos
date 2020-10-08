const express = require("express")
const router = express.Router()
const controller = require("../controller/jogosController")

router.get("/jogos", controller.getAll)
router.get("/jogos/id", controller.getById)