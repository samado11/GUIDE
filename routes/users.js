const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();
const config = require('config');
var user = require('../controllers/UserController');
// User Model
const User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', user.signup);

router.post('/login', user.login);


module.exports = router;
