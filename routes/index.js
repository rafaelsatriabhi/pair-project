const express = require(`express`)
const Router = express.Router()
const movieRouter = require(`./movieRouter`)
const userRouter = require(`./userRouter`)
const Controller =require(`../controllers/controller.js`)

Router.get(`/`, Controller.getHome)

Router.use(`/users`,userRouter)
Router.use(`/movies`,movieRouter)


module.exports = Router