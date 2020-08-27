const express = require(`express`)
const Router = express.Router()

const ControllerUser = require('../controllers/controllerUser.js')

Router.get('/register', ControllerUser.getRegisterHandler)
Router.post('/register', ControllerUser.postRegisterHandler)
Router.get('/edit/:id', ControllerUser.getEditProfileHandler)
Router.post('/edit:id', ControllerUser.postEditProfileHandler)
Router.get('/login', ControllerUser.getLoginHandler)
Router.post('/login', ControllerUser.postLoginHandler)
Router.post('/logout', ControllerUser.logoutHandler)

module.exports = Router