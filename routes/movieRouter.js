const express = require(`express`)
const { route } = require("./userRouter")
const Router = express.Router()
const Controller = require(`../controllers/controllerMovie`)

Router.get(`/`,Controller.getShowAllMovies)

module.exports = Router