var express = require('express');
var router = express.Router();
const config = require('config');
var review = require('../controllers/ReviewsController');
// User Model
const Reviews = require('../models/users_reviews');

/*
router.post('/add', async function(req, res, next) {
    try {
        const { value } = req.body;
    let u = await Reviews.create({ user_name:req.body.user_name,comment:req.body.comment,rating:req.body.rating,shop_id:req.body.shop_id});
    res.send(u)
    } catch (error) {
        console.log(error);
    }
});
*/
router.get('/showreviews', review.showreviews);

router.delete('/deletereview', review.deletereview);




module.exports = router;
