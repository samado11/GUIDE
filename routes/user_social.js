var express = require('express');
var router = express.Router();
const config = require('config');
var user = require('../controllers/UserController');
// User Model
const User = require('../models/User');

router.get('/showsocial', user.showsocial);

router.post('/updatesocial', user.updatesocial);


module.exports = router;
