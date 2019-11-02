var express = require('express');
var router = express.Router();
const config = require('config');
// User Model
const User = require('../models/User');

router.get('/showideas', function(req, res, next) {
    const { id  } = req.body;
    User.findOne({ _id :id })
    .then(user =>{
      res.json({
        user:{
          name : user.ideas
        }
      })
    }).catch(err => console.log('Error',err))

});

router.post('/addidea', async function(req, res, next) {
    try {
        const { id,value } = req.body;
    let u = await User.update({ _id: id }, { $push: { ideas: value } });
    res.send('added successfully')
    } catch (error) {
        console.log(error);
    }
    
    
    
});


module.exports = router;
