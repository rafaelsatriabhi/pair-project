const {User} = require('../models')

class ControllerUser{
    static getRegisterHandler(req, res){
        res.render('register')
    }

    static postRegisterHandler(req, res){
        let dataInsert = req.body
        dataInsert.updatedAt = new Date()
        dataInsert.createdAt = new Date()

        User.create(dataInsert)
        //harus ada hashing pass. di bagian models 
        //hooks 'before create'
        .then((data)=>{
            res.redirect('/users/login')
        })
        .catch((err)=>{
            res.send(err)
        })

    }

    static getEditProfileHandler(req, res){
        let id = req.params.id
        User.findOne({
            where:{
                id:id
            }
        })
        .then(data=>{
            res.render('edit', {data:data[0]})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static postEditProfileHandler(req, res){
        
    }

    static getLoginHandler(req, res){
        res.render('login')
    }

    static postLoginHandler(req, res){

        let user = req.body
        User.findOne({
            where:{
                email: user.email,
                password: user.password
            }
        })

        .then(data => {
            //diredirect ke halamam movies
            res.redirect('')
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static logoutHandler(req, res){

    }
}


module.exports = ControllerUser