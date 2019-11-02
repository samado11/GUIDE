var express = require('express');
var router = express.Router();
const config = require('config');
var user = require('../controllers/UserController');

// User Model
const User = require('../models/User');


router.get('/showabout', user.showabout);

router.post('/updateabout', user.updateabout);


module.exports = router;
