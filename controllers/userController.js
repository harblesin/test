const db = require("../models");

module.exports = {
    findAll: function (req,res){
        db.User.findAll().then((data)=>{
            res.send(data)
        }).catch((err)=>res.send(err))
    },

    createUser: function(req,res){
        db.User.create({
            userName: req.body.userName,
            password: req.body.password
        }).then((data)=>res.json(data)).catch((err)=>res.send(err))
    },

    loginUser: function(req,res){
        
    }
}