var express = require('express');
var router = express.Router();

var usersRouter = require('./users');
var user_unifiedRouter = require('./user_unified');
var user_aboutRouter = require('./user_about');
var user_socialRouter = require('./user_social');
var user_imgRouter = require('./user_img');
var user_timesRouter = require('./user_times');
var user_reviewsRouter = require('./user_reviews');
var user_servicesRouter = require('./user_services');


router.use('/users', usersRouter);
router.use('/unified', user_unifiedRouter);
router.use('/about', user_aboutRouter);
router.use('/social', user_socialRouter);
router.use('/img', user_imgRouter);
router.use('/times', user_timesRouter);
router.use('/reviews', user_reviewsRouter);
router.use('/services', user_servicesRouter);

module.exports = router;
