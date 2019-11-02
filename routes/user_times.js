var express = require('express');
var router = express.Router();
const config = require('config');
var user = require('../controllers/UserController');
// User Model
const User = require('../models/User');

router.get('/showtimes', user.showtimes);

router.post('/updatetimes', user.updatetimes);


module.exports = router;
