const {Movie, User} = require(`../models/index.js`)


class Controller{
    static getShowAllMovies(req,res){
        Movie.findAll({
            include:[
                User
            ]
        })
        .then((data)=>{
            res.render(
                `movies`,{
                    dataMovies: data
                }
            )
            console.log(data[0])
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static getShowAllMoviesComingSoon(){

    }
    // static getShowAllMoviesNowShowing(){

    // }
}

module.exports = Controller