var express = require('express');


const User = require('../models/User');

let ReviewsController = {

    showreviews:function (req,res,next){
        const { id } = req.body;
        Reviews.find({ shop_id :id })
        .then(review =>{
          res.json({
            review:{
              name : review
            }
          })
        }).catch(err => console.log('Error',err))
    
    },
    deletereview:function (req,res,next){
        const { id } = req.body;
        Reviews.deleteOne({ _id :id })
        .then(review =>{
          res.json({
            review:{
              name : review
            }
          })
        }).catch(err => console.log('Error',err))
    
    }
}

module.exports  = ReviewsController