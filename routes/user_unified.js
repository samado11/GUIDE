var express = require('express');
var router = express.Router();
const config = require('config');
var user = require('../controllers/UserController');
// User Model
const User = require('../models/User');

router.get('/showunified', user.showunified);

router.post('/updateunified', user.updateunified);


module.exports = router;
