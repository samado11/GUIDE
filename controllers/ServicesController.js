var express = require('express');


const User = require('../models/User');

let ServicesController = {

    showservices:function (req,res,next){
        const { id  } = req.body;
        User.findOne({ _id :id })
        .then(user =>{
          res.json({
            user:{
              name : user.ideas
            }
          })
        }).catch(err => console.log('Error',err))
    
    },
    addservices: async function(req,res,next){
        try {
    
            const documents=[];
            req.body.description = JSON.parse( req.body.description)
        for (let index = 0; index < req.body.description.length; index++) {
            let x = {description :req.body.description[index] }
            x.image ={ image:req.files.image[index].path }
            x.pdf = {pdf:req.body.pdf[index].path}
            x.type = {type:req.body[index].type}
            documents.push(x);
             
        }
        let u = await User_services.create({ });
        
        } catch (error) { ['g',]
            console.log(error);
        }
         
        
        
    }
}

module.exports  = ServicesController